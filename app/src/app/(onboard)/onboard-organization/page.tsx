"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createOrganizationSchema, CreateOrganizationSchemaType } from "@/lib/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateOrganizationPage = () => {
  const router = useRouter();
  const [submitLoader, setSubmitLoader] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<CreateOrganizationSchemaType>({
    resolver: zodResolver(createOrganizationSchema),
    defaultValues: {
      name: "",
      slug: ""
    }
  });

  async function onSubmit(values: CreateOrganizationSchemaType) {
    const { name, slug } = values;
    setError(null);
    setSubmitLoader(true);

    try {
      // First check if the slug is unique
      const slugCheck = await authClient.organization.checkSlug({
        slug
      });

      if (!slugCheck.data?.status) {
        setError("This slug is already taken. Please choose a different one.");
        setSubmitLoader(false);
        return;
      }

      // If slug is unique, create the organization
      await authClient.organization.create(
        {
          name,
          slug
        },
        {
          onRequest: () => {
            // Show loading
          },
          onSuccess: async () => {
            setSubmitLoader(false);
            // Force refresh session data before navigation
            await authClient.$fetch("/session");
            // Use window.location.href for a full page reload to ensure session is properly updated
            router.push("/dashboard");
          },
          onError: (ctx) => {
            setSubmitLoader(false);
            setError(ctx.error.message || "Failed to create organization");
          }
        }
      );
    } catch (err) {
      setSubmitLoader(false);
      setError("An unexpected error occurred. Please try again.");
      console.error("Error creating organization:", err);
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Create Organization</CardTitle>
          <CardDescription>Set up your new organization</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form suppressHydrationWarning onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex flex-col gap-6">
                {error && <div className="text-sm font-medium text-destructive bg-destructive/10 p-3 rounded-md">{error}</div>}

                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organization Name</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="Acme Inc." {...field} />
                        </FormControl>
                        <FormDescription>The display name for your organization</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Slug</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="acme-inc"
                            {...field}
                            onChange={(e) => {
                              // Auto-convert to lowercase and replace spaces with hyphens
                              const value = e.target.value.toLowerCase().replace(/\s+/g, "-");
                              field.onChange(value);
                            }}
                          />
                        </FormControl>
                        <FormDescription>A unique identifier for your organization (lowercase, hyphens allowed)</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Button type="submit" disabled={submitLoader} className="w-full">
                {submitLoader ? "Creating..." : "Create Organization"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateOrganizationPage;
