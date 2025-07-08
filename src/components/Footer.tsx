
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    console.log('Newsletter subscription:', email);
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Classes', href: '#classes' },
    { name: 'Studios', href: '#studios' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faqs' },
    { name: 'Contact', href: '#contact' }
  ];

  const classTypes = [
    { name: 'Pole Dancing', href: '#pole' },
    { name: 'Aerial Silks', href: '#aerial' },
    { name: 'Lyra Hoop', href: '#lyra' },
    { name: 'Dance & Floorwork', href: '#dance' },
    { name: 'Flexibility', href: '#flexibility' },
    { name: 'Private Lessons', href: '#private' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-rose-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Stay in the Loop</h3>
            <p className="text-rose-100 mb-6">Get the latest news, tips, and exclusive offers delivered to your inbox</p>
            
            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-rose-200"
                  />
                  <Button type="submit" className="bg-white text-rose-600 hover:bg-rose-50 font-semibold px-6">
                    Subscribe
                  </Button>
                </div>
              </form>
            ) : (
              <div className="bg-white/10 rounded-lg p-4 max-w-md mx-auto">
                <p className="text-white font-medium">Thank you for subscribing! 💕</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">The Pole Room</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering women through pole and aerial fitness. Discover your strength, grace, and confidence with us.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-rose-400" />
                <span className="text-gray-400">(03) 9123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-rose-400" />
                <span className="text-gray-400">hello@thepoleroom.com.au</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-rose-400 mt-0.5" />
                <span className="text-gray-400">Melbourne, Victoria<br />Australia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-rose-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Classes</h4>
            <ul className="space-y-2">
              {classTypes.map((classType) => (
                <li key={classType.name}>
                  <a href={classType.href} className="text-gray-400 hover:text-rose-400 transition-colors text-sm">
                    {classType.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-colors ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Studio Hours */}
            <div>
              <h5 className="font-medium mb-2 text-sm">Studio Hours</h5>
              <div className="text-gray-400 text-sm space-y-1">
                <div>Mon-Fri: 6:00am - 9:00pm</div>
                <div>Saturday: 8:00am - 6:00pm</div>
                <div>Sunday: 9:00am - 5:00pm</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 The Pole Room. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
