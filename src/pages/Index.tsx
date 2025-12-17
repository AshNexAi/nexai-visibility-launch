import { Header } from "@/components/Header";
import { Badge } from "@/components/Badge";
import { HeroCard } from "@/components/HeroCard";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
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

      <main className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20">
        {/* Badge */}
        <div 
          className="mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
        >
          <Badge>Early Research Prototype</Badge>
        </div>

        {/* Hero Card */}
        <HeroCard />

        {/* Footer text */}
        <p 
          className="mt-16 text-xs text-muted-foreground/60 text-center animate-fade-in-up"
          style={{ animationDelay: "0.8s", animationFillMode: "backwards" }}
        >
          Built with curiosity. Powered by AI.
        </p>
      </main>
    </div>
  );
};

export default Index;
