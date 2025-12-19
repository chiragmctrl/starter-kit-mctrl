import { TRPCClientError } from "@trpc/client";

/**
 * Type guard to check if an error is a tRPC error
 */
export function isTRPCError(error: unknown): error is TRPCClientError<any> {
  return error instanceof TRPCClientError;
}

/**
 * Get a user-friendly error message from any error type
 */
export function getErrorMessage(error: unknown): string {
  if (isTRPCError(error)) {
    // Handle tRPC specific errors
    return error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  return "An unexpected error occurred";
}

/**
 * Get HTTP status code from tRPC error
 */
export function getErrorStatus(error: unknown): number | null {
  if (isTRPCError(error)) {
    return error.data?.httpStatus ?? null;
  }
  return null;
}

/**
 * Check if error is a specific HTTP status code
 */
export function isErrorStatus(error: unknown, status: number): boolean {
  return getErrorStatus(error) === status;
}

/**
 * Check if error is a client error (4xx)
 */
export function isClientError(error: unknown): boolean {
  const status = getErrorStatus(error);
  return status !== null && status >= 400 && status < 500;
}

/**
 * Check if error is a server error (5xx)
 */
export function isServerError(error: unknown): boolean {
  const status = getErrorStatus(error);
  return status !== null && status >= 500 && status < 600;
}

/**
 * Check if error is a network error
 */
export function isNetworkError(error: unknown): boolean {
  if (isTRPCError(error)) {
    return error.data?.code === "CLIENT_CLOSED_REQUEST" || error.message.includes("fetch failed");
  }
  return false;
}

/**
 * Log error with additional context
 */
export function logError(error: unknown, context?: Record<string, any>) {
  const errorMessage = getErrorMessage(error);
  const errorStatus = getErrorStatus(error);

  console.error("Error occurred:", {
    message: errorMessage,
    status: errorStatus,
    error,
    context,
    timestamp: new Date().toISOString()
  });

  // Here you can integrate with error tracking services like:
  // - Sentry
  // - LogRocket
  // - Bugsnag
  // - etc.
}

/**
 * Create a standardized error response for API errors
 */
export interface ErrorResponse {
  message: string;
  status: number | null;
  code?: string;
  details?: any;
}

export function createErrorResponse(error: unknown): ErrorResponse {
  const message = getErrorMessage(error);
  const status = getErrorStatus(error);

  if (isTRPCError(error)) {
    return {
      message,
      status,
      code: error.data?.code,
      details: error.data
    };
  }

  return {
    message,
    status
  };
}
