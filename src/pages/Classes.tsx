import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionNavigation from '@/components/SectionNavigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Flame, Star, Zap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Classes = () => {
  const sections = [
    { id: 'hero', label: 'Classes' },
    { id: 'pole-dancing', label: 'Pole Dancing' },
    { id: 'aerial-arts', label: 'Aerial Arts' },
    { id: 'dance-movement', label: 'Dance & Movement' },
    { id: 'flexibility', label: 'Flexibility' },
    { id: 'special', label: 'New Student Special' },
    { id: 'faq', label: 'FAQs' }
  ];

  const classCategories = [
    {
      title: "Pole Dancing",
      icon: Zap,
      description: "From beginner spins to advanced tricks, discover the art of pole dancing in a supportive environment.",
      classes: [
        {
          name: "Pole Foundations",
          level: "Beginner",
          duration: "60 min",
          description: "Perfect first class - learn basic spins, poses and floorwork",
          slug: "beginner-pole-foundations"
        },
        {
          name: "Pole Progression",
          level: "Intermediate", 
          duration: "60 min",
          description: "Build on basics with inversions and intermediate combinations",
          slug: "pole-progression"
        },
        {
          name: "Advanced Pole Flow",
          level: "Advanced",
          duration: "75 min", 
          description: "Complex tricks, transitions and choreographed sequences",
          slug: "advanced-pole-flow"
        }
      ]
    },
    {
      title: "Aerial Arts",
      icon: Heart,
      description: "Discover the grace and strength of aerial silks and lyra hoop training.",
      classes: [
        {
          name: "Aerial Silks Intro",
          level: "Beginner",
          duration: "60 min",
          description: "Learn basic climbs, poses and sequences on aerial silks",
          slug: "aerial-silks-intro"
        },
        {
          name: "Lyra Foundations", 
          level: "Beginner",
          duration: "60 min",
          description: "Explore the aerial hoop with fundamental poses and spins",
          slug: "lyra-foundations"
        },
        {
          name: "Aerial Flow",
          level: "Intermediate",
          duration: "75 min",
          description: "Combine silks and lyra skills into flowing sequences",
          slug: "aerial-flow"
        }
      ]
    },
    {
      title: "Dance & Movement",
      icon: Flame,
      description: "Express yourself through sensual movement and dance-based classes.",
      classes: [
        {
          name: "Floorwork Foundations",
          level: "All Levels",
          duration: "45 min", 
          description: "Ground-based movement focusing on fluidity and expression",
          slug: "floorwork-foundations"
        },
        {
          name: "Exotic Dance",
          level: "All Levels",
          duration: "60 min",
          description: "Confidence-building dance class focusing on sensual movement",
          slug: "exotic-dance"
        },
        {
          name: "Chair Dance",
          level: "All Levels", 
          duration: "45 min",
          description: "Playful and empowering choreography using a chair as a prop",
          slug: "chair-dance"
        }
      ]
    },
    {
      title: "Flexibility & Conditioning",
      icon: Star,
      description: "Build the strength and flexibility needed for aerial arts and beyond.",
      classes: [
        {
          name: "Flexibility Flow",
          level: "All Levels",
          duration: "60 min",
          description: "Active and passive stretching to improve overall flexibility",
          slug: "flexibility-flow"
        },
        {
          name: "Pole Conditioning",
          level: "All Levels", 
          duration: "45 min",
          description: "Strength training specifically designed for pole and aerial arts",
          slug: "pole-conditioning"
        },
        {
          name: "Splits & Backbends",
          level: "Intermediate",
          duration: "60 min",
          description: "Targeted training for advanced flexibility goals",
          slug: "splits-backbends"
        }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/10 text-green-400 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
      case 'Advanced': return 'bg-red-500/10 text-red-400 border-red-500/30';
      default: return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <SectionNavigation sections={sections} />
      
      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-6xl font-bold gradient-text neon-glow mb-6">
              Our Classes
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              From pole dancing to aerial arts, discover classes designed to unlock your potential 
              and transform how you move through the world.
            </p>
            <Button className="neon-button text-black font-bold text-lg px-8 py-3">
              Book Your First Class Free
            </Button>
          </div>
        </div>
      </section>

      {/* Class Categories */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {classCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20 last:mb-0" id={category.title.toLowerCase().replace(/\s+/g, '-').replace('&', '')}>
              {/* Category Header */}
              <div className="text-center mb-12">
                <category.icon className="w-16 h-16 text-fuchsia-400 mx-auto mb-4 neon-glow" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {category.title}
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Classes Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.classes.map((classItem, classIndex) => (
                  <Card 
                    key={classIndex}
                    className="cyber-card p-6 animate-fade-in hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${classIndex * 0.15}s` }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">{classItem.name}</h3>
                      <Badge className={`${getLevelColor(classItem.level)} border`}>
                        {classItem.level}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-4 text-gray-400 text-sm">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {classItem.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        Small Group
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {classItem.description}
                    </p>

                    <div className="flex gap-3">
                      <Button className="flex-1 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700">
                        Book Class
                      </Button>
                      <Button variant="outline" className="cyber-border text-cyan-400 hover:bg-cyan-400/10" asChild>
                        <Link to={`/classes/${classItem.slug}`}>
                          Learn More
                        </Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Student Special */}
      <section id="special" className="py-20 bg-gradient-to-r from-fuchsia-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            New Student Special
          </h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Try any class for FREE! Experience our method, meet our community, 
            and discover what's possible when you step into your power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="neon-button text-black font-bold text-lg px-8 py-3">
              Claim Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
              View Schedule
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Class <span className="gradient-text">FAQs</span>
          </h2>
          
          <div className="space-y-6">
            <Card className="cyber-card p-6">
              <h3 className="text-lg font-bold text-white mb-2">What should I wear to class?</h3>
              <p className="text-gray-300">
                Wear shorts and a tank top or sports bra for pole classes (skin grip is essential). 
                For other classes, comfortable athletic wear works perfectly.
              </p>
            </Card>
            
            <Card className="cyber-card p-6">
              <h3 className="text-lg font-bold text-white mb-2">Do I need to be strong or flexible to start?</h3>
              <p className="text-gray-300">
                Not at all! Our classes are designed to meet you where you are. 
                Strength and flexibility develop naturally as you progress.
              </p>
            </Card>
            
            <Card className="cyber-card p-6">
              <h3 className="text-lg font-bold text-white mb-2">How often should I attend classes?</h3>
              <p className="text-gray-300">
                For best results, we recommend 2-3 classes per week. 
                This allows for skill development while giving your body time to recover.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Classes;
