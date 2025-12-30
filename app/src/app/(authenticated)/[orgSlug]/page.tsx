"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { useParams } from "next/navigation";
import { MessageSquare, Settings, Users, BarChart3, ArrowRight, Sparkles } from "lucide-react";

const OrganizationPage = () => {
  const params = useParams();
  const orgSlug = params.orgSlug as string;
  const { data: activeOrganization } = authClient.useActiveOrganization();

  const handleNavigateToChat = () => {
    if (orgSlug) {
      // Use full page reload to ensure fresh session data in sidebar
      window.location.href = `/${orgSlug}/chat`;
    }
  };

  return (
    <div className="min-h-screen bg-base-bg p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-16 w-16 rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">{activeOrganization?.name ?? "Organization"}</h1>
              <p className="text-base-text-color mt-1">/{orgSlug}</p>
            </div>
          </div>
          <p className="text-lg text-white/90">Manage your organization workspace, collaborate with your team, and leverage AI-powered tools.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-xl transition-shadow bg-base-dark-secondary border-gray-50/10 h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-500/30 rounded-xl shadow-lg">
                  <MessageSquare className="h-7 w-7 text-green-400" />
                </div>
                <div>
                  <CardTitle className="text-xl text-white">AI Chat</CardTitle>
                  <CardDescription className="text-green-200/70">Start chatting now</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/90">
                Access powerful AI models for conversations, code assistance, creative writing, and more. Get instant responses with context-aware intelligence.
              </p>
            </CardContent>
            <CardFooter className="mt-6">
              <Button onClick={handleNavigateToChat} className="w-full cursor-pointer gap-2 bg-green-600 hover:bg-green-700" size="lg">
                Open Chat
                <ArrowRight className="h-5 w-5" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-xl transition-shadow bg-base-dark-secondary border-gray-50/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <Users className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-lg text-white">Team Members</CardTitle>
                  <CardDescription className="text-base-text-color">Collaborate together</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/80 mb-4">Invite and manage team members in your organization workspace. Assign roles and permissions.</p>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-linear-to-br from-purple-400 to-pink-400 border-2 border-gray-800" />
                  <div className="h-8 w-8 rounded-full bg-linear-to-br from-blue-400 to-cyan-400 border-2 border-gray-800" />
                  <div className="h-8 w-8 rounded-full bg-linear-to-br from-green-400 to-emerald-400 border-2 border-gray-800" />
                </div>
                <span className="text-sm text-base-text-color">+5 members</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full bg-base-bg hover:bg-base-hover text-white border-gray-50/15">
                View Team
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-xl transition-shadow bg-base-dark-secondary border-gray-50/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-500/20 rounded-xl">
                  <BarChart3 className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <CardTitle className="text-lg text-white">Analytics</CardTitle>
                  <CardDescription className="text-base-text-color">Track your usage</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-base-text-color">Conversations</span>
                  <span className="text-lg font-bold text-white">127</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-base-text-color">Messages</span>
                  <span className="text-lg font-bold text-white">1,834</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-base-text-color">Active Users</span>
                  <span className="text-lg font-bold text-white">8</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full bg-base-bg hover:bg-base-hover text-white border-gray-50/15">
                View Details
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="bg-base-dark-secondary border-gray-50/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Settings className="h-5 w-5" />
                Organization Settings
              </CardTitle>
              <CardDescription className="text-base-text-color">Configure your workspace preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-base-bg border border-gray-50/10">
                <div>
                  <p className="font-medium text-white">Organization Name</p>
                  <p className="text-sm text-base-text-color">{activeOrganization?.name ?? "Not set"}</p>
                </div>
                <Button variant="ghost" size="sm" className="hover:bg-base-hover text-white">
                  Edit
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-base-bg border border-gray-50/10">
                <div>
                  <p className="font-medium text-white">Slug</p>
                  <p className="text-sm text-base-text-color">/{orgSlug}</p>
                </div>
                <Button variant="ghost" size="sm" className="hover:bg-base-hover text-white">
                  Edit
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-base-bg border border-gray-50/10">
                <div>
                  <p className="font-medium text-white">Plan</p>
                  <p className="text-sm text-base-text-color">Professional</p>
                </div>
                <Button variant="ghost" size="sm" className="hover:bg-base-hover text-white">
                  Upgrade
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-base-dark-secondary border-gray-50/10">
            <CardHeader>
              <CardTitle className="text-white">Recent Activity</CardTitle>
              <CardDescription className="text-base-text-color">Latest updates in your organization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
                  <div className="h-2 w-2 rounded-full bg-blue-400 mt-2" />
                  <div>
                    <p className="text-sm font-medium text-white">New chat conversation started</p>
                    <p className="text-xs text-base-text-color">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                  <div className="h-2 w-2 rounded-full bg-green-400 mt-2" />
                  <div>
                    <p className="text-sm font-medium text-white">Team member invited</p>
                    <p className="text-xs text-base-text-color">1 hour ago</p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 rounded-lg bg-purple-500/10 border border-purple-500/30">
                  <div className="h-2 w-2 rounded-full bg-purple-400 mt-2" />
                  <div>
                    <p className="text-sm font-medium text-white">Settings updated</p>
                    <p className="text-xs text-base-text-color">3 hours ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-base-dark-secondary border-2 border-dashed border-gray-50/20">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
            <CardDescription className="text-base-text-color">Commonly used features for quick access</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Button
                variant="outline"
                className="justify-start gap-2 h-auto py-4 bg-base-bg hover:bg-base-hover text-white border-gray-50/15"
                onClick={handleNavigateToChat}
              >
                <MessageSquare className="h-4 w-4" />
                <span>New Chat</span>
              </Button>
              <Button variant="outline" className="justify-start gap-2 h-auto py-4 bg-base-bg hover:bg-base-hover text-white border-gray-50/15">
                <Users className="h-4 w-4" />
                <span>Invite Member</span>
              </Button>
              <Button variant="outline" className="justify-start gap-2 h-auto py-4 bg-base-bg hover:bg-base-hover text-white border-gray-50/15">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Button>
              <Button variant="outline" className="justify-start gap-2 h-auto py-4 bg-base-bg hover:bg-base-hover text-white border-gray-50/15">
                <BarChart3 className="h-4 w-4" />
                <span>View Reports</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrganizationPage;
