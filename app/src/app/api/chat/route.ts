import { anthropic } from '@ai-sdk/anthropic';
import { streamText, convertToModelMessages } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Convert UIMessages to ModelMessages
  const modelMessages = convertToModelMessages(messages);

  const result = streamText({
    model: anthropic('claude-sonnet-4-20250514'),
    messages: modelMessages,
    system: 'You are a helpful assistant. You can help users with various tasks and provide information.',
  });

  return result.toTextStreamResponse();
}
