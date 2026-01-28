import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionNavigation from '@/components/SectionNavigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, Star, Zap, Heart, Crown, Gift, Clock, Users, FileText, Monitor, ChevronRight, BookOpen, TrendingUp, Sparkles, Calendar, RefreshCw, Target } from 'lucide-react';
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
  { id: 'offers', label: 'Special Offers' },
  { id: 'add-ons', label: 'Add-Ons' },
  { id: 'virtual-studio', label: 'Virtual Studio' },
  { id: 'performances', label: 'Performances' },
  { id: 'guarantee', label: 'Guarantee' },
  { id: 'faq', label: 'FAQ' },
];

const studioComparison = [
  { feature: "Coaching feedback", inStudio: "Live, personalised", virtual: "Video-based support" },
  { feature: "Skill learning", inStudio: "Hands-on guidance", virtual: "Tutorials & drills" },
  { feature: "Strength & Flexibility", inStudio: "Class-based", virtual: "On-demand programs" },
  { feature: "Consistency between classes", inStudio: "Weekly schedule", virtual: "Train anytime" },
];


const Pricing = () => {
  const [isCommitted, setIsCommitted] = useState(false);

  const membershipPlans = [{
    name: "Drop In Session",
    flexiPrice: "$42",
    committedPrice: "$42",
    period: "per class",
    description: "Perfect for trying us out or occasional visits",
    features: ["Access to any class", "No commitment", "Valid for 30 days", "Can be used at any studio"],
    popular: false,
    icon: Zap,
    color: "from-gray-500 to-gray-600"
  }, {
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
  const addOns = [{
    name: "Private Session",
    price: "$120",
    duration: "60 minutes",
    description: "One-on-one instruction tailored to your goals"
  }, {
    name: "Semi-Private (2 people)",
    price: "$80",
    duration: "60 minutes per person",
    description: "Share a private session with a friend"
  }, {
    name: "Workshop Drop-In",
    price: "$45",
    duration: "90-120 minutes",
    description: "Special workshops and masterclasses"
  }, {
    name: "Competition Team",
    price: "$200",
    duration: "per month",
    description: "Elite training for competitions and performances"
  }];
  const studentDeals = [{
    title: "New Student Special",
    offer: "First Class FREE",
    description: "Try any beginner class completely free - no strings attached",
    validFor: "First time visitors only",
    icon: Gift,
    color: "bg-green-500"
  }, {
    title: "Student Discount",
    offer: "20% off all packages",
    description: "Valid student ID required. Cannot combine with other offers",
    validFor: "Full-time students",
    icon: Star,
    color: "bg-blue-500"
  }, {
    title: "Bring a Friend",
    offer: "$10 off each",
    description: "When you and a friend sign up together for any package",
    validFor: "New students only",
    icon: Users,
    color: "bg-purple-500"
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
              Pricing & Packages
            </h1>
            <p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
              contentEditable
              suppressContentEditableWarning={true}
            >
              Flexible options designed to fit your schedule and goals. 
              Start your transformation journey with our New Student Special!
            </p>
            <Button className="neon-button text-black font-bold text-lg px-8 py-3">
              <span contentEditable suppressContentEditableWarning={true}>
                Claim Your Free Class
              </span>
            </Button>
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

          <div className="grid md:grid-cols-3 gap-8">
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

      {/* What's Waiting For You Inside Section */}
      <section id="whats-included" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-sm font-medium mb-6 inline-block">
              <Gift className="w-4 h-4 inline mr-2" />
              Everything Included
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What's Waiting For You <span className="gradient-text">Inside?</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Your membership is your all-access pass to spins, strength, and serious fun. 
              Consistent, supported training that builds real skill and confidence.
            </p>
          </div>

          {/* Inclusion 1: Pole Foundations */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-4 inline-block">
                <BookOpen className="w-4 h-4 inline mr-2" />
                4-Week Structured Course
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
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-fuchsia-500/30 bg-gray-800">
                <img src={coursesAsset} alt="Pole Foundations Course" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>

          {/* Inclusion 2: Session Flexi Pass (Image Left) */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-fuchsia-500/30 bg-gray-800">
                <img src={flexiPassAsset} alt="Weekly Classes" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4 inline-block">
                <Calendar className="w-4 h-4 inline mr-2" />
                8 Sessions Per Month
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

          {/* Inclusion 3: Unlimited Practice (Image Right) */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-4 inline-block">
                <RefreshCw className="w-4 h-4 inline mr-2" />
                Unlimited Access
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
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-fuchsia-500/30 bg-gray-800">
                <img src={practiceAsset} alt="Unlimited Practice" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section id="offers" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              contentEditable
              suppressContentEditableWarning={true}
            >
              Special <span className="gradient-text">Offers</span>
            </h2>
            <p 
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              contentEditable
              suppressContentEditableWarning={true}
            >
              Save money and bring friends along for the journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {studentDeals.map((deal, index) => <Card key={index} className="cyber-card p-6 animate-fade-in" style={{
            animationDelay: `${index * 0.15}s`
          }}>
                <div className={`w-12 h-12 ${deal.color} rounded-full flex items-center justify-center mb-4`}>
                  <deal.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{deal.title}</h3>
                <div className="text-2xl font-bold text-fuchsia-400 mb-3">{deal.offer}</div>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">{deal.description}</p>
                <p className="text-gray-400 text-xs">{deal.validFor}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Add-Ons & Extras */}
      <section id="add-ons" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              contentEditable
              suppressContentEditableWarning={true}
            >
              Add-Ons & <span className="gradient-text">Extras</span>
            </h2>
            <p 
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              contentEditable
              suppressContentEditableWarning={true}
            >
              Enhance your training with specialized sessions and workshops
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => <Card key={index} className="cyber-card p-6 animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-2">{addon.name}</h3>
                  <div className="text-2xl font-bold text-fuchsia-400 mb-2">{addon.price}</div>
                  <div className="flex items-center justify-center text-gray-400 text-sm mb-3">
                    <Clock className="w-4 h-4 mr-1" />
                    {addon.duration}
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed mb-4">{addon.description}</p>
                  <Button variant="outline" className="w-full cyber-border text-cyan-400 hover:bg-cyan-400/10 text-sm">
                    Book Now
                  </Button>
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Virtual Studio Section */}
      <section id="virtual-studio" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-sm font-medium mb-4 inline-block">
                <Monitor className="w-4 h-4 inline mr-2" />
                Included with Membership
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

      {/* Performance Opportunities Section */}
      <section id="performances" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
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

      {/* Money Back Guarantee */}
      <section id="guarantee" className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            contentEditable
            suppressContentEditableWarning={true}
          >
            100% Satisfaction Guarantee
          </h2>
          <p 
            className="text-lg text-green-100 mb-8 max-w-2xl mx-auto"
            contentEditable
            suppressContentEditableWarning={true}
          >
            If you're not completely satisfied with your first month, we'll refund your money. 
            We're confident you'll love our community and see real results.
          </p>
          <Button className="neon-button text-black font-bold text-lg px-8 py-3">
            <span contentEditable suppressContentEditableWarning={true}>
              Start Risk-Free Today
            </span>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cyber-card p-8">
            <h2 
              className="text-3xl font-bold gradient-text mb-6 text-center"
              contentEditable
              suppressContentEditableWarning={true}
            >
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-0" className="border border-primary/20 rounded-lg px-4">
                <AccordionTrigger className="text-left font-medium hover:text-primary">
                  Can I freeze my membership?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! Life happens. You can freeze your unlimited membership for up to 3 months per year 
                  for medical reasons, travel, or other circumstances.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-1" className="border border-primary/20 rounded-lg px-4">
                <AccordionTrigger className="text-left font-medium hover:text-primary">
                  What's your cancellation policy?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Monthly memberships require 30 days notice. Class packages are non-refundable but can be 
                  transferred to someone else with advance notice.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-primary/20 rounded-lg px-4">
                <AccordionTrigger className="text-left font-medium hover:text-primary">
                  Do you offer payment plans?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! We offer payment plans for larger packages and can work with you to find 
                  a solution that fits your budget. Just ask our front desk team.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-fuchsia-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Zap className="w-16 h-16 text-white mx-auto mb-6 pulse-neon" />
          <h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            contentEditable
            suppressContentEditableWarning={true}
          >
            Ready to Transform Your Life?
          </h2>
          <p 
            className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto"
            contentEditable
            suppressContentEditableWarning={true}
          >
            Don't wait another day to start your journey. Your first class is free, 
            and your transformation starts the moment you walk through our doors.
          </p>
          <Button className="neon-button text-black font-bold text-lg px-8 py-3">
            <span contentEditable suppressContentEditableWarning={true}>
              Claim Your Free Class Now
            </span>
          </Button>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Pricing;