import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionNavigation from '@/components/SectionNavigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, Star, Zap, Heart, Crown, Gift, FileText, Monitor, ChevronRight, BookOpen, TrendingUp, Sparkles, Calendar, RefreshCw, Target, MapPin } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';
import { motion } from 'framer-motion';
import appMockup from '@/assets/app-mockup.png';
import coursesAsset from '@/assets/courses-asset.png';
import flexiPassAsset from '@/assets/flexi-pass-asset.png';
import practiceAsset from '@/assets/practice-asset.png';

const pricingSections = [
  { id: 'membership', label: 'Membership' },
  { id: 'whats-included', label: "What's Included" },
  { id: 'virtual-studio', label: 'Virtual Studio' },
  { id: 'performances', label: 'Performances' },
  { id: 'sister-studios', label: 'Sister Studios' },
  { id: 'faq', label: 'FAQ' },
];

const studioComparison = [
  { feature: "Coaching feedback", inStudio: "Live, personalised", virtual: "Video-based support" },
  { feature: "Skill learning", inStudio: "Hands-on guidance", virtual: "Tutorials & drills" },
  { feature: "Strength & Flexibility", inStudio: "Class-based", virtual: "On-demand programs" },
  { feature: "Consistency between classes", inStudio: "Weekly schedule", virtual: "Train anytime" },
];

const membershipFAQ = [
  {
    question: "What's the difference between Casual Flyer and High Flyer?",
    answer: "Casual Flyer gives you 8 classes per month - perfect if you train 2x per week. High Flyer is unlimited, so you can attend as many classes as you like across all our studios."
  },
  {
    question: "Can I switch between membership types?",
    answer: "Absolutely! You can upgrade or downgrade your membership at any time. Changes take effect from your next billing cycle."
  },
  {
    question: "Can I use my membership at any studio?",
    answer: "Yes! Both Casual Flyer and High Flyer memberships give you access to all 6 of our studio locations. Train wherever is convenient for you."
  },
  {
    question: "What happens if I miss a class?",
    answer: "Life happens! Casual Flyer sessions roll over for up to 6 weeks. High Flyer members have unlimited access so there's nothing to track."
  },
  {
    question: "Can I freeze my membership?",
    answer: "Yes, you can freeze your membership for up to 3 months per year for medical reasons, travel, or other circumstances. Just give us 7 days notice."
  },
  {
    question: "Do you offer a trial before I commit?",
    answer: "We offer a free first class so you can experience our studio, instructors, and community before making any commitment."
  },
  {
    question: "What's included in my membership?",
    answer: "Every membership includes access to our structured courses, weekly classes, unlimited practice sessions, Virtual Studio content, and performance opportunities."
  },
  {
    question: "Is there a joining fee?",
    answer: "No joining fee! The price you see is the price you pay. We also offer a 100% satisfaction guarantee on your first month."
  }
];

const Pricing = () => {
  const [isCommitted, setIsCommitted] = useState(false);

  const membershipPlans = [{
    name: "Casual Flyer",
    flexiPrice: "$59",
    committedPrice: "$53.10",
    period: "per month",
    description: "Great for regular students who want flexibility",
    features: ["8 classes per month", "Valid for 6 weeks", "Mix and match any classes", "All studio locations", "Free grip aids included"],
    popular: true,
    icon: Heart,
    color: "from-fuchsia-500 to-purple-600"
  }, {
    name: "High Flyer",
    flexiPrice: "$99",
    committedPrice: "$89.10",
    period: "per month",
    description: "Best value for committed students",
    features: ["Unlimited classes", "All class types included", "All studio locations", "Priority booking", "10% off workshops", "Guest pass (1 per month)"],
    popular: false,
    icon: Crown,
    color: "from-purple-500 to-pink-600"
  }];

  return <div className="min-h-screen">
      <Header />
      <SectionNavigation sections={pricingSections} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 
              className="text-4xl sm:text-6xl font-bold gradient-text neon-glow mb-6"
              contentEditable
              suppressContentEditableWarning={true}
            >
              Memberships
            </h1>
            <p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
              contentEditable
              suppressContentEditableWarning={true}
            >
              Flexible memberships designed to fit your schedule and goals. 
              Start your transformation journey today!
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section id="membership" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              contentEditable
              suppressContentEditableWarning={true}
            >
              Choose Your <span className="gradient-text">Membership</span>
            </h2>
            <p 
              className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
              contentEditable
              suppressContentEditableWarning={true}
            >
              All plans include access to our supportive community and expert instruction
            </p>
            
            <div className="flex items-center justify-center gap-6 mb-8">
              <span className={`text-lg font-semibold transition-colors ${!isCommitted ? 'text-white' : 'text-gray-500'}`}>
                Flexi
              </span>
              <div className="relative">
                <Toggle 
                  pressed={isCommitted}
                  onPressedChange={setIsCommitted}
                  className="h-8 w-16 rounded-full bg-gray-600 data-[state=on]:bg-gradient-to-r data-[state=on]:from-green-500 data-[state=on]:to-emerald-500 transition-all duration-300 relative"
                >
                  <div className={`absolute w-6 h-6 bg-white rounded-full transition-transform duration-300 ${isCommitted ? 'translate-x-8' : 'translate-x-1'}`} />
                </Toggle>
              </div>
              <span className={`text-lg font-semibold transition-colors ${isCommitted ? 'text-white' : 'text-gray-500'}`}>
                Committed 
                <span className="text-green-400 ml-2 text-sm font-medium">(save 10%)</span>
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {membershipPlans.map((plan, index) => <Card key={index} className={`cyber-card p-8 relative animate-fade-in ${plan.popular ? 'ring-2 ring-fuchsia-500 scale-105' : ''}`} style={{
            animationDelay: `${index * 0.15}s`
          }}>
                {plan.popular && <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-fuchsia-500 text-white px-4 py-1">
                    Most Popular
                  </Badge>}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      {isCommitted ? plan.committedPrice : plan.flexiPrice}
                    </span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>)}
                </div>

                <Button className={`w-full ${plan.popular ? 'neon-button text-black font-bold' : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600'} mb-4`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </Button>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full text-gray-400 hover:text-white text-sm underline flex items-center justify-center gap-2 transition-colors">
                      <FileText className="w-4 h-4" />
                      Terms & Conditions
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gray-900 text-white border-gray-700">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold gradient-text">Terms & Conditions</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 text-gray-300">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Membership Terms</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>All memberships are subject to a 12-month minimum commitment for committed pricing</li>
                          <li>Flexi memberships can be cancelled with 30 days notice</li>
                          <li>Class packages are valid for the specified period and cannot be extended</li>
                          <li>All sales are final and non-refundable except as required by law</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Class Policies</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Classes must be booked in advance through our booking system</li>
                          <li>24-hour cancellation notice required to avoid losing your class credit</li>
                          <li>Late arrivals (more than 10 minutes) may not be admitted for safety reasons</li>
                          <li>Make-up classes are subject to availability</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Health & Safety</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Medical clearance may be required for certain conditions</li>
                          <li>Students participate at their own risk and must sign a waiver</li>
                          <li>Appropriate attire is required for all classes</li>
                          <li>No jewelry or loose clothing permitted during apparatus work</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Pricing & Payment</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Prices are subject to change with 30 days notice</li>
                          <li>Payment is due in advance for all services</li>
                          <li>Student discounts require valid student ID verification</li>
                          <li>Promotional offers cannot be combined unless stated otherwise</li>
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </Card>)}
          </div>
        </div>
      </section>

      {/* What's Waiting For You Inside - Section 1: Foundations (gray-800) */}
      <section id="whats-included" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-sm font-medium mb-6 inline-block">
              <Gift className="w-4 h-4 inline mr-2" />
              Everything Included in Our Memberships
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What's Waiting For You <span className="gradient-text">Inside?</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Your membership is your all-access pass to spins, strength, and serious fun. 
              Consistent, supported training that builds real skill and confidence.
            </p>
          </div>

          {/* Inclusion 1: Pole Foundations with 3-image gallery */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-4 inline-block">
                <BookOpen className="w-4 h-4 inline mr-2" />
                Structured Course Lessons
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Progressive Training That <span className="gradient-text">Builds You Up</span>
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                A structured pathway where each week builds on the last, so you're never stuck, always improving, and constantly surprised by what you can do.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-300">
                  <TrendingUp className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
                  <span><strong className="text-white">Step by step progress</strong> with clear milestones each week</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Zap className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
                  <span><strong className="text-white">Stronger every session</strong> - technique and stamina that sticks</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Sparkles className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
                  <span><strong className="text-white">Confidence on repeat</strong> - new wins with every class</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* 3-Image Overlapping Gallery */}
              <div className="relative h-[500px]">
                {/* Main large image */}
                <div className="absolute top-0 right-0 w-[75%] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-fuchsia-500/30 shadow-2xl z-10">
                  <img src={coursesAsset} alt="Pole Foundations Course" className="w-full h-full object-cover" />
                </div>
                {/* Secondary image - offset left */}
                <div className="absolute bottom-8 left-0 w-[55%] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-xl z-20">
                  <img src="/images/glow/hero-1.png" alt="Training session" className="w-full h-full object-cover" />
                </div>
                {/* Small accent image - top left */}
                <div className="absolute top-12 left-8 w-[35%] aspect-square rounded-xl overflow-hidden border-2 border-cyan-500/30 shadow-lg z-0">
                  <img src="/images/glow/hero-4.png" alt="Pole skills" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included - Section 2: Flexi Pass (gray-900) */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              {/* 2-Image Side Overlap Gallery */}
              <div className="relative h-[450px]">
                {/* Primary image */}
                <div className="absolute top-0 left-0 w-[65%] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-fuchsia-500/30 shadow-2xl z-10">
                  <img src={flexiPassAsset} alt="Weekly Classes" className="w-full h-full object-cover" />
                </div>
                {/* Secondary image - offset right and down */}
                <div className="absolute bottom-0 right-0 w-[55%] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-xl z-20">
                  <img src="/images/glow/hero-2.png" alt="Dance class" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4 inline-block">
                <Calendar className="w-4 h-4 inline mr-2" />
                Casual Class Sessions
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Weekly Classes Designed to <span className="gradient-text">Empower You</span>
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Dance, conditioning, and skill-based classes across the week to keep your training fresh, fun, and effective.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-300">
                  <Heart className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
                  <span><strong className="text-white">Choose your vibe</strong> - variety keeps every session fresh</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Zap className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
                  <span><strong className="text-white">Fun that works</strong> - sweaty, smiling, and stronger</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Sparkles className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
                  <span><strong className="text-white">Grow on your terms</strong> - explore and find what you love</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included - Section 3: Unlimited Practice (gray-800) */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-4 inline-block">
                <RefreshCw className="w-4 h-4 inline mr-2" />
                Unlimited Practice Time
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Practice Time to Perfect Your <span className="gradient-text">Power Moves</span>
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Repeat moves until they click and feel natural in your body. The more you practice, the faster you progress.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-300">
                  <Target className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
                  <span><strong className="text-white">Progress at your pace</strong> - until moves feel natural</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Zap className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
                  <span><strong className="text-white">Lock in muscle memory</strong> - retain skills faster</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Sparkles className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
                  <span><strong className="text-white">Consistency builds confidence</strong> - smoother and fearless</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* 2-Image Stacked Gallery */}
              <div className="relative h-[450px]">
                {/* Primary image */}
                <div className="absolute top-0 right-0 w-[70%] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-fuchsia-500/30 shadow-2xl z-10">
                  <img src={practiceAsset} alt="Unlimited Practice" className="w-full h-full object-cover" />
                </div>
                {/* Secondary image - offset left and down */}
                <div className="absolute bottom-0 left-0 w-[50%] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-green-500/30 shadow-xl z-20">
                  <img src="/images/glow/hero-3.png" alt="Practice session" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Virtual Studio Section (gray-900) */}
      <section id="virtual-studio" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-sm font-medium mb-4 inline-block">
                <Monitor className="w-4 h-4 inline mr-2" />
                Virtual Studio Access
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Virtual Studio for <span className="gradient-text">Members</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Can't make it to class? Traveling? Want extra practice between sessions? 
                Our Virtual Studio gives you on-demand access to tutorials, drills, and training content.
              </p>
              
              {/* Comparison Table */}
              <div className="cyber-card rounded-xl p-6 mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-fuchsia-500/30">
                      <th className="text-left py-3 text-gray-400 font-medium">Feature</th>
                      <th className="text-center py-3 text-fuchsia-400 font-semibold">In-Studio</th>
                      <th className="text-center py-3 text-fuchsia-400 font-semibold">Virtual</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studioComparison.map((row, index) => (
                      <tr key={index} className="border-b border-gray-700/50 last:border-b-0">
                        <td className="py-3 text-gray-300">{row.feature}</td>
                        <td className="py-3 text-center text-white">{row.inStudio}</td>
                        <td className="py-3 text-center text-gray-400">{row.virtual}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex gap-4">
                <Button className="neon-button text-black font-bold">
                  Preview Virtual Studio
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-fuchsia-500/30 bg-gray-800">
                <img 
                  src={appMockup} 
                  alt="Virtual Studio interface" 
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Opportunities Section (gray-800) */}
      <section id="performances" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-sm font-medium mb-4 inline-block">
                <Star className="w-4 h-4 inline mr-2" />
                TPR Stage Shows & Comp Eligibility
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Performance <span className="gradient-text">Opportunities</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Performing is completely optional, but for many students, it becomes the highlight 
                of their pole journey. We host regular showcase events where you can share what 
                you've learned with friends and family.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <Star className="w-5 h-5 text-fuchsia-400" />
                  <strong>SHINE Competition</strong> - Our annual student competition
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Star className="w-5 h-5 text-fuchsia-400" />
                  <strong>GLOW Showcase</strong> - Australia's largest pole showcase
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Star className="w-5 h-5 text-fuchsia-400" />
                  <strong>Performance Nights</strong> - End of term showcases
                </li>
              </ul>
              
              {/* Timeline */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-fuchsia-500/20 flex items-center justify-center">
                    <span className="text-fuchsia-400 text-sm">1</span>
                  </div>
                  <span className="text-gray-300 text-sm">Train</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-500" />
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-fuchsia-500/20 flex items-center justify-center">
                    <span className="text-fuchsia-400 text-sm">2</span>
                  </div>
                  <span className="text-gray-300 text-sm">Rehearse</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-500" />
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-fuchsia-500/20 flex items-center justify-center">
                    <span className="text-fuchsia-400 text-sm">3</span>
                  </div>
                  <span className="text-gray-300 text-sm">Showcase</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden border border-fuchsia-500/20">
                <img 
                  src="/images/glow/hero-2.png" 
                  alt="GLOW showcase performance" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden border border-fuchsia-500/20">
                <img 
                  src="/images/glow/hero-3.png" 
                  alt="SHINE competition" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sister Studios / Training Relationships */}
      <section id="sister-studios" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6 inline-block">
              <Heart className="w-4 h-4 inline mr-2" />
              Training Relationships
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Sister <span className="gradient-text">Studios</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our studios share training partnerships, giving you more flexibility and options for your pole journey.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Partnership 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="cyber-card p-6 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-fuchsia-500/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-fuchsia-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Rowville & Narre Warren</h3>
              </div>
              <p className="text-gray-300">
                These sister studios share memberships — train at either location when holding a membership at one of these two studios.
              </p>
            </motion.div>
            
            {/* Partnership 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="cyber-card p-6 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Mitcham & Kilsyth</h3>
              </div>
              <p className="text-gray-300">
                These sister studios share memberships — train at either location when holding a membership at one of these two studios.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section (gray-900) */}
      <section id="faq" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cyber-card p-8">
            <h2 
              className="text-3xl font-bold gradient-text mb-6 text-center"
              contentEditable
              suppressContentEditableWarning={true}
            >
              Membership FAQ
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {membershipFAQ.map((faq, index) => (
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

      <Footer />
    </div>;
};

export default Pricing;
