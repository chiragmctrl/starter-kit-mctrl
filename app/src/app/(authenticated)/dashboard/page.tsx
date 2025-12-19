"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

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
      Dashbaord<Button onClick={() => onLogout()}>Logout</Button>
    </div>
  );
};

export default page;
