import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressIndicator from "@/components/get-started/ProgressIndicator";
import VideoIntro from "@/components/get-started/VideoIntro";
import LevelProgression from "@/components/get-started/LevelProgression";
import PackageCards from "@/components/get-started/PackageCards";
import Testimonials from "@/components/get-started/Testimonials";
import Benefits from "@/components/get-started/Benefits";
import FAQ from "@/components/get-started/FAQ";
import TermCountdown from "@/components/TermCountdown";

const GetStarted = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <ProgressIndicator />
        <VideoIntro />
        <LevelProgression />
        
        <div className="mb-8">
          <TermCountdown />
        </div>
        
        <PackageCards />
        <Testimonials />
        <Benefits />
        
        <div className="mb-8">
          <TermCountdown />
        </div>
        
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default GetStarted;