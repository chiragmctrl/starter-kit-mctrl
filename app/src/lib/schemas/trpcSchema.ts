import { z } from "zod";

export const getConversationMessagesInputSchema = z.object({
  conversationId: z.string()
});

export const getAllConversationsByUserAndOrgInputSchema = z.object({
  userId: z.string(),
  orgId: z.string()
});

export type getConversationMessagesInputType = z.infer<typeof getConversationMessagesInputSchema>;
export type getAllConversationsByUserAndOrgInputType = z.infer<typeof getAllConversationsByUserAndOrgInputSchema>;
