import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, Star, MapPin, Shield, Dumbbell, Sparkles, Compass, Heart, Play, ChevronRight, Quote } from 'lucide-react';
import jasmineSignature from '@/assets/jasmine-signature.png';
import jasminePhoto from '@/assets/jasmine-verified.png';
import AllStudiosMap from '@/components/AllStudiosMap';
import { studios } from '@/data/studios';

const FirstTimers = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const benefitsList = [
    "Learn fun spins, poses and a simple routine",
    "Start alongside others who are brand new to The Pole Room",
    "Build strength and confidence as you go",
    "Skip the gym and discover a workout you'll actually enjoy",
    "Walk out smiling after your very first class"
  ];

  const galleryImages = [
    { src: "/images/first-timers/gallery-1.png", alt: "Pole dance class in action" },
    { src: "/images/first-timers/gallery-2.avif", alt: "Students practicing spins" },
    { src: "/images/first-timers/gallery-3.avif", alt: "Beginner pole class" },
    { src: "/images/first-timers/gallery-4.avif", alt: "Group pole fitness" },
    { src: "/images/first-timers/gallery-5.avif", alt: "Pole dance poses" },
    { src: "/images/first-timers/gallery-6.avif", alt: "Studio atmosphere" }
  ];

  // Load Mindbody widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://brandedweb.mindbodyonline.com/embed/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://brandedweb.mindbodyonline.com/embed/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const shineFramework = [
    {
      letter: "S",
      title: "Safety & Foundations",
      description: "From day one, you're supported. Our beginner-friendly classes focus on proper technique, body awareness, and building the foundation you need to progress safely.",
      icon: Shield
    },
    {
      letter: "H",
      title: "Hold & Strength",
      description: "Every class builds your grip strength, core stability, and upper body power. You'll feel yourself getting stronger week by week.",
      icon: Dumbbell
    },
    {
      letter: "I",
      title: "Integration & Flow",
      description: "Learn to connect moves together into beautiful sequences. This is where pole becomes art and your unique style starts to emerge.",
      icon: Sparkles
    },
    {
      letter: "N",
      title: "Navigate Your Progress",
      description: "Track your journey with our structured progression system. Celebrate milestones and see exactly how far you've come.",
      icon: Compass
    },
    {
      letter: "E",
      title: "Embrace Your Power",
      description: "This is the transformation. You'll walk taller, feel stronger, and carry yourself with a confidence that radiates into every area of your life.",
      icon: Heart
    }
  ];

  const testimonials = [
    {
      name: "Sarah",
      location: "Mitcham",
      quote: "I was so nervous before my first class, but everyone was so welcoming. Now I can't imagine my life without pole!",
      image: "/images/testimonials/sarah.png"
    },
    {
      name: "Emma",
      location: "Eltham",
      quote: "The instructors are incredible. They make you feel like you can do anything, even when you're just starting out.",
      image: "/images/testimonials/courtney.png"
    },
    {
      name: "Jade",
      location: "CBD",
      quote: "I've never felt so strong and confident. Pole has completely changed how I see myself.",
      image: "/images/testimonials/lauren.png"
    }
  ];

  const faqs = [
    {
      question: "Do I need any dance or fitness background?",
      answer: "Absolutely not! Our beginner program is designed for complete newbies. You'll start from scratch and we'll teach you everything you need to know. Many of our most successful students had zero dance or fitness experience before joining."
    },
    {
      question: "I'm not confident in my body. Will I fit in?",
      answer: "Yes! The Pole Room is a safe and supportive space where every body is welcomed and celebrated. Our students come in all shapes, sizes, ages, and fitness levels. You'll quickly discover that pole is for EVERY body."
    },
    {
      question: "Is there an age limit?",
      answer: "You must be at least 16 years old to join our classes. There's no upper age limit! We have students from their teens through to their 60s and beyond. It's never too late to start your pole journey."
    },
    {
      question: "Do I need to wear heels?",
      answer: "Not at all! Heels are completely optional and definitely not required for beginners. Going barefoot actually allows for better grip on the pole. If you're interested in heels later on, we have specific classes for that."
    },
    {
      question: "What should I wear to my first class?",
      answer: "Wear shorts (bike shorts are perfect) and a comfortable top like a singlet or sports bra. Avoid lotions or oils on your skin as they can make the pole slippery. Bring water and come ready to have fun!"
    }
  ];

  const locations = [
    "Mitcham", "Eltham", "CBD", "Kilsyth", "Highett", "Narre Warren", "Rowville"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Header Content */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-fuchsia-400" />
              <span className="text-fuchsia-400 text-sm font-medium">Special Offer For January</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Pole Dancing for Beginners:{' '}
              <span className="gradient-text">Fitness That Feels Like Fun!</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              No treadmills. No boring workouts. Just 28 days of spins, poses and routines you'll actually look forward to.
              <span className="text-fuchsia-400 font-semibold"> Limited spots available!</span> Claim your Pole Dance Transformation before they're all gone!
            </p>
          </motion.div>

          {/* Two Column Layout - Video + Benefits */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-8">
            {/* Left Column - Video */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative aspect-video rounded-2xl overflow-hidden cyber-card"
            >
              {!isVideoPlaying ? (
                <div 
                  className="relative w-full h-full cursor-pointer group"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <img 
                    src="/images/first-timers/gallery-1.png" 
                    alt="First timers pole class" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-fuchsia-500/80 flex items-center justify-center group-hover:bg-fuchsia-500 group-hover:scale-110 transition-all">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://player.vimeo.com/video/298504350?autoplay=1"
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              )}
            </motion.div>

            {/* Right Column - Benefits + CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-left"
            >
              <ul className="space-y-4 mb-8">
                {benefitsList.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-fuchsia-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-fuchsia-400" />
                    </div>
                    <span className="text-gray-200 text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              
              <Button className="neon-button text-black font-bold text-lg px-8 py-6 h-auto w-full sm:w-auto">
                Yes, Claim My Beginner Spot
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mindbody Booking Widget */}
      <section className="py-12 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cyber-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              Book Your <span className="gradient-text">Free Trial</span>
            </h3>
            <div className="min-h-[400px] mindbody-widget-container">
              <div 
                className="mindbody-widget" 
                data-widget-type="Schedules" 
                data-widget-id="d98131628e"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Banner */}
      <section className="py-6 bg-gray-900/80 border-y border-fuchsia-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-400 to-purple-600 border-2 border-gray-900 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{String.fromCharCode(64 + i)}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white font-semibold">4.9 Rating</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-300">376 Google Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <section className="py-4 bg-fuchsia-500 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-black font-bold text-lg mx-8">
              TRANSFORM YOUR BODY • BOOST YOUR CONFIDENCE • RECLAIM YOUR ENERGY •
            </span>
          ))}
        </div>
      </section>

      {/* Pathway Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-fuchsia-400 text-sm font-medium uppercase tracking-wider">Live your best life through The Pole Room</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-8">
              Your Pathway to Spins, Poses &{' '}
              <span className="gradient-text">a Confidence Boost You'll Love</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 text-left max-w-3xl mx-auto">
              <p>
                In 30 days from now, you could walk into class and own it. Head high. Shoulders back. Power in every move.
              </p>
              <p className="text-white font-semibold">
                Not hoping you're confident. <span className="text-fuchsia-400">Knowing that you are.</span>
              </p>
              
              <div className="py-4">
                <p className="text-gray-400 mb-4">Even if:</p>
                <ul className="space-y-2">
                  <li>👉 You've never danced or done pole fitness before</li>
                  <li>👉 You don't think you have what it takes</li>
                  <li>👉 Thinking about exercise makes you sigh</li>
                </ul>
              </div>
              
              <p className="text-gray-400">Let's be real…</p>
              <p>Did you dream of forcing yourself through boring treadmill sessions?</p>
              <p>Or standing under harsh gym lights, staring at your reflection and wondering, "what's wrong with me?"</p>
              <p className="font-semibold text-white">No? Good!</p>
              
              <div className="py-4 border-l-4 border-fuchsia-500 pl-6 my-8">
                <p className="text-xl font-medium text-white mb-4">Now imagine this instead:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-400">✨</span>
                    <span>You feel stronger every class, in your body and your mindset</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-400">✨</span>
                    <span>You look in the mirror and smile - proud of what you see</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-400">✨</span>
                    <span>You walk out of the studio taller, lighter, and ready for more</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-fuchsia-400">✨</span>
                    <span>You try your first spin and actually nail it</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-xl text-white">
                At The Pole Room, you'll go from wondering if you can… to <span className="text-fuchsia-400 font-semibold">knowing that you did.</span>
              </p>
              <p className="text-xl text-white">
                From feeling like you don't belong… to discovering <span className="text-fuchsia-400 font-semibold">you absolutely do.</span>
              </p>
            </div>
            
            <Button className="neon-button text-black font-bold text-lg px-8 py-6 h-auto mt-8">
              Yes, I Want to Nail My First Spin!
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-square rounded-xl overflow-hidden border border-fuchsia-500/20 hover:border-fuchsia-500/50 transition-colors"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fitness Experience Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="italic text-gray-400">A Fitness Experience That</span>{' '}
              <span className="gradient-text">Feels Nothing Like a Workout.</span>
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Most fitness routines? <span className="text-gray-500">Designed to punish.</span>
            </p>
            <p className="text-xl text-fuchsia-400 font-semibold">
              Our Program? Designed to celebrate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* S.H.I.N.E. Framework */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              The <span className="gradient-text">S.H.I.N.E.</span> Framework
            </h2>
            <p className="text-xl text-gray-300">Your 5-Step Blueprint to Pole Success</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {shineFramework.map((step, index) => (
              <motion.div
                key={step.letter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="cyber-card rounded-2xl p-6 text-center hover:border-fuchsia-500/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.letter}</span>
                </div>
                <step.icon className="w-8 h-8 text-fuchsia-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-fuchsia-900/30" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                <span className="gradient-text">Jasmine's Story</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  I used to hate the gym. Like, really hate it. The machines felt cold, the atmosphere was intimidating, and I never felt like I belonged.
                </p>
                <p>
                  Then I discovered pole dancing, and everything changed. For the first time, exercise felt like freedom. Like art. Like me.
                </p>
                <p>
                  I started The Pole Room in my parents' garage with just two poles and a dream. Fast forward to today, and we've grown to 6 studios across Melbourne, been featured on Shark Tank, and helped thousands of women discover their strength.
                </p>
                <p className="text-fuchsia-400 font-semibold">
                  But the best part? Seeing the transformation in every single student who walks through our doors.
                </p>
              </div>
              <div className="mt-8">
                <img 
                  src={jasmineSignature} 
                  alt="Jasmine's signature"
                  className="h-12 invert opacity-80"
                />
                <p className="text-sm text-gray-400 mt-2">Founder, The Pole Room</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-fuchsia-500/30">
                <img 
                  src={jasminePhoto} 
                  alt="Jasmine, founder of The Pole Room"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              7 Studios Across <span className="gradient-text">Melbourne</span>
            </h2>
            <p className="text-gray-300 mb-8">Find your nearest Pole Room location</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {locations.map((location) => (
                <div 
                  key={location}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 border border-fuchsia-500/30"
                >
                  <MapPin className="w-4 h-4 text-fuchsia-400" />
                  <span className="text-white">{location}</span>
                </div>
              ))}
            </div>
            
            <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden border border-fuchsia-500/20">
              <AllStudiosMap studios={studios} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Real Stories from <span className="gradient-text">Real Students</span>
            </h2>
            <p className="text-xl text-gray-300">Don't just take our word for it</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="cyber-card rounded-2xl p-6"
              >
                <Quote className="w-10 h-10 text-fuchsia-400/40 mb-4" />
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-fuchsia-500/30">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-fuchsia-400">{testimonial.location} Studio</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Got Questions? <span className="gradient-text">We've Got Answers</span>
            </h2>
          </motion.div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="cyber-card rounded-xl border-fuchsia-500/30 px-6"
              >
                <AccordionTrigger className="text-white hover:text-fuchsia-400 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 via-purple-600 to-cyan-600" />
        <div className="absolute inset-0 cyber-grid opacity-20" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of women who've discovered the joy of pole dancing. Your journey starts with just one class.
            </p>
            <Button className="bg-white text-purple-900 hover:bg-gray-100 font-bold text-lg px-8 py-6 h-auto">
              Yes, Claim My Beginner Spot
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-purple-200 text-sm mt-6">
              Limited spots available • No experience needed • All bodies welcome
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      {/* Add marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FirstTimers;
