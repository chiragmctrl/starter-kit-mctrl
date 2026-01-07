import {
  GetLatestReourcesVersionByResourceId,
  GetLatestReourcesVersionByResourceIdQuery,
  GetLatestReourcesVersionByResourceIdQueryVariables,
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

  async getLatestVersionNumber(resourceId: string): Promise<number> {
    const result = await this.client
      .query<GetLatestReourcesVersionByResourceIdQuery, GetLatestReourcesVersionByResourceIdQueryVariables>(
        GetLatestReourcesVersionByResourceId,
        { id: resourceId }
      )
      .toPromise();

    if (result.error) {
      console.error("Error fetching latest version:", result.error.message);
      throw new Error(`Failed to fetch latest version: ${result.error.message}`);
    }

    const versions = result.data?.resource_versions || [];
    return versions.length > 0 ? versions[0].version_number : 0;
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
      actor_type,
      resource_id
    } = params;

    let resourceId: string;
    let versionNumber: number;

    // If resource_id is provided, we're updating an existing document
    if (resource_id) {
      resourceId = resource_id;
      // Get the latest version number and increment it
      const latestVersion = await this.getLatestVersionNumber(resourceId);
      versionNumber = latestVersion + 1;
    } else {
      // Create a new resource for a new document
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

      if (resource.error) {
        console.error("Error creating resource:", resource.error.message);
        throw new Error(`Failed to create resource: ${resource.error.message}`);
      }

      resourceId = resource.data?.insert_resources_one?.id as string;
      versionNumber = 1;
    }

    // Create a new version for the resource (works for both new and existing resources)
    const resourceVersion = await this.client
      .mutation<InsertChatResourceVersionMutation, InsertChatResourceVersionMutationVariables>(InsertChatResourceVersion, {
        data: {
          resource_id: resourceId,
          version_number: versionNumber,
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

    if (resourceVersion.error) {
      console.error("Error creating resource version:", resourceVersion.error.message);
      throw new Error(`Failed to create resource version: ${resourceVersion.error.message}`);
    }

    const currentVersionId = resourceVersion.data?.insert_resource_versions_one?.id as string;

    // Update the resource's current_version_id
    const updateResource = await this.client
      .mutation<UpdateChatResourceMutation, UpdateChatResourceMutationVariables>(UpdateChatResource, {
        id: resourceId,
        data: { current_version_id: currentVersionId }
      })
      .toPromise();

    if (updateResource.error) {
      console.error("Error updating resource:", updateResource.error.message);
      throw new Error(`Failed to update resource: ${updateResource.error.message}`);
    }

    return resourceId;
  }
}

// Export singleton instance
export const documentService = new DocumentService();
