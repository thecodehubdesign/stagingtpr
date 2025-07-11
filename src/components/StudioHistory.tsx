
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Trophy, Star, Building, Sparkles, Users, Crown, Zap } from 'lucide-react';

const StudioHistory = () => {
  const milestones = [
    {
      year: "2018",
      title: "Humble Beginnings",
      description: "Started with just 2 poles in a parent's garage, teaching friends and building a community of passionate pole dancers.",
      icon: MapPin,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30"
    },
    {
      year: "2019",
      title: "First Location Opens",
      description: "Opened our first official studio location, transforming from garage sessions to a professional space for learning and growth.",
      icon: Building,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      year: "2020",
      title: "Pole Princess Acquisition",
      description: "Acquired Pole Princess studio, expanding our reach and bringing more students into The Pole Room family.",
      icon: Crown,
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30"
    },
    {
      year: "2021",
      title: "First Shine Competition",
      description: "Hosted our first Shine Competition, celebrating student achievements and creating a platform for artistic expression.",
      icon: Trophy,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30"
    },
    {
      year: "2022",
      title: "Glow Showcase Launch",
      description: "Inaugurated the Glow Showcase, our signature event showcasing student performances and celebrating their journey.",
      icon: Sparkles,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30"
    },
    {
      year: "2023",
      title: "Franchising Begins",
      description: "Started franchising operations, allowing passionate instructors to bring The Pole Room experience to new communities.",
      icon: Users,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      year: "2024",
      title: "Aerial Fit Acquisition",
      description: "Acquired Aerial Fit, expanding our program offerings to include comprehensive aerial arts training.",
      icon: Star,
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/30"
    },
    {
      year: "2024",
      title: "Eltham Studio Opens",
      description: "Opened our newest location in Eltham, bringing The Pole Room experience to Melbourne's northeast.",
      icon: Zap,
      color: "text-fuchsia-400",
      bgColor: "bg-fuchsia-500/10",
      borderColor: "border-fuchsia-500/30"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings in a garage to becoming Melbourne's premier pole and aerial fitness destination. 
            Here's how we've grown while staying true to our mission of empowerment and transformation.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-fuchsia-500 via-purple-500 to-cyan-500 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Timeline Node */}
                <div className={`absolute left-4 md:left-1/2 w-8 h-8 rounded-full ${milestone.bgColor} ${milestone.borderColor} border-2 flex items-center justify-center transform -translate-x-1/2 z-10`}>
                  <milestone.icon className={`w-4 h-4 ${milestone.color}`} />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="cyber-card p-6 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={`${milestone.bgColor} ${milestone.color} ${milestone.borderColor} font-bold text-lg px-3 py-1`}>
                        {milestone.year}
                      </Badge>
                      <milestone.icon className={`w-6 h-6 ${milestone.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">6+</div>
            <div className="text-gray-300">Years of Growth</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">6</div>
            <div className="text-gray-300">Studio Locations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">2000+</div>
            <div className="text-gray-300">Students Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">50+</div>
            <div className="text-gray-300">Weekly Classes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioHistory;
