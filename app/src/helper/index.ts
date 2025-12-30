import { chatService } from "@/services/chat.service";
import { UIMessage } from "ai";

type OldMessagesType = Awaited<ReturnType<typeof chatService.getMessages>>;

export const constructChatMessages = (oldMessages: OldMessagesType) => {
  const contructOldMsg: UIMessage[] = oldMessages.map((row) => ({
    id: row.id,
    role: row.role as "system" | "user" | "assistant",
    parts: row.content.parts ? row.content.parts : [{ type: "text", text: row.content.text }],
    metadata: row.content.metadata ?? {}
  }));

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
