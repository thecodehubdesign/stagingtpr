import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { 
  Trophy, 
  Star, 
  Medal, 
  Crown, 
  Zap, 
  Heart, 
  Users, 
  Calendar,
  Gift,
  Sparkles,
  Award,
  Target
} from "lucide-react";

const Rewards = () => {
  useScrollToTop();
  const [email, setEmail] = useState("");

  const badges = [
    { name: "First Spin", icon: Zap, description: "Your very first pole move" },
    { name: "Week Warrior", icon: Calendar, description: "Attended 3+ classes in one week" },
    { name: "Community Queen", icon: Users, description: "Brought 3 friends to class" },
    { name: "Pole-versary", icon: Gift, description: "Celebrating your anniversary" },
    { name: "Consistency Crown", icon: Crown, description: "30 classes completed" },
    { name: "Event Star", icon: Star, description: "Participated in studio events" }
  ];

  const levels = [
    {
      name: "Bronze",
      subtitle: "Getting Started",
      description: "You've joined the journey!",
      icon: Medal,
      color: "from-amber-600 to-amber-700",
      bgColor: "bg-amber-50",
      textColor: "text-amber-800"
    },
    {
      name: "Silver", 
      subtitle: "Consistency Queen",
      description: "You're showing real dedication.",
      icon: Award,
      color: "from-slate-400 to-slate-500",
      bgColor: "bg-slate-50",
      textColor: "text-slate-800"
    },
    {
      name: "Gold",
      subtitle: "Loyal Legend", 
      description: "Inspiring others with your commitment.",
      icon: Trophy,
      color: "from-yellow-400 to-yellow-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-800"
    },
    {
      name: "Platinum",
      subtitle: "Pole Icon",
      description: "The highest recognition – our inner circle.",
      icon: Crown,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50", 
      textColor: "text-purple-800"
    }
  ];

  const testimonials = [
    {
      quote: "Seeing my badges unlock keeps me motivated to come back every week!",
      author: "Sarah M."
    },
    {
      quote: "I love how the program celebrates every milestone, not just the big ones.",
      author: "Emma K."
    },
    {
      quote: "Working towards Platinum status has made my pole journey so much more exciting!",
      author: "Jessica R."
    }
  ];

  const benefits = [
    "Motivation to keep progressing in your pole journey",
    "Recognition for your hard work, loyalty, and energy", 
    "Bragging rights (because who doesn't want to be Platinum?)",
    "Exclusive perks, shoutouts and surprises for higher levels",
    "Fun, fresh and interactive way to connect with our community"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="mb-8"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mb-6">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Unlock Your Pole Potential – and Be Recognised for It
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Introducing The Pole Room Achievements & Rewards Program – a brand new way to celebrate your journey, recognise your dedication, and reward the milestones that make your time at TPR unforgettable.
              </p>
            </motion.div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 animate-pulse">
            <Sparkles className="w-8 h-8 text-primary/30" />
          </div>
          <div className="absolute bottom-20 right-10 animate-pulse delay-1000">
            <Star className="w-6 h-6 text-secondary/30" />
          </div>
        </section>

        {/* Section 1: What It Is */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">What It Is</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At The Pole Room, we believe every spin, climb, class and achievement deserves to be celebrated. That's why we've created a recognition system that tracks your journey, commitment and community impact – and turns it into badges, awards, and exclusive levels.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4 font-medium">
                This isn't about how much you spend. It's about your dedication, consistency, and transformation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 2: How It Works */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-4">
                      <Medal className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">Earn Badges 🏅</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Every milestone unlocks a badge – first spin, 10th class, pole-versary, or bringing a bestie to class.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">Climb the Levels 🌟</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Progress from Bronze → Silver → Gold → Platinum. Each level celebrates your growth.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mb-4">
                      <Gift className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">Celebrate Your Pole-versary 🎂</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Every anniversary is celebrated with a special badge and studio shoutout.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">Community Recognition 💕</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Referrals, event participation, and consistency all count. Give more, get celebrated more.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Why It's Exciting */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why It's Exciting</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mt-1">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Badges Showcase */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Example Badges</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {badges.map((badge, index) => {
                  const IconComponent = badge.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                      className="text-center group cursor-pointer"
                    >
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="font-semibold text-sm mb-1">{badge.name}</h3>
                      <p className="text-xs text-muted-foreground">{badge.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: The Levels */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Levels</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {levels.map((level, index) => {
                  const IconComponent = level.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <Card className={`${level.bgColor} border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                        <CardHeader className="text-center">
                          <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${level.color} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                            <IconComponent className="w-10 h-10 text-white" />
                          </div>
                          <CardTitle className={`text-2xl ${level.textColor}`}>{level.name}</CardTitle>
                          <p className={`font-semibold ${level.textColor}`}>{level.subtitle}</p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-center text-muted-foreground">{level.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Members Say</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                        <p className="font-semibold">– {testimonial.author}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 5: Call to Action */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Are you ready to unlock your first badge?</h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Your profile will update automatically, and soon you'll start seeing your achievements pop up on your account and in the studio.
              </p>
              
              <p className="text-lg text-muted-foreground mb-12">
                Keep showing up, keep shining, and watch your achievements grow.
              </p>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-md mx-auto">
                <Badge variant="secondary" className="mb-4">
                  Stay Tuned – Launching Soon
                </Badge>
                
                <h3 className="text-xl font-semibold mb-4">Get Notified</h3>
                <p className="text-muted-foreground mb-6">
                  Be the first to know when the rewards program launches!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                    Notify Me
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Rewards;