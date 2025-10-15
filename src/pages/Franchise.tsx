
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Crown, 
  TrendingUp, 
  Users, 
  Heart, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  Download,
  Check,
  Star,
  DollarSign,
  Target,
  Lightbulb,
  Handshake
} from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Franchise = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    territory: '',
    funding: '',
    vision: '',
    experience: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission and download trigger
    console.log('Form submitted:', formData);
    // Trigger download of franchise package
    alert('Thank you for your interest! Your Franchise Information Package download will begin shortly.');
  };

  const benefits = [
    {
      icon: Crown,
      title: "Proven Business Model",
      description: "Join Australia's most successful pole fitness franchise with a track record of profitable studios."
    },
    {
      icon: TrendingUp,
      title: "Growing Market",
      description: "Tap into the booming fitness industry with a unique, high-demand offering that stands out."
    },
    {
      icon: Users,
      title: "Strong Community",
      description: "Build a loyal customer base with our proven community-building strategies and class formats."
    },
    {
      icon: Heart,
      title: "Life-Changing Impact",
      description: "Create transformational experiences for students while building a profitable business."
    }
  ];

  const included = [
    "Complete studio setup and design guidance",
    "Comprehensive training program for you and your team",
    "Marketing materials and digital assets",
    "Ongoing business coaching and support",
    "Access to our proprietary class curriculum",
    "Territory protection and exclusive rights",
    "Grand opening marketing campaign",
    "Pole Room branding and merchandise"
  ];

  const successStories = [
    {
      name: "Sarah Melbourne",
      location: "Mitcham Studio",
      quote: "Opening my Pole Room franchise was the best decision I ever made. In just 18 months, I've built a thriving community of 200+ students and achieved financial independence.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Emma Johnson",
      location: "CBD Studio",
      quote: "The support from The Pole Room team has been incredible. They helped me navigate every challenge and my studio is now the go-to fitness destination in the area.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const territories = [
    "Brisbane North", "Brisbane South", "Gold Coast", "Sunshine Coast",
    "Sydney Eastern Suburbs", "Sydney Northern Beaches", "Newcastle",
    "Adelaide Hills", "Perth Northern Suburbs", "Darwin"
  ];

  const faqs = [
    {
      question: "What's the initial investment required?",
      answer: "The total investment ranges from $120,000 to $180,000, including the franchise fee, equipment, fit-out, and working capital. We can connect you with financing partners to help make your dream a reality."
    },
    {
      question: "Do I need previous fitness industry experience?",
      answer: "While fitness experience is helpful, it's not essential. We're looking for passionate, business-minded individuals who believe in our mission. We provide comprehensive training to get you started."
    },
    {
      question: "How long does it take to open a studio?",
      answer: "From signing your franchise agreement to opening day, the process typically takes 3-6 months. This includes site selection, fit-out, training, and marketing launch."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "We provide ongoing business coaching, marketing support, new class curriculum updates, annual conferences, and access to our franchisee community network."
    },
    {
      question: "What kind of returns can I expect?",
      answer: "While results vary, our successful franchisees typically see positive cash flow within 6-12 months and achieve their investment return within 2-3 years. We'll share detailed financial projections during our discovery process."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30 hover:bg-fuchsia-500/30 mb-6">
              Franchise Opportunity
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold gradient-text mb-6">
              Own Your Own Pole Room Studio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Join Australia's most empowering fitness franchise. Transform lives, build community, 
              and create a profitable business doing what you love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white font-semibold px-8 py-3"
                onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Download className="w-5 h-5 mr-2" />
                Get Franchise Package
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20"
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Download Guide Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-lime-400 via-lime-300 to-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-black/10 text-black border-black/20 mb-6 uppercase tracking-wider text-xs font-bold">
                Franchise Guide
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                READY TO BUILD YOUR POLE EMPIRE?
              </h2>
              <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                Download our comprehensive franchise guide and discover everything you need to know about joining The Pole Room family.
              </p>
              <Button 
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Yes! Send Me The Guide
                <Download className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative hidden lg:block"
            >
              <div className="relative grid grid-cols-2 gap-4 transform rotate-6">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-lg shadow-2xl p-8 aspect-[3/4] flex items-center justify-center"
                  >
                    <div className="text-center">
                      <Award className="w-16 h-16 text-white/80 mx-auto mb-4" />
                      <div className="text-white font-bold text-xl mb-2">THE POLE ROOM</div>
                      <div className="text-white/90 text-sm uppercase tracking-wider">Franchise Guide</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Decorative dollar signs */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 text-6xl"
              >
                💰
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute bottom-8 -left-4 text-5xl"
              >
                💎
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Why Choose <span className="gradient-text">The Pole Room Franchise</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Join a proven system that's transforming lives and building successful businesses across Australia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="cyber-card p-6 text-center h-full">
                  <benefit.icon className="w-12 h-12 text-fuchsia-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              <span className="gradient-text">Franchisee Success</span> Stories
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Hear from our successful franchise owners who are changing lives and building profitable businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="cyber-card p-8">
                  <div className="flex items-center mb-6">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-white">{story.name}</h3>
                      <p className="text-fuchsia-400">{story.location}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-300 italic leading-relaxed">
                    "{story.quote}"
                  </blockquote>
                  <div className="flex text-yellow-400 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                What We Look for in a <span className="gradient-text">Franchisee</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Passion for fitness and empowering others</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Strong business acumen and leadership skills</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Commitment to building community connections</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Access to required investment capital</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Dedication to our brand values and standards</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Studio owner with students"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              What's <span className="gradient-text">Included</span> in Your Franchise
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Everything you need to launch and run a successful Pole Room studio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {included.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <Check className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
                <p className="text-gray-300">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Territories */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Available <span className="gradient-text">Territories</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Prime locations across Australia are waiting for the right franchisee.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {territories.map((territory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="cyber-card p-4 text-center">
                  <MapPin className="w-6 h-6 text-fuchsia-400 mx-auto mb-2" />
                  <p className="text-white font-medium">{territory}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Apply for Your <span className="gradient-text">Franchise</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to start your journey? Fill out the form below and download our comprehensive Franchise Information Package.
            </p>
          </div>

          <Card className="cyber-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">First Name *</label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Last Name *</label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Phone *</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Territory of Interest *</label>
                <Input
                  name="territory"
                  value={formData.territory}
                  onChange={handleInputChange}
                  required
                  placeholder="Which location interests you most?"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Access to Funding *</label>
                <Input
                  name="funding"
                  value={formData.funding}
                  onChange={handleInputChange}
                  required
                  placeholder="Do you have access to the required investment capital?"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Your Vision *</label>
                <Textarea
                  name="vision"
                  value={formData.vision}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us about your vision for changing the game in your community..."
                  className="bg-gray-700 border-gray-600 text-white h-24"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Relevant Experience</label>
                <Textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Share any relevant business, fitness, or community-building experience..."
                  className="bg-gray-700 border-gray-600 text-white h-24"
                />
              </div>

              <Button 
                type="submit"
                size="lg" 
                className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white font-semibold py-4"
              >
                <Download className="w-5 h-5 mr-2" />
                Submit Application & Download Franchise Package
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Compact Download Reminder */}
      <section className="py-12 bg-gradient-to-r from-lime-400 via-lime-300 to-yellow-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
                Don't Miss Out on Your Franchise Guide
              </h3>
              <p className="text-gray-800 text-lg">
                Get all the details about opening your own Pole Room studio
              </p>
            </div>
            <Button 
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex-shrink-0"
              onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Download Guide
              <Download className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Franchise;
