import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, className, delay = 0 }: SectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const InfoSections = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-24 space-y-24">
      {/* What is NexAI SEO */}
      <AnimatedSection>
        <section className="text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 gradient-text">
            What is NexAI SEO?
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            NexAI SEO is exploring <span className="text-foreground font-medium">Generative Engine Optimization (GEO)</span> — 
            helping brands understand how AI systems interpret and surface content in AI-generated answers. 
            We're researching the invisible layer between your content and how AI talks about you.
          </p>
        </section>
      </AnimatedSection>

      {/* Why this matters */}
      <AnimatedSection delay={100}>
        <section className="text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-8 gradient-text">
            Why this matters
          </h2>
          <div className="space-y-6 max-w-xl mx-auto">
            <div className="flex items-start gap-4 text-left">
              <span className="text-primary mt-1 text-lg">◆</span>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground">AI assistants don't rank links</span> — they reason over entities, 
                relationships, and context in ways search engines never did.
              </p>
            </div>
            <div className="flex items-start gap-4 text-left">
              <span className="text-primary mt-1 text-lg">◆</span>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground">Most content is invisible</span> or misinterpreted by AI models, 
                lost in summarization or attributed incorrectly.
              </p>
            </div>
            <div className="flex items-start gap-4 text-left">
              <span className="text-primary mt-1 text-lg">◆</span>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground">Brands lack visibility</span> into how AI systems talk about them — 
                there's no "AI console" to check your presence.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* What we're experimenting with */}
      <AnimatedSection delay={200}>
        <section className="text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 gradient-text">
            What we're experimenting with
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            This is an early research prototype. We're exploring:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 rounded-full border border-border/50 bg-muted/20 text-sm text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors duration-300">
              Measuring brand visibility in AI answers
            </span>
            <span className="px-4 py-2 rounded-full border border-border/50 bg-muted/20 text-sm text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors duration-300">
              Identifying missing entity signals
            </span>
            <span className="px-4 py-2 rounded-full border border-border/50 bg-muted/20 text-sm text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors duration-300">
              Generating AI-readable structure
            </span>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};
