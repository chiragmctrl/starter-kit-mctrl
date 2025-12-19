import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { initCronUrqlClient } from "urql/initializeClient";
import { Test, TestQuery, TestQueryVariables } from "@/gql/graphql";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure.input(z.object({ name: z.string().optional() })).query(async ({ input }) => {
    const client = initCronUrqlClient();
    const data = await client.query<TestQuery, TestQueryVariables>(Test, {});
    console.log(data.data?.auth_user[0]);
    return {
      greeting: `Hello ${input?.name ?? "world"}`
    };
  }),
  test: protectedProcedure.query(async () => {
    const client = initCronUrqlClient();
    const data = await client.query<TestQuery, TestQueryVariables>(Test, {});
    return data.data?.auth_user;
  })
});
