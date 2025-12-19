import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { User, Bot } from "lucide-react";
import type { UIMessage } from "@ai-sdk/react";

interface ChatMessageProps {
  message: UIMessage;
  children?: React.ReactNode;
}

export function ChatMessage({ message, children }: ChatMessageProps) {
  const isUser = message.role === "user";

  // Extract text content from parts
  const textContent = message.parts
    ?.filter((part: any) => part.type === "text")
    .map((part: any) => part.text)
    .join(" ");

  return (
    <div className={cn("flex gap-3", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Bot className="h-4 w-4" />
        </div>
      )}

      <div className={cn("flex flex-col gap-2", isUser ? "items-end" : "items-start")}>
        {textContent && (
          <Card className={cn("p-3", isUser ? "bg-primary text-primary-foreground" : "bg-muted")}>
            <div className="whitespace-pre-wrap wrap-break-word">{textContent}</div>
          </Card>
        )}

        {children && <div className="w-full">{children}</div>}
      </div>

      {isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
          <User className="h-4 w-4" />
        </div>
      )}
    </div>
  );
}
