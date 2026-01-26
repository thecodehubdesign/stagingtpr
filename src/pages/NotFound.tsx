import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import glitchImage from "@/assets/404-glitch.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />
      
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px] animate-pulse" />
      
      <main className="relative z-10 min-h-[80vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glitch Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative"
          >
            <img 
              src={glitchImage} 
              alt="404 Error" 
              className="w-64 h-64 mx-auto object-contain opacity-80"
            />
            {/* Glitch overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </motion.div>

          {/* 404 Text with Glitch Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <h1 className="text-8xl sm:text-9xl font-bold gradient-text mb-4 tracking-wider">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-8xl sm:text-9xl font-bold text-cyan-400/20 blur-sm animate-pulse">
                404
              </span>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              Oops! This page is <span className="text-fuchsia-400">off the pole</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <p className="text-sm text-muted-foreground/70 font-mono mb-8">
              Attempted path: <span className="text-cyan-400">{location.pathname}</span>
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              className="neon-button text-black font-bold px-8 py-6 h-auto"
            >
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="border-fuchsia-500/50 hover:border-fuchsia-500 hover:bg-fuchsia-500/10 px-8 py-6 h-auto"
            >
              <Link to="/studios">
                <Search className="w-5 h-5 mr-2" />
                Find a Studio
              </Link>
            </Button>

            <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="text-muted-foreground hover:text-white px-8 py-6 h-auto"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 pt-8 border-t border-border/50"
          >
            <p className="text-sm text-muted-foreground mb-4">Popular pages you might be looking for:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "First Timers", path: "/first-timers" },
                { label: "Classes", path: "/programs/pole" },
                { label: "Pricing", path: "/pricing" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-fuchsia-400 hover:text-fuchsia-300 underline underline-offset-4 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
