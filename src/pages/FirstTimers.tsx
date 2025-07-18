import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionNavigation from '@/components/SectionNavigation';
import TermCountdown from '@/components/TermCountdown';
import StartAnytime from '@/components/StartAnytime';
import FastTrackProgram from '@/components/FastTrackProgram';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Heart, Users, Clock, Shield, Star, HelpCircle, Zap, ArrowRight } from 'lucide-react';

const FirstTimers = () => {
  const whatToExpect = [
    {
      step: "1",
      title: "Warm Welcome",
      description: "You'll be greeted by our friendly front desk team and given a tour of the studio"
    },
    {
      step: "2", 
      title: "Safety Brief",
      description: "Your instructor will explain basic safety and show you how to use the equipment"
    },
    {
      step: "3",
      title: "Gentle Warm-Up",
      description: "We'll start with gentle movements to prepare your body for the class"
    },
    {
      step: "4",
      title: "Learn & Practice",
      description: "Step-by-step instruction with lots of encouragement and modifications"
    },
    {
      step: "5",
      title: "Cool Down & Chat",
      description: "Stretching, relaxation, and time to ask questions or book your next class"
    }
  ];

  const progressionSteps = [
    {
      phase: "Week 1-2",
      title: "Foundation & Safety",
      description: "Learn basic safety, warm-up routines, and fundamental movements",
      achievements: ["Basic pole holds", "Simple spins", "Floor work basics", "Studio etiquette"],
      color: "from-green-500 to-emerald-500"
    },
    {
      phase: "Week 3-6",
      title: "Building Strength",
      description: "Develop core strength and learn your first pole moves",
      achievements: ["Fireman spin", "Basic climbs", "Static holds", "Flexibility gains"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      phase: "Week 7-12",
      title: "First Combinations",
      description: "Start linking moves together and building confidence",
      achievements: ["Spin combinations", "Simple routines", "Increased stamina", "New friendships"],
      color: "from-purple-500 to-pink-500"
    },
    {
      phase: "Month 4+",
      title: "Advanced Journey",
      description: "Explore specialized moves and develop your unique style",
      achievements: ["Advanced spins", "Aerial work", "Performance skills", "Teaching others"],
      color: "from-rose-500 to-orange-500"
    }
  ];

  const faqs = [
    {
      question: "Do I need to be strong or flexible to start?",
      answer: "Not at all! Pole dancing and aerial arts are for every body type and fitness level. You'll build strength and flexibility naturally as you progress. Our beginner classes are designed to meet you exactly where you are."
    },
    {
      question: "What should I wear to my first class?",
      answer: "For pole classes, wear shorts and a tank top or sports bra (skin contact helps with grip). For other classes, comfortable athletic wear is perfect. We have grip aids available if you need them."
    },
    {
      question: "Will I be able to do the moves in my first class?",
      answer: "Yes! Our beginner classes focus on basic moves that everyone can learn. Your instructor will provide modifications and progressions so you can participate fully, regardless of your starting level."
    },
    {
      question: "What if I feel self-conscious or nervous?",
      answer: "Feeling nervous is completely normal! Our instructors and community are incredibly supportive. You'll find that everyone is focused on their own journey, and we celebrate every achievement, no matter how small."
    },
    {
      question: "How often should I come to see progress?",
      answer: "Most students see great progress with 2-3 classes per week. However, even once a week will help you build skills and confidence. The most important thing is consistency and enjoying the journey!"
    },
    {
      question: "Are there any age restrictions?",
      answer: "Our classes are designed for adults 18+. We focus on creating a mature, supportive environment where everyone can explore movement and build confidence."
    }
  ];

  const whatToBring = [
    { item: "Water bottle", icon: "💧", required: true },
    { item: "Towel", icon: "🏃‍♀️", required: true },
    { item: "Positive attitude", icon: "😊", required: true },
    { item: "Hair tie (if needed)", icon: "💁‍♀️", required: false },
    { item: "Grip aid (we provide)", icon: "🤲", required: false },
    { item: "Change of clothes", icon: "👕", required: false }
  ];

  const perfectFirstClasses = [
    {
      name: "Pole Foundations",
      description: "Perfect introduction to pole dancing with basic spins and poses",
      duration: "60 min",
      difficulty: "Beginner Friendly"
    },
    {
      name: "Aerial Silks Intro",
      description: "Learn to climb and create beautiful shapes in the air",
      duration: "60 min",
      difficulty: "No Experience Needed"
    },
    {
      name: "Floorwork Foundations",
      description: "Ground-based movement focusing on fluidity and confidence",
      duration: "45 min",
      difficulty: "All Levels Welcome"
    }
  ];

  const sections = [
    { id: 'countdown', label: 'Next Term' },
    { id: 'start-anytime', label: 'Start Now' },
    { id: 'fast-track', label: 'Fast Track' },
    { id: 'what-to-expect', label: 'What to Expect' },
    { id: 'journey', label: 'Your Journey' },
    { id: 'first-classes', label: 'First Classes' },
    { id: 'what-to-bring', label: 'What to Bring' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'safety', label: 'Safety' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <SectionNavigation sections={sections} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-6xl font-bold gradient-text mb-6">
              Your First Class
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Nervous? Excited? Both? That's perfectly normal! Here's everything you need to know 
              to feel confident and prepared for your first visit to The Pole Room.
            </p>
            <Button className="neon-button text-black font-bold text-lg px-8 py-3">
              Book Your Free Trial Now
            </Button>
          </div>
        </div>
      </section>

      {/* Term Countdown Banner */}
      <div id="countdown">
        <TermCountdown />
      </div>

      {/* Start Anytime Section */}
      <div id="start-anytime">
        <StartAnytime />
      </div>

      {/* Fast Track Program */}
      <div id="fast-track">
        <FastTrackProgram />
      </div>

      {/* Your Journey Progression */}
      <section id="journey" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Your <span className="gradient-text">Journey</span> at The Pole Room
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              See how you'll progress from your very first class to becoming a confident pole dancer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {progressionSteps.map((step, index) => (
              <Card 
                key={index}
                className="cyber-card p-6 animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.color}`}></div>
                
                <div className="mb-4">
                  <Badge className={`bg-gradient-to-r ${step.color} text-white border-0 mb-2`}>
                    {step.phase}
                  </Badge>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {step.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">You'll achieve:</h4>
                  {step.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-center space-x-2">
                      <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span className="text-xs text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>

                {index < progressionSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 text-gray-600" />
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section id="what-to-expect" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              What to <span className="gradient-text">Expect</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Your first class experience, step by step
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {whatToExpect.map((item, index) => (
              <Card 
                key={index}
                className="cyber-card p-6 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect First Classes */}
      <section id="first-classes" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Perfect <span className="gradient-text">First Classes</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              These classes are specifically designed for absolute beginners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {perfectFirstClasses.map((classItem, index) => (
              <Card 
                key={index}
                className="cyber-card p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{classItem.name}</h3>
                  <Badge className="bg-green-500/10 text-green-400 border-green-500/30 border">
                    {classItem.difficulty}
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

                <Button className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700">
                  Book This Class Free
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section id="what-to-bring" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              What to <span className="gradient-text">Bring</span>
            </h2>
            <p className="text-lg text-gray-300">
              A simple checklist for your first visit
            </p>
          </div>

          <Card className="cyber-card p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {whatToBring.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-white font-medium">{item.item}</span>
                  {item.required ? (
                    <Badge className="bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30 border text-xs">
                      Required
                    </Badge>
                  ) : (
                    <Badge className="bg-gray-500/10 text-gray-400 border-gray-500/30 border text-xs">
                      Optional
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="faqs" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="w-16 h-16 text-fuchsia-400 mx-auto mb-6 neon-glow" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              First Timer <span className="gradient-text">FAQs</span>
            </h2>
            <p className="text-lg text-gray-300">
              The questions we hear most from new students
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className="cyber-card p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Comfort */}
      <section id="safety" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Shield className="w-16 h-16 text-fuchsia-400 mx-auto mb-6 neon-glow" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Your Safety & <span className="gradient-text">Comfort</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We prioritize creating a safe, welcoming environment for everyone
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="cyber-card p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Safety First</h3>
              <p className="text-gray-300 text-sm">Professional equipment, proper technique instruction, and safety protocols in every class</p>
            </Card>
            
            <Card className="cyber-card p-6 text-center">
              <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Judgment-Free Zone</h3>
              <p className="text-gray-300 text-sm">Our community celebrates every achievement. You'll never feel judged or out of place</p>
            </Card>
            
            <Card className="cyber-card p-6 text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Small Classes</h3>
              <p className="text-gray-300 text-sm">Maximum 8 students per class ensures personalized attention and support</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-fuchsia-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Zap className="w-16 h-16 text-white mx-auto mb-6 pulse-neon" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            The hardest part is walking through the door. Once you're here, our community 
            will support you every step of the way. Your transformation starts now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="neon-button text-black font-bold text-lg px-8 py-3">
              Book Free Trial Class
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FirstTimers;
