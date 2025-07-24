import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { MapPin, Clock, Users, Star, PartyPopper, Sparkles, Heart } from 'lucide-react';
import SectionHeader from '@/components/ui/section-header';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const HensParties = () => {
  useScrollToTop();
  const [formData, setFormData] = useState({
    fullName: '',
    numberOfPeople: '',
    email: '',
    phone: '',
    message: '',
    agreeContact: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/lovable-uploads/8b589fd4-a71e-43de-823f-c2af97fef88d.jpg')`
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 text-lg px-6 py-2">
            <PartyPopper className="w-5 h-5 mr-2" />
            Ultimate Celebration Experience
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            GET THE GIRLS TOGETHER FOR A{' '}
            <span className="gradient-text">Hens Party</span>{' '}
            UNLIKE ANYTHING ELSE
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Celebrate in style with pole dancing, aerial arts, and unforgettable memories
          </p>
          
          <Button size="lg" className="neon-button text-lg px-8 py-4">
            Enquire Now
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <SectionHeader
            badgeText="Unique Experience"
            title="Looking for a Hens party idea that hasn't been done yet?"
            subtitle="What better way to celebrate the end of your single years by slipping into a pair of sky-high stilettos, embracing your body and learning some sexy moves on the pole with your girlfriends."
          />
          
          <p className="text-lg text-muted-foreground mt-6 max-w-4xl mx-auto">
            Feel confident, energised and empowered in our private pole dancing class function which will take your group through some easy to learn pole dancing moves as well as a fun choreographed routine that everyone will enjoy.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            badgeText="The Perfect Choice"
            title="Why choose The Pole Room?"
            subtitle="We provide the ultimate hens party experience with professional instruction and unforgettable memories"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <Card className="cyber-card text-center">
              <CardContent className="p-6">
                <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">Expert Instructors</h3>
                <p className="text-muted-foreground">Our highly trained instructors are at the top of their poles with hundreds of hours experience</p>
              </CardContent>
            </Card>
            
            <Card className="cyber-card text-center">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">Day Or Night</h3>
                <p className="text-muted-foreground">Our pole parties can be hosted during the day or at night to best suit the party schedule</p>
              </CardContent>
            </Card>
            
            <Card className="cyber-card text-center">
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">Prime Locations</h3>
                <p className="text-muted-foreground">Multiple studio locations across the city, all easily accessible with great nearby entertainment</p>
              </CardContent>
            </Card>
            
            <Card className="cyber-card text-center">
              <CardContent className="p-6">
                <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">Memorable Experience</h3>
                <p className="text-muted-foreground">Our team will make sure the bride has an evening to remember with this unique and fun filled activity</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Happens Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            badgeText="Step by Step"
            title="What happens on the day"
            subtitle="Your complete hens party experience breakdown"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="cyber-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Learn the fundamentals of Pole</h3>
                <p className="text-muted-foreground">We'll teach you how to grip, spin and twist on the pole. You'll be dancing like a pole-fessional in no time!</p>
              </CardContent>
            </Card>
            
            <Card className="cyber-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Master a mini routine to a song of choice</h3>
                <p className="text-muted-foreground">We can teach you a sexy striptease, a bombshell burlesque routine or a fun pole dance to your favourite song.</p>
              </CardContent>
            </Card>
            
            <Card className="cyber-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Sit back and enjoy the show</h3>
                <p className="text-muted-foreground">At the end of the session your instructor will give you and your guests a taste of what's possible with a jaw dropping pole performance.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            badgeText="Choose Your Package"
            title="Hens Party Packages"
            subtitle="The Pole Room offers a range of hens party packages to suit the vibe of your day"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="cyber-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Basic Package</CardTitle>
                <div className="text-3xl font-bold text-primary mt-2">
                  from $45<span className="text-lg text-muted-foreground">/pp</span>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Sparkles className="w-5 h-5 text-primary mr-3" />
                    60 Minute Private Studio Hire
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="w-5 h-5 text-primary mr-3" />
                    Pole Dance Lesson
                  </li>
                </ul>
                <Button className="w-full">Enquire Now</Button>
              </CardContent>
            </Card>
            
            <Card className="cyber-card border-primary">
              <CardHeader className="text-center">
                <Badge className="mb-2">Most Popular</Badge>
                <CardTitle className="text-2xl">Deluxe Package</CardTitle>
                <div className="text-3xl font-bold text-primary mt-2">
                  from $55<span className="text-lg text-muted-foreground">/pp</span>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Sparkles className="w-5 h-5 text-primary mr-3" />
                    90 Minute Private Studio Hire
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="w-5 h-5 text-primary mr-3" />
                    Pole Dance Lesson
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="w-5 h-5 text-primary mr-3" />
                    Chair & Lap Dance Lesson
                  </li>
                </ul>
                <Button className="w-full neon-button">Enquire Now</Button>
              </CardContent>
            </Card>
            
            <Card className="cyber-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">One To Remember</CardTitle>
                <div className="text-3xl font-bold text-primary mt-2">
                  from $65<span className="text-lg text-muted-foreground">/pp</span>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Sparkles className="w-5 h-5 text-primary mr-3" />
                    120 Minute Private Studio Hire
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="w-5 h-5 text-primary mr-3" />
                    Pole Dance Lesson
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="w-5 h-5 text-primary mr-3" />
                    Chair & Lap Dance Lesson
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="w-5 h-5 text-primary mr-3" />
                    Table Snacks
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="w-5 h-5 text-primary mr-3" />
                    Optional Add-ons Available
                  </li>
                </ul>
                <Button className="w-full">Enquire Now</Button>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-8">
            *Pricing per person is based on a 10 person party. Minimum cost applies for smaller groups.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader
            badgeText="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our hens party packages"
          />
          
          <div className="space-y-6 mt-12">
            <Card className="cyber-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Do you offer other types of functions?</h3>
                <p className="text-muted-foreground">We also host birthday parties, work break-ups, Christmas parties and more! We can even do more casual group classes if you'd like to try it out with your friends. The options are endless.</p>
              </CardContent>
            </Card>
            
            <Card className="cyber-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">What are the minimum and maximum numbers for a party?</h3>
                <p className="text-muted-foreground">There are no minimums but we recommend at least 4 people. Our venue can cater for up to 30 people.</p>
              </CardContent>
            </Card>
            
            <Card className="cyber-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Is alcohol allowed during the party?</h3>
                <p className="text-muted-foreground">Alcohol and pole dancing just don't mix! We want you to have a blast at your hen's party, but we also want to make sure you're safe. Let's leave the drinking for after the class - it'll make the post-party celebrations that much sweeter.</p>
              </CardContent>
            </Card>
            
            <Card className="cyber-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">How does the pricing work?</h3>
                <p className="text-muted-foreground">Our packages are designed for a minimum of 10 participants. If you have less than 10 people attending, the cost will still be based on the minimum of 10 participants. If you have more than 10 participants, each additional person will be charged at $45.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-2xl mx-auto px-4">
          <SectionHeader
            badgeText="Let's Plan Your Party"
            title="Enquire Now"
            subtitle="Ready to book the ultimate hens party experience? Get in touch with us today!"
          />
          
          <Card className="cyber-card mt-12">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of People *</label>
                    <Input
                      type="number"
                      value={formData.numberOfPeople}
                      onChange={(e) => handleInputChange('numberOfPeople', e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    placeholder="Tell us about your ideal hens party..."
                    required
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agree"
                    checked={formData.agreeContact}
                    onCheckedChange={(checked) => handleInputChange('agreeContact', !!checked)}
                    required
                  />
                  <label htmlFor="agree" className="text-sm text-muted-foreground">
                    I agree to be contacted. We do not spam and you can opt out any time. *
                  </label>
                </div>
                
                <Button type="submit" className="w-full neon-button" size="lg">
                  Send Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HensParties;