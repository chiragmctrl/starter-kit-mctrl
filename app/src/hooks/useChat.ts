import { useChat as useAIChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

/**
 * Custom hook to manage chat conversations with persistence
 * Wraps AI SDK's useChat with conversation tracking
 */
export function useChat({
  conversationId,
  organizationId,
  model = "claude-3-5-sonnet-20241022"
}: {
  conversationId?: string;
  organizationId?: string;
  model?: string;
  onConversationCreated?: (conversationId: string) => void;
}) {
  const chat = useAIChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
      credentials: "include",
      body: {
        conversationId,
        ...(organizationId && { organizationId }),
        model
      }
    })

    // onData: (data) => {
    // console.log(JSON.stringify(data), ": - DATA - onData");
    // if (data?.type === "data.created" && !conversationId && !didCreateConversation.current) {
    //   didCreateConversation.current = true;
    //   onConversationCreated?.(data.conversationId);
    // }
    // }

    // onResponse: async (response: Response) => {
    //   // Extract conversation ID from response headers
    //   const newConversationId = response.headers.get("X-Conversation-Id");
    //   if (newConversationId && !conversationId && onConversationCreated) {
    //     onConversationCreated(newConversationId);
    //   }
    // },
    // onError: (error: Error) => {
    //   console.error("Chat error:", error);
    // }
  });

  return chat;
}
