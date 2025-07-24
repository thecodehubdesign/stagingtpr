import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, MapPin, Star, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const PurePoleeDance = () => {
  useScrollToTop();

  const classInfo = {
    name: "Pure Pole Dance",
    level: "Advanced",
    duration: "75 min",
    description: "Artistic pole dancing focusing on flow, grace, and technical precision. Combines athletic skill with beautiful choreography and self-expression.",
    category: "Pole Dancing",
    style: "Pole",
    instructors: [
      { name: "Luna Park", image: "/lovable-uploads/1d83d83b-0057-4bd1-8052-79584b039a97.jpg" },
      { name: "Alex Turner", image: "/lovable-uploads/8b589fd4-a71e-43de-823f-c2af97fef88d.jpg" }
    ],
    locations: ["Melbourne", "Mitcham", "Kilsyth"],
    image: "/lovable-uploads/119fcd15-3aac-4f1f-920c-a13497b0b348.png",
    price: "$35",
    whatToExpect: [
      "Advanced pole combinations and choreography",
      "Focus on flow, grace, and artistic expression",
      "Technical skill development",
      "Creative movement exploration",
      "Performance-style dancing"
    ],
    whatToBring: [
      "Comfortable workout clothes (shorts recommended)",
      "Water bottle",
      "Positive attitude and willingness to challenge yourself"
    ],
    prerequisites: [
      "Intermediate pole experience required",
      "Comfortable with basic spins and holds",
      "Good core strength and flexibility"
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
              <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
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

      {/* Instructors Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Meet Your <span className="gradient-text">Instructors</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {classInfo.instructors.map((instructor, index) => (
              <Card key={index} className="cyber-card p-6 text-center">
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-fuchsia-400/30"
                />
                <h3 className="text-xl font-bold text-white mb-2">{instructor.name}</h3>
                <p className="text-gray-300">Advanced Pole Instructor</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* What to Expect */}
            <Card className="cyber-card p-8">
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

            {/* Prerequisites */}
            <Card className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Prerequisites</h3>
              <ul className="space-y-4">
                {classInfo.prerequisites.map((item, index) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience <span className="gradient-text">Pure Pole Dance</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us for this advanced pole class and take your skills to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="neon-button px-8 py-3 text-lg font-semibold">
              Book Your Class Now
            </Button>
            <Button variant="outline" className="cyber-border px-8 py-3 text-lg">
              View All Classes
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PurePoleeDance;