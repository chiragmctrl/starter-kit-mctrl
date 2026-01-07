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

    const metadata = {
      ...(row.content.metadata ?? {}),
      ...(row.resource_versions[0]?.resource_id ? { resource_id: row.resource_versions[0]?.resource_id } : {})
    };

    return {
      id: row.id,
      role: row.role as "system" | "user" | "assistant",
      parts,
      metadata: metadata
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
  return messages
    .map((msg) => {
      const otherParts =
        msg.parts
          .map((obj) => {
            if (obj.type === "tool-call" && obj.state === "output-available") {
              // Include resource_id in content if available in metadata
              const resourceIdInfo = (msg?.metadata as { resource_id: string })?.resource_id
                ? `\n[Document resource_id: ${(msg?.metadata as { resource_id: string }).resource_id}]`
                : "";
              return {
                text: `below is generated document content for specified format.
                       ${JSON.stringify(obj.input)}${resourceIdInfo}
                `,
                type: "text" as const
              };
            }
            return obj;
          })
          ?.filter((part: any) => part?.type !== "tool-call" && part?.type !== "tool-result" && part?.type !== "tool_use" && part?.type !== "tool_result") ||
        [];

      // If we have both tool calls and text, keep the text parts
      if (otherParts.length > 0) {
        return {
          ...msg,
          parts: otherParts
        };
      }

      // Otherwise return as-is
      return {
        ...msg,
        parts: otherParts.length > 0 ? otherParts : msg.parts
      };
    })
    .filter((msg) => {
      // Remove messages that have no valid parts after filtering
      return msg.parts && msg.parts.length > 0;
    });
}
