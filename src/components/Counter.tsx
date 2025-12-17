import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CounterProps {
  count: number;
  className?: string;
}

export const Counter = ({ count, className }: CounterProps) => {
  const [displayCount, setDisplayCount] = useState(count);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    if (count !== displayCount) {
      setIsPulsing(true);
      
      // Animate count up
      const duration = 500;
      const steps = 20;
      const increment = (count - displayCount) / steps;
      let current = displayCount;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current += increment;
        setDisplayCount(Math.round(current));
        
        if (step >= steps) {
          clearInterval(timer);
          setDisplayCount(count);
          setTimeout(() => setIsPulsing(false), 400);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [count, displayCount]);

  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      <span className="text-lg">🔥</span>
      <span className="text-muted-foreground">
        <span
          className={cn(
            "inline-block font-semibold text-foreground tabular-nums transition-all duration-300",
            isPulsing && "animate-count-pulse text-primary glow-primary rounded-md px-1"
          )}
        >
          {displayCount}
        </span>
        {" "}people are waiting
      </span>
    </div>
  );
};
