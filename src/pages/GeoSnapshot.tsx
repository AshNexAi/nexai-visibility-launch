import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, AlertCircle } from "lucide-react";

interface SnapshotResult {
  brandMentioned: boolean;
  contextStrength: "Strong" | "Moderate" | "Weak";
  insight: string;
  suggestedFocus: string;
  strengths?: string[];
  visibilityGaps?: string[];
}

// Mock API response for development
const mockApiResponse = async (brandName: string): Promise<SnapshotResult> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 3000));
  
  // Mock response data
  return {
    brandMentioned: Math.random() > 0.3,
    contextStrength: ["Strong", "Moderate", "Weak"][Math.floor(Math.random() * 3)] as SnapshotResult["contextStrength"],
    insight: `AI systems discuss this category but do not strongly associate "${brandName}" with it. Current mentions are fragmented across sources.`,
    suggestedFocus: "Strengthen brand–category context across authoritative and structured sources. Consider improving presence in knowledge bases and industry publications.",
  };
};

// Animated dots component for loading state
const AnimatedDots = () => {
  return (
    <span className="inline-flex">
      <span className="animate-pulse" style={{ animationDelay: "0ms" }}>.</span>
      <span className="animate-pulse" style={{ animationDelay: "200ms" }}>.</span>
      <span className="animate-pulse" style={{ animationDelay: "400ms" }}>.</span>
    </span>
  );
};

const GeoSnapshot = () => {
  const [brandName, setBrandName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SnapshotResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!brandName.trim()) return;
    
    setIsLoading(true);
    setError(null);
    setHasSubmitted(true);
    
    try {
      console.log("🌐 Calling /api/geo-snapshot with:", { brand: brandName, website: websiteUrl });
      const response = await fetch("/api/geo-snapshot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brand: brandName,
          website: websiteUrl || undefined,
        }),
      });

      console.log("📡 API Response status:", response.status, response.statusText);
      console.log("📡 API Response headers:", Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("❌ API Error:", errorData);
        throw new Error(
          (errorData as { error?: string }).error ||
            "We couldn't generate a snapshot right now. Please try again."
        );
      }

      const data = await response.json();
      console.log("✅ API Success - Received data:", data);
      setResult(data);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "We couldn't generate a snapshot right now. This usually resolves quickly — please try again.";
      setError(message);
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setBrandName("");
    setWebsiteUrl("");
    setResult(null);
    setError(null);
    setHasSubmitted(false);
    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-20 bg-background" />
      
      {/* Radial glow effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="fixed inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      <Header />

      <main className="relative pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Back Navigation */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>

          {/* Page Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Run a GEO Snapshot
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              See how AI systems currently surface and associate your brand in AI-generated answers.
            </p>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div 
              className="card-glow rounded-2xl p-12 animate-fade-in text-center"
            >
              <div className="space-y-6">
                {/* Subtle spinner */}
                <div className="relative w-16 h-16 mx-auto">
                  <div className="absolute inset-0 rounded-full border-2 border-border/30" />
                  <div className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                </div>
                
                <div className="space-y-2">
                  <p className="text-foreground text-lg font-medium">
                    Analyzing how AI systems interpret your brand<AnimatedDots />
                  </p>
                  <p className="text-sm text-muted-foreground">
                    This may take a moment
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error State */}
          {!isLoading && hasSubmitted && error && (
            <div 
              className="card-glow rounded-2xl p-8 animate-fade-in"
            >
              <div className="text-center space-y-6">
                <div className="w-12 h-12 mx-auto rounded-full bg-muted/50 flex items-center justify-center">
                  <span className="text-2xl">⚠</span>
                </div>
                <div className="space-y-2">
                  <p className="text-foreground font-medium">
                    We couldn't generate a snapshot right now.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    This usually resolves quickly — please try again.
                  </p>
                </div>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="h-11 px-6 rounded-full border-border/50 text-foreground hover:bg-card hover:border-primary/30 transition-all duration-300"
                >
                  Try Again
                </Button>
              </div>
            </div>
          )}

          {/* Input Card */}
          {!hasSubmitted && (
            <div 
              className="card-glow rounded-2xl p-8 animate-fade-in-up"
              style={{ animationDelay: "0.15s", animationFillMode: "backwards" }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Brand Name Input */}
                <div className="space-y-2">
                  <label htmlFor="brandName" className="text-sm font-medium text-foreground">
                    Brand Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="brandName"
                    type="text"
                    placeholder="Enter your brand name"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    required
                    className="h-12 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 placeholder:text-muted-foreground/60"
                  />
                </div>

                {/* Website URL Input */}
                <div className="space-y-2">
                  <label htmlFor="websiteUrl" className="text-sm font-medium text-foreground">
                    Website URL <span className="text-muted-foreground text-xs">(optional)</span>
                  </label>
                  <Input
                    id="websiteUrl"
                    type="url"
                    placeholder="https://example.com"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    className="h-12 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 placeholder:text-muted-foreground/60"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={!brandName.trim()}
                  className="w-full h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Run GEO Snapshot
                </Button>
              </form>
            </div>
          )}

          {/* Result Card */}
          {!isLoading && hasSubmitted && result && (
            <>
              <div 
                className="card-glow rounded-2xl p-8 animate-fade-in"
              >
                {/* Result Header */}
                <div className="mb-8 pb-6 border-b border-border/30">
                  <h2 className="text-xl font-semibold text-foreground">
                    GEO Snapshot — {brandName}
                  </h2>
                </div>

                <div className="space-y-8">
                  {/* Strengths Section */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-foreground/90 uppercase tracking-wide">
                      Your strengths
                    </h3>
                    <ul className="space-y-3">
                      {(result.strengths && result.strengths.length > 0 ? result.strengths : [
                        `Strong association with "${brandName}" in relevant discovery contexts`,
                        `Frequently described in the context of industry-related topics`
                      ]).map((strength, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-foreground/80 leading-relaxed">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-border/30" />

                  {/* Visibility Gaps Section */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-foreground/90 uppercase tracking-wide">
                      Visibility gaps
                    </h3>
                    <ul className="space-y-3">
                      {(result.visibilityGaps && result.visibilityGaps.length > 0 ? result.visibilityGaps : [
                        `Weak association with adjacent discovery categories`,
                        `Rarely cited alongside related use cases or comparisons`
                      ]).map((gap, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-0.5 w-5 h-5 rounded-full bg-muted/50 flex items-center justify-center flex-shrink-0">
                            <AlertCircle className="w-3 h-3 text-muted-foreground" />
                          </div>
                          <span className="text-foreground/70 leading-relaxed">{gap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-border/30" />

                  {/* Why This Matters Section */}
                  <div className="space-y-3 p-4 rounded-xl bg-muted/20 border border-border/20">
                    <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Why this matters
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      AI-generated answers favor brands that are tightly associated with specific discovery contexts.
                      Missing associations can reduce visibility in those answer types.
                    </p>
                  </div>

                  {/* Reset Button */}
                  <div className="pt-2">
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      className="w-full h-12 rounded-full border-border/50 text-foreground hover:bg-card hover:border-primary/30 transition-all duration-300"
                    >
                      Run Another Snapshot
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* What We're Building Section */}
          <div 
            className="mt-20 text-center animate-fade-in-up"
            style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}
          >
            <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-border to-transparent mb-8" />
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
              What we're building
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed max-w-lg mx-auto">
              We're starting with GEO snapshots to understand how AI systems surface brands.
              Over time, this will expand into deeper insights and guidance on improving AI visibility.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GeoSnapshot;
