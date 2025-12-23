import { Link } from "react-router-dom";
import { WebsitesLayout } from "@/components/websites/WebsitesLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Shield } from "lucide-react";

const plans = [
  {
    name: "Basic",
    description: "Perfect for getting started",
    pages: "1 Page",
    price: "₹4,999",
    features: [
      "Single-page website",
      "Mobile responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "1 revision round",
    ],
    popular: false,
  },
  {
    name: "Standard",
    description: "Most popular choice",
    pages: "3–5 Pages",
    price: "₹9,999",
    features: [
      "3–5 page website",
      "Mobile responsive design",
      "Contact form integration",
      "Full SEO optimization",
      "Google Maps integration",
      "Social media links",
      "2 revision rounds",
    ],
    popular: true,
  },
  {
    name: "Premium",
    description: "Complete solution",
    pages: "Full Website",
    price: "₹19,999",
    features: [
      "Unlimited pages",
      "Premium design & animations",
      "Advanced contact forms",
      "Full SEO optimization",
      "Google Analytics setup",
      "3 months support included",
      "Unlimited revisions",
      "Priority delivery",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <WebsitesLayout>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-40" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Choose the plan that fits your business needs. 
            All plans include our preview-first guarantee.
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm">
            <Shield className="w-4 h-4" />
            No payment required before preview approval
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 border-t border-border/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`relative rounded-2xl p-8 ${
                  plan.popular 
                    ? "card-glow border-2 border-primary/50" 
                    : "border border-border/30 bg-card/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold gradient-text mb-1">{plan.price}</div>
                  <p className="text-sm text-muted-foreground">{plan.pages}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/websites/contact" className="block">
                  <Button 
                    className={`w-full ${plan.popular ? "glow-primary" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Trust */}
      <section className="py-16 bg-muted/5 border-t border-border/20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "Do I pay anything upfront?",
                a: "No. We create your preview website completely free. You only pay if you approve the design and want to go live.",
              },
              {
                q: "What if I don't like the preview?",
                a: "No problem at all! If the preview doesn't meet your expectations, you can walk away with zero cost or obligation.",
              },
              {
                q: "How long does it take?",
                a: "Most preview websites are ready within 3-5 business days. Premium plans may include faster delivery.",
              },
              {
                q: "Do you provide hosting?",
                a: "Yes, we can help set up hosting or connect to your existing hosting provider. Hosting costs are separate from the website build.",
              },
            ].map((faq) => (
              <div 
                key={faq.q}
                className="p-6 rounded-xl border border-border/30 bg-card/50"
              >
                <h4 className="font-semibold mb-2">{faq.q}</h4>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-8">
            Reach out to us and we'll help you choose the right plan.
          </p>
          
          <Link to="/websites/contact">
            <Button size="lg" className="glow-primary">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </WebsitesLayout>
  );
}
