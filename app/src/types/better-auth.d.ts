// Augment better-auth types with custom fields
import "@better-auth/core/db";

declare module "@better-auth/core/db" {
  // Re-declare Session to include custom fields
  // This merges with the existing Session type
  export interface Session {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    expiresAt: Date;
    token: string;
    ipAddress?: string | null;
    userAgent?: string | null;
    // Custom field
    hasuraToken: string;
  }

  export interface User {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null;
    role: string;
  }
}
