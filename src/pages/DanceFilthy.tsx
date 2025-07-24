import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, MapPin, Star, ArrowLeft, CheckCircle, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const DanceFilthy = () => {
  useScrollToTop();

  const classInfo = {
    name: "Dance Filthy",
    level: "Intermediate",
    duration: "75 min",
    description: "Embrace your inner confidence with sultry choreography and expressive movement. Perfect for building self-esteem and body positivity.",
    category: "Dance & Movement",
    style: "Dance",
    instructors: [
      { name: "Maya Rodriguez", image: "/lovable-uploads/3cc0b943-7d1c-4140-a59c-a60390d03154.jpg" },
      { name: "Ava Johnson", image: "/lovable-uploads/c7f8bec0-23c5-44db-871b-dccfbacb26a5.jpg" },
      { name: "Luna Park", image: "/lovable-uploads/1d83d83b-0057-4bd1-8052-79584b039a97.jpg" }
    ],
    locations: ["Narre Warren", "Mitcham", "Kilsyth", "Melbourne", "Highett"],
    image: "/lovable-uploads/a3f3abdb-e872-4fb0-a921-052f1d92afec.png",
    price: "$35",
    whatToExpect: [
      "Sultry choreography and movement combinations",
      "Confidence-building exercises",
      "Body positivity and self-expression focus",
      "High-energy music and atmosphere",
      "Supportive, judgment-free environment"
    ],
    whatToBring: [
      "Comfortable dance attire",
      "Knee pads (optional but recommended)",
      "Water bottle",
      "Confidence and attitude!"
    ],
    benefits: [
      "Increased self-confidence",
      "Improved body awareness",
      "Enhanced creativity and expression",
      "Stress relief and fun",
      "Strong sense of community"
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
              <Badge className="mb-4 bg-pink-500/20 text-pink-300 border-pink-500/30">
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
                    <p className="font-semibold">All 5 Studios</p>
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
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {classInfo.instructors.map((instructor, index) => (
              <Card key={index} className="cyber-card p-6 text-center">
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-fuchsia-400/30"
                />
                <h3 className="text-xl font-bold text-white mb-2">{instructor.name}</h3>
                <p className="text-gray-300">Dance Movement Specialist</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Class Philosophy */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Our <span className="gradient-text">Philosophy</span>
          </h2>
          <Card className="cyber-card p-8">
            <Sparkles className="w-12 h-12 text-fuchsia-400 mx-auto mb-6" />
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              "Dance Filthy is about embracing your authentic self and expressing your inner power through movement. 
              This class creates a safe space where vulnerability becomes strength, and confidence is cultivated through creative expression."
            </p>
            <p className="text-lg text-gray-400">
              We believe every body is beautiful and every person deserves to feel empowered in their own skin.
            </p>
          </Card>
        </div>
      </section>

      {/* Class Details Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* What to Expect */}
            <Card className="cyber-card p-8">
              <Sparkles className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-6">What to Expect</h3>
              <ul className="space-y-4">
                {classInfo.whatToExpect.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3 text-pink-400 mt-0.5 flex-shrink-0" />
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
              <Heart className="w-8 h-8 text-fuchsia-400 mb-4" />
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

      {/* Class Structure */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Class <span className="gradient-text">Structure</span>
          </h2>
          
          <div className="space-y-6">
            {[
              { time: "0-10 min", activity: "Warm-up & Mindset", description: "Body preparation and confidence building exercises" },
              { time: "10-25 min", activity: "Technique Training", description: "Learn fundamental movements and transitions" },
              { time: "25-50 min", activity: "Choreography", description: "Put it all together with sultry dance combinations" },
              { time: "50-65 min", activity: "Free Dance", description: "Express yourself with personal style and flair" },
              { time: "65-75 min", activity: "Cool Down", description: "Relaxation and celebration of your progress" }
            ].map((segment, index) => (
              <Card key={index} className="cyber-card p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full mr-4"></div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{segment.activity}</h4>
                      <p className="text-gray-300">{segment.description}</p>
                    </div>
                  </div>
                  <Badge className="bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30">
                    {segment.time}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to <span className="gradient-text">Dance Filthy</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our empowering dance class and discover your inner confidence through movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="neon-button px-8 py-3 text-lg font-semibold">
              Book Your Class Now
            </Button>
            <Button variant="outline" className="cyber-border px-8 py-3 text-lg">
              View All Dance Classes
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DanceFilthy;