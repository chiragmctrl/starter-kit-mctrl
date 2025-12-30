import { betterAuth, type InferSession } from "better-auth";
import { Pool } from "pg";
import jwt from "jsonwebtoken";
import {
  GetAllOrganizationsByUserId,
  GetAllOrganizationsByUserIdQuery,
  GetAllOrganizationsByUserIdQueryVariables,
  UpdateAuthSession,
  UpdateAuthSessionMutation,
  UpdateAuthSessionMutationVariables
} from "@/gql/graphql";
import { admin, organization } from "better-auth/plugins";
import { initCronUrqlClient } from "urql/client";

// Helper function to generate JWT token for Hasura
// Uses the expiry from Better Auth session for consistency
export function generateHasuraToken(userId: string, sessionExpiry: Date) {
  const secret = process.env.HASURA_GRAPHQL_TOKEN_SECRET!;
  const exp = Math.floor(sessionExpiry.getTime() / 1000); // seconds

  const payload = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["user", "admin", "public"],
      "x-hasura-default-role": "admin",
      "x-hasura-role": "admin",
      "x-hasura-user-id": userId
    },
    sub: userId,
    iat: Math.floor(Date.now() / 1000),
    exp
  };

  return jwt.sign(payload, secret, { algorithm: "HS256" });
}

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET!,
  database: new Pool({
    connectionString: process.env.AUTH_DATABASE_URL
  }),

  emailAndPassword: {
    enabled: true
  },

  session: {
    expiresIn: 60 * 60 * 24 * 7,
    additionalFields: {
      ["hasuraToken"]: {
        type: "string"
      }
    }
  },

  databaseHooks: {
    session: {
      create: {
        before: async (session) => {
          const hasuraToken = generateHasuraToken(session.userId, session.expiresAt);
          const client = initCronUrqlClient();
          const res = await client.query<GetAllOrganizationsByUserIdQuery, GetAllOrganizationsByUserIdQueryVariables>(GetAllOrganizationsByUserId, {
            userId: session.userId
          });
          const organizationId = res.data?.auth_member[0]?.organizationId;
          return {
            data: {
              ...session,
              hasuraToken,
              activeOrganizationId: organizationId
            }
          };
        }
      },
      update: {
        after: async (session) => {
          const { initCronUrqlClient } = await import("urql/client");
          const hasuraToken = generateHasuraToken(session.userId, session.expiresAt);
          const client = initCronUrqlClient();
          client.mutation<UpdateAuthSessionMutation, UpdateAuthSessionMutationVariables>(UpdateAuthSession, {
            sessionId: session.id,
            setObj: { hasuraToken: hasuraToken }
          });
        }
      }
    }
  },
  plugins: [organization(), admin()]
});

export type Session = InferSession<typeof auth>;
