import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CheckCircle, Copy, Check, Calendar, Clock, ShoppingBag, ChevronRight, X, Newspaper, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { products } from '@/data/products';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';

import appStore from '@/assets/app-store.png';
import googlePlay from '@/assets/google-play.png';
import appMockup from '@/assets/app-mockup.png';
import jasmineSignature from '@/assets/jasmine-signature.png';
import jasmineVerified from '@/assets/jasmine-verified.png';

const considerationPosts = [
  {
    id: 1,
    title: "Understanding Our Cancellation Policy",
    excerpt: "Life happens! Here's everything you need to know about our flexible cancellation policy.",
    image: "/lovable-uploads/8a7c62c9-86e6-4d10-a555-f79e5ed95001.png",
    date: "January 2024",
    author: "Admin Team",
    readTime: "3 min read",
    content: `<h3>Cancellation Window</h3>
      <p>Classes can be cancelled up to <strong>12 hours before</strong> the scheduled start time without any penalty. Simply cancel through the app or website.</p>
      <h3>Late Cancellations</h3>
      <p>Cancellations made less than 12 hours before class time will result in a late cancellation fee or loss of your class credit. We understand emergencies happen - please contact us if you have extenuating circumstances.</p>
      <h3>No-Shows</h3>
      <p>If you don't show up to a booked class without cancelling, you will forfeit that class credit. Please be mindful of other students who may be on the waitlist!</p>
      <h3>How to Cancel</h3>
      <p>You can cancel through our booking app, website, or by calling the studio directly. The easiest way is through the app where you can manage all your bookings.</p>`
  },
  {
    id: 2,
    title: "Studio Safety Guidelines",
    excerpt: "Stay safe and get the most out of every class with these important guidelines.",
    image: "/lovable-uploads/930cee8a-33f0-430b-8ef4-34c83d23d2d3.png",
    date: "January 2024",
    author: "Safety Team",
    readTime: "4 min read",
    content: `<h3>Grip Products</h3>
      <p>We provide grip aids at the studio, but feel free to bring your own. Apply grip <strong>sparingly</strong> - too much can actually make you slip!</p>
      <h3>No Moisturisers</h3>
      <p>Please avoid applying moisturiser, oils, or lotions on the day of class. These make your skin slippery and can be dangerous on the pole.</p>
      <h3>Jewellery</h3>
      <p>Remove all rings, watches, bracelets and dangling earrings before class. We have lockers available to store your valuables safely.</p>
      <h3>Spotting</h3>
      <p>Our instructors are trained in spotting techniques. Always wait for a spotter when trying new moves, especially inversions.</p>
      <h3>Listen to Your Body</h3>
      <p>Pole is challenging! Take breaks when you need them, stay hydrated, and never push through sharp pain.</p>`
  },
  {
    id: 3,
    title: "What to Expect in Your First Class",
    excerpt: "Nervous about your first class? Here's exactly what will happen so you can relax and enjoy.",
    image: "/lovable-uploads/64db70f4-cca6-4e12-9fa1-d1180c4595ae.png",
    date: "January 2024",
    author: "Instructor Team",
    readTime: "5 min read",
    content: `<h3>Warm Up (10 mins)</h3>
      <p>Every class starts with a fun warm-up to get your body ready. We'll do some cardio, stretches, and wrist exercises.</p>
      <h3>Technique & Moves (35 mins)</h3>
      <p>This is the main part of class where you'll learn new spins, tricks, or transitions. Your instructor will break down each move step-by-step.</p>
      <h3>Practice Time (10 mins)</h3>
      <p>You'll have time to practice what you've learned with your instructor available for help and feedback.</p>
      <h3>Cool Down (5 mins)</h3>
      <p>We finish with stretches to help prevent soreness and improve flexibility over time.</p>
      <h3>The Vibe</h3>
      <p>Classes are supportive and judgement-free. Everyone is focused on their own journey - we celebrate each other's wins!</p>`
  },
  {
    id: 4,
    title: "Bringing Friends to Class",
    excerpt: "Pole is more fun with friends! Here's how you can share the experience.",
    image: "/lovable-uploads/c618da64-e3a8-4e28-a461-697581921ed0.png",
    date: "January 2024",
    author: "Community Team",
    readTime: "2 min read",
    content: `<h3>Buddy Discounts</h3>
      <p>When you refer a friend who signs up, you both receive a discount on your next term. Ask at reception for our current referral offers!</p>
      <h3>Group Bookings</h3>
      <p>Want to book a class with a group of friends? Contact us about group rates and private sessions.</p>
      <h3>Shared Experience</h3>
      <p>Having a friend in class means you have someone to practice with, laugh with, and celebrate achievements together. Many of our students have formed lifelong friendships at the studio!</p>
      <h3>Different Skill Levels?</h3>
      <p>No problem! Friends can attend different level classes and still enjoy the studio together. Our timetable has overlapping class times so you can arrive and leave together.</p>`
  }
];

const considerations = [
  { question: "What's the cancellation policy?", blogPostId: 1 },
  { question: "Studio safety guidelines", blogPostId: 2 },
  { question: "What to expect in your first class", blogPostId: 3 },
  { question: "Can I bring a friend?", blogPostId: 4 }
];

const Congrats = () => {
  useScrollToTop();
  const [copied, setCopied] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<typeof considerationPosts[0] | null>(null);
  const isMobile = useIsMobile();

  const referralMessage = `Hey! I just signed up for The Pole Room's 4-Week Intro To Pole Program. It's basically a fun workout where we learn spins and tricks on the pole. They have a 40% off sale on right now and it starts Feb 9th. You should 100% do it with me. Grab a spot so we can go together: try.thepoleroom.com.au/intro-to-pole-a`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralMessage);
    setCopied(true);
    toast.success("Message copied to clipboard!");
    setTimeout(() => setCopied(false), 3000);
  };

  const handleTopicClick = (blogPostId: number) => {
    const post = considerationPosts.find(p => p.id === blogPostId);
    if (post) {
      setSelectedPost(post);
      setIsPanelOpen(true);
    }
  };

  // Confetti celebration on page load
  useEffect(() => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      
      // Left side burst
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: ['#ff00ff', '#00ffff', '#e879f9', '#22d3ee', '#a855f7']
      });
      
      // Right side burst  
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: ['#ff00ff', '#00ffff', '#e879f9', '#22d3ee', '#a855f7']
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  const whatToWear = [
    'Shorts (bike shorts recommended)',
    'Singlet or crop top',
    'Water bottle + towel',
    'Bare feet or socks',
    'No moisturiser on skin',
    'Somewhere to store jewellery'
  ];

  const appFeatures = [
    'Create your account using your email',
    'Find your passes under "My Account"',
    'Check the weekly schedule anytime',
    'Book and manage your classes easily'
  ];

  // Get related shop items (protective gear and apparel for beginners)
  const relatedProducts = products.filter(p => 
    ['Protective Gear', 'Grip & Safety', 'Apparel'].includes(p.category)
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/80 to-gray-900">
      <Header />
      
      {/* Background Effects */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="fixed top-20 left-10 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
      
      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 mb-6"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Congratulations!
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
              You've secured your spot in the Intro To Pole Program. We're so excited to have you join our community!
            </p>
            
            {/* Important Steps Callout */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 border border-fuchsia-500/40">
              <span className="text-white font-semibold">⚡ Important: Complete these 3 steps so you're ready to go!</span>
            </div>
          </motion.div>

          {/* Step 1: Refer A Friend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="cyber-card p-6 sm:p-8 rounded-2xl mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/30 mb-4">
              <span className="text-fuchsia-400 font-semibold text-sm">Step 1 of 3</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Refer A Friend
            </h2>
            <p className="text-gray-300 mb-6">
              Send this to your friends so they come along! Know someone who would love pole? Invite them to join you on this journey.
            </p>
            
            {/* iPhone-style message bubble with iMessage tail */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div 
                  className="max-w-sm rounded-2xl rounded-br-sm p-4 text-white text-sm leading-relaxed"
                  style={{ 
                    backgroundColor: '#077dff',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif',
                    fontWeight: 400,
                    letterSpacing: '-0.01em'
                  }}
                >
                  {referralMessage}
                </div>
                {/* iMessage tail */}
                <svg 
                  className="absolute -bottom-[1px] -right-[7px]" 
                  width="12" 
                  height="16" 
                  viewBox="0 0 12 16"
                >
                  <path 
                    d="M0 0 Q0 16 12 16 L0 16 Z" 
                    fill="#077dff"
                  />
                </svg>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button 
                onClick={handleCopy}
                className="neon-button"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Message
                  </>
                )}
              </Button>
            </div>
          </motion.div>

          {/* Step 2: Download The App */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="cyber-card p-6 sm:p-8 rounded-2xl mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/30 mb-4">
              <span className="text-fuchsia-400 font-semibold text-sm">Step 2 of 3</span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Download The App
                </h2>
                <p className="text-gray-300 mb-6">
                  Get the Pole Room app to manage your bookings, view schedules, and stay connected with the studio.
                </p>
                
                <ul className="space-y-3 mb-6">
                  {appFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://apps.apple.com/app/the-pole-room" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105"
                  >
                    <img src={appStore} alt="Download on App Store" className="h-12" />
                  </a>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.thepoleroom" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105"
                  >
                    <img src={googlePlay} alt="Get it on Google Play" className="h-12" />
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <motion.img 
                  src={appMockup} 
                  alt="The Pole Room App" 
                  className="max-w-xs w-full h-auto drop-shadow-2xl"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Step 3: Orientation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="cyber-card p-6 sm:p-8 rounded-2xl mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/30 mb-4">
              <span className="text-fuchsia-400 font-semibold text-sm">Step 3 of 3</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Schedule Your Orientation Session
            </h2>
            <p className="text-gray-300 mb-6">
              Book your orientation session where we'll show you around the studio and answer any questions before your first class.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-gray-800/50 border border-fuchsia-500/30 rounded-xl p-4">
                <Calendar className="w-6 h-6 text-fuchsia-400" />
                <div>
                  <p className="text-white font-semibold">Orientation Date</p>
                  <p className="text-gray-400 text-sm">Check your email for details</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-800/50 border border-fuchsia-500/30 rounded-xl p-4">
                <Clock className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="text-white font-semibold">Arrive 15 mins early</p>
                  <p className="text-gray-400 text-sm">To get settled in</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What To Wear - Separate Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="cyber-card p-6 sm:p-8 rounded-2xl mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              What To Wear
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {whatToWear.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-gray-800/30 border border-gray-700/50 rounded-lg p-3"
                >
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Transition Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.82, duration: 0.4 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/40">
              <span className="text-white font-semibold text-lg">
                ✅ Almost Ready to Go: Other things to consider!
              </span>
            </div>
          </motion.div>

          {/* Other Things to Consider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="cyber-card p-6 sm:p-8 rounded-2xl mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Other Things to Consider
            </h2>
            <p className="text-gray-300 mb-6">
              Click on any topic to learn more about studio policies and what to expect.
            </p>
            
            <div className="space-y-3">
              {considerations.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleTopicClick(item.blogPostId)}
                  className="group cursor-pointer border border-fuchsia-500/20 rounded-xl p-4 bg-gray-900/50 hover:border-fuchsia-500/50 hover:bg-gray-900/80 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium text-white group-hover:text-fuchsia-400 transition-colors">
                      {item.question}
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      <Badge variant="outline" className="text-xs border-fuchsia-500/30 text-fuchsia-400 hidden sm:flex">
                        <Newspaper className="w-3 h-3 mr-1" />
                        Blog
                      </Badge>
                      <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-fuchsia-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Shop Related Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.5 }}
            className="cyber-card p-6 sm:p-8 rounded-2xl mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <ShoppingBag className="w-6 h-6 text-fuchsia-400" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Get Ready For Class
              </h2>
            </div>
            <p className="text-gray-300 mb-6">
              Grab some essentials to make your first classes even better!
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {relatedProducts.map((product) => (
                <div 
                  key={product.id}
                  className="bg-gray-800/50 border border-gray-700/50 hover:border-fuchsia-500/50 rounded-xl p-4 transition-all duration-300"
                >
                  <div className="w-full aspect-square bg-gray-800/80 border border-fuchsia-500/20 rounded-lg overflow-hidden mb-3">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-white font-medium text-sm mb-1 line-clamp-1">{product.name}</h3>
                  <p className="text-gray-400 text-xs mb-2 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-fuchsia-400 font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-500 text-xs line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/products">
                <Button className="neon-button">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  View All Products
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Founder Sign-off */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.5 }}
            className="cyber-card p-6 sm:p-8 rounded-2xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                  We can't wait to meet you in the studio and see you{' '}
                  <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                    shine
                  </span>
                </h2>
                <p className="text-gray-300">
                  Your pole journey starts here. Get ready to discover strength you never knew you had.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <img 
                  src={jasmineVerified} 
                  alt="Jasmine - Founder" 
                  className="w-24 h-24 rounded-full border-2 border-fuchsia-500 shadow-lg shadow-fuchsia-500/30 mb-4"
                />
                <img 
                  src={jasmineSignature} 
                  alt="Jasmine Zapka" 
                  className="h-8 mb-2 invert brightness-0 filter"
                />
                <p className="text-fuchsia-400 text-sm font-medium">Founder @ The Pole Room</p>
              </div>
            </div>
            
          </motion.div>
          
        </div>
      </main>

      {/* Side Panel for Blog Posts */}
      <Sheet open={isPanelOpen} onOpenChange={setIsPanelOpen}>
        <SheetContent 
          side={isMobile ? "bottom" : "left"}
          className={`bg-gray-950 border-fuchsia-500/30 p-0 flex flex-col
            ${isMobile ? 'h-[90vh] w-full inset-x-0 rounded-t-2xl' : 'w-full sm:w-1/2 sm:max-w-[50vw] h-full'}`}
        >
          <SheetClose className="absolute right-4 top-4 z-50 rounded-full bg-gray-800/80 p-2 hover:bg-fuchsia-500/20 transition-colors">
            <X className="h-5 w-5 text-white" />
          </SheetClose>

          {selectedPost && (
            <>
              <SheetHeader className="p-6 pb-4 border-b border-fuchsia-500/20">
                <Badge className="bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30 w-fit mb-3">
                  <Newspaper className="w-3 h-3 mr-1" />
                  Blog Post
                </Badge>
                <SheetTitle className="text-xl sm:text-2xl font-bold text-white text-left pr-8">
                  {selectedPost.title}
                </SheetTitle>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mt-2">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />{selectedPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />{selectedPost.readTime}
                  </span>
                </div>
              </SheetHeader>
              
              <ScrollArea className="flex-1 p-6">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title} 
                  className="w-full h-48 sm:h-64 object-cover rounded-xl mb-6" 
                />
                <p className="text-fuchsia-300 text-lg mb-6">{selectedPost.excerpt}</p>
                <div 
                  className="prose prose-invert prose-fuchsia max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-strong:text-white" 
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }} 
                />
              </ScrollArea>
            </>
          )}
        </SheetContent>
      </Sheet>
      
      <Footer />
    </div>
  );
};

export default Congrats;
