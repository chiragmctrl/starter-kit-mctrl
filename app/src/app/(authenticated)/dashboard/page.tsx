"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { MessageSquare, Building2, LogOut, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const page = () => {
  const router = useRouter();
  const [currentRole, setCurrentRole] = useState("user");
  const { data: activeOrganization } = authClient.useActiveOrganization();

  useEffect(() => {
    const init = async () => {
      const { data } = await authClient.organization.getActiveMemberRole();
      setCurrentRole(data?.role ?? "user");
    };
    init();
  }, []);

  const onLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin");
        }
      }
    });
  };

  const handleNavigateToChat = () => {
    if (activeOrganization?.slug) {
      router.push(`/${activeOrganization.slug}/chat`);
    }
  };

  return (
    <div className="min-h-screen bg-base-bg p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white">Dashboard</h1>
            <p className="text-base-text-color mt-2">Welcome back! Manage your workspace and get started with AI-powered conversations.</p>
          </div>
          <Button
            onClick={onLogout}
            variant="outline"
            className="gap-2 cursor-pointer hover:text-white bg-base-dark-secondary hover:bg-base-hover text-white border-gray-50/15"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-xl transition-shadow bg-base-dark-secondary border-gray-50/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Building2 className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-lg text-white">Current Organization</CardTitle>
                  <CardDescription className="text-base-text-color">Your active workspace</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-white">{activeOrganization?.name ?? "No Organization"}</p>
              {activeOrganization?.slug && <p className="text-sm text-base-text-color mt-1">/{activeOrganization.slug}</p>}
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow bg-base-dark-secondary border-gray-50/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/30 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <CardTitle className="text-lg text-white">AI Chat</CardTitle>
                  <CardDescription className="text-green-200/70">Start a conversation</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/90">
                Access powerful AI-powered conversations with multiple model providers. Get instant answers and assistance.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                onClick={handleNavigateToChat}
                className="w-full cursor-pointer gap-2 bg-green-600 hover:bg-green-700"
                disabled={!activeOrganization?.slug}
              >
                Open Chat
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-xl transition-shadow bg-base-dark-secondary border-gray-50/10">
            <CardHeader>
              <CardTitle className="text-lg text-white">Quick Stats</CardTitle>
              <CardDescription className="text-base-text-color">Your workspace overview</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-base-text-color">Status</span>
                <span className="text-sm font-medium text-green-400">Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-base-text-color">Role</span>
                <span className="text-sm font-medium text-white capitalize">{currentRole}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-base-text-color">Access Level</span>
                <span className="text-sm font-medium text-white">Full</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="hover:shadow-xl transition-shadow bg-base-dark-secondary border-gray-50/10">
          <CardHeader>
            <CardTitle className="text-white">Getting Started</CardTitle>
            <CardDescription>Quick tips to help you get the most out of your workspace</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="group relative flex gap-4 p-5 rounded-xl bg-linear-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="shrink-0">
                  <div className="h-10 w-10 rounded-full bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-2 text-base">Start a Conversation</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Click the "Open Chat" button to begin interacting with AI models.</p>
                </div>
              </div>

              <div className="group relative flex gap-4 p-5 rounded-xl bg-linear-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="shrink-0">
                  <div className="h-10 w-10 rounded-full bg-linear-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-2 text-base">Choose Your Model</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Select from various AI model providers based on your needs.</p>
                </div>
              </div>

              <div className="group relative flex gap-4 p-5 rounded-xl bg-linear-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                <div className="shrink-0">
                  <div className="h-10 w-10 rounded-full bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-2 text-base">Add Attachments</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Upload files to get contextual AI responses.</p>
                </div>
              </div>

              <div className="group relative flex gap-4 p-5 rounded-xl bg-linear-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                <div className="shrink-0">
                  <div className="h-10 w-10 rounded-full bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-2 text-base">Collaborate</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Work with your team in your organization workspace.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
