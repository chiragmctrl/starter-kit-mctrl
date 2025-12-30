import { ModelMessage } from "ai";

export function buildChatTitlePrompt(messages: string) {
  return [
    {
      role: "system",
      content: "Generate a short, clear chat/conversation title (max 6 words) for given user message. No quotes. No punctuation."
    },
    {
      role: "user",
      content: `
      Below is the user message which will ask to assistant, and assistant will give answer, you just need to create a title which consicely describe the convesation

      Example:
      User message: i hope you are fine with it?
      title => Seeking confirmation

      User message: ${messages}`
    }
  ] as ModelMessage[];
}
