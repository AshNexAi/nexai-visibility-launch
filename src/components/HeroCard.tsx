import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/Counter";
import { cn } from "@/lib/utils";

export const HeroCard = () => {
  const [hasClicked, setHasClicked] = useState(false);
  const [waitingCount, setWaitingCount] = useState(128);
  const [clickedButton, setClickedButton] = useState<"excited" | "waiting" | null>(null);

  const handleClick = useCallback((type: "excited" | "waiting") => {
    if (hasClicked) return;
    
    setHasClicked(true);
    setClickedButton(type);
    setWaitingCount(prev => prev + 1);
  }, [hasClicked]);

  return (
    <div 
      className={cn(
        "relative w-full max-w-xl mx-auto",
        "animate-fade-in-up"
      )}
      style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
    >
      {/* Glow effect behind card */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-secondary/40 rounded-3xl" />
      </div>

      {/* Main card */}
      <div className="card-glow rounded-3xl p-8 md:p-12 backdrop-blur-sm">
        {/* Heading */}
        <h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 tracking-tight"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="mr-3">🚧</span>
          <span className="gradient-text">We are Coming Soon</span>
        </h1>

        {/* Subheading */}
        <p 
          className="text-muted-foreground text-center text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed"
          style={{ animationDelay: "0.4s" }}
        >
          We're building the AI visibility layer for AI-generated answers.
        </p>

        {/* Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          style={{ animationDelay: "0.5s" }}
        >
          <Button
            variant={hasClicked ? "pill-disabled" : clickedButton === "excited" ? "pill-primary" : "pill"}
            size="lg"
            onClick={() => handleClick("excited")}
            disabled={hasClicked}
            className={cn(
              "min-w-[160px] transition-all duration-300",
              clickedButton === "excited" && "border-primary/60 bg-primary/20"
            )}
          >
            <span className="mr-1">🚀</span>
            I'm excited
          </Button>

          <Button
            variant={hasClicked ? "pill-disabled" : clickedButton === "waiting" ? "pill-primary" : "pill"}
            size="lg"
            onClick={() => handleClick("waiting")}
            disabled={hasClicked}
            className={cn(
              "min-w-[160px] transition-all duration-300",
              clickedButton === "waiting" && "border-secondary/60 bg-secondary/20"
            )}
          >
            <span className="mr-1">⏳</span>
            I'm waiting
          </Button>
        </div>

        {/* Counter */}
        <div style={{ animationDelay: "0.6s" }}>
          <Counter count={waitingCount} />
        </div>

        {/* Confirmation message */}
        {hasClicked && (
          <p className="text-center text-sm text-primary mt-6 animate-fade-in">
            ✨ Thanks for joining the waitlist!
          </p>
        )}
      </div>
    </div>
  );
};
