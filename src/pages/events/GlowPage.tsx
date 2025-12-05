import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Star, Users, Heart, Sparkles, Music, Camera, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';

const GlowPage = () => {
  const importantDates = [
    { date: 'Nov 11, 2025', event: 'GLOW 2026 Announced', status: 'complete' },
    { date: 'Dec 3, 2025 - 5:30 PM', event: 'Course Bookings Open', status: 'upcoming' },
    { date: 'Feb 13, 2026 - 5:00 PM', event: 'Course Bookings Close', status: 'upcoming' },
    { date: 'Feb 23, 2026', event: 'Performance Courses Start', status: 'upcoming' },
    { date: 'Mar 30, 2026 - 10:00 AM', event: 'Tickets Go On Sale', status: 'upcoming' },
    { date: 'Apr 26, 2026 - 6:30 PM', event: 'GLOW Showcase', status: 'upcoming' },
  ];

  const benefits = [
    {
      title: 'A Show-Stopping Performance',
      description: 'Showcase your teamwork, strength, and artistry on the big stage with your studio crew.',
      icon: Star,
    },
    {
      title: 'Share in the Excitement',
      description: 'Play an active role from concept to stage — be part of the creative process.',
      icon: Heart,
    },
    {
      title: 'Be Part of the Celebration',
      description: 'Join a community of passionate pole and aerial artists celebrating together.',
      icon: Users,
    },
    {
      title: 'A Place on Stage for Everyone',
      description: 'From beginner to advanced, pole and aerial — there\'s a spot for you.',
      icon: Sparkles,
    },
  ];

  const stats = [
    { number: '5+', label: 'Soloist Performers' },
    { number: '103+', label: 'Solo Student Performances' },
    { number: '1,039+', label: 'Show Attendees' },
    { number: '200+', label: 'Performers in One Night' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(8,8,15,0.7), rgba(20,20,35,0.9)), url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/50">
            <Sparkles className="w-4 h-4 mr-2" />
            The Pole Room Presents
          </Badge>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold gradient-text mb-4">
            GLOW
          </h1>
          <p className="text-2xl sm:text-3xl text-cyan-400 font-semibold mb-6">
            Showcase
          </p>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A Night of Fun, Passion & Community
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="text-white border-white/30 px-4 py-2">
              <Calendar className="w-4 h-4 mr-2" />
              April 26th, 2026
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 px-4 py-2">
              <MapPin className="w-4 h-4 mr-2" />
              The Round, Nunawading
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              6:30 PM
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="neon-button" asChild>
              <Link to="/get-started">Join Performance Course</Link>
            </Button>
            <Button size="lg" variant="outline" className="cyber-border">
              Event News & Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold gradient-text mb-8">
            Course Bookings Open December 3rd
          </h2>
          <CountdownTimer targetTime="2025-12-03T17:30:00" />
        </div>
      </section>

      {/* Why Partake Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              Why Partake in GLOW?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              8 weeks of training, teamwork, and growth leading to one unforgettable night
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="cyber-card hover:border-fuchsia-400 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History/Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
              Australia's Largest
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              Pole & Aerial Showcase
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              200+ pole and aerial performers come together for one spectacular night
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl sm:text-6xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Important Dates
            </h2>
            <p className="text-xl text-gray-400">
              Mark your calendar for GLOW 2026
            </p>
          </div>

          <div className="space-y-4">
            {importantDates.map((item, index) => (
              <div 
                key={index} 
                className={`cyber-card p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${
                  item.status === 'complete' ? 'opacity-60' : ''
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-4 h-4 rounded-full ${
                    item.status === 'complete' ? 'bg-green-500' : 'bg-fuchsia-500 animate-pulse'
                  }`} />
                  <div>
                    <p className="font-semibold text-white">{item.event}</p>
                    <p className="text-sm text-gray-400">{item.date}</p>
                  </div>
                </div>
                {item.status === 'complete' && (
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                    Announced
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Previous Performers
            </h2>
            <p className="text-xl text-gray-400">
              Moments of magic from past GLOW showcases
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg group aspect-square">
                <img 
                  src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1470813740244-df37b8c1edcb' : '1581090464777-f3220bbe1b8b'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt={`GLOW performer ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
            <Button size="lg" variant="outline" className="cyber-border">
              <Music className="w-5 h-5 mr-2" />
              Watch Highlights Reel
            </Button>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="cyber-card overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-fuchsia-500/50">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Jasmine Zapka"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <Badge className="mb-4 bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/50">
                    Founder & Event Organiser
                  </Badge>
                  <h3 className="text-3xl font-bold text-white mb-4">Jasmine Zapka</h3>
                  <p className="text-gray-400 leading-relaxed">
                    "GLOW is more than a showcase — it's a celebration of every student's journey. 
                    Whether you're taking your first steps on the pole or you've been dancing for years, 
                    GLOW is your moment to shine alongside your studio family."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact/Venue Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold gradient-text mb-12">
            Event Information
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="cyber-card">
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-fuchsia-400 mx-auto mb-4" />
                <h3 className="font-bold text-white mb-2">Venue</h3>
                <p className="text-gray-400 text-sm">
                  The Round<br />
                  379-399 Whitehorse Rd<br />
                  Nunawading VIC 3131
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardContent className="p-6 text-center">
                <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="font-bold text-white mb-2">Email</h3>
                <a href="mailto:info@thepoleroom.com.au" className="text-fuchsia-400 hover:text-fuchsia-300">
                  info@thepoleroom.com.au
                </a>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 text-fuchsia-400 mx-auto mb-4" />
                <h3 className="font-bold text-white mb-2">Phone</h3>
                <a href="tel:1300230938" className="text-cyan-400 hover:text-cyan-300">
                  1300 230 938
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold gradient-text mb-6">
            Ready to Take the Stage?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Course bookings open December 3rd, 2025 at 5:30 PM
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="neon-button" asChild>
              <Link to="/get-started">Join Performance Course</Link>
            </Button>
            <Button size="lg" variant="outline" className="cyber-border" asChild>
              <Link to="/events">Back to All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GlowPage;