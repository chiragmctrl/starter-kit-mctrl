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

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
export type SignInSchemaType = z.infer<typeof signInSchema>;
