import { Link } from "react-router-dom";
import { WebsitesLayout } from "@/components/websites/WebsitesLayout";
import { Button } from "@/components/ui/button";
import { Stethoscope, UtensilsCrossed, Scissors, Dumbbell, Briefcase, Wrench, ArrowRight, ExternalLink } from "lucide-react";

const demos = [
  {
    icon: Stethoscope,
    title: "Dental Clinic",
    category: "Healthcare",
    description: "Professional website for a modern dental practice with appointment booking and service showcase.",
    status: "Live Demo",
    available: true,
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant & Cafe",
    category: "Food & Dining",
    description: "Elegant website for restaurants with menu display, gallery, and reservation integration.",
    status: "Live Demo",
    available: true,
  },
  {
    icon: Scissors,
    title: "Salon & Spa",
    category: "Beauty & Wellness",
    description: "Stylish website for beauty salons featuring services, pricing, and booking options.",
    status: "Coming Soon",
    available: false,
  },
  {
    icon: Dumbbell,
    title: "Fitness Studio",
    category: "Health & Fitness",
    description: "Dynamic website for gyms and fitness studios with class schedules and membership info.",
    status: "Coming Soon",
    available: false,
  },
  {
    icon: Briefcase,
    title: "Law Firm",
    category: "Professional Services",
    description: "Sophisticated website for legal practices with practice areas and attorney profiles.",
    status: "Coming Soon",
    available: false,
  },
  {
    icon: Wrench,
    title: "Home Services",
    category: "Local Services",
    description: "Practical website for plumbers, electricians, and contractors with service areas and quotes.",
    status: "Coming Soon",
    available: false,
  },
];

export default function Demos() {
  return (
    <WebsitesLayout>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-40" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            See It In <span className="gradient-text">Action</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our demo websites to see the quality and style of work we deliver for local businesses.
          </p>
        </div>
      </section>

      {/* Demo Grid */}
      <section className="py-16 border-t border-border/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demos.map((demo) => (
              <div 
                key={demo.title}
                className={`card-glow rounded-2xl p-6 flex flex-col ${
                  !demo.available ? "opacity-60" : ""
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <demo.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    demo.available 
                      ? "bg-primary/10 text-primary border border-primary/30"
                      : "bg-muted text-muted-foreground border border-border/30"
                  }`}>
                    {demo.status}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <span className="text-xs text-muted-foreground">{demo.category}</span>
                  <h3 className="text-xl font-bold mt-1 mb-3">{demo.title}</h3>
                  <p className="text-sm text-muted-foreground">{demo.description}</p>
                </div>
                
                {/* Action */}
                <div className="mt-6">
                  {demo.available ? (
                    <Button 
                      variant="outline" 
                      className="w-full border-primary/30 hover:border-primary"
                      onClick={() => {
                        // Placeholder for demo viewing
                        alert("Demo viewing coming soon! Contact us to see a personalized preview for your business.");
                      }}
                    >
                      View Demo
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      className="w-full"
                      disabled
                    >
                      Coming Soon
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/5 border-t border-border/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Want a Preview for Your Business?</h2>
          <p className="text-muted-foreground mb-8">
            Don't see your industry? No problem. We create custom websites for any local business. 
            Let us build a free preview tailored specifically for you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/websites/contact">
              <Button size="lg" className="glow-primary">
                Get Your Free Preview
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/websites/how-it-works">
              <Button variant="outline" size="lg">
                How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </WebsitesLayout>
  );
}
