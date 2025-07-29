import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Rituals from "./pages/Rituals";
import History from "./pages/History";
import BonediBaris from "./pages/BonediBaris";
import MetroRoutes from "./pages/MetroRoutes";
import OwnersPlan from "./pages/OwnersPlan";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import AreaGuide from "./pages/AreaGuide";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/rituals" element={<Rituals />} />
            <Route path="/history" element={<History />} />
            <Route path="/bonedi-baris" element={<BonediBaris />} />
            <Route path="/metro-routes" element={<MetroRoutes />} />
            <Route path="/owners-plan" element={<OwnersPlan />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/area-guide" element={<AreaGuide />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
