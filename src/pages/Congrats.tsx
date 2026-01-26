import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Copy, Check, Calendar, Clock, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { products } from '@/data/products';

import appStore from '@/assets/app-store.png';
import googlePlay from '@/assets/google-play.png';
import appMockup from '@/assets/app-mockup.png';
import jasmineSignature from '@/assets/jasmine-signature.png';
import jasmineVerified from '@/assets/jasmine-verified.png';

const Congrats = () => {
  useScrollToTop();
  const [copied, setCopied] = useState(false);

  const referralMessage = `Hey! I just signed up for The Pole Room's 4-Week Intro To Pole Program. It's basically a fun workout where we learn spins and tricks on the pole. They have a 40% off sale on right now and it starts Feb 9th. You should 100% do it with me. Grab a spot so we can go together: try.thepoleroom.com.au/intro-to-pole-a`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralMessage);
    setCopied(true);
    toast.success("Message copied to clipboard!");
    setTimeout(() => setCopied(false), 3000);
  };

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
            
            {/* iPhone-style message bubble - CENTRED */}
            <div className="flex justify-center mb-6">
              <div 
                className="max-w-sm rounded-2xl rounded-br-md p-4 text-white text-sm leading-relaxed"
                style={{ backgroundColor: '#077dff' }}
              >
                {referralMessage}
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
              Get Ready For Orientation
            </h2>
            <p className="text-gray-300 mb-6">
              Before your first class, you'll attend a quick orientation session where we'll show you around the studio and answer any questions.
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

          {/* Shop Related Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
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
                  <div className="w-full aspect-square bg-gradient-to-br from-fuchsia-900/30 to-cyan-900/30 rounded-lg overflow-hidden mb-3">
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
            transition={{ delay: 1.0, duration: 0.5 }}
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
      
      <Footer />
    </div>
  );
};

export default Congrats;
