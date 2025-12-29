import type { Client } from "urql";
import {
  CreateConversation,
  type CreateConversationMutation,
  type CreateConversationMutationVariables,
  InsertChatMessage,
  type InsertChatMessageMutation,
  type InsertChatMessageMutationVariables,
  InsertChatMessages,
  type InsertChatMessagesMutation,
  type InsertChatMessagesMutationVariables,
  UpdateConversation,
  type UpdateConversationMutation,
  type UpdateConversationMutationVariables,
  GetConversationById,
  type GetConversationByIdQuery,
  type GetConversationByIdQueryVariables,
  GetMessagesByConversation,
  type GetMessagesByConversationQuery,
  type GetMessagesByConversationQueryVariables,
  Chat_Messages_Insert_Input
} from "@/gql/graphql";
import { initCronUrqlClient } from "urql/client";

/**
 * Chat service for handling chat-related database operations
 * Uses server-side urql client with admin credentials
 */
export class ChatService {
  private client: Client;

  constructor() {
    this.client = initCronUrqlClient();
  }

  /**
   * Create a new conversation
   */
  async createConversation(params: CreateConversationMutationVariables["object"]) {
    const { user_id, organization_id, title = "New Chat", visibility = "private", id } = params;

    const result = await this.client
      .mutation<CreateConversationMutation, CreateConversationMutationVariables>(CreateConversation, {
        object: {
          id,
          user_id,
          organization_id,
          title,
          visibility,
          is_archived: false
        }
      })
      .toPromise();

    if (result.error) {
      console.error("Error creating conversation:", result.error);
      throw new Error(`Failed to create conversation: ${result.error.message}`);
    }

    return result.data?.insert_chat_conversations_one;
  }

  /**
   * Update conversation (e.g., title, archive status)
   */
  async updateConversation(params: { conversationId: string } & UpdateConversationMutationVariables["setObj"]) {
    const { conversationId, title, is_archived } = params;

    const setObj: UpdateConversationMutationVariables["setObj"] = {};
    if (title !== undefined) setObj.title = title;
    if (is_archived !== undefined) setObj.is_archived = is_archived;
    setObj.updated_at = new Date().toISOString();

    const result = await this.client
      .mutation<UpdateConversationMutation, UpdateConversationMutationVariables>(UpdateConversation, {
        id: conversationId,
        setObj
      })
      .toPromise();

    if (result.error) {
      console.error("Error updating conversation:", result.error);
      throw new Error(`Failed to update conversation: ${result.error.message}`);
    }

    return result.data?.update_chat_conversations_by_pk;
  }

  /**
   * Save a single chat message
   */
  async saveMessage(params: InsertChatMessageMutationVariables["object"]) {
    const { conversation_id, role, content, model, token_usage, provider_metadata } = params;

    const result = await this.client
      .mutation<InsertChatMessageMutation, InsertChatMessageMutationVariables>(InsertChatMessage, {
        object: {
          conversation_id: conversation_id,
          role,
          content: content ?? {},
          model,
          token_usage: token_usage ?? {},
          provider_metadata: provider_metadata ?? {}
        }
      })
      .toPromise();

    if (result.error) {
      console.error("Error saving message:", result.error);
      throw new Error(`Failed to save message: ${result.error.message}`);
    }

    return result.data?.insert_chat_messages_one;
  }

  /**
   * Save multiple chat messages at once
   */
  async saveMessages(messages: Chat_Messages_Insert_Input[]) {
    const objects = messages.map((msg) => ({
      conversation_id: msg.conversation_id,
      role: msg.role,
      content: msg.content ?? {},
      model: msg.model,
      token_usage: msg.token_usage ?? {},
      provider_metadata: msg.provider_metadata ?? {}
    }));

    const result = await this.client
      .mutation<InsertChatMessagesMutation, InsertChatMessagesMutationVariables>(InsertChatMessages, {
        objects
      })
      .toPromise();

    if (result.error) {
      console.error("Error saving messages:", result.error);
      throw new Error(`Failed to save messages: ${result.error.message}`);
    }

    return result.data?.insert_chat_messages;
  }

  /**
   * Get conversation by ID
   */
  async getConversation(conversationId: string) {
    const result = await this.client
      .query<GetConversationByIdQuery, GetConversationByIdQueryVariables>(GetConversationById, {
        id: conversationId
      })
      .toPromise();

    if (result.error) {
      console.error("Error fetching conversation:", result.error);
      throw new Error(`Failed to fetch conversation: ${result.error.message}`);
    }

    return result.data?.chat_conversations_by_pk;
  }

  /**
   * Get all messages for a conversation
   */
  async getMessages(conversationId: string) {
    const result = await this.client
      .query<GetMessagesByConversationQuery, GetMessagesByConversationQueryVariables>(GetMessagesByConversation, {
        conversationId
      })
      .toPromise();

    if (result.error) {
      console.error("Error fetching messages:", result.error);
      throw new Error(`Failed to fetch messages: ${result.error.message}`);
    }

    return result.data?.chat_messages || [];
  }

  /**
   * Generate a title for the conversation based on first user message
   */
  generateTitle(firstUserMessage: string): string {
    // Take first 50 characters or until first newline
    const title = firstUserMessage.split("\n")[0]?.substring(0, 50) || "New Chat";
    return title.length < firstUserMessage.length ? `${title}...` : title;
  }
}

// Export singleton instance
export const chatService = new ChatService();
