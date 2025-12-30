"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { signInSchema, SignInSchemaType } from "@/lib/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { toast } from "sonner";

const SignInPage = () => {
  const [submitLoader, setSubmitLoader] = useState(false);
  const router = useRouter();

  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  async function onSubmit(values: SignInSchemaType) {
    const { email, password } = values;
    setSubmitLoader(true);
    await authClient.signIn.email(
      {
        email, // user email address
        password, // user password -> min 8 characters by default
        callbackURL: "/dashboard" // Redirect to the original page or dashboard
      },
      {
        onRequest: () => {
          //show loading
        },
        onSuccess: async () => {
          //redirect to the intended page or dashboard
          setSubmitLoader(false);
          // Use window.location.href for a full page reload to ensure session is properly loaded
          router.push("/dashboard");
        },
        onError: (ctx) => {
          // display the error message
          setSubmitLoader(false);
          toast.error(ctx.error.message);
        }
      }
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-base-bg">
      <Form {...form}>
        <form suppressHydrationWarning onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card className="w-full max-w-sm bg-base-dark-secondary border-gray-50/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Login to your account</CardTitle>
              <CardDescription className="text-base-text-light">Enter your email below to login to your account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base-text-color">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            className="bg-base-bg border-gray-50/15 text-white placeholder:text-base-text-light focus:border-base-text-active"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base-text-color">Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••••"
                            className="bg-base-bg border-gray-50/15 text-white placeholder:text-base-text-light focus:border-base-text-active"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" disabled={submitLoader} className="w-full cursor-pointer bg-white hover:bg-white/90 text-black font-medium">
                {submitLoader ? "Logging in..." : "Login"}
              </Button>
              <div className="text-center text-sm text-base-text-light mt-2">
                Don't have an account?{" "}
                <Link href="/signup" className="text-base-text-active hover:underline font-medium">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default SignInPage;
