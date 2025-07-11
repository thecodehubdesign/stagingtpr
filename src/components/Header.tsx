
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import VoucherClaimForm from './VoucherClaimForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Classes', href: '/classes' },
    { name: 'Studios', href: '/studios' },
    { name: 'Instructors', href: '/instructors' },
    { name: 'First Timers', href: '/first-timers' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-fuchsia-500/30 cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-fuchsia-400" />
              <h1 className="text-2xl font-bold gradient-text">The Pole Room</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-fuchsia-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="cyber-border text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300">
              Free Gifts 💝
            </Button>
            <VoucherClaimForm />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-fuchsia-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 border-t border-fuchsia-500/30 cyber-grid">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-fuchsia-400 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button variant="outline" className="cyber-border text-cyan-400 hover:bg-cyan-400/10">
                  Free Gifts 💝
                </Button>
                <VoucherClaimForm />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
