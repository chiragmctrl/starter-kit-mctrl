"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/router";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-gray-50">
      <Card className="max-w-2xl w-full p-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
              <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Something went wrong</h2>
              <p className="text-sm text-gray-600">An unexpected error occurred in the application</p>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <details className="rounded-lg border border-red-200 bg-red-50 p-4">
              <summary className="cursor-pointer font-semibold text-red-900">Error Details</summary>
              <div className="mt-4 space-y-2">
                <div>
                  <p className="text-sm font-medium text-red-900">Error Message:</p>
                  <p className="text-sm text-red-700 font-mono">{error.message}</p>
                </div>
                {error.digest && (
                  <div>
                    <p className="text-sm font-medium text-red-900 mt-2">Error Digest:</p>
                    <p className="text-sm text-red-700 font-mono">{error.digest}</p>
                  </div>
                )}
                {error.stack && (
                  <div>
                    <p className="text-sm font-medium text-red-900 mt-2">Stack Trace:</p>
                    <pre className="text-xs text-red-700 overflow-auto max-h-48 bg-red-100 p-2 rounded mt-1">{error.stack}</pre>
                  </div>
                )}
              </div>
            </details>
          </div>

          <div className="flex gap-3 mt-6">
            <Button onClick={reset} variant="default">
              Try Again
            </Button>
            <Button onClick={() => router.push("/")} variant="outline">
              Go Home
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
