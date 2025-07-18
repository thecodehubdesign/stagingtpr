
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Classes from "./pages/Classes";
import ClassDetail from "./pages/ClassDetail";
import Studios from "./pages/Studios";
import StudioDetail from "./pages/StudioDetail";
import Instructors from "./pages/Instructors";
import Pricing from "./pages/Pricing";
import FirstTimers from "./pages/FirstTimers";
import Events from "./pages/Events";
import Franchise from "./pages/Franchise";
import FreeGifts from "./pages/FreeGifts";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes/:slug" element={<ClassDetail />} />
          <Route path="/studios" element={<Studios />} />
          <Route path="/studios/:slug" element={<StudioDetail />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/first-timers" element={<FirstTimers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/free-gifts" element={<FreeGifts />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
