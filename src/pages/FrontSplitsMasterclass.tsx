import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, MapPin, Star, ArrowLeft, CheckCircle, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const FrontSplitsMasterclass = () => {
  useScrollToTop();

  const classInfo = {
    name: "Front Splits Masterclass",
    level: "All Levels",
    duration: "75 min",
    description: "Intensive flexibility training focused on achieving and perfecting your front splits. Includes warm-up routines and progressive stretching techniques.",
    category: "Flexibility & Conditioning",
    style: "Flexibility",
    instructors: [
      { name: "Zara Kim", image: "/lovable-uploads/4d4d16ef-17d9-47e3-a464-cfa3c9b9eef6.jpg" }
    ],
    locations: ["Kilsyth", "Highett"],
    image: "/lovable-uploads/01796eea-20e3-4015-b2a9-7551b68dca94.png",
    price: "$35",
    whatToExpect: [
      "Comprehensive warm-up to prepare muscles",
      "Progressive stretching techniques",
      "Individual guidance and adjustments",
      "Safe methods to increase flexibility",
      "Cool-down and recovery techniques"
    ],
    whatToBring: [
      "Comfortable stretchy clothing",
      "Yoga mat (provided if needed)",
      "Water bottle",
      "Open mind and patience with your progress"
    ],
    benefits: [
      "Improved overall flexibility",
      "Better posture and alignment",
      "Reduced muscle tension",
      "Enhanced athletic performance",
      "Injury prevention"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/classes" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Classes
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Class Info */}
            <div>
              <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">
                {classInfo.category}
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl font-bold gradient-text neon-glow mb-6">
                {classInfo.name}
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {classInfo.description}
              </p>

              {/* Class Details */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 mr-3 text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-400">Duration</p>
                    <p className="font-semibold">{classInfo.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <Star className="w-5 h-5 mr-3 text-fuchsia-400" />
                  <div>
                    <p className="text-sm text-gray-400">Level</p>
                    <p className="font-semibold">{classInfo.level}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-400">Locations</p>
                    <p className="font-semibold">{classInfo.locations.join(", ")}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <Users className="w-5 h-5 mr-3 text-fuchsia-400" />
                  <div>
                    <p className="text-sm text-gray-400">Price</p>
                    <p className="font-semibold">{classInfo.price}</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="neon-button px-8 py-3 text-lg font-semibold">
                  Book This Class
                </Button>
                <Button variant="outline" className="cyber-border px-8 py-3 text-lg">
                  Free Trial
                </Button>
              </div>
            </div>

            {/* Class Image */}
            <div className="relative">
              <img 
                src={classInfo.image} 
                alt={classInfo.name}
                className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Meet Your <span className="gradient-text">Instructor</span>
          </h2>
          
          <div className="max-w-md mx-auto">
            <Card className="cyber-card p-8 text-center">
              <img 
                src={classInfo.instructors[0].image} 
                alt={classInfo.instructors[0].name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-2 border-fuchsia-400/30"
              />
              <h3 className="text-2xl font-bold text-white mb-2">{classInfo.instructors[0].name}</h3>
              <p className="text-gray-300 mb-4">Flexibility & Conditioning Specialist</p>
              <p className="text-gray-400 text-sm">
                Certified yoga instructor and flexibility coach with over 8 years of experience helping students achieve their flexibility goals safely and effectively.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Class Details Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* What to Expect */}
            <Card className="cyber-card p-8">
              <Heart className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-6">What to Expect</h3>
              <ul className="space-y-4">
                {classInfo.whatToExpect.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            {/* What to Bring */}
            <Card className="cyber-card p-8">
              <Users className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-6">What to Bring</h3>
              <ul className="space-y-4">
                {classInfo.whatToBring.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3 text-cyan-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Benefits */}
            <Card className="cyber-card p-8">
              <Star className="w-8 h-8 text-fuchsia-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-6">Benefits</h3>
              <ul className="space-y-4">
                {classInfo.benefits.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3 text-fuchsia-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Progress Timeline */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Your <span className="gradient-text">Progress Journey</span>
          </h2>
          
          <div className="space-y-8">
            {[
              { week: "Week 1-2", goal: "Foundation Building", description: "Focus on basic stretches and proper form" },
              { week: "Week 3-4", goal: "Flexibility Gains", description: "Notice increased range of motion" },
              { week: "Week 5-8", goal: "Front Split Progress", description: "Get closer to full front splits" },
              { week: "Week 8+", goal: "Mastery & Maintenance", description: "Achieve and maintain your splits" }
            ].map((phase, index) => (
              <div key={index} className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-6">
                  {index + 1}
                </div>
                <Card className="cyber-card p-6 flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{phase.goal}</h4>
                      <p className="text-gray-300">{phase.description}</p>
                    </div>
                    <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                      {phase.week}
                    </Badge>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Achieve Your <span className="gradient-text">Front Splits</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our comprehensive masterclass and safely progress towards your flexibility goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="neon-button px-8 py-3 text-lg font-semibold">
              Book Your Masterclass
            </Button>
            <Button variant="outline" className="cyber-border px-8 py-3 text-lg">
              View All Flexibility Classes
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FrontSplitsMasterclass;