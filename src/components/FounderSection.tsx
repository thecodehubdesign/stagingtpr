import { Badge } from '@/components/ui/badge';
import { Heart, Users, Award, MapPin, GraduationCap, Clock, Building, Zap } from 'lucide-react';
import SectionHeader from '@/components/ui/section-header';
const FounderSection = () => {
  const benefits = [{
    icon: Heart,
    title: "Inclusive & Supportive Studios",
    description: "A welcoming space for every body and fitness level"
  }, {
    icon: Users,
    title: "Beginner-Friendly",
    description: "No experience needed - we'll guide you every step"
  }, {
    icon: Award,
    title: "Structured Programs",
    description: "Progressive classes that help you achieve your goals"
  }];
  const statistics = [{
    icon: Users,
    number: "5000+",
    label: "Students Served"
  }, {
    icon: Clock,
    number: "100,000",
    label: "Classes Taught and Counting"
  }, {
    icon: Building,
    number: "6",
    label: "Studio Locations"
  }, {
    icon: GraduationCap,
    number: "40+",
    label: "Instructors"
  }];
  return <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics Section */}
        

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl cyber-border">
              <img alt="Jasmine Zapka, Founder of The Pole Room" className="w-full h-full object-cover" src="/lovable-uploads/1d83d83b-0057-4bd1-8052-79584b039a97.jpg" />
            </div>
            
            {/* Quote Bubble */}
            <div className="absolute -bottom-6 -right-6 cyber-card p-6 rounded-2xl max-w-sm">
              <p className="text-gray-300 italic text-sm">
                "Every woman deserves to feel strong, graceful, and confident in her own body."
              </p>
              <p className="text-fuchsia-400 font-semibold mt-2">- Jasmine Zapka</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <SectionHeader badgeText="Meet Jasmine, Our Founder & Visionary" title="From 2 Poles In Her Parents Garage To A Movement Empowering Thousands Across Melbourne" className="text-left mb-6" />
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Jasmine created The Pole Room to unlock the untapped potential in every body. 
              What started as a passion project has grown into Melbourne's premier destination 
              for pole and aerial fitness, transforming lives one class at a time.
            </p>

            {/* Benefits Grid */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">Why The Pole Room</h3>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => <div key={index} className="flex items-start space-x-4 p-4 cyber-card rounded-xl">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FounderSection;