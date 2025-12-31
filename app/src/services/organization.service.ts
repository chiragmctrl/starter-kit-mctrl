import type { Client } from "urql";
import {
  GetMemberByUserAndOrg,
  type GetMemberByUserAndOrgQuery,
  type GetMemberByUserAndOrgQueryVariables,
  GetAllOrganizationsByUserId,
  type GetAllOrganizationsByUserIdQuery,
  type GetAllOrganizationsByUserIdQueryVariables
} from "@/gql/graphql";
import { initCronUrqlClient } from "urql/client";

/**
 * Organization service for handling organization-related database operations
 * Uses server-side urql client with admin credentials
 */
export class OrganizationService {
  private client: Client;

  constructor() {
    this.client = initCronUrqlClient();
  }

  /**
   * Check if a user is a member of an organization
   * @returns The membership record if user is a member, null otherwise
   */
  async isMember(userId: string, organizationId: string) {
    const result = await this.client
      .query<GetMemberByUserAndOrgQuery, GetMemberByUserAndOrgQueryVariables>(GetMemberByUserAndOrg, {
        userId,
        organizationId
      })
      .toPromise();

    if (result.error) {
      console.error("Error checking organization membership:", result.error);
      throw new Error(`Failed to check organization membership: ${result.error.message}`);
    }

    return result.data?.auth_member?.[0] || null;
  }

  /**
   * Verify user is a member of an organization
   * @throws Error if user is not a member
   */
  async verifyMembership(userId: string, organizationId: string) {
    const membership = await this.isMember(userId, organizationId);

    if (!membership) {
      throw new Error("User is not a member of this organization");
    }

    return membership;
  }

  /**
   * Get all organizations a user is a member of
   */
  async getUserOrganizations(userId: string) {
    const result = await this.client
      .query<GetAllOrganizationsByUserIdQuery, GetAllOrganizationsByUserIdQueryVariables>(GetAllOrganizationsByUserId, {
        userId
      })
      .toPromise();

    if (result.error) {
      console.error("Error fetching user organizations:", result.error);
      throw new Error(`Failed to fetch user organizations: ${result.error.message}`);
    }

    return result.data?.auth_member || [];
  }

  /**
   * Check if user has a specific role in an organization
   */
  async hasRole(userId: string, organizationId: string, role: string) {
    const membership = await this.isMember(userId, organizationId);

    if (!membership) {
      return false;
    }

    return membership.role === role;
  }

  /**
   * Check if user has admin role in an organization
   */
  async isOrgAdmin(userId: string, organizationId: string) {
    return this.hasRole(userId, organizationId, "admin");
  }
}

// Export singleton instance
export const organizationService = new OrganizationService();
