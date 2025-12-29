import { streamText, UIMessage, convertToModelMessages } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { chatService } from "@/services/chat.service";
import { constructChatMessages } from "@/helper";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const {
    message,
    model,
    organizationId: requestOrgId,
    id,
    isNewChat
  }: {
    message: UIMessage;
    model: string;
    isNewChat: boolean;
    organizationId?: string;
    id: string;
  } = await req.json();

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

  const oldMessages = await chatService.getMessages(id);
  const contructOldMsg: UIMessage[] = constructChatMessages(oldMessages);
  const messages = [...contructOldMsg, message];
  const modelMessages = await convertToModelMessages(messages);

  try {
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
      system: "You are a helpful assistant that can answer questions and help with tasks",
      onFinish: async ({ text, usage, reasoning, sources }) => {
        // Save assistant response to database after streaming completes
        try {
          await chatService.saveMessage({
            conversation_id: currentConversationId!,
            role: "assistant",
            content: {
              text,
              reasoning: reasoning || undefined,
              sources: sources || undefined
            },
            model,
            token_usage: {
              cachedInputTokens: usage.cachedInputTokens || 0,
              inputTokens: usage.inputTokens || 0,
              outputTokens: usage.outputTokens || 0,
              reasoningTokens: (usage as any).reasoningTokens || 0,
              totalTokens: usage.totalTokens || 0
            }
          });

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

    // Send sources and reasoning back to the client
    return result.toUIMessageStreamResponse({
      sendSources: true,
      sendReasoning: true
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
