import { anthropic } from "@ai-sdk/anthropic";

export const webSearchTool = anthropic.tools.webSearch_20250305({
  maxUses: 3
});
