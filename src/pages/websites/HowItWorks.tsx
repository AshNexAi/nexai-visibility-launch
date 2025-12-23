import { Link } from "react-router-dom";
import { WebsitesLayout } from "@/components/websites/WebsitesLayout";
import { Button } from "@/components/ui/button";
import { Search, Palette, Eye, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "We Identify Your Business",
    description: "We find local businesses that could benefit from a professional website, or you reach out to us directly. Either way, we learn about your business, services, and what makes you unique.",
    details: [
      "Research your business and industry",
      "Understand your target customers",
      "Identify your unique selling points",
    ],
  },
  {
    number: 2,
    icon: Palette,
    title: "We Create Your Preview Website",
    description: "Our team designs and builds a complete, functional website tailored specifically for your business. This isn't a generic template — it's custom-made for you.",
    details: [
      "Custom design matching your brand",
      "Mobile-responsive layout",
      "Professional copy and imagery",
    ],
  },
  {
    number: 3,
    icon: Eye,
    title: "You Review the Demo",
    description: "We share the preview with you. Take your time to explore it, share it with your team, and decide if it's right for your business. No pressure, no rush.",
    details: [
      "Full access to preview the site",
      "Request revisions if needed",
      "No payment required at this stage",
    ],
  },
  {
    number: 4,
    icon: Rocket,
    title: "We Make It Live",
    description: "Love the website? We'll connect it to your domain and make it live for the world to see. Your business is now online with a professional presence.",
    details: [
      "Domain setup and configuration",
      "Launch and go live",
      "Ongoing support available",
    ],
  },
];

export default function HowItWorks() {
  return (
    <WebsitesLayout>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-40" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple, risk-free process to get your business online. 
            Preview first, pay only if you're happy.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 border-t border-border/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative"
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-primary/50 to-transparent" />
                )}
                
                <div className="card-glow rounded-2xl p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Step number and icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground">
                        <step.icon className="w-8 h-8" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-medium text-primary">Step {step.number}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-6">{step.description}</p>
                      
                      <ul className="space-y-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-muted/5 border-t border-border/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why This Approach Works</h2>
            <p className="text-muted-foreground">We've designed this process to remove all the usual friction</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Zero Risk", description: "Don't pay unless you love the result" },
              { title: "Quick Turnaround", description: "Preview ready in days, not weeks" },
              { title: "No Hassle", description: "We handle everything from design to launch" },
            ].map((benefit) => (
              <div 
                key={benefit.title}
                className="text-center p-6 rounded-xl border border-border/30 bg-card/50"
              >
                <h3 className="font-semibold text-lg mb-2 gradient-text">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8">
            Let us create a preview website for your business — completely free.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/websites/contact">
              <Button size="lg" className="glow-primary">
                Get Your Free Preview
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/websites/pricing">
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </WebsitesLayout>
  );
}
