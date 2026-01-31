import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, MapPin, Clock, Users, Heart, Star, Camera, Music, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PerformanceNightsPage = () => {
  const courseStructure = [
    {
      week: 1,
      title: 'Learn the Choreography',
      description: 'Get introduced to your routine and start learning the basics with your crew.',
    },
    {
      week: 2,
      title: 'Refine & Practice',
      description: 'Polish your moves and work on synchronization with your team.',
    },
    {
      week: 3,
      title: 'Full Run-Throughs',
      description: 'Practice the complete routine, add your personal flair and build confidence.',
    },
    {
      week: 4,
      title: 'Performance Night!',
      description: 'Take the stage and celebrate your achievement with friends and family.',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Safe & Supportive Environment',
      description: 'A judgment-free space where every performance is celebrated.',
    },
    {
      icon: Users,
      title: 'Bond with Your Studio Crew',
      description: 'Create lasting friendships as you train and perform together.',
    },
    {
      icon: Star,
      title: 'Build Performance Confidence',
      description: 'Gradually develop stage presence in an intimate setting.',
    },
    {
      icon: Sparkles,
      title: 'Stepping Stone to Showcases',
      description: 'Perfect preparation for larger events like GLOW and SHINE.',
    },
    {
      icon: Camera,
      title: 'Professional Photos & Videos',
      description: 'Capture your moment to share and cherish forever.',
    },
    {
      icon: Heart,
      title: 'Celebrate Every Achievement',
      description: 'Whether it\'s your first spin or a complex combo, we celebrate you.',
    },
  ];

  const upcomingNights = [
    { date: 'Feb 28, 2025', studio: 'Eltham', spots: 8 },
    { date: 'Feb 28, 2025', studio: 'Kilsyth', spots: 6 },
    { date: 'Mar 7, 2025', studio: 'Mitcham', spots: 10 },
    { date: 'Mar 7, 2025', studio: 'Highett', spots: 5 },
    { date: 'Mar 14, 2025', studio: 'Melbourne CBD', spots: 12 },
    { date: 'Mar 14, 2025', studio: 'Narre Warren', spots: 9 },
  ];

  const faqs = [
    {
      question: 'Do I need experience to participate?',
      answer: 'Not at all! Performance Nights welcome students of all levels, from complete beginners to advanced. The 4-week course is designed to prepare you at whatever stage you\'re at.',
    },
    {
      question: 'What should I wear?',
      answer: 'You can wear your regular pole/aerial attire, or dress up in something that makes you feel confident! Many students choose themed outfits that match their routine\'s music.',
    },
    {
      question: 'Can I bring friends and family?',
      answer: 'Absolutely! We encourage you to invite your support crew. Spectator tickets are available for purchase, and we create a welcoming atmosphere for everyone.',
    },
    {
      question: 'What if I get nervous?',
      answer: 'Stage nerves are completely normal and expected! Our intimate studio setting and supportive community help ease anxiety. Your crew will be right there with you, and our instructors provide techniques to manage nerves.',
    },
    {
      question: 'How long is the performance?',
      answer: 'Group performances typically run 2-4 minutes. The entire evening lasts about 1.5-2 hours including all performances, and there\'s time for photos and celebration afterward.',
    },
    {
      question: 'Is this a stepping stone to GLOW or SHINE?',
      answer: 'Yes! Performance Nights are the perfect way to build confidence before larger showcases. Many of our GLOW and SHINE performers started with Performance Nights.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(8,8,15,0.7), rgba(20,20,35,0.9)), url('https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
            <Music className="w-4 h-4 mr-2" />
            End of Term Showcases
          </Badge>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text mb-6">
            Performance Nights
          </h1>
          
          <p className="text-2xl sm:text-3xl text-fuchsia-400 font-semibold mb-6">
            Your Stage, Your Crew, Your Moment
          </p>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Perform with your studio crew in a safe and supportive environment at the end of each term 
            as part of our 4-week End of Term Performance Courses.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="text-white border-white/30 px-4 py-2">
              <Calendar className="w-4 h-4 mr-2" />
              Every End of Term
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 px-4 py-2">
              <MapPin className="w-4 h-4 mr-2" />
              All 6 Studio Locations
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              All Levels Welcome
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="neon-button" asChild>
              <Link to="/get-started">Join Performance Course</Link>
            </Button>
            <Button size="lg" variant="outline" className="cyber-border">
              View Upcoming Nights
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold gradient-text mb-6">
                What Are Performance Nights?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Performance Nights are intimate end-of-term showcases where students perform routines 
                they've learned during our 4-week Performance Courses. It's the perfect opportunity to 
                celebrate your progress and share your achievements with friends and family.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Unlike larger showcases, Performance Nights are held in our studio spaces, creating 
                a warm, supportive atmosphere where every performer feels like a star. Whether it's 
                your first time on stage or you're building toward GLOW, this is your moment.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/50">
                  4-Week Course
                </Badge>
                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
                  Beginner Friendly
                </Badge>
                <Badge className="bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/50">
                  Friends & Family Welcome
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Performance Night atmosphere"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 cyber-card p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">100% Supportive</p>
                    <p className="text-sm text-gray-400">Every performance celebrated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              4-Week Performance Course
            </h2>
            <p className="text-xl text-gray-400">
              From first steps to final bow — your journey to the stage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseStructure.map((week, index) => (
              <Card key={index} className="cyber-card hover:border-fuchsia-400 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                    {week.week}
                  </div>
                  <CardTitle className="text-white text-lg">{week.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">{week.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Why Performance Nights?
            </h2>
            <p className="text-xl text-gray-400">
              More than a performance — it's a transformative experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="cyber-card hover:border-cyan-400 transition-all duration-300">
                <CardContent className="p-6">
                  <benefit.icon className="w-10 h-10 text-fuchsia-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Performance Nights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Upcoming Performance Nights
            </h2>
            <p className="text-xl text-gray-400">
              Find a performance night at your studio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingNights.map((night, index) => (
              <Card key={index} className="cyber-card hover:border-fuchsia-400 transition-colors">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-bold text-white">{night.studio}</p>
                      <p className="text-sm text-gray-400">{night.date}</p>
                    </div>
                    <Badge variant="outline" className="text-cyan-400 border-cyan-400">
                      {night.spots} spots
                    </Badge>
                  </div>
                  <Button size="sm" className="w-full neon-button" asChild>
                    <Link to="/get-started">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="cyber-card p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="cyber-faq-item">
                  <AccordionTrigger className="py-5 text-left font-medium text-white hover:text-fuchsia-400 hover:no-underline transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold gradient-text mb-6">
            Ready to Take the Stage?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join a 4-week Performance Course and share your talent with the world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="neon-button" asChild>
              <Link to="/get-started">Join Performance Course</Link>
            </Button>
            <Button size="lg" variant="outline" className="cyber-border" asChild>
              <Link to="/events">Back to All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PerformanceNightsPage;