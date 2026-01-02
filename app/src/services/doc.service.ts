import {
  InsertChatResource,
  InsertChatResourceMutation,
  InsertChatResourceMutationVariables,
  InsertChatResourceVersion,
  InsertChatResourceVersionMutation,
  InsertChatResourceVersionMutationVariables,
  UpdateChatResource,
  UpdateChatResourceMutation,
  UpdateChatResourceMutationVariables
} from "@/gql/graphql";
import { ChatDocumentPayload } from "@/types/chat";
import { Client } from "urql";
import { initCronUrqlClient } from "urql/client";

export class DocumentService {
  private client: Client;

  constructor() {
    this.client = initCronUrqlClient();
  }

  async saveChatDocument(params: ChatDocumentPayload) {
    const {
      organization_id,
      conversation_id,
      user_id,
      source,
      message_id,
      file_name,
      file_type,
      mime_type,
      size_bytes,
      storage_path,
      model,
      event_type,
      actor_type
    } = params;

    const resource = await this.client
      .mutation<InsertChatResourceMutation, InsertChatResourceMutationVariables>(InsertChatResource, {
        data: {
          organization_id,
          conversation_id,
          created_by: user_id,
          source,
          current_version_id: null,
          metadata: {}
        }
      })
      .toPromise();

    const resourceId = resource.data?.insert_resources_one?.id as string;

    const resourceVersion = await this.client
      .mutation<InsertChatResourceVersionMutation, InsertChatResourceVersionMutationVariables>(InsertChatResourceVersion, {
        data: {
          resource_id: resourceId,
          version_number: 1,
          message_id,
          file_name,
          file_type,
          mime_type,
          size_bytes,
          storage_path,
          model,
          metadata: {},
          resource_events: {
            data: [
              {
                resource_id: resourceId,
                event_type,
                actor_type,
                user_id,
                message_id,
                metadata: {}
              }
            ]
          }
        }
      })
      .toPromise();

    const currentVersionId = resourceVersion.data?.insert_resource_versions_one?.id as string;

    const updateResource = await this.client
      .mutation<UpdateChatResourceMutation, UpdateChatResourceMutationVariables>(UpdateChatResource, {
        id: resourceId,
        data: { current_version_id: currentVersionId }
      })
      .toPromise();

    if (resource.error || resourceVersion.error || updateResource.error) {
      console.error("Error saving doument:", `${resource?.error?.message ?? resourceVersion.error?.message ?? updateResource.error?.message}`);
      throw new Error(`Failed to save doument: ${resource?.error?.message ?? resourceVersion.error?.message ?? updateResource.error?.message}`);
    }

    return resourceId;
  }
}

// Export singleton instance
export const documentService = new DocumentService();
