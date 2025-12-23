import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";
import { Linkedin, Instagram, Youtube, X } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/nexaiseo/", label: "LinkedIn" },
  { icon: X, href: "https://x.com/NexAISEO", label: "X" },
  { icon: Instagram, href: "https://www.instagram.com/nexai.seo/", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const footerLinks = [
  { label: "How It Works", href: "/websites/how-it-works" },
  { label: "Pricing", href: "/websites/pricing" },
  { label: "Demos", href: "/websites/demos" },
  { label: "Contact", href: "/websites/contact" },
];

export const WebsitesFooter = () => {
  return (
    <footer className="relative border-t border-border/20">
      {/* Top gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Subtle glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-20 bg-primary/5 blur-3xl -translate-y-1/2" />
      
      <div className="relative max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/websites" className="flex items-center gap-3">
              <img 
                src={logoIcon} 
                alt="NexAI SEO" 
                className="h-8 w-8 rounded-md"
              />
              <div className="flex flex-col">
                <span className="text-lg font-semibold gradient-text">NexAI SEO</span>
                <span className="text-xs text-muted-foreground -mt-1">Websites</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
              Professional websites for local businesses. Preview first, pay only if you love it.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-semibold text-foreground">Get In Touch</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a 
                href="tel:6281370941" 
                className="hover:text-primary transition-colors duration-300"
              >
                📞 6281370941
              </a>
              <a 
                href="mailto:aashutosh@nexaiseo.com" 
                className="hover:text-primary transition-colors duration-300"
              >
                ✉️ aashutosh@nexaiseo.com
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-full border border-border/30 bg-muted/10 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_12px_hsl(var(--primary)/0.3)] transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent mb-6" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/60">
          <p>© 2025 NexAI SEO. All rights reserved.</p>
          <Link to="/" className="hover:text-primary transition-colors">
            ← Back to NexAI SEO Main
          </Link>
        </div>
      </div>
    </footer>
  );
};
