import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Website Services Pages
import WebsitesHome from "./pages/websites/WebsitesHome";
import HowItWorks from "./pages/websites/HowItWorks";
import Pricing from "./pages/websites/Pricing";
import Demos from "./pages/websites/Demos";
import Contact from "./pages/websites/Contact";

// Demo Websites
import OldTreesCafeKompally from "./pages/demos/OldTreesCafeKompally";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Website Services Routes */}
          <Route path="/websites" element={<WebsitesHome />} />
          <Route path="/websites/how-it-works" element={<HowItWorks />} />
          <Route path="/websites/pricing" element={<Pricing />} />
          <Route path="/websites/demos" element={<Demos />} />
          <Route path="/websites/contact" element={<Contact />} />
          
          {/* Demo Websites */}
          <Route path="/websites/demos/old-trees-cafe-kompally" element={<OldTreesCafeKompally />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
