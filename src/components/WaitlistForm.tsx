import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    setIsSubmitting(true);

    // Mock submission - replace with actual API call
    // Example integrations:
    // - Formspree: fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: JSON.stringify({ email }) })
    // - EmailJS: emailjs.send("service_id", "template_id", { email })
    // - Resend: Call your edge function that uses Resend
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
        {!isSubmitted ? (
          <>
            {/* Heading */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 tracking-tight"
              style={{ animationDelay: "0.3s" }}
            >
              <span className="gradient-text">Join the NexAI SEO Research Waitlist</span>
            </h1>

            {/* Subheading */}
            <p
              className="text-muted-foreground text-center text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed"
              style={{ animationDelay: "0.4s" }}
            >
              We're exploring how brands gain visibility inside AI-generated answers.
              <br />
              Join the waitlist to receive early research updates.
            </p>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="relative w-full sm:w-auto sm:flex-1 max-w-sm">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  className={cn(
                    "h-12 px-5 rounded-full bg-background/50 border-border/50",
                    "placeholder:text-muted-foreground/50",
                    "focus:ring-2 focus:ring-primary/30 focus:border-primary/50",
                    "transition-all duration-300",
                    error && "border-destructive/50 focus:ring-destructive/30"
                  )}
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                variant="pill-primary"
                size="lg"
                disabled={isSubmitting}
                className={cn(
                  "min-w-[160px] transition-all duration-300",
                  "hover:scale-105 active:scale-95",
                  "hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                )}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Joining...
                  </span>
                ) : (
                  "Join the waitlist"
                )}
              </Button>
            </form>

            {/* Error message */}
            {error && (
              <p className="text-center text-sm text-destructive animate-fade-in mb-4">
                {error}
              </p>
            )}

            {/* Privacy note */}
            <p
              className="text-center text-xs text-muted-foreground/60"
              style={{ animationDelay: "0.6s" }}
            >
              No spam. Early research updates only.
            </p>
          </>
        ) : (
          /* Success State */
          <div className="text-center animate-fade-in py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6 animate-scale-in">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              Thanks for joining
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              We'll keep you updated.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
