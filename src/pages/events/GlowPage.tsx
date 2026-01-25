import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Star, Users, Heart, Sparkles, Music, Camera, Mail, Phone, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GlowPage = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0 });
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  const glowImages = [
    { src: '/images/glow/hero-1.png', alt: 'GLOW Performance - Aerial duo' },
    { src: '/images/glow/hero-2.png', alt: 'GLOW Performance - Stage lights' },
    { src: '/images/glow/hero-3.png', alt: 'GLOW Performance - Group pose' },
    { src: '/images/glow/hero-4.png', alt: 'GLOW Performance - Silks' },
    { src: '/images/glow/hero-5.png', alt: 'GLOW Performance - Pole artistry' },
  ];

  const thumbnailPositions = [
    { top: '5%', left: '5%' },
    { top: '5%', right: '5%' },
    { bottom: '15%', left: '5%' },
    { bottom: '15%', right: '5%' },
  ];

  useEffect(() => {
    const targetDate = new Date('2025-12-03T17:30:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        });
      } else {
        setCountdown({ days: 0, hours: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(timer);
  }, []);
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
          {/* Overlaid Logo Composition */}
          <div className="relative flex flex-col items-center justify-center mb-8">
            <p className="text-fuchsia-400 text-lg sm:text-xl font-semibold tracking-widest uppercase mb-[-100px] sm:mb-[-140px] lg:mb-[-180px] z-10">
              The Pole Room Presents
            </p>
            
            <motion.img 
              src="/lovable-uploads/GLOW-2025-Logo.png"
              alt="GLOW Showcase"
              className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto"
              animate={{
                filter: [
                  'drop-shadow(0 0 20px rgba(236, 72, 153, 0.4)) drop-shadow(0 0 40px rgba(168, 85, 247, 0.3))',
                  'drop-shadow(0 0 35px rgba(236, 72, 153, 0.6)) drop-shadow(0 0 60px rgba(168, 85, 247, 0.5))',
                  'drop-shadow(0 0 20px rgba(236, 72, 153, 0.4)) drop-shadow(0 0 40px rgba(168, 85, 247, 0.3))',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mt-[-100px] sm:mt-[-140px] lg:mt-[-180px] z-10 max-w-3xl mx-auto">
              A Night of Fun, Passion & Community
            </p>
          </div>

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
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-fuchsia-500 text-fuchsia-400 bg-transparent hover:bg-fuchsia-500/10 hover:text-fuchsia-300 hover:border-fuchsia-400 transition-all duration-300"
              >
                Event News & Updates
              </Button>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Course Bookings Info */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
                Course Bookings Open December 3rd
              </h2>
              <p className="text-gray-400 text-lg">
                Join our 8-week GLOW Performance Course and take the stage at Australia's largest pole and aerial showcase.
              </p>
            </div>
            
            {/* Right: Countdown Card */}
            <Card className="cyber-card p-8">
              <div className="text-center">
                <p className="text-fuchsia-400 uppercase tracking-wider text-sm font-semibold mb-6">
                  Bookings Open In
                </p>
                <div className="flex justify-center items-center gap-4">
                  {/* Days */}
                  <div className="text-center">
                    <div className="text-5xl sm:text-6xl font-bold text-white font-mono">
                      {countdown.days.toString().padStart(2, '0')}
                    </div>
                    <div className="text-gray-400 text-sm uppercase mt-2">Days</div>
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-fuchsia-400 mb-6">:</div>
                  {/* Hours */}
                  <div className="text-center">
                    <div className="text-5xl sm:text-6xl font-bold text-white font-mono">
                      {countdown.hours.toString().padStart(2, '0')}
                    </div>
                    <div className="text-gray-400 text-sm uppercase mt-2">Hours</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive GLOW Gallery with About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT: Photo Gallery */}
            <div className="relative">
              {/* Background orbital ring */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[400px] h-[350px] sm:w-[500px] sm:h-[400px] border border-fuchsia-500/20 rounded-full" />
                <div className="absolute w-[280px] h-[240px] sm:w-[350px] sm:h-[300px] border border-fuchsia-500/10 rounded-full" />
              </div>
              
              {/* Mobile/Tablet: Simple grid layout */}
              <div className="block lg:hidden">
                <div className="grid grid-cols-2 gap-4">
                  {glowImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className={`${index === 0 ? 'col-span-2' : ''} cursor-pointer`}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setActiveHeroIndex(index)}
                    >
                      <div className={`rounded-xl overflow-hidden border-2 ${
                        index === activeHeroIndex 
                          ? 'border-fuchsia-500 shadow-[0_0_30px_rgba(236,72,153,0.5)]' 
                          : 'border-fuchsia-500/40'
                      } transition-all duration-300`}>
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className={`w-full ${index === 0 ? 'aspect-video' : 'aspect-[4/3]'} object-cover`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Desktop: Asymmetric hero layout */}
              <div className="hidden lg:block relative h-[500px]">
                {/* Hero Image - Center */}
                <motion.div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] z-10"
                  key={activeHeroIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <div className="rounded-2xl overflow-hidden border-2 border-fuchsia-500/60 shadow-[0_0_50px_rgba(236,72,153,0.5)]">
                    <img 
                      src={glowImages[activeHeroIndex].src}
                      alt={glowImages[activeHeroIndex].alt}
                      className="w-full aspect-[3/4] object-cover"
                    />
                  </div>
                </motion.div>
                
                {/* Thumbnails - Positioned around */}
                {glowImages.map((image, index) => {
                  if (index === activeHeroIndex) return null;
                  
                  const activeBeforeMe = glowImages.slice(0, index).filter((_, i) => i !== activeHeroIndex).length;
                  const posIndex = index < activeHeroIndex ? index : activeBeforeMe;
                  const position = thumbnailPositions[posIndex % 4];
                  
                  return (
                    <motion.div
                      key={index}
                      className="absolute w-[150px] cursor-pointer"
                      style={position}
                      onClick={() => setActiveHeroIndex(index)}
                      whileHover={{ scale: 1.08 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: posIndex * 0.1 }}
                    >
                      <div className="rounded-xl overflow-hidden border-2 border-fuchsia-500/40 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:border-fuchsia-500/80 hover:shadow-[0_0_35px_rgba(236,72,153,0.5)] transition-all duration-300">
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="w-full aspect-[4/3] object-cover"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            {/* RIGHT: Content */}
            <div className="order-first lg:order-last">
              {/* ABOUT outline text */}
              <p 
                className="text-5xl lg:text-6xl font-bold text-transparent uppercase tracking-wider mb-2"
                style={{ WebkitTextStroke: '1px rgba(236,72,153,0.4)' }}
              >
                ABOUT
              </p>
              
              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-white">A NIGHT OF FUN,</span>
                <br />
                <span className="text-white">PASSION & </span>
                <span className="gradient-text">COMMUNITY</span>
              </h2>
              
              {/* Description */}
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Get ready for an unforgettable experience as you take to the stage as a performer. <span className="text-white font-semibold">GLOW Student Showcase</span> returns for its <span className="text-white font-semibold">6th year running</span>, bigger and better than ever.
              </p>
              
              {/* Button and Founder Row */}
              <div className="flex flex-wrap items-center gap-6 mb-10">
                <Link to="/get-started">
                  <Button size="lg" className="neon-button">
                    JOIN A COURSE
                  </Button>
                </Link>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-fuchsia-500/50">
                    <img 
                      src="/lovable-uploads/1d83d83b-0057-4bd1-8052-79584b039a97.jpg" 
                      alt="Jasmine Zapka"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold">JASMINE ZAPKA</p>
                    <p className="text-gray-400 text-sm">FOUNDER & EVENT ORGANISER</p>
                  </div>
                </div>
              </div>
              
              {/* Three Feature Icons */}
              <div className="cyber-card p-6 rounded-xl">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: ClipboardList, label: 'ENROL IN AN UPCOMING COURSE' },
                    { icon: Users, label: 'PERFORM IN A GROUP ROUTINE' },
                    { icon: Sparkles, label: 'BE PART OF A GLOW EXPERIENCE' },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full flex items-center justify-center mb-3">
                        <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <p className="text-white text-xs font-semibold uppercase leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
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