"use client";

import { SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar";
import { GetConversationsByUserSubscription, GetConversationsByUserSubscriptionSubscription } from "@/gql/graphql";
import useSession from "@/hooks/useSession";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useSubscription } from "urql";

export function NavMain() {
  const { session, user } = useSession();
  const params = useParams();

  const chatId = params.id as string;

  const [conversationData] = useSubscription<GetConversationsByUserSubscriptionSubscription>({
    query: GetConversationsByUserSubscription,
    variables: { userId: user?.id as string, organizationId: session?.activeOrganizationId as string },
    pause: user?.id === undefined || session?.activeOrganizationId === undefined
  });

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-sm text-base-text-light">Your chats</SidebarGroupLabel>
      {(conversationData.data?.chat_conversations ?? []).map((obj) => {
        return (
          <Link
            className={`text-sm truncate px-2.5 hover:bg-base-dark-secondary cursor-pointer py-1.5 rounded-lg ${chatId === obj.id ? "bg-base-active-option!" : ""}`}
            key={obj.id}
            href={`/${params.orgSlug}/chat/${obj.id}`}
          >
            {obj.title}
          </Link>
        );
      })}
    </SidebarGroup>
  );
}
