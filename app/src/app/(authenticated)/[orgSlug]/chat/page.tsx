"use client";
import ChatBot from "@/components/chat/ChatBot";
import { api } from "@/trpc/react";
import { UIMessage } from "ai";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const Page = () => {
  const [conversationId, _setConversationId] = useState<string | undefined>(uuid());
  const oldMessages = api.chat.getConversationMessages.useQuery(
    { conversationId: conversationId as string },
    {
      enabled: conversationId !== undefined,
      staleTime: 0,
      refetchOnMount: true
    }
  );

  if (oldMessages.isFetching) {
    return (
      <div className="h-full flex items-center justify-center ">
        <div className="text-3xl text-white">Loading...</div>
      </div>
    );
  }

  return <ChatBot conversationId={conversationId as string} initialMessages={oldMessages.data as UIMessage[]} />;
};
export default Page;
