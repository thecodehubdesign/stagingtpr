
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Crown, Star, ArrowRight } from 'lucide-react';

const FastTrackProgram = () => {
  return (
    <section className="py-20 bg-gray-900 relative">
      {/* Spotlight effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Crown className="w-8 h-8 text-yellow-400 neon-glow" />
            <Badge className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30 border text-sm px-3 py-1">
              EXCLUSIVE PROGRAM
            </Badge>
            <Crown className="w-8 h-8 text-yellow-400 neon-glow" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Missed the Start of Term?
          </h2>
        </div>

        <Card className="cyber-card p-8 lg:p-12 relative overflow-hidden border-2 border-yellow-500/30">
          {/* Glowing border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-yellow-400/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-400"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Zap className="w-16 h-16 text-yellow-400 neon-glow pulse-neon" />
                <div className="absolute -top-2 -right-2">
                  <Star className="w-6 h-6 text-orange-400 animate-spin" style={{ animationDuration: '3s' }} />
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Apply for our <span className="gradient-text">Fast Track Program</span>
              </h3>
              
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/30 border">
                  Application Only
                </Badge>
                <Badge className="bg-red-500/10 text-red-400 border-red-500/30 border">
                  Limited Spots
                </Badge>
              </div>
              
              <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                Join at the halfway point and catch up with your group mid-term. This exclusive program 
                is perfect for fast learners or anyone ready to accelerate their pole journey.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Extra Support</h4>
                <p className="text-gray-400 text-sm">Additional coaching to help you integrate quickly</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Fast Learners</h4>
                <p className="text-gray-400 text-sm">Designed for motivated students ready to catch up</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Join Your Group</h4>
                <p className="text-gray-400 text-sm">Seamlessly integrate with existing class groups</p>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold text-lg px-8 py-3 group">
                Apply for Fast Track
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-gray-400 text-sm mt-3">
                Applications reviewed within 24 hours
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FastTrackProgram;
