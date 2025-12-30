"use client";
import { authClient } from "@/lib/auth-client";

const useSession = () => {
  const session = authClient.useSession();

  return {
    data: session.data,
    isPending: session.isPending,
    error: session.error,
    user: session.data?.user,
    session: session.data?.session
  };
};

export default useSession;
