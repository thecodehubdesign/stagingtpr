import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, Star, Zap, Heart, Crown, Gift, Clock, Users } from 'lucide-react';
const Pricing = () => {
  const membershipPlans = [{
    name: "Drop-In",
    price: "$35",
    period: "per class",
    description: "Perfect for trying us out or occasional visits",
    features: ["Access to any class", "No commitment", "Valid for 30 days", "Can be used at any studio"],
    popular: false,
    icon: Zap,
    color: "from-gray-500 to-gray-600"
  }, {
    name: "Starter Pack",
    price: "$99",
    period: "4 classes",
    description: "Great for new students to explore different class types",
    features: ["4 classes to use anytime", "Valid for 6 weeks", "Mix and match any classes", "All studio locations", "Free grip aids included"],
    popular: true,
    icon: Heart,
    color: "from-fuchsia-500 to-purple-600"
  }, {
    name: "Unlimited Monthly",
    price: "$149",
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
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-6xl font-bold gradient-text neon-glow mb-6">
              Pricing & Packages
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Flexible options designed to fit your schedule and goals. 
              Start your transformation journey with our New Student Special!
            </p>
            <Button className="neon-button text-black font-bold text-lg px-8 py-3">
              Claim Your Free Class
            </Button>
          </div>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Choose Your <span className="gradient-text">Membership</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">All plans include access to our supportive community and expert instruction</p>
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
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
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

                <Button className={`w-full ${plan.popular ? 'neon-button text-black font-bold' : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600'}`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </Button>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Special <span className="gradient-text">Offers</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Add-Ons & <span className="gradient-text">Extras</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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

      {/* Money Back Guarantee */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            100% Satisfaction Guarantee
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            If you're not completely satisfied with your first month, we'll refund your money. 
            We're confident you'll love our community and see real results.
          </p>
          <Button className="neon-button text-black font-bold text-lg px-8 py-3">
            Start Risk-Free Today
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold gradient-text mb-6 text-center">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Don't wait another day to start your journey. Your first class is free, 
            and your transformation starts the moment you walk through our doors.
          </p>
          <Button className="neon-button text-black font-bold text-lg px-8 py-3">
            Claim Your Free Class Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Pricing;