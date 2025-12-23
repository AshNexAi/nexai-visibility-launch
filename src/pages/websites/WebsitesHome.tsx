import { Link } from "react-router-dom";
import { WebsitesLayout } from "@/components/websites/WebsitesLayout";
import { Button } from "@/components/ui/button";
import { Globe, Eye, CreditCard, Sparkles, Building, Stethoscope, UtensilsCrossed, Store, CheckCircle2, ArrowRight } from "lucide-react";

const targetAudience = [
  { icon: Stethoscope, label: "Dentists & Clinics" },
  { icon: UtensilsCrossed, label: "Restaurants & Cafes" },
  { icon: Store, label: "Retail Stores" },
  { icon: Building, label: "Local Services" },
];

const problems = [
  "No website at all",
  "Outdated or unprofessional design",
  "Website not bringing in enquiries",
  "Too expensive or complicated to update",
];

const differentiators = [
  { icon: Eye, title: "Preview First", description: "See your complete website before making any payment" },
  { icon: CreditCard, title: "Zero Obligation", description: "Don't like it? Walk away with no cost" },
  { icon: Sparkles, title: "Built for You", description: "Customized design tailored to your specific business" },
  { icon: Globe, title: "Ready to Launch", description: "Approved? We make it live on your domain" },
];

export default function WebsitesHome() {
  return (
    <WebsitesLayout>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Website Services by NexAI SEO
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Websites Built for Your Business
            <span className="gradient-text"> — Before You Pay</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We create a preview website for your business first.
          </p>
          <p className="text-xl md:text-2xl text-foreground font-medium mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            You only pay if you like it.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/websites/contact">
              <Button size="xl" className="glow-primary">
                Get Your Free Website Preview
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/websites/demos">
              <Button variant="outline" size="xl" className="border-border/50 hover:border-primary/50">
                View Demos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 border-t border-border/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who This Is For</h2>
            <p className="text-muted-foreground text-lg">Perfect for local businesses that need a professional online presence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {targetAudience.map(({ icon: Icon, label }) => (
              <div 
                key={label}
                className="card-glow rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-muted/5 border-t border-border/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sound Familiar?</h2>
            <p className="text-muted-foreground text-lg">Common challenges local businesses face online</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {problems.map((problem) => (
              <div 
                key={problem}
                className="flex items-center gap-4 p-5 rounded-xl border border-border/30 bg-card/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <p className="text-muted-foreground">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 border-t border-border/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes This Different</h2>
            <p className="text-muted-foreground text-lg">A simple, risk-free approach to getting your website</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map(({ icon: Icon, title, description }) => (
              <div 
                key={title}
                className="card-glow rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-20 bg-muted/5 border-t border-border/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple 4-Step Process</h2>
          <p className="text-muted-foreground text-lg mb-8">From discovery to launch in just a few days</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
            {["We find your business", "Create your preview", "You review", "Go live"].map((step, index) => (
              <div key={step} className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mb-3">
                  {index + 1}
                </div>
                <p className="text-sm font-medium">{step}</p>
              </div>
            ))}
          </div>
          
          <Link to="/websites/how-it-works">
            <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary">
              Learn More About The Process
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to See Your Business Online?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Get a professional website preview built for your business — completely free.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/websites/contact">
              <Button size="xl" className="glow-primary">
                Get Your Free Website Preview
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            <CheckCircle2 className="w-4 h-4 inline mr-1 text-primary" />
            No payment required • No obligation • See it before you decide
          </p>
        </div>
      </section>
    </WebsitesLayout>
  );
}
