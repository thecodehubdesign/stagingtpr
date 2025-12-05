import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import ClassDetail from "./pages/ClassDetail";
import Studios from "./pages/Studios";
import StudioDetail from "./pages/StudioDetail";
import Instructors from "./pages/Instructors";
import Pricing from "./pages/Pricing";
import FirstTimers from "./pages/FirstTimers";
import Events from "./pages/Events";
import Franchise from "./pages/Franchise";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Products from "./pages/Products";
import GetStarted from "./pages/GetStarted";
import Contact from "./pages/Contact";
import HensParties from "./pages/HensParties";
import NotFound from "./pages/NotFound";

// Pole Programs
import PoleBeginnerPage from "./pages/programs/pole/BeginnerPage";
import PoleIntermediatePage from "./pages/programs/pole/IntermediatePage";
import PoleAdvancedPage from "./pages/programs/pole/AdvancedPage";
import PoleElitePage from "./pages/programs/pole/ElitePage";
import Pole40PlusPage from "./pages/programs/pole/40PlusPage";
import PoleTeensPage from "./pages/programs/pole/TeensPage";
import PurePoleeDance from "./pages/PurePoleeDance";
import FrontSplitsMasterclass from "./pages/FrontSplitsMasterclass";
import DanceFilthy from "./pages/DanceFilthy";

// Aerial Hoop Programs
import AerialHoopBeginnerPage from "./pages/programs/aerial-hoop/BeginnerPage";
import AerialHoopIntermediatePage from "./pages/programs/aerial-hoop/IntermediatePage";
import AerialHoopAdvancedPage from "./pages/programs/aerial-hoop/AdvancedPage";

// Aerial Silks Programs
import AerialSilksBeginnerPage from "./pages/programs/aerial-silks/BeginnerPage";
import AerialSilksIntermediatePage from "./pages/programs/aerial-silks/IntermediatePage";
import HammockPage from "./pages/programs/aerial-silks/HammockPage";

// Other Programs
import CasualClassesPage from "./pages/programs/CasualClassesPage";
import MiniTermsPage from "./pages/programs/MiniTermsPage";
import PrivateLessonsPage from "./pages/programs/PrivateLessonsPage";
import WorkshopsPage from "./pages/programs/WorkshopsPage";
import SelfPracticePage from "./pages/programs/SelfPracticePage";

// Functions
import BirthdayPartiesPage from "./pages/functions/BirthdayPartiesPage";
import CorporateEventsPage from "./pages/functions/CorporateEventsPage";
import CustomEventsPage from "./pages/functions/CustomEventsPage";

// Events
import ShinePage from "./pages/events/ShinePage";
import GlowPage from "./pages/events/GlowPage";
import PerformanceNightsPage from "./pages/events/PerformanceNightsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/studios" element={<Studios />} />
          <Route path="/studios/:slug" element={<StudioDetail />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/first-timers" element={<FirstTimers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/shine" element={<ShinePage />} />
          <Route path="/events/glow" element={<GlowPage />} />
          <Route path="/events/performance-nights" element={<PerformanceNightsPage />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/products" element={<Products />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Functions */}
          <Route path="/hens-parties" element={<HensParties />} />
          <Route path="/birthday-parties" element={<BirthdayPartiesPage />} />
          <Route path="/corporate-events" element={<CorporateEventsPage />} />
          <Route path="/custom-events" element={<CustomEventsPage />} />
          
          {/* Pole Programs */}
          <Route path="/programs/pole/beginner" element={<PoleBeginnerPage />} />
          <Route path="/programs/pole/intermediate" element={<PoleIntermediatePage />} />
          <Route path="/programs/pole/advanced" element={<PoleAdvancedPage />} />
          <Route path="/programs/pole/elite" element={<PoleElitePage />} />
          <Route path="/programs/pole/40-plus" element={<Pole40PlusPage />} />
          <Route path="/programs/pole/teens" element={<PoleTeensPage />} />
          <Route path="/programs/pole/pure-pole-dance" element={<PurePoleeDance />} />
          <Route path="/programs/pole/front-splits" element={<FrontSplitsMasterclass />} />
          <Route path="/programs/pole/dance-filthy" element={<DanceFilthy />} />
          
          {/* Aerial Hoop Programs */}
          <Route path="/programs/aerial-hoop/beginner" element={<AerialHoopBeginnerPage />} />
          <Route path="/programs/aerial-hoop/intermediate" element={<AerialHoopIntermediatePage />} />
          <Route path="/programs/aerial-hoop/advanced" element={<AerialHoopAdvancedPage />} />
          
          {/* Aerial Silks Programs */}
          <Route path="/programs/aerial-silks/beginner" element={<AerialSilksBeginnerPage />} />
          <Route path="/programs/aerial-silks/intermediate" element={<AerialSilksIntermediatePage />} />
          <Route path="/programs/aerial-silks/hammock" element={<HammockPage />} />
          
          {/* Other Programs */}
          <Route path="/programs/casual-classes" element={<CasualClassesPage />} />
          <Route path="/programs/mini-terms" element={<MiniTermsPage />} />
          <Route path="/programs/private-lessons" element={<PrivateLessonsPage />} />
          <Route path="/programs/workshops" element={<WorkshopsPage />} />
          <Route path="/programs/self-practice" element={<SelfPracticePage />} />
          
          {/* Legacy routes for class detail */}
          <Route path="/classes/:slug" element={<ClassDetail />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
