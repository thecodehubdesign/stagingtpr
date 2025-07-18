import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionNavigation from '@/components/SectionNavigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Gift, Star, Clock, Users, Heart, Zap, ArrowRight, Play } from 'lucide-react';

const FreeGifts = () => {
  const sections = [
    { id: 'hero', label: 'Free Gifts' },
    { id: 'gifts', label: 'Your Gifts' },
    { id: 'cta', label: 'Get Started' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SectionNavigation sections={sections} />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: `linear-gradient(rgba(8,8,15,0.8), rgba(20,20,35,0.8)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }} 
        />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 text-fuchsia-400 mb-6">
              <Gift className="w-6 h-6 neon-glow" />
              <Badge variant="secondary" className="bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30">
                Limited Time Free Gifts
              </Badge>
              <Gift className="w-6 h-6 neon-glow" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 gradient-text pulse-neon">
              Zero to 180° Flexibility Program
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your flexibility with our proven system. Get 
              <span className="text-fuchsia-400 neon-glow"> FREE gifts </span>
              worth $297 when you join today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:from-fuchsia-600 hover:to-cyan-600 text-white px-8 py-4 text-lg neon-glow"
              >
                Claim Your Free Gifts Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="cyber-border text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 px-8 py-4 text-lg"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 cyber-card p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white text-sm">No Experience Required</span>
              </div>
              <div className="flex items-center justify-center space-x-2 cyber-card p-4 rounded-lg">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="text-white text-sm">15 Minutes/Day</span>
              </div>
              <div className="flex items-center justify-center space-x-2 cyber-card p-4 rounded-lg">
                <Star className="w-5 h-5 text-fuchsia-400" />
                <span className="text-white text-sm">Proven Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Gifts Section */}
      <section id="gifts" className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 gradient-text">
              Your FREE Gifts Worth $297
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get instant access to these exclusive bonuses when you join the Zero to 180° program today
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gift 1 */}
            <Card className="cyber-card border-fuchsia-500/30 bg-gradient-to-b from-muted/10 to-background">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                    FREE GIFT #1
                  </Badge>
                  <span className="text-green-400 font-bold">$97 Value</span>
                </div>
                <CardTitle className="text-white">Complete Flexibility Assessment</CardTitle>
                <CardDescription className="text-gray-300">
                  Personalized evaluation to identify your starting point and create your custom roadmap
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>60+ flexibility tests</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Personalized program</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Progress tracking system</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Gift 2 */}
            <Card className="cyber-card border-cyan-500/30 bg-gradient-to-b from-muted/10 to-background">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300">
                    FREE GIFT #2
                  </Badge>
                  <span className="text-cyan-400 font-bold">$127 Value</span>
                </div>
                <CardTitle className="text-white">Injury Prevention Masterclass</CardTitle>
                <CardDescription className="text-gray-300">
                  Learn the secrets to staying safe while pushing your flexibility limits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>90-minute video course</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>Common mistake guide</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>Recovery protocols</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Gift 3 */}
            <Card className="cyber-card border-purple-500/30 bg-gradient-to-b from-muted/10 to-background md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                    FREE GIFT #3
                  </Badge>
                  <span className="text-purple-400 font-bold">$73 Value</span>
                </div>
                <CardTitle className="text-white">VIP Community Access</CardTitle>
                <CardDescription className="text-gray-300">
                  Join our exclusive community of flexibility enthusiasts and get direct support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span>Private Facebook group</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span>Weekly Q&A sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span>Lifetime access</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="cyber-card p-8 rounded-2xl border-fuchsia-500/30">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 gradient-text">
              Ready to Transform Your Flexibility?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of students who have achieved their splits and beyond with Zero to 180°
            </p>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:from-fuchsia-600 hover:to-cyan-600 text-white px-12 py-6 text-xl neon-glow w-full sm:w-auto"
              >
                <Gift className="mr-3 w-6 h-6" />
                Claim All Free Gifts Now ($297 Value)
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              
              <p className="text-gray-400 text-sm">
                Limited time offer • No credit card required • Instant access
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeGifts;
