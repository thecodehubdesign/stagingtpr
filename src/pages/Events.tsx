
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Calendar, MapPin, Clock, Star, Trophy, Sparkles, Camera, Users, Heart, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Events = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const featuredEvents = [
    {
      id: 1,
      name: "SHINE Competition",
      tagline: "Where Stars Are Born",
      description: "Our premier pole competition celebrating artistry, athleticism, and personal achievement. Compete across multiple categories from beginner to advanced.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      nextDate: "March 15, 2025",
      location: "Melbourne Convention Centre",
      time: "6:00 PM - 10:00 PM",
      price: "Entry: $85 | Spectator: $35",
      status: "Registration Open",
      buttonText: "Enter Competition",
      highlights: ["Cash prizes", "Professional judging", "Live streaming", "Networking opportunities"]
    },
    {
      id: 2,
      name: "Glow Showcase",
      tagline: "Light Up Your Performance",
      description: "A magical evening where students perform under UV lights with glow-in-the-dark costumes. Perfect for first-time performers and seasoned artists alike.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      nextDate: "June 8, 2025",
      location: "The Pole Room Studios",
      time: "7:30 PM - 9:30 PM",
      price: "Performer: $65 | Guest: $25",
      status: "Early Bird",
      buttonText: "Register to Perform",
      highlights: ["UV lighting effects", "Costume provided", "Professional photos", "Supportive atmosphere"]
    },
    {
      id: 3,
      name: "Performance Nights",
      tagline: "Your Stage Awaits",
      description: "Monthly intimate performances in our studios. The perfect stepping stone to build confidence and share your progress with friends and family.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      nextDate: "Every 3rd Friday",
      location: "All Studio Locations",
      time: "7:00 PM - 8:30 PM",
      price: "Performer: $35 | Guest: $15",
      status: "Ongoing",
      buttonText: "Book Your Spot",
      highlights: ["Intimate setting", "Friends & family welcome", "Video recording", "Beginner friendly"]
    }
  ];

  const upcomingEvents = [
    { date: "Feb 14", name: "Valentine's Performance Night", location: "South Yarra", type: "Performance" },
    { date: "Feb 21", name: "Beginner Showcase Workshop", location: "Richmond", type: "Workshop" },
    { date: "Mar 1", name: "SHINE Competition Prep", location: "All Studios", type: "Masterclass" },
    { date: "Mar 15", name: "SHINE Competition", location: "Melbourne Convention Centre", type: "Competition" },
    { date: "Mar 21", name: "Performance Night", location: "Fitzroy", type: "Performance" },
    { date: "Apr 5", name: "Flexibility & Flow Workshop", location: "South Yarra", type: "Workshop" },
    { date: "Apr 18", name: "Performance Night", location: "Richmond", type: "Performance" },
    { date: "May 10", name: "Instructor Masterclass", location: "All Studios", type: "Masterclass" },
    { date: "Jun 8", name: "Glow Showcase", location: "All Studios", type: "Showcase" }
  ];

  const howToGetInvolved = [
    {
      step: 1,
      title: "Start Training",
      description: "Join our classes and build your skills. Most events welcome all levels!",
      icon: Users
    },
    {
      step: 2,
      title: "Choose Your Event",
      description: "Pick the event that matches your goals and comfort level.",
      icon: Star
    },
    {
      step: 3,
      title: "Register Early",
      description: "Secure your spot and get early bird pricing when available.",
      icon: Calendar
    },
    {
      step: 4,
      title: "Prepare & Practice",
      description: "We'll help you prepare with workshops and one-on-one support.",
      icon: Trophy
    }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  const faqs = [
    {
      question: "Do I need to be experienced to participate in events?",
      answer: "Not at all! We have events for every level. Performance Nights welcome complete beginners, while competitions have different categories to ensure fair competition."
    },
    {
      question: "What should I wear to perform?",
      answer: "For most events, you can wear your regular pole attire. For Glow Showcase, we provide special UV-reactive costumes. For competitions, anything goes - let your creativity shine!"
    },
    {
      question: "Can my friends and family watch?",
      answer: "Absolutely! We encourage you to bring your support crew. Spectator tickets are available for all events, and we provide a welcoming atmosphere for everyone."
    },
    {
      question: "How do I prepare for my first performance?",
      answer: "We offer prep workshops before major events, and your instructors are always available for one-on-one guidance. Start with Performance Nights to build confidence!"
    },
    {
      question: "What if I get nervous?",
      answer: "Stage nerves are completely normal! Our community is incredibly supportive, and we create a safe, encouraging environment. Many students say performing was life-changing!"
    },
    {
      question: "Are there prizes for competitions?",
      answer: "Yes! SHINE Competition offers cash prizes, trophies, and scholarships. But remember, the biggest prize is the confidence and achievement you'll feel!"
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(8,8,15,0.7), rgba(20,20,35,0.8)), url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="w-8 h-8 text-fuchsia-400" />
            <span className="text-lg font-semibold uppercase tracking-wider text-cyan-400">
              Events & Performances
            </span>
            <Sparkles className="w-8 h-8 text-fuchsia-400" />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text mb-6">
            Your Stage Awaits
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            From intimate performances to grand competitions, discover events that celebrate your journey, 
            build confidence, and connect you with our incredible community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="neon-button">
              View All Events
            </Button>
            <Button size="lg" variant="outline" className="cyber-border">
              Download Event Calendar
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              Featured Events
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our three signature events that define the heart of The Pole Room community
            </p>
          </div>

          <div className="space-y-20">
            {featuredEvents.map((event, index) => (
              <div key={event.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src={event.image} 
                      alt={event.name}
                      className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-fuchsia-500 text-white">
                        {event.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-2">{event.name}</h3>
                      <p className="text-xl text-fuchsia-400 font-semibold">{event.tagline}</p>
                    </div>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Calendar className="w-5 h-5 text-fuchsia-400" />
                        <span>{event.nextDate}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <MapPin className="w-5 h-5 text-fuchsia-400" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Clock className="w-5 h-5 text-fuchsia-400" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Star className="w-5 h-5 text-fuchsia-400" />
                        <span>{event.price}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {event.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-cyan-400 border-cyan-400">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="neon-button flex-1">
                        {event.buttonText}
                      </Button>
                      <Button size="lg" variant="outline" className="cyber-border">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Calendar */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-400">
              Stay up to date with all our events and workshops
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="cyber-card hover:border-fuchsia-400 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white text-lg">{event.name}</CardTitle>
                      <CardDescription className="text-gray-400">{event.location}</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-fuchsia-400 border-fuchsia-400">
                      {event.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-cyan-400">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{event.date}</span>
                    </div>
                    <Button size="sm" variant="ghost" className="text-fuchsia-400 hover:text-fuchsia-300">
                      Details →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="cyber-border">
              View Full Calendar
            </Button>
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              How to Get Involved
            </h2>
            <p className="text-xl text-gray-400">
              Your journey to the stage starts here
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howToGetInvolved.map((step) => (
              <Card key={step.step} className="cyber-card text-center hover:border-cyan-400 transition-colors">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white">
                    Step {step.step}: {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery/Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Event Highlights
            </h2>
            <p className="text-xl text-gray-400">
              Moments that matter, memories that last
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg group">
                <img 
                  src={image} 
                  alt={`Event highlight ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <Camera className="w-6 h-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="neon-button">
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold gradient-text mb-6 text-center">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-primary/20 rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-fuchsia-900/30 to-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold gradient-text mb-6">
            Ready to Shine?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Your journey to confidence, community, and incredible performances starts with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="neon-button">
              Book Your First Class
            </Button>
            <Button size="lg" variant="outline" className="cyber-border">
              Contact Our Events Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
