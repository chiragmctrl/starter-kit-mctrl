import type { UIMessage } from '@ai-sdk/react';

export interface ChatMessage extends UIMessage {
  toolInvocations?: ToolInvocation[];
}

export interface ToolInvocation {
  toolCallId: string;
  toolName: string;
  state: 'call' | 'result' | 'error';
  args: Record<string, any>;
  result?: any;
}

export interface WeatherData {
  location: string;
  temperature: number;
  condition: 'sunny' | 'cloudy' | 'rainy';
  humidity: number;
}

export interface TaskData {
  id: string;
  title: string;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  status: 'pending' | 'in_progress' | 'completed';
  createdAt: string;
}
