import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default async function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="h-screen">
        <header className="flex border-b border-base-popover/40 bg-base-bg text-white h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1 hover:bg-base-popover hover:text-white" />
            <Separator orientation="vertical" className="mr-2 bg-base-popover data-[orientation=vertical]:h-4" />
            <div className="text-sm font-medium">Chat App</div>
          </div>
        </header>
        <div className="h-[calc(100vh-48px)] bg-base-bg!">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
