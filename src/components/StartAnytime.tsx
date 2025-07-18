
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Heart, Smile } from 'lucide-react';

const StartAnytime = () => {
  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="cyber-card p-8 lg:p-12 text-center relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-cyan-400"></div>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Smile className="w-12 h-12 text-green-400 neon-glow" />
            <Heart className="w-8 h-8 text-pink-400 animate-pulse" />
            <Play className="w-10 h-10 text-cyan-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            You Don't Have to <span className="gradient-text">Wait!</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
            Get started now with our <span className="text-green-400 font-semibold">Introductory Classes!</span>
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Perfect for first-timers who want to try pole or get a head start before the course kicks off. 
            Build confidence, learn the basics, and meet your future classmates!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1">Start Today</h3>
              <p className="text-gray-400 text-sm">No waiting period required</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1">Build Confidence</h3>
              <p className="text-gray-400 text-sm">Get comfortable before term starts</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Smile className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1">Meet Friends</h3>
              <p className="text-gray-400 text-sm">Connect with other beginners</p>
            </div>
          </div>

          <Button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-bold text-lg px-8 py-3">
            Book My First Class
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default StartAnytime;
