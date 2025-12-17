import logoIcon from "@/assets/logo-icon.png";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/20">
      {/* Top gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Subtle glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-20 bg-primary/5 blur-3xl -translate-y-1/2" />
      
      <div className="relative max-w-4xl mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="flex flex-col items-center gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img 
              src={logoIcon} 
              alt="NexAI SEO" 
              className="h-8 w-8 rounded-md"
            />
            <span className="text-lg font-semibold gradient-text">
              NexAI SEO
            </span>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-muted-foreground">
            <a 
              href="tel:6281370941" 
              className="hover:text-primary transition-colors duration-300"
            >
              📞 6281370941
            </a>
            <span className="hidden sm:block text-border">|</span>
            <a 
              href="mailto:aashutosh@nexaiseo.com" 
              className="hover:text-primary transition-colors duration-300"
            >
              ✉️ aashutosh@nexaiseo.com
            </a>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

          {/* Bottom section */}
          <div className="flex flex-col items-center gap-2 text-xs text-muted-foreground/60">
            <p>Early research prototype</p>
            <p>© 2025 NexAI SEO. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
