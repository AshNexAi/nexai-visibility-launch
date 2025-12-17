import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium",
        "rounded-full border border-primary/30 bg-primary/10 text-primary",
        "animate-shimmer",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
      {children}
    </span>
  );
};
