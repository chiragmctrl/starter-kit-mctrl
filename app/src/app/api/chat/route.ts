import { streamText, UIMessage, convertToModelMessages } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;
export async function POST(req: Request) {
  const {
    messages,
    model
  }: {
    messages: UIMessage[];
    model: string;
    webSearch: boolean;
  } = await req.json();

  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session?.session || !session.user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }

  // Check if session is expired
  const expiresAt = new Date(session.session.expiresAt);
  if (!session.session.expiresAt || Number.isNaN(expiresAt.getTime()) || expiresAt <= new Date()) {
    return new Response(JSON.stringify({ error: "Session expired" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }

  const result = streamText({
    model: anthropic(model),
    messages: convertToModelMessages(messages),
    system: "You are a helpful assistant that can answer questions and help with tasks"
  });
  // send sources and reasoning back to the client
  return result.toUIMessageStreamResponse({
    sendSources: true,
    sendReasoning: true
  });
}
