import { CheckCircle, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TaskResult {
  id: string;
  title: string;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  status: string;
  createdAt: string;
}

interface TaskDisplayProps {
  result: TaskResult;
}

export function TaskDisplay({ result }: TaskDisplayProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-500 bg-red-500/10';
      case 'medium':
        return 'text-yellow-500 bg-yellow-500/10';
      default:
        return 'text-green-500 bg-green-500/10';
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <h4 className="font-medium">{result.title}</h4>
          <p className="text-xs text-muted-foreground mt-1">ID: {result.id}</p>
        </div>

        <div
          className={cn(
            'px-2 py-1 rounded-full text-xs font-medium',
            getPriorityColor(result.priority)
          )}
        >
          {result.priority}
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <CheckCircle className="h-4 w-4" />
          <span className="capitalize">{result.status}</span>
        </div>

        {result.dueDate && (
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(result.dueDate).toLocaleDateString()}</span>
          </div>
        )}
      </div>

      <div className="pt-2 border-t text-xs text-muted-foreground">
        Created: {new Date(result.createdAt).toLocaleString()}
      </div>
    </div>
  );
}
