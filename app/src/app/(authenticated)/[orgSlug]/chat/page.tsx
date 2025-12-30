"use client";
import ChatBot from "@/components/chat/ChatBot";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const Page = () => {
  const [conversationId, _setConversationId] = useState<string | undefined>(uuid());

  return <ChatBot conversationId={conversationId as string} initialMessages={[]} />;
};
export default Page;
