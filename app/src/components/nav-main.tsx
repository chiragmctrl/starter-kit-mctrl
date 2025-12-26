"use client";

import { SidebarGroup, SidebarGroupLabel, SidebarMenu } from "@/components/ui/sidebar";

export function NavMain({}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Your chats</SidebarGroupLabel>
      <SidebarMenu></SidebarMenu>
    </SidebarGroup>
  );
}
