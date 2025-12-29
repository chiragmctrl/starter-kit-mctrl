"use client";
import { env } from "@/env.mjs";
import { cacheExchange, type Client, createClient, type Exchange, fetchExchange, type SSRData, ssrExchange, subscriptionExchange } from "@urql/next";
import { authExchange } from "@urql/exchange-auth";
import { createClient as createWSClient } from "graphql-ws";

let urqlClient: Client | null = null;
let ssrCache: ReturnType<typeof ssrExchange> | null = null;
const isServer = typeof window === "undefined";
export function initUrqlClient(token: string | null, initialState?: SSRData) {
  ssrCache = ssrExchange({ initialState, isClient: !isServer });
  const webSocketURL = env.NEXT_PUBLIC_HASURA_GRAPHQL_API.replace("https", "wss");
  const wsClient = createWSClient({
    url: webSocketURL,
    connectionParams: () => {
      return {
        headers: {
          Authorization: `Bearer ${token as string}`
        }
      };
    }
  });
  const exchange: Exchange[] = [
    ssrCache,
    authExchange(async (utils) => {
      return {
        addAuthToOperation: (operation) => {
          if (!operation) return operation;
          return utils.appendHeaders(operation, {
            authorization: `Bearer ${token ?? ""}`
          });
        },
        willAuthError: (_operation) => {
          return false; // todo: check if token is expired
        },
        didAuthError: (error, _operation) => {
          return error.graphQLErrors.some((e) => e.extensions?.code === "invalid-jwt");
        },
        /* eslint:disable:no-empty-function */
        refreshAuth: async (): Promise<void> => {
          // token = await getToken({ template: "hasura" });
          // console.log("refreshAuth", token);
        }
      };
    }),
    cacheExchange,
    // eslint-disable-next-line @typescript-eslint/require-await
    subscriptionExchange({
      forwardSubscription(request) {
        const input = { ...request, query: request.query || "" };
        return {
          subscribe(sink) {
            const unsubscribe = wsClient.subscribe(input, sink);
            return { unsubscribe };
          }
        };
      }
    }),
    fetchExchange
  ];
  urqlClient = createClient({
    url: env.NEXT_PUBLIC_HASURA_GRAPHQL_API,
    preferGetMethod: false,
    exchanges: exchange
  });
  // } else {
  //when navigating to another page, client is already initialized.
  //lets restore that page's initial state
  ssrCache?.restoreData(initialState ?? {});
  // }
  // Return both the Client instance and the ssrCache.
  return { urqlClient, ssrCache };
}
