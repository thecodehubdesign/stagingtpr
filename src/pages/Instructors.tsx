
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Award, Heart, Zap, Instagram, Facebook } from 'lucide-react';

const Instructors = () => {
  const instructors = [
    {
      name: "Jasmine Zapka",
      role: "Founder & Lead Instructor",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c3ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specialties: ["Pole Dancing", "Aerial Silks", "Flexibility Training"],
      experience: "8+ Years",
      certifications: ["XPERT Pole Instructor", "Aerial Yoga Certified"],
      bio: "Jasmine founded The Pole Room with a vision to create a space where everyone can discover their power. Her teaching style focuses on building confidence alongside technical skills.",
      social: {
        instagram: "@jasmine_poleroom",
        facebook: "jasmine.zapka"
      }
    },
    {
      name: "Sarah Mitchell",
      role: "Senior Pole Instructor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specialties: ["Beginner Pole", "Exotic Dance", "Floorwork"],
      experience: "5+ Years",
      certifications: ["XPERT Pole Instructor", "Contemporary Dance"],
      bio: "Sarah specializes in helping beginners fall in love with pole dancing. Her patient, encouraging approach makes even the most nervous students feel at home.",
      social: {
        instagram: "@sarah_moves",
        facebook: "sarah.mitchell"
      }
    },
    {
      name: "Emma Rodriguez",
      role: "Aerial Arts Specialist",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specialties: ["Aerial Silks", "Lyra Hoop", "Flexibility"],
      experience: "6+ Years",
      certifications: ["Aerial Essentials Certified", "Circus Arts Diploma"],
      bio: "Emma brings a background in circus arts to The Pole Room. She loves teaching students to find grace and strength in aerial movement.",
      social: {
        instagram: "@emma_aerial",
        facebook: "emma.rodriguez"
      }
    },
    {
      name: "Dr. Amanda Chen",
      role: "Flexibility & Conditioning Coach",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specialties: ["Flexibility Training", "Injury Prevention", "Conditioning"],
      experience: "10+ Years",
      certifications: ["Exercise Physiology PhD", "Flexibility Specialist"],
      bio: "Dr. Chen combines scientific knowledge with practical application to help students achieve their flexibility goals safely and effectively.",
      social: {
        instagram: "@dr_chen_flex",
        facebook: "amanda.chen"
      }
    },
    {
      name: "Marcus Thompson",
      role: "Strength & Conditioning Coach",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specialties: ["Pole Conditioning", "Strength Training", "Male Pole Dancing"],
      experience: "7+ Years",
      certifications: ["Personal Training Cert", "Pole Sports Instructor"],
      bio: "Marcus proves that pole dancing is for everyone. His strength-focused classes help students build the power needed for advanced moves.",
      social: {
        instagram: "@marcus_strong",
        facebook: "marcus.thompson"
      }
    },
    {
      name: "Lisa Park",
      role: "Dance & Movement Coach",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specialties: ["Chair Dance", "Floorwork", "Choreography"],
      experience: "4+ Years",
      certifications: ["Jazz Dance Certified", "Commercial Dance"],
      bio: "Lisa brings creativity and fun to every class. Her choreography classes help students develop their own unique style and artistic expression.",
      social: {
        instagram: "@lisa_dances",
        facebook: "lisa.park"
      }
    }
  ];

  const getSpecialtyColor = (specialty: string) => {
    const colors = {
      'Pole Dancing': 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30',
      'Aerial Silks': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      'Flexibility Training': 'bg-green-500/10 text-green-400 border-green-500/30',
      'Exotic Dance': 'bg-pink-500/10 text-pink-400 border-pink-500/30',
      'Floorwork': 'bg-orange-500/10 text-orange-400 border-orange-500/30',
      'Lyra Hoop': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      'Conditioning': 'bg-red-500/10 text-red-400 border-red-500/30',
      'Chair Dance': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
      default: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
    };
    return colors[specialty] || colors.default;
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-6xl font-bold gradient-text neon-glow mb-6">
              Meet Our Instructors
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Our team of expert instructors are passionate about guiding you through 
              your transformation journey with skill, compassion, and unwavering support.
            </p>
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card 
                key={index}
                className="cyber-card overflow-hidden animate-fade-in hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Instructor Photo */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-2 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">{instructor.name}</h3>
                    <p className="text-fuchsia-400 font-medium">{instructor.role}</p>
                  </div>

                  {/* Experience & Certifications */}
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center text-gray-400">
                      <Award className="w-4 h-4 mr-1" />
                      {instructor.experience}
                    </div>
                    <div className="text-gray-400">
                      {instructor.certifications.length} Certifications
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {instructor.specialties.map((specialty, specialtyIndex) => (
                        <Badge 
                          key={specialtyIndex}
                          className={`${getSpecialtyColor(specialty)} border text-xs`}
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {instructor.bio}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-3 items-center">
                    <Button className="flex-1 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700">
                      Book Class
                    </Button>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="text-pink-400 hover:text-pink-300">
                        <Instagram className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                        <Facebook className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Philosophy */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 text-fuchsia-400 mx-auto mb-6 neon-glow" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Our <span className="gradient-text">Teaching Philosophy</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Every instructor at The Pole Room shares our core belief: transformation happens 
            when you feel safe, supported, and celebrated. We're not just teaching moves - 
            we're guiding you to discover your power.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Zap className="w-12 h-12 text-fuchsia-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Empowering</h3>
              <p className="text-gray-400 text-sm">We celebrate every achievement and push you to discover what's possible</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-fuchsia-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Supportive</h3>
              <p className="text-gray-400 text-sm">Our classes are judgment-free zones where everyone belongs</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-fuchsia-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Expert</h3>
              <p className="text-gray-400 text-sm">All our instructors are highly trained and continuously learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-fuchsia-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Meet Your Instructors?
          </h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Book a free trial class and experience our unique teaching approach firsthand. 
            Discover why our students say it's the community that changes everything.
          </p>
          <Button className="neon-button text-black font-bold text-lg px-8 py-3">
            Book Free Trial Class
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Instructors;
