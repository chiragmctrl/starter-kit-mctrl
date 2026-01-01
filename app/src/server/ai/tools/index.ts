import { anthropic } from "@ai-sdk/anthropic";

export const webSearchTool = anthropic.tools.webSearch_20250305({
  maxUses: 3
});

export const webFecthTool = anthropic.tools.webFetch_20250910({ maxUses: 1 });

export const codeExecutionTool = anthropic.tools.codeExecution_20250825();
