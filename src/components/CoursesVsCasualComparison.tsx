
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Zap, Users, Clock, Target, Sparkles } from 'lucide-react';

const CoursesVsCasualComparison = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            <span className="gradient-text">Courses</span> vs <span className="gradient-text">Casual</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the learning style that fits your life and goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Courses Card */}
          <Card className="cyber-card p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-fuchsia-500"></div>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">8-Week Courses</h3>
              <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/30 border">
                Structured Learning
              </Badge>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Progressive, term-based structure</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Build lasting friendships</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Measurable skill progression</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Best value for commitment</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-400 mb-4">Perfect if you want to...</p>
              <p className="text-gray-300 mb-6">Build solid foundations, make friends, and see real progress week by week</p>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-fuchsia-600 hover:from-purple-600 hover:to-fuchsia-700">
                View Course Options
              </Button>
            </div>
          </Card>

          {/* Casual Card */}
          <Card className="cyber-card p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-green-500"></div>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Casual Classes</h3>
              <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 border">
                Flexible Drop-In
              </Badge>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">Book when it suits you</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">Try different class styles</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">No long-term commitment</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">Meet new people each time</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-400 mb-4">Perfect if you want to...</p>
              <p className="text-gray-300 mb-6">Explore different styles, fit classes around a busy schedule, or just dip your toe in</p>
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-green-600 hover:from-cyan-600 hover:to-green-700">
                Browse Drop-In Classes
              </Button>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Still not sure? Our team can help you choose the best option for your goals and lifestyle.
          </p>
          <Button variant="outline" className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700">
            Chat With Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesVsCasualComparison;
