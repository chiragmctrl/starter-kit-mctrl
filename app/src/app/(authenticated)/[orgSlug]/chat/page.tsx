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
  PromptInputTools
} from "@/components/ai-elements/prompt-input";
import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { CopyIcon, PlusIcon } from "lucide-react";
import { Source, Sources, SourcesContent, SourcesTrigger } from "@/components/ai-elements/sources";
import { Reasoning, ReasoningContent, ReasoningTrigger } from "@/components/ai-elements/reasoning";
import { Loader } from "@/components/ai-elements/loader";
import { MODEL_PROVIDERS } from "@/constants";

const ChatBotDemo = () => {
  const [input, setInput] = useState("");
  const [model, setModel] = useState<string>(MODEL_PROVIDERS[0]?.value as string);
  const { messages, sendMessage, status } = useChat();

  const handleSubmit = (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);
    const hasAttachments = Boolean(message.files?.length);
    if (!(hasText || hasAttachments)) {
      return;
    }
    sendMessage(
      {
        text: message.text || "Sent with attachments",
        files: message.files
      },
      {
        body: {
          model: model
        }
      }
    );
    setInput("");
  };
  return (
    <div className="bg-base-bg h-full">
      <div className="max-w-4xl mx-auto p-6 relative size-full  ">
        <div className="flex flex-col h-full">
          <Conversation className="h-full dark-scrollbar">
            <ConversationContent className="">
              {messages.map((message) => (
                <div key={message.id} className="">
                  {message.role === "assistant" && message.parts.filter((part) => part.type === "source-url").length > 0 && (
                    <Sources className="">
                      <SourcesTrigger count={message.parts.filter((part) => part.type === "source-url").length} />
                      {message.parts
                        .filter((part) => part.type === "source-url")
                        .map((part, i) => (
                          <SourcesContent key={`${message.id}-${i}`}>
                            <Source key={`${message.id}-${i}`} href={part.url} title={part.url} />
                          </SourcesContent>
                        ))}
                    </Sources>
                  )}
                  {message.parts.map((part, i) => {
                    switch (part.type) {
                      case "text":
                        return (
                          <Message key={`${message.id}-${i}`} from={message.role}>
                            <MessageContent
                              className={` text-white! ${message.role === "user" ? "group-[.is-user]:rounded-full group-[.is-user]:font-medium group-[.is-user]:bg-base-msg-bg!" : ""}`}
                            >
                              <MessageResponse className={`text-white!`}>{part.text}</MessageResponse>
                            </MessageContent>
                            {message.role === "assistant" && i === messages.length - 1 && (
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
                        return (
                          <Reasoning
                            key={`${message.id}-${i}`}
                            className="w-full"
                            isStreaming={status === "streaming" && i === message.parts.length - 1 && message.id === messages.at(-1)?.id}
                          >
                            <ReasoningTrigger />
                            <ReasoningContent className="text-white! ">{part.text}</ReasoningContent>
                          </Reasoning>
                        );
                      default:
                        return null;
                    }
                  })}
                </div>
              ))}
              {status === "submitted" && <Loader />}
            </ConversationContent>
            <ConversationScrollButton className="bg-base-bg-black border-gray-50/15 border text-white cursor-pointer" />
          </Conversation>
          <PromptInput onSubmit={handleSubmit} className="mt-4 bg-base-dark-secondary rounded-2xl" globalDrop multiple>
            <PromptInputHeader className="py-0! pt-1!">
              <PromptInputAttachments className="">{(attachment) => <PromptInputAttachment className="" data={attachment} />}</PromptInputAttachments>
            </PromptInputHeader>
            <PromptInputBody className="">
              <PromptInputTextarea placeholder="Ask anything" className="text-white ps-4 text-base!" onChange={(e) => setInput(e.target.value)} value={input} />
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
                <PromptInputSelect
                  onValueChange={(value) => {
                    setModel(value);
                  }}
                  value={model}
                >
                  <PromptInputSelectTrigger className="text-base-text-color cursor-pointer aria-expanded:bg-base-hover aria-expanded:text-base-text-color hover:bg-base-hover hover:text-white outline-none focus:ring-0 focus:bg-base-hover">
                    <PromptInputSelectValue className="text-base-text-color" />
                  </PromptInputSelectTrigger>
                  <PromptInputSelectContent className="bg-base-popover font-medium border-none text-base-text-color shadow-md">
                    {MODEL_PROVIDERS.map((model) => (
                      <PromptInputSelectItem key={model.value} value={model.value}>
                        {model.name}
                      </PromptInputSelectItem>
                    ))}
                  </PromptInputSelectContent>
                </PromptInputSelect>
              </PromptInputTools>
              <PromptInputSubmit className="p-5! cursor-pointer" disabled={!input && !status} status={status} />
            </PromptInputFooter>
          </PromptInput>
        </div>
      </div>
    </div>
  );
};
export default ChatBotDemo;
