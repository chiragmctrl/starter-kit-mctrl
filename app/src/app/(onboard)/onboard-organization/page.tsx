"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createOrganizationSchema, CreateOrganizationSchemaType } from "@/lib/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

const CreateOrganizationPage = () => {
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
            // Use full page reload to ensure fresh session after organization creation
            window.location.href = "/dashboard";
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
    <div className="min-h-screen w-full flex items-center justify-center bg-base-bg">
      <Card className="w-full max-w-sm bg-base-dark-secondary border-gray-50/10">
        <CardHeader>
          <CardTitle className="text-white text-2xl">Create Organization</CardTitle>
          <CardDescription className="text-base-text-light">Set up your new organization</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form suppressHydrationWarning onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex flex-col gap-6">
                {error && <div className="text-sm font-medium text-red-300 bg-red-500/10 p-3 rounded-md border border-red-500/20">{error}</div>}

                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base-text-color">Organization Name</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Acme Inc."
                            className="bg-base-bg border-gray-50/15 text-white placeholder:text-base-text-light focus:border-base-text-active"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-base-text-light text-xs">The display name for your organization</FormDescription>
                        <FormMessage className="text-red-400" />
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
                        <FormLabel className="text-base-text-color">Slug</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="acme-inc"
                            className="bg-base-bg border-gray-50/15 text-white placeholder:text-base-text-light focus:border-base-text-active"
                            {...field}
                            onChange={(e) => {
                              // Auto-convert to lowercase and replace spaces with hyphens
                              const value = e.target.value.toLowerCase().replace(/\s+/g, "-");
                              field.onChange(value);
                            }}
                          />
                        </FormControl>
                        <FormDescription className="text-base-text-light text-xs">
                          A unique identifier for your organization (lowercase, hyphens allowed)
                        </FormDescription>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Button type="submit" disabled={submitLoader} className="w-full bg-white cursor-pointer hover:bg-white/90 text-black font-medium">
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
