import { Phone, MessageCircle, MapPin, PawPrint, TreePine, Users, Star, Coffee, UtensilsCrossed, Cake, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import images
import heroImage from "@/assets/demos/old-trees-cafe/hero.jpg";
import gallery1 from "@/assets/demos/old-trees-cafe/gallery-1.jpg";
import gallery2 from "@/assets/demos/old-trees-cafe/gallery-2.jpg";
import gallery3 from "@/assets/demos/old-trees-cafe/gallery-3.jpg";
import gallery4 from "@/assets/demos/old-trees-cafe/gallery-4.jpg";
import gallery5 from "@/assets/demos/old-trees-cafe/gallery-5.jpg";
import gallery6 from "@/assets/demos/old-trees-cafe/gallery-6.jpg";

const features = [
  {
    icon: PawPrint,
    title: "Pet-Friendly",
    description: "Bring your furry friends along for a relaxing day out"
  },
  {
    icon: TreePine,
    title: "Green Ambience",
    description: "Surrounded by lush greenery and fresh open air"
  },
  {
    icon: Users,
    title: "Family-Friendly",
    description: "A perfect spot for families, kids, and groups of friends"
  },
  {
    icon: Star,
    title: "Great Food & Service",
    description: "Delicious food with warm, welcoming hospitality"
  }
];

const menuCategories = [
  { icon: Coffee, name: "Coffee & Beverages", description: "Freshly brewed coffee, teas, and refreshing drinks" },
  { icon: UtensilsCrossed, name: "Starters & Snacks", description: "Light bites and savory appetizers" },
  { icon: Wine, name: "Main Course", description: "Hearty meals prepared with care" },
  { icon: Cake, name: "Desserts", description: "Sweet treats to end your meal perfectly" }
];

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const reviews = [
  {
    name: "Venkat T.",
    rating: 5,
    text: "Pet friendly and has green all around with trees. Good place to take your parents and kids to. Near ORR, very convenient location."
  },
  {
    name: "Chai Tanya",
    rating: 5,
    text: "Chill vibe and wonderful place to hangout! Excellent service, and taste of the food is great. The Tempura Fried Mushroom is a must try."
  },
  {
    name: "Suneela",
    rating: 5,
    text: "What a wonderful place to hangout with buddies anytime of the week. Located just before ORR after Kompally, this place has a vibe written all over it."
  }
];

export default function OldTreesCafeKompally() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/916281370941?text=Hi, I'm interested in visiting Old Trees Cafe!", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+916281370941";
  };

  return (
    <div className="min-h-screen bg-[#faf8f3] text-[#1a3a1a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a3a1a]/95 backdrop-blur-md border-b border-[#2d5a2d]/30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f5f0e6] flex items-center justify-center">
              <TreePine className="w-5 h-5 text-[#1a3a1a]" />
            </div>
            <span className="font-bold text-lg text-[#f5f0e6]">Old Trees Cafe</span>
          </div>
          <Button 
            onClick={handleWhatsApp}
            className="bg-[#25D366] hover:bg-[#128C7E] text-white text-sm"
            size="sm"
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            WhatsApp
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a1a]/70 via-[#1a3a1a]/50 to-[#1a3a1a]/80" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#f5f0e6]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <TreePine className="w-4 h-4 text-[#8fbc8f]" />
            <span className="text-[#f5f0e6] text-sm">Kompally, Hyderabad • Est. 2022</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#f5f0e6] mb-6 leading-tight">
            Old Trees Cafe
          </h1>
          
          <p className="text-xl md:text-2xl text-[#d4e4d4] mb-8 font-light">
            A green escape for coffee, food, and calm moments
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-[#2d5a2d] hover:bg-[#3d6a3d] text-[#f5f0e6] px-8"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <UtensilsCrossed className="w-5 h-5 mr-2" />
              View Menu
            </Button>
            <Button 
              size="lg"
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-[#f5f0e6]/40 flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 bg-[#f5f0e6]/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#f5f0e6]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a1a] mb-6">
            Welcome to Old Trees Cafe
          </h2>
          <p className="text-lg text-[#3d5a3d] leading-relaxed max-w-2xl mx-auto">
            Old Trees Cafe is a peaceful cafe in Kompally surrounded by greenery. 
            A perfect place to relax, catch up with friends, and enjoy great food 
            in a calm, nature-filled setting. Whether you're looking for a quiet 
            corner to work or a lively spot for family gatherings, we've got you covered.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 text-[#2d5a2d]">
            <MapPin className="w-5 h-5" />
            <span>Breathe. Bite. Belong.</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#1a3a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f0e6] text-center mb-4">
            Why People Love Us
          </h2>
          <p className="text-[#a8c8a8] text-center mb-12 max-w-xl mx-auto">
            A unique experience that keeps our guests coming back
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="bg-[#2d5a2d]/30 backdrop-blur-sm rounded-2xl p-6 text-center border border-[#3d6a3d]/30 hover:border-[#8fbc8f]/50 transition-all"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-[#8fbc8f]/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-[#8fbc8f]" />
                </div>
                <h3 className="text-lg font-semibold text-[#f5f0e6] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#a8c8a8]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section id="menu" className="py-20 bg-[#f5f0e6]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a1a] text-center mb-4">
            Our Menu
          </h2>
          <p className="text-[#3d5a3d] text-center mb-12 max-w-xl mx-auto">
            Freshly prepared with love, using quality ingredients
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuCategories.map((category) => (
              <div 
                key={category.name}
                className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow border border-[#2d5a2d]/10"
              >
                <div className="w-14 h-14 rounded-xl bg-[#2d5a2d] flex items-center justify-center flex-shrink-0">
                  <category.icon className="w-7 h-7 text-[#f5f0e6]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1a3a1a] mb-1">{category.name}</h3>
                  <p className="text-sm text-[#3d5a3d]">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-8 text-[#3d5a3d]">
            Contact us for the full menu with prices
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-[#2d5a2d]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f0e6] text-center mb-4">
            Our Space
          </h2>
          <p className="text-[#a8c8a8] text-center mb-12 max-w-xl mx-auto">
            A glimpse into the calm, green ambience of Old Trees Cafe
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="aspect-square rounded-xl overflow-hidden group"
              >
                <img 
                  src={image} 
                  alt={`Old Trees Cafe ambience ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-[#f5f0e6]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a1a] text-center mb-4">
            What Our Guests Say
          </h2>
          <p className="text-[#3d5a3d] text-center mb-12 max-w-xl mx-auto">
            Real experiences from our lovely visitors
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div 
                key={review.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#2d5a2d]/10"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#f4c430] text-[#f4c430]" />
                  ))}
                </div>
                <p className="text-[#3d5a3d] mb-4 leading-relaxed">"{review.text}"</p>
                <p className="font-semibold text-[#1a3a1a]">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-20 bg-[#1a3a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f0e6] text-center mb-4">
            Visit Us
          </h2>
          <p className="text-[#a8c8a8] text-center mb-12 max-w-xl mx-auto">
            We're waiting to welcome you!
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-80 lg:h-full min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.4089399999997!2d78.48099999999999!3d17.543899999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f4c8f6e8e8d%3A0x8e8d8e8d8e8d8e8d!2sOld%20Trees%20Cafe%2C%20Kompally%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Old Trees Cafe Location"
              />
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-[#2d5a2d]/30 rounded-2xl p-6 border border-[#3d6a3d]/30">
                <h3 className="text-xl font-semibold text-[#f5f0e6] mb-4">Get In Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[#a8c8a8]">
                    <MapPin className="w-5 h-5 text-[#8fbc8f]" />
                    <span>Kompally, Hyderabad, Telangana</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Button 
                    onClick={handleCall}
                    className="flex-1 bg-[#2d5a2d] hover:bg-[#3d6a3d] text-[#f5f0e6]"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                  <Button 
                    onClick={handleWhatsApp}
                    className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </Button>
                </div>
              </div>
              
              <div className="text-center lg:text-left">
                <p className="text-[#a8c8a8] text-sm">
                  Open daily for breakfast, lunch, and evening snacks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f250f] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#f5f0e6] flex items-center justify-center">
                <TreePine className="w-6 h-6 text-[#1a3a1a]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#f5f0e6]">Old Trees Cafe</h3>
                <p className="text-xs text-[#8fbc8f]">ESTD. 2022</p>
              </div>
            </div>
            
            <p className="text-[#a8c8a8] mb-2">Kompally, Hyderabad</p>
            <p className="text-[#8fbc8f] text-sm mb-6">Breathe. Bite. Belong.</p>
            
            <div className="border-t border-[#2d5a2d]/30 pt-6 w-full max-w-md">
              <p className="text-[#6a8a6a] text-xs mb-2">
                Demo website created for preview purposes only.
              </p>
              <p className="text-[#6a8a6a] text-xs">
                Preview created by{" "}
                <a 
                  href="/websites" 
                  className="text-[#8fbc8f] hover:underline"
                >
                  NexAI SEO
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
