"use client";
import React from "react";
import { initUrqlClient } from "./initializeClient";
import { UrqlProvider as NextUrqlProvider } from "@urql/next";
import { authClient } from "@/lib/auth-client";

const UrqlProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session, isPending } = authClient.useSession();

  // Wait for token fetch to complete
  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const client = initUrqlClient(session?.session?.hasuraToken ?? null);

  return (
    <NextUrqlProvider client={client.urqlClient} ssr={client.ssrCache}>
      {children}
    </NextUrqlProvider>
  );
};

export default UrqlProvider;
