import { ModelMessage } from "ai";

export function buildChatTitlePrompt(messages: string) {
  return [
    {
      role: "system",
      content: "Generate a short, clear chat/conversation title (max 6 words) for given user message. No quotes. No punctuation."
    },
    {
      role: "user",
      content: `User message: ${messages}`
    }
  ] as ModelMessage[];
}
