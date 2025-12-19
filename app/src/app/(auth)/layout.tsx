import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check if user is already authenticated
  const session = await auth.api.getSession({
    headers: await headers()
  });

  // If already authenticated, redirect to dashboard
  if (session) {
    redirect("/dashboard");
  }

  // User is not authenticated, render public pages (signin/signup)
  return <>{children}</>;
}
