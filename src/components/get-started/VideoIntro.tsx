import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoIntro = () => {
  return (
    <div className="cyber-card p-8 text-center mb-8">
      <h2 className="text-3xl font-bold gradient-text mb-4">
        Welcome to Your Transformation Journey!
      </h2>
      
      <div className="relative max-w-2xl mx-auto mb-6">
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-cyan-400/20 rounded-lg border border-primary/30 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-cyan-400/10 animate-pulse" />
          
          <Button size="lg" className="neon-button relative z-10">
            <Play className="w-6 h-6 mr-2" />
            Watch Your Journey Begin
          </Button>
          
          <div className="absolute bottom-4 left-4 text-xs text-muted-foreground">
            2:30 min - Meet your Level Up coaches
          </div>
        </div>
      </div>
      
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Discover why our Level Up Program is the fastest way to transform from beginner to confident pole artist. 
        Your dedicated coach and structured progression system await!
      </p>
    </div>
  );
};

export default VideoIntro;