"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const { data: activeOrganization } = authClient.useActiveOrganization();

  const onLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin"); // redirect to login page
        }
      }
    });
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <div>Organization:</div>
        <div>{activeOrganization?.name ?? "Unknown"}</div>
      </div>
      <Button onClick={() => onLogout()}>Logout</Button>
    </div>
  );
};

export default page;
