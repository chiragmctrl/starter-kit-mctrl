import { chatService } from "@/services/chat.service";
import { UIMessage } from "ai";

type OldMessagesType = Awaited<ReturnType<typeof chatService.getMessages>>;

export const constructChatMessages = (oldMessages: OldMessagesType) => {
  const contructOldMsg: UIMessage[] = oldMessages.map((row) => {
    // Get parts from content, or fallback to text-only part
    let parts = row.content.parts ? row.content.parts : [{ type: "text", text: row.content.text }];

    // Filter out invalid parts to prevent validation errors
    parts = parts.filter((part: any) => {
      // Validate text parts
      if (part.type === "text") {
        return typeof part.text === "string" && part.text.length > 0;
      }
      // Validate reasoning parts
      if (part.type === "reasoning") {
        return typeof part.text === "string" && part.text.trim().length > 0;
      }
      // Validate source-url parts
      if (part.type === "source-url") {
        return part.url && typeof part.url === "string";
      }
      // Allow other valid part types through
      return true;
    });

    // Ensure we have at least one valid part (fallback to empty text if needed)
    if (parts.length === 0) {
      parts = [{ type: "text", text: "" }];
    }

    return {
      id: row.id,
      role: row.role as "system" | "user" | "assistant",
      parts,
      metadata: row.content.metadata ?? {}
    };
  });

  return contructOldMsg;
};

export const getInitialCharacter = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

export function stripToolsForAnthropic(messages: UIMessage[]): UIMessage[] {
  return messages.map((msg) => ({
    ...msg,
    parts: msg.parts?.filter(
      (part: any) => part?.type !== "tool-call" && part?.type !== "tool-result" && part?.type !== "tool_use" && part?.type !== "tool_result"
    )
  }));
}
