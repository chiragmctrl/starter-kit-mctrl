import { generateExcelDocumentTool, generatePPTXDocumentTool, generateTextDocumentTool } from "./../../../server/ai/tools/index";
export const runtime = "nodejs";
import { streamText, UIMessage, convertToModelMessages } from "ai";
import { anthropic, AnthropicProviderOptions } from "@ai-sdk/anthropic";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { chatService } from "@/services/chat.service";
import { organizationService } from "@/services/organization.service";
import { constructChatMessages, stripToolsForAnthropic } from "@/helper";
import { generateDOCXDocumentTool, generatePDFDocumentTool, webFecthTool, webSearchTool } from "@/server/ai/tools";
import { chatSystemPrompt } from "@/server/ai/prompts/chat";
import { documentService } from "@/services/doc.service";
import { CHAT_ACTOR, DOCUMENT_EVENT_TYPE, DOCUMENT_SOURCE, DOCUMENTS_TOOLS_NAMES, DOCUMENTS_TOOLS_NAMES_ARRAY } from "@/types/enum";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const {
    message,
    model,
    organizationId: requestOrgId,
    id,
    isNewChat,
    useWebSearch
  }: {
    message: UIMessage;
    model: string;
    isNewChat: boolean;
    organizationId?: string;
    id: string;
    useWebSearch: boolean;
  } = await req.json();
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (!session?.session || !session.user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Check if session is expired
    const expiresAt = new Date(session.session.expiresAt);
    if (!session.session.expiresAt || Number.isNaN(expiresAt.getTime()) || expiresAt <= new Date()) {
      return new Response(JSON.stringify({ error: "Session expired" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }

    const userId = session.user.id;

    // Get organization ID from request or session
    const organizationId = requestOrgId || (session.session as any).activeOrganizationId;

    if (!organizationId) {
      return new Response(
        JSON.stringify({
          error: "Organization ID is required. Please provide organizationId in the request or ensure your session has an active organization."
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    // Validate organization membership
    const membership = await organizationService.isMember(userId, organizationId);

    if (!membership) {
      return new Response(JSON.stringify({ error: "You are not a member of this organization" }), {
        status: 403,
        headers: { "Content-Type": "application/json" }
      });
    }

    // For existing conversations, verify ownership before accessing
    if (!isNewChat) {
      const existingConversation = await chatService.getConversation(id);

      if (!existingConversation) {
        return new Response(JSON.stringify({ error: "Conversation not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" }
        });
      }

      // Verify the conversation belongs to the authenticated user
      if (existingConversation.user_id !== userId) {
        return new Response(JSON.stringify({ error: "You don't have permission to access this conversation" }), {
          status: 403,
          headers: { "Content-Type": "application/json" }
        });
      }

      // Verify the conversation belongs to the specified organization
      if (existingConversation.organization_id !== organizationId) {
        return new Response(JSON.stringify({ error: "Conversation does not belong to this organization" }), {
          status: 403,
          headers: { "Content-Type": "application/json" }
        });
      }
    }

    const oldMessages = await chatService.getMessages(id);
    const contructOldMsg: UIMessage[] = constructChatMessages(oldMessages);
    const messages = [...contructOldMsg, message];
    const modelMessages = await convertToModelMessages(stripToolsForAnthropic(messages));

    console.log(JSON.stringify(modelMessages), "modelMessages");

    let currentConversationId = id;
    if (isNewChat) {
      // Extract text content from message parts for title generation
      let messageText = "New Chat";
      if (message?.parts) {
        // Look for text content in parts (AI SDK stores text directly in parts)
        for (const part of message.parts) {
          if (typeof part === "string") {
            messageText = part;
            break;
          } else if (part && typeof part === "object" && "text" in part) {
            messageText = part.text as string;
            break;
          }
        }
      }

      await chatService.createConversation({
        id: currentConversationId,
        user_id: userId,
        organization_id: organizationId,
        title: "New Chat",
        visibility: "private"
      });
      chatService.generateTitle({ message: messageText, conversationId: currentConversationId });

      if (!currentConversationId) {
        throw new Error("Failed to create conversation");
      }
    }

    // Save user message to database
    if (message) {
      // Store message parts as-is (supports text, files, reasoning, sources, etc.)
      const messageContent = {
        parts: message.parts || [],
        metadata: message.metadata || {}
      };

      chatService.saveMessage({
        conversation_id: currentConversationId,
        role: message.role,
        content: messageContent,
        model
      });
    }

    // Stream AI response
    const result = streamText({
      model: anthropic(model),
      messages: modelMessages,
      system: chatSystemPrompt,
      tools: {
        [DOCUMENTS_TOOLS_NAMES.GENERATE_PDF_DOCUMENT_TOOL]: generatePDFDocumentTool,
        [DOCUMENTS_TOOLS_NAMES.GENERATE_DOCX_DOCUMENT_TOOL]: generateDOCXDocumentTool,
        [DOCUMENTS_TOOLS_NAMES.GENERATE_EXCEL_DOCUMENT_TOOL]: generateExcelDocumentTool,
        [DOCUMENTS_TOOLS_NAMES.GENERATE_PPTX_DOCUMENT_TOOL]: generatePPTXDocumentTool,
        [DOCUMENTS_TOOLS_NAMES.GENERATE_TEXT_DOCUMENT_TOOL]: generateTextDocumentTool,
        ...(useWebSearch ? { webSearchTool, web_fetch: webFecthTool } : {})
      },
      providerOptions: {
        anthropic: {
          // thinking: {
          //   type: "enabled",
          //   budgetTokens: 10000
          // },
        } satisfies AnthropicProviderOptions
      },

      onFinish: async ({ text, usage, reasoning, sources, toolCalls, toolResults }) => {
        // Save assistant response to database after streaming completes
        try {
          // Build the parts array in the same order as streaming (reasoning -> tools -> text -> sources)
          const messageParts = [];

          // Add reasoning part FIRST if exists (matches streaming order)
          // Handle both string and array formats from the AI SDK
          if (reasoning) {
            let reasoningText: string | undefined;

            // Check if reasoning is an array (new format)
            if (Array.isArray(reasoning) && reasoning.length > 0) {
              // Extract text from the first reasoning object
              const firstReasoning = reasoning[0];
              if (firstReasoning && typeof firstReasoning === "object" && "text" in firstReasoning) {
                reasoningText = firstReasoning.text;
              }
            }
            // Handle string format (old format or fallback)
            else if (typeof reasoning === "string") {
              reasoningText = reasoning;
            }

            // Add to parts if we got valid text
            if (reasoningText && reasoningText.trim().length > 0) {
              messageParts.push({ type: "reasoning", text: reasoningText });
            }
          }

          // Add tool execution parts if they exist
          if (toolCalls && toolCalls.length > 0) {
            toolCalls.forEach((toolCall: any, index: number) => {
              const toolResult = toolResults?.[index] as any;
              const toolName = toolCall.toolName || toolCall.name;

              messageParts.push({
                type: "tool-call",
                toolCallId: toolCall.toolCallId || toolCall.id,
                toolName: toolName,
                state: toolResult ? "output-available" : "input-available",
                result: toolResult?.result || toolResult?.output,
                output: toolResult?.result || toolResult?.output,
                input: toolResult?.input ?? {},
                errorText: toolResult?.error || toolResult?.errorText
              });
            });
          }

          // Add text part AFTER tools
          // If there's no text but there are tool calls, generate a default message
          let finalText = text;
          if (!finalText && toolCalls && toolCalls.length > 0) {
            const toolNames = toolCalls.map((tc: any) => tc.toolName || tc.name);
            if (toolNames.some((name: string) => name?.includes("Document"))) {
              finalText = "I've generated the document for you. You can download it using the above link.";
            } else {
              finalText = "I've completed the requested action.";
            }
          }

          if (finalText) {
            messageParts.push({ type: "text", text: finalText });
          }
          // Add source parts if exist
          if (sources && sources.length > 0) {
            sources.forEach((source) => {
              // Source can be either a string or an object with url property
              const sourceUrl = typeof source === "string" ? source : "url" in source ? source.url : "";
              const sourceTitle = typeof source === "object" && source.title ? source.title : sourceUrl;
              messageParts.push({
                type: "source-url",
                url: sourceUrl,
                title: sourceTitle
              });
            });
          }

          const chatMsg = await chatService.saveMessage({
            conversation_id: currentConversationId!,
            role: "assistant",
            content: {
              parts: messageParts,
              text,
              reasoning: reasoning || undefined,
              sources: sources || undefined
            },
            model,
            token_usage: {
              cachedInputTokens: usage.inputTokenDetails.cacheReadTokens || 0,
              inputTokens: usage.inputTokens || 0,
              outputTokens: usage.outputTokens || 0,
              reasoningTokens: (usage as any).reasoningTokens || 0,
              totalTokens: usage.totalTokens || 0
            }
          });

          if (toolCalls && toolCalls.length > 0) {
            toolCalls.forEach((toolCall: any, index: number) => {
              const toolName = toolCall.toolName || toolCall.name;
              const toolResult = toolResults?.[index] as any;
              const output = toolResult?.result || toolResult?.output;

              if (DOCUMENTS_TOOLS_NAMES_ARRAY.includes(toolName)) {
                const file_name = output.filename ?? "Unknown";
                const file_type = output.fileType;
                const mime_type = output.mime_type;
                const size_bytes = output.size_bytes;
                const resource_id = output.resource_id; // Extract resource_id from tool output if provided

                documentService.saveChatDocument({
                  conversation_id: currentConversationId,
                  user_id: userId,
                  organization_id: organizationId,
                  source: DOCUMENT_SOURCE.AI_ARTIFACT,
                  message_id: chatMsg?.id as string,
                  file_name,
                  file_type,
                  mime_type,
                  size_bytes,
                  storage_path: output.key,
                  model,
                  event_type: resource_id ? DOCUMENT_EVENT_TYPE.MODIFIED : DOCUMENT_EVENT_TYPE.CREATED,
                  actor_type: CHAT_ACTOR.ASSISTANT,
                  resource_id // Pass resource_id to create new version if it exists
                });
              }
            });
          }

          // Update conversation's updated_at timestamp
          await chatService.updateConversation({
            conversationId: currentConversationId!
          });
        } catch (error) {
          console.error("Error saving assistant message:", error);
          // Don't throw - we still want to return the stream to the user
        }
      }
    });

    // Send sources and reasoning back to the client with chunking to avoid WebSocket payload limits
    const originalStream = result.toUIMessageStreamResponse({
      sendSources: true,
      sendReasoning: true
    });

    // Create a transformed stream that splits large chunks
    const transformedStream = new ReadableStream({
      async start(controller) {
        const reader = originalStream.body?.getReader();
        if (!reader) {
          controller.close();
          return;
        }

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            // Split into smaller chunks (8KB each) to avoid WebSocket payload limits
            const maxChunkSize = 8 * 1024;
            if (value.length > maxChunkSize) {
              for (let i = 0; i < value.length; i += maxChunkSize) {
                const chunk = value.slice(i, Math.min(i + maxChunkSize, value.length));
                controller.enqueue(chunk);
                // Small delay between chunks to prevent overwhelming the connection
                await new Promise((resolve) => setTimeout(resolve, 5));
              }
            } else {
              controller.enqueue(value);
            }
          }
          controller.close();
        } catch (error) {
          console.error("Stream transform error:", error);
          controller.error(error);
        }
      }
    });

    return new Response(transformedStream, {
      headers: originalStream.headers
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
