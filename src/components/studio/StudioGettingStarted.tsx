
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserPlus, Calendar, Sparkles, Trophy } from 'lucide-react';

const StudioGettingStarted = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Book Your Free Trial",
      description: "No experience needed! Book your complimentary first class and see what all the excitement is about."
    },
    {
      icon: Calendar,
      title: "Attend Your First Class",
      description: "Come in comfortable workout clothes. We'll provide everything else you need for a great first experience."
    },
    {
      icon: Sparkles,
      title: "Discover Your Style",
      description: "Try different class types to find what you love most. Our instructors will guide you every step of the way."
    },
    {
      icon: Trophy,
      title: "Build Your Skills",
      description: "Progress at your own pace with our structured programs. Watch yourself grow stronger and more confident."
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            How to <span className="gradient-text">Get Started</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Starting your pole fitness journey is easier than you think. Here's how to begin your transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 bg-gray-800 border-gray-700 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>
              <step.icon className="w-12 h-12 text-fuchsia-400 mx-auto mb-4 mt-2" />
              <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="neon-button text-black font-bold text-lg px-8 py-3">
            Book Your Free Trial Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudioGettingStarted;
