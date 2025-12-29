"use client";
import ChatBot from "@/components/chat/ChatBot";
import { api } from "@/trpc/react";
import { UIMessage } from "ai";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  const chatId = params.id as string;

  const oldMessages = api.chat.getConversationMessages.useQuery({ conversationId: chatId as string }, { enabled: chatId !== undefined });
  if (oldMessages.isFetching) {
    return (
      <div className="h-full flex items-center justify-center ">
        <div className="text-3xl text-white">Loading...</div>
      </div>
    );
  }

  return <ChatBot conversationId={chatId as string} initialMessages={oldMessages.data as UIMessage[]} />;
};

export default page;
