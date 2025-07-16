
import { Heart, Home, Users, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const JasmineStory = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Jasmine in her home studio"
              className="rounded-lg cyber-border float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-lg"></div>
          </div>

          {/* Story Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              From <span className="gradient-text">Garage</span> to Movement
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                It all started with just two poles in my garage. What began as a personal 
                fitness journey quickly became something much bigger - a calling to create 
                a space where others could discover their own transformation.
              </p>
              <p>
                I remember the first time I tried pole fitness. I was intimidated, 
                uncertain, and honestly a little scared. But something magical happened 
                when I started moving - I found a strength I didn't know I had, not just 
                physically, but mentally and emotionally.
              </p>
              <p>
                That garage with two poles became the foundation of The Pole Room. 
                Today, we've grown to 6 locations across Melbourne, but our heart 
                remains the same: creating a safe, supportive space where everyone 
                can discover their extraordinary.
              </p>
            </div>

            {/* Key Values */}
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <Card className="cyber-card p-4">
                <Home className="w-8 h-8 text-fuchsia-400 mb-3 neon-glow" />
                <h4 className="text-white font-semibold mb-2">Humble Beginnings</h4>
                <p className="text-gray-300 text-sm">Started in a garage with a vision</p>
              </Card>
              <Card className="cyber-card p-4">
                <Users className="w-8 h-8 text-fuchsia-400 mb-3 neon-glow" />
                <h4 className="text-white font-semibold mb-2">Community First</h4>
                <p className="text-gray-300 text-sm">Building connections that last</p>
              </Card>
              <Card className="cyber-card p-4">
                <Heart className="w-8 h-8 text-fuchsia-400 mb-3 neon-glow" />
                <h4 className="text-white font-semibold mb-2">Personal Touch</h4>
                <p className="text-gray-300 text-sm">Every student's journey matters</p>
              </Card>
              <Card className="cyber-card p-4">
                <Sparkles className="w-8 h-8 text-fuchsia-400 mb-3 neon-glow" />
                <h4 className="text-white font-semibold mb-2">Transformation</h4>
                <p className="text-gray-300 text-sm">Discover your extraordinary</p>
              </Card>
            </div>

            <div className="mt-8">
              <Button className="neon-button text-black font-bold">
                Start Your Story
              </Button>
            </div>

            <div className="mt-6 text-right">
              <p className="text-gray-400 italic">- Jasmine, Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JasmineStory;
