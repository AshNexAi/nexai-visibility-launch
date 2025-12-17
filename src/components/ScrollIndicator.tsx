import { ChevronDown, Mouse } from "lucide-react";

export const ScrollIndicator = () => {
  return (
    <div 
      className="mt-16 animate-fade-in-up"
      style={{ animationDelay: "1s", animationFillMode: "backwards" }}
    >
      <div className="flex flex-col items-center gap-3">
        {/* Text label */}
        <span className="text-sm font-medium text-primary/80 tracking-wide">
          Scroll to learn more
        </span>
        
        {/* Mouse icon with animated scroll wheel */}
        <div className="relative flex flex-col items-center">
          <div className="relative w-6 h-10 rounded-full border-2 border-primary/60 flex justify-center glow-indicator">
            {/* Animated scroll dot */}
            <div className="absolute top-2 w-1 h-2 bg-primary rounded-full animate-scroll-bounce" />
          </div>
          
          {/* Chevron arrows */}
          <div className="flex flex-col items-center -mt-1">
            <ChevronDown 
              className="w-4 h-4 text-primary/70 animate-chevron-bounce" 
              style={{ animationDelay: "0s" }}
            />
            <ChevronDown 
              className="w-4 h-4 text-primary/50 -mt-2 animate-chevron-bounce" 
              style={{ animationDelay: "0.15s" }}
            />
          </div>
        </div>

        {/* Gradient line */}
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
      </div>
    </div>
  );
};
