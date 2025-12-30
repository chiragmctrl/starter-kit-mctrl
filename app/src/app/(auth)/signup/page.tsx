"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { signUpSchema, SignUpSchemaType } from "@/lib/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const page = () => {
  const [submitLoader, setSubmitLoader] = useState(false);
  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      name: ""
    }
  });

  async function onSubmit(values: SignUpSchemaType) {
    const { email, password, name } = values;
    setSubmitLoader(true);
    await authClient.signUp.email(
      {
        email, // user email address
        password, // user password -> min 8 characters by default
        name, // user display name
        callbackURL: "/dashboard" // A URL to redirect to after the user verifies their email (optional)
      },
      {
        onRequest: () => {
          //show loading
        },
        onSuccess: () => {
          //redirect to the dashboard or sign in page
          setSubmitLoader(false);
          redirect("/onboard-organization");
        },
        onError: (ctx) => {
          // display the error message
          setSubmitLoader(false);
          alert(ctx.error.message);
        }
      }
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-base-bg">
      <Card className="w-full max-w-sm bg-base-dark-secondary border-gray-50/10">
        <CardHeader>
          <CardTitle className="text-white text-2xl">Create your account</CardTitle>
          <CardDescription className="text-base-text-light">Enter your details below to create your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form suppressHydrationWarning onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base-text-color">Name</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="John Doe"
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
              <div>
                <Button type="submit" disabled={submitLoader} className="w-full bg-white hover:bg-white/90 text-black cursor-pointer font-medium">
                  {submitLoader ? "Creating account..." : "Sign up"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button variant="outline" className="w-full bg-transparent border-gray-50/20 text-base-text-color hover:bg-base-hover hover:text-white">
            Login with Google
          </Button>
          <div className="text-center text-sm text-base-text-light mt-2">
            Already have an account?{" "}
            <Link href="/signin" className="text-base-text-active hover:underline font-medium">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
