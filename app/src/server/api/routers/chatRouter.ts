import { z } from "zod";
import { createTRPCRouter, protectedConversationProcedure, protectedOrgUserProcedure, publicProcedure } from "../trpc";
import { Test, TestQuery, TestQueryVariables } from "@/gql/graphql";
import { chatService } from "@/services/chat.service";
import { constructChatMessages } from "@/helper";
import { UIMessage } from "ai";
import { initCronUrqlClient } from "urql/client";
import {
  getAllConversationsByUserAndOrgInputSchema,
  getConversationMessagesInputSchema,
  getPresignedUrlForDocumentInputSchema
} from "@/lib/schemas/trpcSchema";
import { MINIO_BUCKET, minioClient } from "@/server/minio/client";

export const chatRouter = createTRPCRouter({
  hello: publicProcedure.input(z.object({ name: z.string().optional() })).query(async ({ input }) => {
    const client = initCronUrqlClient();
    const data = await client.query<TestQuery, TestQueryVariables>(Test, {});
    console.log(data.data?.auth_user[0]);
    return {
      greeting: `Hello ${input?.name ?? "world."}`
    };
  }),
  // CHANGING PARAMS WILL EFFECT THE MIDDLEWEAR
  getConversationMessages: protectedConversationProcedure.input(getConversationMessagesInputSchema).query(async ({ input }) => {
    const { conversationId } = input;
    // Conversation ownership is already validated by middleware
    const oldMessages = await chatService.getMessages(conversationId);
    const contructOldMsg: UIMessage[] = constructChatMessages(oldMessages);
    return contructOldMsg;
  }),
  // CHANGING PARAMS WILL EFFECT THE MIDDLEWEAR
  getAllConversationsByUserAndOrg: protectedOrgUserProcedure.input(getAllConversationsByUserAndOrgInputSchema).query(async ({ input }) => {
    const { userId, orgId } = input;
    // userId and organization membership are already validated by middleware
    const conversations = await chatService.getAllConversationsByUserAndOrg({ userId, orgId });
    return conversations;
  }),
  getPresignedUrlForDocument: protectedOrgUserProcedure.input(getPresignedUrlForDocumentInputSchema).mutation(async ({ input }) => {
    const { key } = input;
    // userId and organization membership are already validated by middleware
    const presignedUrl = await minioClient.presignedGetObject(
      MINIO_BUCKET,
      key,
      60 * 60 // expiry in seconds (1 hour)
    );

    return { presignedUrl };
  })
});
