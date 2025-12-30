import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/react";
import UrqlProvider from "urql/Provider";
import { ErrorBoundary } from "@/components/error-boundary";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Mission ctrl",
  description: "Next App"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ErrorBoundary>
          <TRPCReactProvider>
            <UrqlProvider>{children}</UrqlProvider>
          </TRPCReactProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
