import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import Accelerator from "./pages/Accelerator";
import Studio from "./pages/Studio";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Team from "./pages/Team";
import Mentors from "./pages/Mentors";
import Partners from "./pages/Partners";
import DemoDay from "./pages/DemoDay";
import Apply from "./pages/Apply";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/accelerator" element={<Accelerator />} />
          <Route path="/programs/studio" element={<Studio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/demo-day" element={<DemoDay />} />
          <Route path="/apply" element={<Apply />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
