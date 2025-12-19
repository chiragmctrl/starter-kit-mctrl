import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Validate session in Server Component
  const session = await auth.api.getSession({
    headers: await headers()
  });

  // Redirect to signin if not authenticated
  if (!session) {
    redirect("/signin");
  }

  // User is authenticated, render the protected content
  return <>{children}</>;
}
