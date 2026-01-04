"use client";
import { Conversation, ConversationContent, ConversationScrollButton } from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse, MessageActions, MessageAction } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputHeader,
  type PromptInputMessage,
  PromptInputSelect,
  PromptInputSelectContent,
  PromptInputSelectItem,
  PromptInputSelectTrigger,
  PromptInputSelectValue,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputTools,
  PromptInputButton,
  PromptInputSpeechButton
} from "@/components/ai-elements/prompt-input";
import { useEffect, useState, useRef, useCallback, Activity } from "react";
import { useChat } from "@ai-sdk/react";
import { CopyIcon, GlobeIcon, PlusIcon } from "lucide-react";
import { Source, Sources, SourcesContent, SourcesTrigger } from "@/components/ai-elements/sources";
// import { ChainOfThought, ChainOfThoughtHeader, ChainOfThoughtContent, ChainOfThoughtStep } from "@/components/ai-elements/chain-of-thought";
import { Loader } from "@/components/ai-elements/loader";
import { MODEL_PROVIDERS } from "@/constants";
import { DefaultChatTransport, UIMessage } from "ai";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { AutoScrollManager } from "./AutoScrollManager";
import Cookies from "js-cookie";
import { Reasoning, ReasoningContent, ReasoningTrigger } from "../ai-elements/reasoning";
import DocumentDisplay from "./tools/DocumentDisplay";
import DocumentGeneratingLoader from "../ui/DocumentGeneratingLoader";

interface IChatBot {
  conversationId: string;
  initialMessages: UIMessage[];
}

type SourceUrlPart = Extract<UIMessage["parts"][number], { type: "source-url" }>;

const ChatBot = ({ conversationId, initialMessages }: IChatBot) => {
  const [input, setInput] = useState("");
  const [model, setModel] = useState<string>(Cookies.get("activeModel") ?? (MODEL_PROVIDERS[0]?.value as string));
  const [scrollBehavior, setScrollBehavior] = useState<"instant" | "smooth">("instant");
  const [useWebSearch, setUseWebSearch] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const params = useParams();
  const isInitialMount = useRef(true);
  const useWebSearchRef = useRef(useWebSearch);

  // Keep ref in sync with state
  useEffect(() => {
    useWebSearchRef.current = useWebSearch;
  }, [useWebSearch]);

  const { messages, sendMessage, status } = useChat({
    id: conversationId,
    messages: initialMessages,
    transport: new DefaultChatTransport({
      api: "/api/chat",
      prepareSendMessagesRequest({ messages, id }) {
        return { body: { message: messages[messages.length - 1], id: id, model, useWebSearch: useWebSearchRef.current, isNewChat: messages.length <= 1 } };
      }
    }),
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    }
  });

  useEffect(() => {
    if (status === "ready" && messages.length > 1 && params.id === undefined) {
      window.history.replaceState(null, "", `/${params.orgSlug}/chat/${conversationId}`);
    }
  }, [status]);

  // After initial mount, enable smooth scrolling for new messages
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      // Switch to smooth after initial render
      const timer = setTimeout(() => {
        setScrollBehavior("smooth");
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  // Reset scroll behavior when conversation changes
  useEffect(() => {
    setScrollBehavior("instant");
    isInitialMount.current = true;
  }, [conversationId]);

  const handleSubmit = useCallback(
    async (message: PromptInputMessage) => {
      const hasText = Boolean(message.text);
      const hasAttachments = Boolean(message.files?.length);
      if (!(hasText || hasAttachments)) {
        return;
      }
      sendMessage({
        text: message.text || "Sent with attachments",
        files: message.files
      });
      setInput("");
    },
    [sendMessage, model]
  );

  const onModelChange = (value: string) => {
    setModel(value);
    Cookies.set("activeModel", value);
    location.href = `/${params.orgSlug}/chat`;
  };

  function isSourceUrlPart(part: UIMessage["parts"][number]): part is SourceUrlPart {
    return part.type === "source-url";
  }

  return (
    <div className="h-full">
      <div className="max-w-4xl mx-auto p-6 relative size-full  ">
        <div className="flex flex-col h-full dark-mode">
          <Conversation key={conversationId} className={`h-full dark-scrollbar`} scrollBehavior={scrollBehavior}>
            <ConversationContent className="">
              {messages.map((message) => {
                return (
                  <div key={message.id} className="">
                    {message.role === "assistant" && message.parts.filter((part) => part.type === "source-url").length > 0 && (
                      <Sources className="text-white! border rounded-lg p-3 border-white/10">
                        <SourcesTrigger count={message.parts.filter((part) => part.type === "source-url").length} />
                        {message.parts.filter(isSourceUrlPart).map((part, i) => {
                          const sourceUrl = typeof part.url === "string" ? part.url : ((part.url as { url: string }).url ?? "");
                          const sourceTitle = part.title ?? (typeof part.url === "object" ? (part.url as { title: string })?.title : null) ?? sourceUrl;

                          return (
                            <SourcesContent key={`${message.id}-${i}`}>
                              <Source className="text-base-link! flex gap-2" href={sourceUrl} title={sourceTitle} />
                            </SourcesContent>
                          );
                        })}
                      </Sources>
                    )}
                    {message.parts.map((part, i) => {
                      const isLast = message.parts.length - 1 === i;

                      switch (part.type) {
                        case "text":
                          return (
                            <Message key={`${message.id}-${i}`} from={message.role}>
                              <MessageContent
                                className={` text-white! ${message.role === "user" ? "group-[.is-user]:rounded-[18px] group-[.is-user]:font-medium group-[.is-user]:bg-base-msg-bg!" : ""}`}
                              >
                                <MessageResponse className={`text-white!`}>{part.text}</MessageResponse>
                              </MessageContent>
                              {message.role === "assistant" && isLast && (
                                <MessageActions className="">
                                  <MessageAction
                                    className="hover:bg-base-hover cursor-pointer"
                                    onClick={() => navigator.clipboard.writeText(part.text)}
                                    label="Copy"
                                  >
                                    <CopyIcon color="white" className="size-3" />
                                  </MessageAction>
                                </MessageActions>
                              )}
                            </Message>
                          );
                        case "reasoning":
                          const isStreaming = status === "streaming" && i === message.parts.length - 1 && message.id === messages.at(-1)?.id;
                          // return (
                          //   <ChainOfThought key={`${message.id}-${i}`} className="w-full border rounded-lg p-3 border-white/10 mb-4" defaultOpen={true}>
                          //     <ChainOfThoughtHeader className="text-white hover:text-white/70">Chain of Thought</ChainOfThoughtHeader>
                          //     <ChainOfThoughtContent>
                          //       <ChainOfThoughtStep className="text-white/40" label="Thinking process" status={isStreaming ? "active" : "complete"}>
                          //         <div className="text-white/80 text-sm whitespace-pre-wrap">{part.text}</div>
                          //       </ChainOfThoughtStep>
                          //     </ChainOfThoughtContent>
                          //   </ChainOfThought>
                          // );
                          return (
                            <Reasoning key={`${message.id}-reasining-${i}`} isStreaming={isStreaming} className="...">
                              <ReasoningTrigger className="text-white/70" /> {/* ← Shows "Thought for 5s" automatically */}
                              <ReasoningContent>{part.text}</ReasoningContent>
                            </Reasoning>
                          );
                        case "tool-call":
                        case "tool-generatePDFDocumentTool":
                        case "tool-generateDOCXDocumentTool":
                        case "tool-generateExcelDocumentTool":
                        case "tool-generatePPTXDocumentTool":
                        case "tool-generateTextDocumentTool":
                          if (part.state === "input-streaming" || part.state === "input-available") {
                            return <DocumentGeneratingLoader key={`${message.id}-input-streaming-${i}`} />;
                          }
                          if (part.output && (part.output as { type: string })?.type === "document") {
                            return <DocumentDisplay keyUrl={(part.output as { key: string }).key} key={`${message.id}-tool-${i}`} />;
                          }

                        default:
                          // console.log(part, "part");

                          return null;
                      }
                    })}
                  </div>
                );
              })}
              <Activity mode={status === "submitted" ? "visible" : "hidden"}>
                <Loader />
              </Activity>
            </ConversationContent>
            <AutoScrollManager isStreaming={status === "streaming"} />
            <ConversationScrollButton className="bg-base-bg-black border-gray-50/15 border text-white cursor-pointer" />
          </Conversation>
          <Activity mode={messages.length === 0 ? "visible" : "hidden"}>
            <div className="h-full text-2xl font-bold text-white flex items-center justify-center">
              <div>What’s on your mind today?</div>
            </div>
          </Activity>
          <PromptInput onSubmit={handleSubmit} className="mt-4 bg-base-dark-secondary rounded-2xl" globalDrop multiple>
            <PromptInputHeader className="py-0! pt-1!">
              <PromptInputAttachments className="">{(attachment) => <PromptInputAttachment className="" data={attachment} />}</PromptInputAttachments>
            </PromptInputHeader>
            <PromptInputBody className="">
              <PromptInputTextarea
                placeholder="Ask anything"
                ref={textareaRef}
                className="text-white ps-4 text-base!"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
            </PromptInputBody>
            <PromptInputFooter className="pt-0!">
              <PromptInputTools>
                <PromptInputActionMenu>
                  <PromptInputActionMenuTrigger className="px-4! rounded-full cursor-pointer hover:bg-base-hover ">
                    <PlusIcon className="h-5! w-5! text-base-text-color" size={22} />
                  </PromptInputActionMenuTrigger>
                  <PromptInputActionMenuContent className="bg-base-popover font-medium border-none text-base-text-color shadow-2xl">
                    <PromptInputActionAddAttachments />
                  </PromptInputActionMenuContent>
                </PromptInputActionMenu>
                <PromptInputSelect onValueChange={onModelChange} value={model}>
                  <PromptInputSelectTrigger className="text-base-text-color cursor-pointer aria-expanded:bg-base-hover aria-expanded:text-base-text-color hover:bg-base-hover hover:text-white outline-none focus:ring-0 focus:bg-base-hover">
                    <PromptInputSelectValue className="text-base-text-color" />
                  </PromptInputSelectTrigger>
                  <PromptInputSelectContent className="bg-base-popover font-medium border-none text-base-text-color shadow-md">
                    {MODEL_PROVIDERS.map((modelOp) => (
                      <PromptInputSelectItem key={modelOp.value} value={modelOp.value}>
                        {`${modelOp.name} ${model !== modelOp.value ? "(New Chat)" : ""}`}
                      </PromptInputSelectItem>
                    ))}
                  </PromptInputSelectContent>
                </PromptInputSelect>
                <PromptInputSpeechButton
                  className="p-2! me-2 text-base-text-color hover:bg-base-hover hover:text-base-text-color cursor-pointer"
                  textareaRef={textareaRef}
                />
                <PromptInputButton
                  className={`${useWebSearch ? "text-base-link bg-base-link/10 hover:bg-base-link/20 hover:text-base-link" : "text-base-text-color hover:bg-base-hover hover:text-base-text-color"} cursor-pointer `}
                  onClick={() => setUseWebSearch(!useWebSearch)}
                >
                  <GlobeIcon size={16} />
                  <span>Search</span>
                </PromptInputButton>
              </PromptInputTools>
              <PromptInputSubmit className="p-5! cursor-pointer" disabled={!input && !status} status={status} />
            </PromptInputFooter>
          </PromptInput>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
