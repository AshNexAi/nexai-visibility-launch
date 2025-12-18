import { Header } from "@/components/Header";
import { Badge } from "@/components/Badge";
import { WaitlistForm } from "@/components/WaitlistForm";
import { InfoSections } from "@/components/InfoSections";
import { Footer } from "@/components/Footer";
import { ScrollIndicator } from "@/components/ScrollIndicator";

const Index = () => {
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

      <main className="relative">
        {/* Hero Section - Full viewport height */}
        <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20">
          {/* Badge */}
          <div 
            className="mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
          >
            <Badge>Early Research Prototype</Badge>
          </div>

          {/* Waitlist Form */}
          <WaitlistForm />

          {/* Scroll indicator */}
          <ScrollIndicator />
        </section>

        {/* Section separator - smooth gradient transition */}
        <div className="relative h-32 -mt-16">
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, 
                transparent 0%, 
                hsl(var(--background)) 30%,
                hsl(222 47% 4%) 100%
              )`
            }}
          />
          {/* Subtle noise texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* Info Sections with slightly darker background */}
        <div 
          className="relative"
          style={{
            background: `linear-gradient(180deg, 
              hsl(222 47% 4%) 0%, 
              hsl(222 47% 3.5%) 50%,
              hsl(222 47% 4%) 100%
            )`
          }}
        >
          {/* Subtle top glow line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          
          <InfoSections />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Index;
