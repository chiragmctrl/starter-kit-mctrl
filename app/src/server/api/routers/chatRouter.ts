import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { Test, TestQuery, TestQueryVariables } from "@/gql/graphql";
import { chatService } from "@/services/chat.service";
import { constructChatMessages } from "@/helper";
import { UIMessage } from "ai";
import { initCronUrqlClient } from "urql/client";

export const chatRouter = createTRPCRouter({
  hello: publicProcedure.input(z.object({ name: z.string().optional() })).query(async ({ input }) => {
    const client = initCronUrqlClient();
    const data = await client.query<TestQuery, TestQueryVariables>(Test, {});
    console.log(data.data?.auth_user[0]);
    return {
      greeting: `Hello ${input?.name ?? "world."}`
    };
  }),
  getConversationMessages: protectedProcedure.input(z.object({ conversationId: z.string() })).query(async ({ input }) => {
    const { conversationId } = input;
    const oldMessages = await chatService.getMessages(conversationId);
    const contructOldMsg: UIMessage[] = constructChatMessages(oldMessages);
    return contructOldMsg;
  }),
  getAllConversationsByUserAndOrg: protectedProcedure.input(z.object({ userId: z.string(), orgId: z.string() })).query(async ({ input }) => {
    const { userId, orgId } = input;
    const conversations = await chatService.getAllConversationsByUserAndOrg({ userId, orgId });
    return conversations;
  })
});
