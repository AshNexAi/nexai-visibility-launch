import { Phone, MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

// Import images
import heroImage from "@/assets/demos/malibu-bar/hero.jpg";
import gallery1 from "@/assets/demos/malibu-bar/gallery-1.jpg";
import gallery2 from "@/assets/demos/malibu-bar/gallery-2.jpg";
import gallery3 from "@/assets/demos/malibu-bar/gallery-3.jpg";
import gallery4 from "@/assets/demos/malibu-bar/gallery-4.jpg";
import gallery5 from "@/assets/demos/malibu-bar/gallery-5.jpg";
import gallery6 from "@/assets/demos/malibu-bar/gallery-6.jpg";

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const stats = [
  { number: "50+", label: "Signature Cocktails" },
  { number: "500+", label: "Happy Customers" },
  { number: "4.8", label: "Google Rating" },
];

const marqueeTexts = [
  "THE NIGHT NEVER ENDS",
  "SIGNATURE COCKTAILS",
  "PREMIUM NIGHTLIFE",
  "KOMPALLY'S FINEST",
  "PARTY WITH US",
  "CRAFTED WITH PASSION",
];

const features = [
  {
    title: "SIGNATURE COCKTAILS",
    description: "Handcrafted drinks by expert mixologists using premium spirits and fresh ingredients."
  },
  {
    title: "PARTY AMBIENCE", 
    description: "Electrifying music, stunning interiors, and a vibe that keeps the energy going all night."
  },
  {
    title: "CELEBRATIONS",
    description: "Perfect venue for birthdays, bachelor parties, anniversaries, and special occasions."
  },
  {
    title: "PREMIUM EXPERIENCE",
    description: "From entry to exit, every moment is crafted to make you feel special."
  }
];

const menuCategories = [
  "Signature Cocktails",
  "Classic Cocktails", 
  "Mocktails & Coolers",
  "Bar Bites & Starters",
  "Mains & Platters",
  "Desserts"
];

const reviews = [
  {
    name: "A. K.",
    rating: 5,
    text: "Best cocktail bar in Kompally! The ambience is absolutely stunning and the drinks are next level."
  },
  {
    name: "R. S.",
    rating: 5,
    text: "Celebrated my birthday here and it was unforgettable. Great music, amazing cocktails!"
  },
  {
    name: "P. M.",
    rating: 5,
    text: "Premium vibes without the premium attitude. Love the signature cocktails!"
  }
];

// Intersection Observer hook for scroll animations
const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
};

// Animated section wrapper
const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, isInView } = useInView(0.1);
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default function MalibuCocktailBarKompally() {
  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi, I'd like to make a reservation at Malibu", "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wider animate-fade-in">
            <span className="text-white">MALIBU</span>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={handleCall}
              className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
            </button>
            <button 
              onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <MapPin className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Photo Grid */}
      <section className="relative min-h-screen pt-20">
        {/* Background grid of images */}
        <div className="absolute inset-0 grid grid-cols-4 gap-3 p-4 opacity-40">
          {[...galleryImages, ...galleryImages, heroImage, gallery1, gallery2, gallery3].map((img, i) => (
            <div 
              key={i}
              className="rounded-2xl overflow-hidden animate-fade-in"
              style={{
                animationDelay: `${i * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <img 
                src={img} 
                alt="" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

        {/* Main headline */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight tracking-tight max-w-5xl animate-scale-in">
            KOMPALLY'S MOST{" "}
            <span className="text-amber-400">PREMIUM</span>{" "}
            COCKTAIL BAR &{" "}
            <span className="bg-gradient-to-r from-pink-500 to-amber-400 bg-clip-text text-transparent">NIGHTLIFE</span>{" "}
            DESTINATION
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Marquee Section - Multiple texts */}
      <section className="py-6 bg-black border-y border-white/10 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeTexts, ...marqueeTexts, ...marqueeTexts].map((text, i) => (
            <div key={i} className="flex items-center mx-8">
              <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center mr-4">
                <span className="text-xs font-bold">M</span>
              </div>
              <span className="text-lg font-semibold tracking-wide">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 hover:border-amber-400/30 transition-all duration-500 group hover:-translate-y-2">
                  <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-widest">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Title */}
            <AnimatedSection>
              <p className="text-amber-400 uppercase tracking-widest text-sm mb-4">About</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                A WILD DREAM
                <br />
                <span className="text-gray-500">AND BEYOND</span>
              </h2>
            </AnimatedSection>
            
            {/* Right side - Content */}
            <AnimatedSection delay={200}>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Malibu is Kompally's premier cocktail destination, where sophisticated drinks meet electrifying nightlife. Our expert mixologists craft each cocktail with precision and passion.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Whether you're celebrating a special occasion, enjoying a night out with friends, or simply unwinding after a long week, Malibu offers an unforgettable experience with premium vibes, great music, and drinks that keep the party going.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-amber-950/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 hover:border-amber-400/30 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(251,191,36,0.1)]">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-amber-400 uppercase tracking-widest text-sm mb-4">Our Menu</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              CURATED FOR YOUR
              <br />
              <span className="text-gray-500">PLEASURE</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              {menuCategories.map((category, index) => (
                <div 
                  key={index}
                  className="px-6 py-3 rounded-full border border-white/20 hover:border-amber-400 hover:bg-amber-400/10 hover:text-amber-400 transition-all duration-300 cursor-pointer hover:scale-105"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {category}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="text-amber-400 uppercase tracking-widest text-sm mb-4 text-center">Gallery</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              THE VIBE IS
              <br />
              <span className="text-gray-500">UNMATCHED</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="aspect-square rounded-3xl overflow-hidden group cursor-pointer">
                  <img 
                    src={image}
                    alt={`Malibu ambience ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-pink-950/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="text-amber-400 uppercase tracking-widest text-sm mb-4 text-center">Reviews</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              WHAT GUESTS
              <br />
              <span className="text-gray-500">ARE SAYING</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 hover:border-pink-400/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6">"{review.text}"</p>
                  <p className="text-amber-400 font-medium">— {review.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="text-amber-400 uppercase tracking-widest text-sm mb-4 text-center">Location</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              FIND US
            </h2>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <AnimatedSection>
              <div className="rounded-3xl overflow-hidden h-[400px] border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.8987015!2d78.4889!3d17.5432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKompally%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Malibu Cocktail Bar Location"
                />
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={200}>
              <div className="space-y-6">
                <div className="p-6 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 hover:border-amber-400/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-gray-400">Kompally, Hyderabad, Telangana</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 hover:border-amber-400/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Hours</h3>
                      <p className="text-gray-400">Mon - Thu: 5 PM – 12 AM</p>
                      <p className="text-gray-400">Fri - Sun: 5 PM – 1 AM</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    onClick={handleCall}
                    className="flex-1 bg-amber-400 hover:bg-amber-500 text-black font-semibold rounded-full h-14 hover:scale-105 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                  <Button 
                    size="lg"
                    onClick={handleWhatsApp}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full h-14 hover:scale-105 transition-all duration-300"
                  >
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="text-4xl font-bold tracking-wider mb-2">MALIBU</div>
            <p className="text-gray-500 uppercase tracking-widest text-sm mb-4">Cocktail Bar & Kitchen</p>
            <p className="text-gray-600 mb-2">Kompally, Hyderabad</p>
            
            <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <p className="text-gray-600 text-sm mb-2">
              Demo website created for preview purposes only.
            </p>
            <p className="text-gray-500 text-sm">
              Preview created by <span className="text-amber-400">NexAI SEO</span>
            </p>
          </AnimatedSection>
        </div>
      </footer>

      {/* CSS for animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
