import { Phone, MapPin, Clock, Wine, Music, PartyPopper, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import images
import heroImage from "@/assets/demos/malibu-bar/hero.jpg";
import gallery1 from "@/assets/demos/malibu-bar/gallery-1.jpg";
import gallery2 from "@/assets/demos/malibu-bar/gallery-2.jpg";
import gallery3 from "@/assets/demos/malibu-bar/gallery-3.jpg";
import gallery4 from "@/assets/demos/malibu-bar/gallery-4.jpg";
import gallery5 from "@/assets/demos/malibu-bar/gallery-5.jpg";
import gallery6 from "@/assets/demos/malibu-bar/gallery-6.jpg";

const features = [
  {
    icon: Wine,
    title: "Signature Cocktails",
    description: "Handcrafted drinks by expert mixologists using premium spirits"
  },
  {
    icon: Music,
    title: "Party Ambience",
    description: "Electrifying music and vibrant atmosphere every night"
  },
  {
    icon: PartyPopper,
    title: "Perfect for Celebrations",
    description: "Host birthdays, bachelor parties, and special occasions"
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description: "Luxury interiors with an unforgettable nightlife vibe"
  }
];

const menuCategories = [
  { name: "Signature Cocktails", icon: "🍹" },
  { name: "Classic Cocktails", icon: "🥃" },
  { name: "Mocktails", icon: "🍸" },
  { name: "Bar Bites", icon: "🍗" },
  { name: "Mains & Platters", icon: "🍽️" },
  { name: "Desserts", icon: "🍰" }
];

const reviews = [
  {
    name: "A. K.",
    rating: 5,
    text: "Best cocktail bar in Kompally! The ambience is absolutely stunning and the drinks are next level. Perfect for a night out."
  },
  {
    name: "R. S.",
    rating: 5,
    text: "Celebrated my birthday here and it was unforgettable. Great music, amazing cocktails, and the staff really knows how to make you feel special."
  },
  {
    name: "P. M.",
    rating: 5,
    text: "Premium vibes without the premium attitude. Love the signature cocktails and the DJ keeps the party going all night!"
  }
];

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

export default function MalibuCocktailBarKompally() {
  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi, I'd like to make a reservation at Malibu", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
        
        {/* Gold accent glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-medium">Kompally's Premium Nightlife</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-white">Malibu</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-400 font-medium mb-4">
            Cocktail Bar & Kitchen
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Where cocktails, music, and nights come alive
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-8 py-6 text-lg rounded-full shadow-lg shadow-amber-500/30"
            >
              View Menu
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={handleWhatsApp}
              className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-400 px-8 py-6 text-lg rounded-full"
            >
              Reserve a Table
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-amber-500/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-amber-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent">
              About Malibu
            </span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Malibu is Kompally's premier cocktail destination, where sophisticated drinks meet 
            electrifying nightlife. Our expert mixologists craft each cocktail with precision and 
            passion, using only the finest spirits and fresh ingredients.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Whether you're celebrating a special occasion, enjoying a night out with friends, 
            or simply unwinding after a long week, Malibu offers an unforgettable experience 
            with premium vibes, great music, and drinks that keep the party going.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-amber-400">Malibu</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 hover:border-amber-500/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section id="menu" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our <span className="text-amber-400">Menu</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">Explore our curated selection</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {menuCategories.map((category, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-300 text-center group cursor-pointer"
              >
                <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">{category.icon}</span>
                <span className="text-white font-medium">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-pink-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="aspect-square rounded-xl overflow-hidden group"
              >
                <img 
                  src={image}
                  alt={`Malibu ambience ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our <span className="text-amber-400">Guests Say</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
                <p className="text-amber-400 font-medium">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Find <span className="text-amber-400">Us</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-[400px] border border-white/10">
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
              <div className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                    <p className="text-gray-400">Kompally, Hyderabad, Telangana</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Hours</h3>
                    <p className="text-gray-400">Mon - Thu: 5 PM – 12 AM</p>
                    <p className="text-gray-400">Fri - Sun: 5 PM – 1 AM</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={handleCall}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                <Button 
                  size="lg"
                  onClick={handleWhatsApp}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full"
                >
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">
            <span className="text-white">Malibu</span>
          </h3>
          <p className="text-amber-400 mb-4">Cocktail Bar & Kitchen</p>
          <p className="text-gray-500 mb-2">Kompally, Hyderabad</p>
          
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <p className="text-gray-600 text-sm mb-2">
            Demo website created for preview purposes only.
          </p>
          <p className="text-gray-500 text-sm">
            Preview created by <span className="text-amber-400">NexAI SEO</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
