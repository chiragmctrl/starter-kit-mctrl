import z from "zod";

export const signUpSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
  name: z.string().min(2).max(100)
});

export const signInSchema = z.object({
  email: z.email(),
  password: z.string().min(8)
});

export const createOrganizationSchema = z.object({
  name: z.string().min(2, "Organization name must be at least 2 characters").max(100, "Organization name must be less than 100 characters"),
  slug: z.string().min(2, "Slug must be at least 2 characters").max(50, "Slug must be less than 50 characters").regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens")
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
export type SignInSchemaType = z.infer<typeof signInSchema>;
export type CreateOrganizationSchemaType = z.infer<typeof createOrganizationSchema>;
