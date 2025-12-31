import { useEffect, useRef } from "react";
import { useStickToBottomContext } from "use-stick-to-bottom";

// Component to handle auto-scrolling during streaming
export const AutoScrollManager = ({ isStreaming }: { isStreaming: boolean }) => {
  const { scrollToBottom } = useStickToBottomContext();
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isStreaming) {
      // Scroll immediately when streaming starts
      scrollToBottom({ animation: "smooth" });

      // Keep scrolling during streaming to handle new content
      scrollIntervalRef.current = setInterval(() => {
        scrollToBottom({ animation: "smooth", preserveScrollPosition: true });
      }, 100);
    } else {
      // Clear interval when streaming stops
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
    }

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [isStreaming, scrollToBottom]);

  return null;
};
