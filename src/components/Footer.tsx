import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, Star, Clock, Users, Heart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import FreeTrialOffer from '@/components/FreeTrialOffer';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh-CN', name: '中文 (简体)' },
  { code: 'zh-TW', name: '中文 (繁體)' },
  { code: 'es', name: 'Español' },
  { code: 'vi', name: 'Tiếng Việt' },
  { code: 'ar', name: 'العربية' },
  { code: 'ko', name: '한국어' },
  { code: 'ja', name: '日本語' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
];

const Footer = () => {
  const handleLanguageChange = (langCode: string) => {
    // Try to use Google Translate's widget directly first
    const googleTranslateFrame = document.querySelector('.goog-te-menu-frame') as HTMLIFrameElement;
    
    if (googleTranslateFrame && googleTranslateFrame.contentDocument) {
      // Find the language in the Google Translate dropdown
      const gtLinks = googleTranslateFrame.contentDocument.querySelectorAll('.goog-te-menu2-item span.text');
      gtLinks.forEach((link: Element) => {
        const linkText = (link as HTMLElement).innerText.toLowerCase();
        const targetLang = languages.find(l => l.code === langCode)?.name.toLowerCase() || '';
        if (linkText.includes(targetLang.split(' ')[0]) || (langCode === 'en' && linkText.includes('english'))) {
          (link as HTMLElement).click();
        }
      });
      return;
    }
    
    // Fallback: Try to find and click the Google Translate combo box
    const gtCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (gtCombo) {
      gtCombo.value = langCode;
      gtCombo.dispatchEvent(new Event('change', { bubbles: true }));
      return;
    }
    
    // Last resort: Set cookies and reload (works on subsequent page loads)
    const hostname = window.location.hostname;
    const domains = ['', hostname, `.${hostname}`];
    
    // Clear existing cookies
    domains.forEach(domain => {
      const domainPart = domain ? `; domain=${domain}` : '';
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${domainPart}`;
    });
    
    if (langCode !== 'en') {
      const translateCookie = `/en/${langCode}`;
      document.cookie = `googtrans=${translateCookie}; path=/`;
      document.cookie = `googtrans=${translateCookie}; path=/; domain=${hostname}`;
      document.cookie = `googtrans=${translateCookie}; path=/; domain=.${hostname}`;
    }
    
    // Reload the page
    window.location.href = window.location.pathname + window.location.search;
  };
  const programLinks = [
    { name: 'Pole Dancing', href: '/programs/pole/beginner' },
    { name: 'Aerial Hoop', href: '/programs/aerial-hoop/beginner' },
    { name: 'Aerial Silks', href: '/programs/aerial-silks/beginner' },
    { name: 'Casual Classes', href: '/programs/casual-classes' },
    { name: 'Private Lessons', href: '/programs/private-lessons' },
    { name: 'Workshops', href: '/programs/workshops' },
  ];

  const companyLinks = [
    { name: 'Our Story', href: '/about' },
    { name: 'Instructors', href: '/instructors' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Franchise', href: '/franchise' },
  ];

  const eventsLinks = [
    { name: 'All Events', href: '/events' },
    { name: 'GLOW Showcase', href: '/events/glow' },
    { name: 'SHINE Competition', href: '/events/shine' },
    { name: 'Performance Nights', href: '/events/performance-nights' },
  ];

  const studioLinks = [
    { name: 'All Studios', href: '/studios' },
    { name: 'Eltham', href: '/studios/eltham' },
    { name: 'Kilsyth', href: '/studios/kilsyth' },
    { name: 'Highett', href: '/studios/highett' },
    { name: 'Mitcham', href: '/studios/mitcham' },
    { name: 'Melbourne CBD', href: '/studios/cbd' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-500' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Free Trial Offer Section */}
      <FreeTrialOffer 
        backgroundImage="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
        limitedTimeText="Limited Time Offer" 
        mainHeading="Experience It for Yourself – On Us!" 
        description="Book a free trial and take your first step into a more confident," 
        highlightedWord="empowered" 
        benefits={[
          { icon: Star, text: "No experience necessary" },
          { icon: Clock, text: "45-minute trial class" },
          { icon: Users, text: "Small, supportive groups" },
          { icon: Heart, text: "Welcoming community" },
        ]} 
        buttonText="Book My Free Trial" 
        disclaimerText="No credit card required • Available at all locations" 
      />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 md:col-span-3">
            <h3 className="text-2xl font-bold gradient-text mb-4">The Pole Room</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering women through pole and aerial fitness. Discover your strength, grace, and confidence with us.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-fuchsia-400" />
                <span className="text-gray-400">1300 230 938</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-fuchsia-400" />
                <span className="text-gray-400">info@thepoleroom.com.au</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-fuchsia-400 mt-0.5" />
                <span className="text-gray-400">6 Studios Across<br />Melbourne, Victoria</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map(social => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-colors ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-fuchsia-400">Programs</h4>
            <ul className="space-y-2">
              {programLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-fuchsia-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Events & Showcases */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-fuchsia-400">Events & Showcases</h4>
            <ul className="space-y-2">
              {eventsLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-fuchsia-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studios */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-fuchsia-400">Studios</h4>
            <ul className="space-y-2">
              {studioLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-fuchsia-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-fuchsia-400">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-fuchsia-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} The Pole Room. All rights reserved.
            </div>
            
            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-fuchsia-400" />
              <span className="text-gray-400 text-sm">Language:</span>
              <Select onValueChange={handleLanguageChange} defaultValue="en">
                <SelectTrigger className="w-[140px] h-8 bg-gray-800 border-fuchsia-500/30 text-gray-300 text-sm hover:border-fuchsia-500/60">
                  <SelectValue placeholder="English" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-fuchsia-500/30 z-[9999]">
                  {languages.map((lang) => (
                    <SelectItem 
                      key={lang.code} 
                      value={lang.code}
                      className="text-gray-300 hover:bg-fuchsia-500/20 focus:bg-fuchsia-500/20 focus:text-white cursor-pointer"
                    >
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* Google Translate element - positioned off-screen but functional */}
            <div id="google_translate_element" className="fixed -bottom-24 left-0 opacity-0 pointer-events-none"></div>
            
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <Link to="/first-timers" className="text-gray-400 hover:text-fuchsia-400 transition-colors">First Timers</Link>
              <Link to="/get-started" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Get Started</Link>
              <a href="#" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-fuchsia-400 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;