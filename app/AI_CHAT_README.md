# AI Chat with Vercel AI SDK

This starter kit includes a complete chat implementation using the Vercel AI SDK with Anthropic's Claude model.

## Features

- **Conversation History**: Full chat history with user and assistant messages
- **Generative UI**: Beautiful, interactive components for tool responses
- **Streaming Responses**: Real-time streaming of AI responses
- **Tool Integration**: Example tools (weather, task creation) with custom UI
- **Type-Safe**: Fully typed with TypeScript

## Setup

### 1. Add Your API Key

Update the `.env` file with your Anthropic API key:

```bash
ANTHROPIC_API_KEY="your-anthropic-api-key"
```

Get your API key from: https://console.anthropic.com/

### 2. Start the Development Server

```bash
npm run dev
```

### 3. Visit the Chat Page

Navigate to `http://localhost:3000/chat`

## Architecture

### API Route (`/src/app/api/chat/route.ts`)

The chat API endpoint handles:
- Message streaming from Claude
- Tool execution
- Response formatting

### Chat Page (`/src/app/chat/page.tsx`)

Main chat interface with:
- Message display
- Input handling
- Loading states

### Components

#### ChatMessage (`/src/components/chat/ChatMessage.tsx`)
Renders individual messages with role-based styling.

#### ToolInvocation (`/src/components/chat/ToolInvocation.tsx`)
Handles tool call visualization with loading, error, and result states.

#### Tool Displays
- **WeatherDisplay**: Shows weather data with icons
- **TaskDisplay**: Displays task information with priority badges

## Adding New Tools

### 1. Define the Tool in the API Route

```typescript
// In src/app/api/chat/route.ts
tools: {
  yourTool: tool({
    description: 'Description of what your tool does',
    parameters: z.object({
      param1: z.string().describe('Parameter description'),
    }),
    execute: async ({ param1 }) => {
      // Your tool logic here
      return {
        result: 'data',
      };
    },
  }),
}
```

### 2. Create a Display Component

```typescript
// In src/components/chat/tools/YourToolDisplay.tsx
export function YourToolDisplay({ result }: { result: any }) {
  return (
    <div>
      {/* Your custom UI */}
    </div>
  );
}
```

### 3. Add to ToolInvocation Component

```typescript
// In src/components/chat/ToolInvocation.tsx
import { YourToolDisplay } from './tools/YourToolDisplay';

// In the result section:
{toolName === 'yourTool' && <YourToolDisplay result={result} />}
```

## Customization

### Change the AI Model

Edit the model in `/src/app/api/chat/route.ts`:

```typescript
const result = streamText({
  model: anthropic('claude-opus-4-20250514'), // or any other Claude model
  // ...
});
```

Available models:
- `claude-opus-4-20250514` - Most capable
- `claude-sonnet-4-20250514` - Balanced
- `claude-haiku-4-20250514` - Fastest

### Customize System Prompt

Update the system message in the API route:

```typescript
system: 'Your custom system prompt here',
```

### Persist Chat History

To save chat history to a database:

1. Create a database schema for messages
2. Save messages in the API route after each exchange
3. Load initial messages in the chat page
4. Pass to `useChat` hook:

```typescript
const { messages } = useChat({
  initialMessages: loadedMessages,
});
```

## Examples

### Ask About Weather

```
User: What's the weather in San Francisco?
```

The AI will call the `getWeather` tool and display a beautiful weather card.

### Create a Task

```
User: Create a high priority task to review the code by Friday
```

The AI will call the `createTask` tool and show a task card with priority and due date.

## Advanced Features

### Custom Hooks

Use the custom `useChat` hook from `/src/lib/chat/hooks.ts` for additional features:

```typescript
import { useChat } from '@/lib/chat/hooks';

const { messages, clearChat, ... } = useChat({
  onError: (error) => console.error(error),
  onFinish: (message) => console.log('Done!', message),
});
```

### Type Definitions

All types are defined in `/src/lib/chat/types.ts`:

```typescript
import type { ChatMessage, ToolInvocation } from '@/lib/chat/types';
```

## Troubleshooting

### API Key Error

If you see an authentication error:
1. Check that `ANTHROPIC_API_KEY` is set in `.env`
2. Restart the dev server after adding the key
3. Verify the key is valid at console.anthropic.com

### Tool Not Executing

If tools aren't being called:
1. Check the tool description is clear
2. Verify parameter schemas match expected input
3. Test with explicit tool requests

### Streaming Issues

If messages don't stream:
1. Check that `maxDuration` is set in the route
2. Verify network doesn't block streaming
3. Check browser console for errors

## Resources

- [Vercel AI SDK Docs](https://ai-sdk.dev/)
- [Anthropic API Docs](https://docs.anthropic.com/)
- [Next.js App Router](https://nextjs.org/docs/app)
