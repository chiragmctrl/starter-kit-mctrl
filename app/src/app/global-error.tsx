"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global error (root layout):", error);
  }, [error]);

  return (
    <html>
      <body>
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            backgroundColor: "#f9fafb"
          }}
        >
          <div
            style={{
              maxWidth: "42rem",
              width: "100%",
              padding: "2rem",
              backgroundColor: "white",
              borderRadius: "0.5rem",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
            }}
          >
            <div style={{ marginBottom: "1.5rem" }}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#111827",
                  marginBottom: "0.5rem"
                }}
              >
                Critical Application Error
              </h2>
              <p style={{ color: "#6b7280" }}>A critical error occurred that prevented the application from loading</p>
            </div>

            <div
              style={{
                padding: "1rem",
                backgroundColor: "#fef2f2",
                border: "1px solid #fecaca",
                borderRadius: "0.5rem",
                marginBottom: "1.5rem"
              }}
            >
              <p
                style={{
                  fontWeight: "600",
                  color: "#991b1b",
                  marginBottom: "0.5rem"
                }}
              >
                Error Message:
              </p>
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: "0.875rem",
                  color: "#b91c1c"
                }}
              >
                {error.message}
              </p>
              {error.digest && (
                <>
                  <p
                    style={{
                      fontWeight: "600",
                      color: "#991b1b",
                      marginTop: "1rem",
                      marginBottom: "0.5rem"
                    }}
                  >
                    Error Digest:
                  </p>
                  <p
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.875rem",
                      color: "#b91c1c"
                    }}
                  >
                    {error.digest}
                  </p>
                </>
              )}
            </div>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              <button
                onClick={reset}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#3b82f6",
                  color: "white",
                  border: "none",
                  borderRadius: "0.375rem",
                  cursor: "pointer",
                  fontWeight: "500"
                }}
              >
                Try Again
              </button>
              <button
                onClick={() => router.push("/")}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "white",
                  color: "#374151",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                  cursor: "pointer",
                  fontWeight: "500"
                }}
              >
                Reload Application
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
