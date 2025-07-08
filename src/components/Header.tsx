
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Classes', href: '#classes' },
    { name: 'Studios', href: '#studios' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 cyberpunk-bg backdrop-blur-md border-b border-electric-purple/30 scan-lines">
      {/* Animated data streams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="data-stream" style={{ left: '10%', animationDelay: '0s' }}></div>
        <div className="data-stream" style={{ left: '30%', animationDelay: '1s' }}></div>
        <div className="data-stream" style={{ left: '60%', animationDelay: '2s' }}></div>
        <div className="data-stream" style={{ left: '85%', animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="relative">
              <Zap className="w-8 h-8 neon-text animate-pulse" />
              <div className="absolute inset-0 w-8 h-8 bg-electric-purple/20 rounded-full blur-md"></div>
            </div>
            <h1 className="text-2xl font-orbitron font-bold neon-text tracking-wider">
              THE POLE ROOM
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-300 hover:text-electric-purple px-3 py-2 text-sm font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-electric-purple/10 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-purple group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="hologram-border bg-transparent text-cyber-blue hover:bg-cyber-blue/10 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,247,0.5)]"
            >
              Free Gifts 💝
            </Button>
            <Button className="cyberpunk-button text-black font-bold">
              Free Trial Class
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-electric-purple transition-colors duration-300 relative group"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              <div className="absolute inset-0 bg-electric-purple/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 cyberpunk-bg border-t border-electric-purple/30">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-electric-purple block px-3 py-2 text-base font-medium transition-colors duration-300 hover:bg-electric-purple/10 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button 
                  variant="outline" 
                  className="hologram-border bg-transparent text-cyber-blue hover:bg-cyber-blue/10"
                >
                  Free Gifts 💝
                </Button>
                <Button className="cyberpunk-button text-black font-bold">
                  Free Trial Class
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
