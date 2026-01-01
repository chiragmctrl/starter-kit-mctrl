import { ModelMessage } from "ai";

export function buildChatTitlePrompt(messages: string) {
  return [
    {
      role: "system",
      content: "Generate a short, clear chat/conversation title (max 6 words) for given user message. No quotes. No punctuation."
    },
    {
      role: "user",
      content: `
      Below is the user message which will ask to assistant, and assistant will give answer, you just need to create a title which consicely describe the convesation

      Example:
      User message: i hope you are fine with it?
      title => Seeking confirmation

      User message: ${messages}`
    }
  ] as ModelMessage[];
}

export const chatSystemPrompt = `
  You are a helpful assistant that can answer questions and help with tasks.
  
  IMPORTANT: Only use the code_execution tool when absolutely necessary, such as:
  - Complex data analysis or processing
  - Running algorithms that are difficult to compute manually
  - Working with large datasets
  - Creating visualizations or charts
      
  For simple mathematical calculations (like mean, standard deviation, basic arithmetic), please solve them step-by-step in your response instead of using code execution. Show your work so users can understand the process.
`;
