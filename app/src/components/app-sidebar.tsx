"use client";
import * as React from "react";
import { SquarePen } from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, useSidebar } from "@/components/ui/sidebar";
import { useParams, useRouter } from "next/navigation";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  const router = useRouter();
  const params = useParams();
  const isOpen = state === "expanded";

  return (
    <Sidebar className="bg-base-bg-black border-base-popover/35 text-white" collapsible="icon" {...props}>
      <SidebarHeader>
        <div
          onClick={() => {
            if (window.location.href.endsWith("/chat")) {
              return;
            }

            if (params.id === undefined) {
              window.location.href = `/${params.orgSlug}/chat`;
            } else {
              router.push(`/${params.orgSlug}/chat`);
            }
          }}
          className={`${isOpen ? "py-2 px-4 ps-2! gap-2" : ""} flex items-center  hover:bg-base-popover cursor-pointer  rounded-lg group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-2
          `}
        >
          <SquarePen size={17} className="shrink-0" />
          <div className="text-sm transition-all duration-200 group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:overflow-hidden">
            New chat
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="dark-scrollbar">
        <React.Activity mode={isOpen ? "visible" : "hidden"}>
          <NavMain />
        </React.Activity>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail className="" />
    </Sidebar>
  );
}
