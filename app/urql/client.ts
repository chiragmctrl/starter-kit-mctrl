import { env } from "@/env.mjs";
import { cacheExchange, createClient, fetchExchange } from "urql";

export const initCronUrqlClient = () => {
  return createClient({
    url: env.NEXT_PUBLIC_HASURA_GRAPHQL_API,
    exchanges: [cacheExchange, fetchExchange],
    preferGetMethod: false,
    requestPolicy: "network-only",
    fetchOptions: {
      headers: {
        "x-hasura-admin-secret": env.HASURA_GRAPHQL_ADMIN_SECRET
      }
    }
  });
};
