
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Studios from "./pages/Studios";
import StudioDetail from "./pages/StudioDetail";
import Instructors from "./pages/Instructors";
import FirstTimers from "./pages/FirstTimers";
import Pricing from "./pages/Pricing";
import FreeGifts from "./pages/FreeGifts";
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
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/studios" element={<Studios />} />
          <Route path="/studios/:studioId" element={<StudioDetail />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/first-timers" element={<FirstTimers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/free-gifts" element={<FreeGifts />} />
          <Route path="/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
