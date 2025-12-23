import { Phone, MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

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

export default function MalibuCocktailBarKompally() {
  const marqueeRef = useRef<HTMLDivElement>(null);

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
          <div className="text-2xl font-bold tracking-wider">
            <span className="text-white">MALIBU</span>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={handleCall}
              className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Phone className="w-5 h-5" />
            </button>
            <button 
              onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
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
              className="rounded-2xl overflow-hidden"
              style={{
                animationDelay: `${i * 0.1}s`
              }}
            >
              <img 
                src={img} 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

        {/* Logo icon in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-24 h-24 border-2 border-white/30 rounded-2xl flex items-center justify-center backdrop-blur-sm bg-white/5">
            <span className="text-4xl font-bold">M</span>
          </div>
        </div>

        {/* Main headline */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight tracking-tight max-w-5xl">
            KOMPALLY'S MOST{" "}
            <span className="text-amber-400">PREMIUM</span>{" "}
            COCKTAIL BAR &{" "}
            <span className="bg-gradient-to-r from-pink-500 to-amber-400 bg-clip-text text-transparent">NIGHTLIFE</span>{" "}
            DESTINATION
          </h1>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-8 bg-black border-y border-white/10 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center mx-8">
              <div className="w-8 h-8 border border-white/30 rounded-lg flex items-center justify-center mr-4">
                <span className="text-sm font-bold">M</span>
              </div>
              <span className="text-xl font-semibold tracking-wide">THE NIGHT NEVER ENDS</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 overflow-hidden group"
              >
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 border border-white/10 rounded-xl opacity-50" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border border-amber-400/30 rounded-lg" />
                
                <div className="relative z-10">
                  <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm uppercase tracking-widest">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Title */}
            <div>
              <p className="text-amber-400 uppercase tracking-widest text-sm mb-4">About</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                A WILD DREAM
                <br />
                <span className="text-gray-500">AND BEYOND</span>
              </h2>
            </div>
            
            {/* Right side - Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Malibu is Kompally's premier cocktail destination, where sophisticated drinks meet electrifying nightlife. Our expert mixologists craft each cocktail with precision and passion.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether you're celebrating a special occasion, enjoying a night out with friends, or simply unwinding after a long week, Malibu offers an unforgettable experience with premium vibes, great music, and drinks that keep the party going.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-amber-950/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-amber-400/30 transition-all duration-500 group"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-amber-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 uppercase tracking-widest text-sm mb-4">Our Menu</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            CURATED FOR YOUR
            <br />
            <span className="text-gray-500">PLEASURE</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {menuCategories.map((category, index) => (
              <div 
                key={index}
                className="px-6 py-3 rounded-full border border-white/20 hover:border-amber-400/50 hover:bg-amber-400/5 transition-all cursor-pointer"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-400 uppercase tracking-widest text-sm mb-4 text-center">Gallery</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            THE VIBE IS
            <br />
            <span className="text-gray-500">UNMATCHED</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="aspect-square rounded-3xl overflow-hidden group"
              >
                <img 
                  src={image}
                  alt={`Malibu ambience ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-pink-950/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-400 uppercase tracking-widest text-sm mb-4 text-center">Reviews</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            WHAT GUESTS
            <br />
            <span className="text-gray-500">ARE SAYING</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">"{review.text}"</p>
                <p className="text-amber-400 font-medium">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-400 uppercase tracking-widest text-sm mb-4 text-center">Location</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            FIND US
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
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

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
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

              <div className="p-6 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
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
                  className="flex-1 bg-amber-400 hover:bg-amber-500 text-black font-semibold rounded-full h-14"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                <Button 
                  size="lg"
                  onClick={handleWhatsApp}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full h-14"
                >
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
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
        </div>
      </footer>

      {/* CSS for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
