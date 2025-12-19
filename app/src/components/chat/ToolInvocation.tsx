import { Card } from '@/components/ui/card';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { WeatherDisplay } from './tools/WeatherDisplay';
import { TaskDisplay } from './tools/TaskDisplay';

interface ToolInvocationProps {
  toolInvocation: any;
}

export function ToolInvocation({ toolInvocation }: ToolInvocationProps) {
  const { toolName, state, result } = toolInvocation;

  // Show loading state
  if (state === 'call') {
    return (
      <Card className="p-3 bg-muted/50 border-dashed">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Calling {toolName}...</span>
        </div>
      </Card>
    );
  }

  // Show error state
  if (state === 'error') {
    return (
      <Card className="p-3 bg-destructive/10 border-destructive/50">
        <div className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4" />
          <span>Error calling {toolName}</span>
        </div>
      </Card>
    );
  }

  // Show result with generative UI based on tool type
  if (state === 'result') {
    return (
      <Card className="p-4 bg-card border-border">
        <div className="flex items-center gap-2 mb-3 text-sm font-medium">
          <CheckCircle2 className="h-4 w-4 text-green-500" />
          <span className="capitalize">{toolName}</span>
        </div>

        {toolName === 'getWeather' && <WeatherDisplay result={result} />}
        {toolName === 'createTask' && <TaskDisplay result={result} />}

        {toolName !== 'getWeather' && toolName !== 'createTask' && (
          <pre className="text-sm bg-muted p-2 rounded overflow-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
        )}
      </Card>
    );
  }

  return null;
}
