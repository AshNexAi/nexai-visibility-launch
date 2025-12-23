import { Link, useLocation } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/websites" },
  { label: "How It Works", href: "/websites/how-it-works" },
  { label: "Pricing", href: "/websites/pricing" },
  { label: "Demos", href: "/websites/demos" },
  { label: "Contact", href: "/websites/contact" },
];

export const WebsitesHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/20 bg-background/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/websites" className="flex items-center gap-3">
            <img 
              src={logoIcon} 
              alt="NexAI SEO Websites" 
              className="h-8 w-8 rounded-md"
            />
            <div className="flex flex-col">
              <span className="text-lg font-semibold gradient-text">NexAI SEO</span>
              <span className="text-xs text-muted-foreground -mt-1">Websites</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm transition-colors duration-300 ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link to="/websites/contact" className="hidden md:block">
            <Button size="sm" className="glow-primary">
              Get Free Preview
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 border-t border-border/20 mt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm py-2 transition-colors duration-300 ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/websites/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" className="w-full mt-2 glow-primary">
                  Get Free Preview
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
