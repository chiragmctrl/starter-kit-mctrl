"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { useChat } from "@/lib/chat/hooks";
import { Send } from "lucide-react";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, error } = useChat();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userInput = input;
    setInput("");

    // Send message with proper UIMessage structure
    await sendMessage({
      role: "user",
      parts: [{ type: "text", text: userInput }]
    });
  };

  return (
    <div className="flex h-screen flex-col bg-background">
      <div className="border-b p-4">
        <h1 className="text-2xl font-bold">AI Chat Assistant</h1>
        <p className="text-sm text-muted-foreground">Chat with Claude - featuring conversation history</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex h-full items-center justify-center">
            <Card className="p-8 max-w-md text-center">
              <h2 className="text-xl font-semibold mb-2">Welcome to AI Chat</h2>
              <p className="text-muted-foreground">Start a conversation by typing a message below!</p>
            </Card>
          </div>
        )}

        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}

        {/* {isLoading && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span className="text-sm">Thinking...</span>
          </div>
        )} */}

        {error && <div className="p-3 bg-destructive/10 border border-destructive/50 rounded text-sm text-destructive">Error: {error.message}</div>}
      </div>

      <div className="border-t p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
            className="flex-1"
            // disabled={isLoading}
          />
          <Button
            type="submit"
            //  disabled={isLoading || !input.trim()}
          >
            {/* {isLoading ? 
            <Loader2 className="h-4 w-4 animate-spin" /> :  */}
            <Send className="h-4 w-4" />
            {/* } */}
          </Button>
        </form>
      </div>
    </div>
  );
}
