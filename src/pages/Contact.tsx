import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Studios",
      details: [
        "Mitcham - 123 Main Street",
        "Melbourne - 456 Collins Street", 
        "Kilsyth - 789 High Street",
        "Highett - 321 Bay Road",
        "Narre Warren - 654 Fountain Gate"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["1300 POLE FIT", "(03) 9123 4567"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@polefitstudios.com", "bookings@polefitstudios.com"]
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: [
        "Monday - Friday: 6:00 AM - 10:00 PM",
        "Saturday: 7:00 AM - 8:00 PM", 
        "Sunday: 8:00 AM - 6:00 PM"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(8,8,15,0.8), rgba(20,20,35,0.8)), url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-6xl font-bold gradient-text neon-glow mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to start your pole fitness journey? Have questions about our classes? 
              We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-300 mb-2 block">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      required
                      className="cyber-border bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-300 mb-2 block">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      required
                      className="cyber-border bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-300 mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="cyber-border bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-300 mb-2 block">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="cyber-border bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="0412 345 678"
                  />
                </div>

                <div>
                  <Label htmlFor="studio" className="text-gray-300 mb-2 block">
                    Preferred Studio
                  </Label>
                  <select 
                    id="studio"
                    className="w-full cyber-border bg-gray-700/50 border-gray-600 text-white p-3 rounded-md"
                  >
                    <option value="">Select a studio</option>
                    <option value="mitcham">Mitcham</option>
                    <option value="melbourne">Melbourne</option>
                    <option value="kilsyth">Kilsyth</option>
                    <option value="highett">Highett</option>
                    <option value="narre-warren">Narre Warren</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-gray-300 mb-2 block">
                    Subject
                  </Label>
                  <select 
                    id="subject"
                    className="w-full cyber-border bg-gray-700/50 border-gray-600 text-white p-3 rounded-md"
                  >
                    <option value="">What can we help with?</option>
                    <option value="class-inquiry">Class Inquiry</option>
                    <option value="membership">Membership Options</option>
                    <option value="private-lessons">Private Lessons</option>
                    <option value="events">Events & Workshops</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-300 mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    className="cyber-border bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 resize-none"
                    placeholder="Tell us about your inquiry, experience level, goals, or any questions you have..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full neon-button text-black font-bold text-lg py-3"
                >
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
              
              {contactInfo.map((info, index) => (
                <Card key={index} className="cyber-card p-6">
                  <div className="flex items-start space-x-4">
                    <info.icon className="w-6 h-6 text-fuchsia-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-300">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Quick Links */}
              <Card className="cyber-card p-6">
                <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-fuchsia-400 border-fuchsia-400/50 hover:bg-fuchsia-400/10"
                  >
                    Book a Free Trial Class
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-cyan-400 border-cyan-400/50 hover:bg-cyan-400/10"
                  >
                    View Class Timetable
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-yellow-400 border-yellow-400/50 hover:bg-yellow-400/10"
                  >
                    Find Your Nearest Studio
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-gray-300">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="cyber-card p-6">
              <h3 className="text-lg font-bold text-white mb-3">How do I book my first class?</h3>
              <p className="text-gray-300">
                New students get their first class free! Simply choose your preferred studio 
                and book online through our website or give us a call.
              </p>
            </Card>

            <Card className="cyber-card p-6">
              <h3 className="text-lg font-bold text-white mb-3">What should I wear to class?</h3>
              <p className="text-gray-300">
                Wear shorts and a tank top or sports bra for better grip on the pole. 
                Bring a water bottle and avoid lotions before class.
              </p>
            </Card>

            <Card className="cyber-card p-6">
              <h3 className="text-lg font-bold text-white mb-3">Do you offer private lessons?</h3>
              <p className="text-gray-300">
                Yes! We offer one-on-one and small group private sessions. 
                Contact us to discuss your goals and schedule.
              </p>
            </Card>

            <Card className="cyber-card p-6">
              <h3 className="text-lg font-bold text-white mb-3">Can I try different studios?</h3>
              <p className="text-gray-300">
                Absolutely! Your membership gives you access to all our studio locations. 
                Each studio has its own unique vibe and class offerings.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;