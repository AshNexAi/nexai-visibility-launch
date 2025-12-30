import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface SnapshotResult {
  brandMentioned: boolean;
  contextStrength: "Strong" | "Moderate" | "Weak";
  insight: string;
  suggestedFocus: string;
}

// Mock API response for development
const mockApiResponse = async (brandName: string): Promise<SnapshotResult> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  // Mock response data
  return {
    brandMentioned: Math.random() > 0.3,
    contextStrength: ["Strong", "Moderate", "Weak"][Math.floor(Math.random() * 3)] as SnapshotResult["contextStrength"],
    insight: `AI systems discuss this category but do not strongly associate "${brandName}" with it. Current mentions are fragmented across sources.`,
    suggestedFocus: "Strengthen brand–category context across authoritative and structured sources. Consider improving presence in knowledge bases and industry publications.",
  };
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
    
    try {
      const response = await fetch("/api/geo-snapshot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brand: brandName,
          website: websiteUrl || undefined,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          (errorData as { error?: string }).error ||
            "We couldn't generate a snapshot right now. Please try again."
        );
      }

      const data = await response.json();
      setResult(data);
      setHasSubmitted(true);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "We couldn't generate a snapshot right now. Please try again.";
      setError(message);
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
          {/* Page Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Run a GEO Snapshot
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              See how AI systems currently surface and associate your brand in AI-generated answers.
            </p>
          </div>

          {/* Input Card or Result Card */}
          {!hasSubmitted ? (
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

                {/* Error State */}
                {error && (
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading || !brandName.trim()}
                  className="w-full h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Analyzing...
                    </span>
                  ) : (
                    "Run GEO Snapshot"
                  )}
                </Button>
              </form>
            </div>
          ) : (
            <div 
              className="card-glow rounded-2xl p-8 animate-fade-in-up"
            >
              {/* Result Header */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  GEO Snapshot Result
                </h2>
                <p className="text-sm text-muted-foreground">
                  Analysis for <span className="text-foreground font-medium">{brandName}</span>
                </p>
              </div>

              {result && (
                <div className="space-y-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Brand Mentioned */}
                    <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                      <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Brand Mentioned</p>
                      <p className={`text-lg font-semibold ${result.brandMentioned ? "text-primary" : "text-muted-foreground"}`}>
                        {result.brandMentioned ? "Yes" : "No"}
                      </p>
                    </div>

                    {/* Context Strength */}
                    <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                      <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Context Strength</p>
                      <p className={`text-lg font-semibold ${
                        result.contextStrength === "Strong" ? "text-primary" :
                        result.contextStrength === "Moderate" ? "text-secondary" :
                        "text-muted-foreground"
                      }`}>
                        {result.contextStrength}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-border/50" />

                  {/* Insight */}
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Insight</p>
                    <p className="text-foreground/90 leading-relaxed">
                      {result.insight}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-border/50" />

                  {/* Suggested Focus */}
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Suggested Focus</p>
                    <p className="text-foreground/90 leading-relaxed">
                      {result.suggestedFocus}
                    </p>
                  </div>

                  {/* Reset Button */}
                  <div className="pt-4">
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      className="w-full h-12 rounded-full border-border/50 text-foreground hover:bg-card hover:border-primary/30 transition-all duration-300"
                    >
                      Run Another Snapshot
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GeoSnapshot;
