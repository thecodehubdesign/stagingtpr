import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchMenu } from './SearchMenu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Programs Mega Menu Data
  const programsData = {
    pole: {
      title: 'Pole Dancing',
      items: [
        { name: 'Beginner', href: '/programs/pole/beginner', description: 'Start your pole journey' },
        { name: 'Intermediate', href: '/programs/pole/intermediate', description: 'Elevate your skills' },
        { name: 'Advanced', href: '/programs/pole/advanced', description: 'Master complex moves' },
        { name: 'Elite', href: '/programs/pole/elite', description: 'Competition level training' },
        { name: '40+ & Fabulous', href: '/programs/pole/40-plus', description: 'Designed for adults 40+' },
        { name: 'Teen Pole', href: '/programs/pole/teens', description: 'Ages 13-17' },
        { name: 'Pure Pole Dance', href: '/programs/pole/pure-pole-dance', description: 'Dance-focused pole' },
        { name: 'Dance Filthy', href: '/programs/pole/dance-filthy', description: 'Exotic & sensual styles' },
        { name: 'Front Splits Masterclass', href: '/programs/pole/front-splits', description: 'Flexibility focused' },
      ]
    },
    aerialHoop: {
      title: 'Aerial Hoop',
      items: [
        { name: 'Beginner', href: '/programs/aerial-hoop/beginner', description: 'Discover aerial grace' },
        { name: 'Intermediate', href: '/programs/aerial-hoop/intermediate', description: 'Soar higher' },
        { name: 'Advanced', href: '/programs/aerial-hoop/advanced', description: 'Defy gravity' },
      ]
    },
    aerialSilks: {
      title: 'Aerial Silks',
      items: [
        { name: 'Beginner', href: '/programs/aerial-silks/beginner', description: 'Embrace the flow' },
        { name: 'Intermediate', href: '/programs/aerial-silks/intermediate', description: 'Weave your story' },
        { name: 'Hammock', href: '/programs/aerial-silks/hammock', description: 'Float and flow' },
      ]
    },
    other: {
      title: 'Other Options',
      items: [
        { name: 'Casual Classes', href: '/programs/casual-classes', description: 'Drop in, have fun' },
        { name: 'Mini Terms', href: '/programs/mini-terms', description: 'Short & sweet programs' },
        { name: 'Private Lessons', href: '/programs/private-lessons', description: 'One-on-one training' },
        { name: 'Workshops', href: '/programs/workshops', description: 'Skill up fast' },
        { name: 'Self Practice', href: '/programs/self-practice', description: 'Practice makes perfect' },
      ]
    }
  };

  const studiosItems = [
    { name: 'All Locations', href: '/studios', description: 'Find your perfect studio' },
    { name: 'Eltham', href: '/studios/eltham', description: 'Our Eltham location' },
    { name: 'Kilsyth', href: '/studios/kilsyth', description: 'Modern Kilsyth studio' },
    { name: 'Highett', href: '/studios/highett', description: 'Convenient Highett location' },
    { name: 'Mitcham', href: '/studios/mitcham', description: 'Spacious Mitcham studio' },
    { name: 'Melbourne CBD', href: '/studios/cbd', description: 'Central city location' },
    { name: 'Narre Warren', href: '/studios/narre-warren', description: 'Southeast Melbourne hub' },
  ];

  const functionsItems = [
    { name: 'Hens Parties', href: '/hens-parties', description: 'Celebrate in style' },
    { name: 'Birthday Parties', href: '/birthday-parties', description: 'Perfect party experience' },
    { name: 'Corporate Events', href: '/corporate-events', description: 'Team building with a twist' },
    { name: 'Custom Events', href: '/custom-events', description: 'Your event, your way' },
  ];

  // About Mega Menu Data (categorized like Programs)
  const aboutData = {
    company: {
      title: 'Company',
      items: [
        { name: 'Our Story', href: '/about', description: 'Learn about our journey' },
        { name: 'Pole vs Gym', href: '/about/pole-vs-gym', description: 'Why pole beats the gym' },
        { name: 'Instructors', href: '/instructors', description: 'Meet our amazing team' },
        { name: 'Pricing', href: '/pricing', description: 'Flexible packages' },
        { name: 'Blog', href: '/blog', description: 'Tips & inspiration' },
        { name: 'Contact', href: '/contact', description: 'Get in touch' },
      ]
    },
    events: {
      title: 'Events & Showcases',
      items: [
        { name: 'All Events', href: '/events', description: 'Overview of all events' },
        { name: 'GLOW Showcase', href: '/events/glow', description: "Australia's largest pole showcase" },
        { name: 'SHINE Competition', href: '/events/shine', description: 'Our premier competition' },
        { name: 'Performance Nights', href: '/events/performance-nights', description: 'End of term showcases' },
      ]
    },
    business: {
      title: 'Business',
      items: [
        { name: 'Franchise', href: '/franchise', description: 'Join the movement' },
        { name: 'Sponsorship', href: '/sponsorship', description: 'Partner with us' },
      ]
    }
  };

  const handleNavigation = useCallback((href: string) => {
    navigate(href);
    setIsMenuOpen(false);
  }, [navigate]);

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
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                {/* First Timers - Single Link */}
                <NavigationMenuItem>
                  <button onClick={() => handleNavigation('/first-timers')}>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-300 hover:text-fuchsia-400 bg-transparent hover:bg-gray-800/50")}>
                      First Timers
                    </NavigationMenuLink>
                  </button>
                </NavigationMenuItem>

                {/* Programs Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-300 hover:text-fuchsia-400 bg-transparent data-[state=open]:bg-gray-800/50">
                    Programs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-4 gap-6 p-6 w-[800px]">
                      {Object.entries(programsData).map(([key, category]) => (
                        <div key={key}>
                          {key === 'pole' ? (
                            <button
                              onClick={() => handleNavigation('/programs/pole')}
                              className="font-semibold text-fuchsia-400 mb-3 text-sm uppercase tracking-wider hover:text-fuchsia-300 transition-colors"
                            >
                              {category.title} →
                            </button>
                          ) : (
                            <h3 className="font-semibold text-fuchsia-400 mb-3 text-sm uppercase tracking-wider">
                              {category.title}
                            </h3>
                          )}
                          <ul className="space-y-2">
                            {category.items.map((item) => (
                              <li key={item.name}>
                                <button
                                  onClick={() => handleNavigation(item.href)}
                                  className="block text-sm text-gray-300 hover:text-fuchsia-400 transition-colors w-full text-left"
                                >
                                  {item.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Studios Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-300 hover:text-fuchsia-400 bg-transparent data-[state=open]:bg-gray-800/50">
                    Studios
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {studiosItems.map((item) => (
                        <ListItem key={item.name} title={item.name} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Functions Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-300 hover:text-fuchsia-400 bg-transparent data-[state=open]:bg-gray-800/50">
                    Functions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {functionsItems.map((item) => (
                        <ListItem key={item.name} title={item.name} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* About Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-300 hover:text-fuchsia-400 bg-transparent data-[state=open]:bg-gray-800/50">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-3 gap-6 p-6 w-[600px]">
                      {Object.entries(aboutData).map(([key, category]) => (
                        <div key={key}>
                          <h3 className="font-semibold text-fuchsia-400 mb-3 text-sm uppercase tracking-wider">
                            {category.title}
                          </h3>
                          <ul className="space-y-2">
                            {category.items.map((item) => (
                              <li key={item.name}>
                                <button
                                  onClick={() => handleNavigation(item.href)}
                                  className="block text-sm text-gray-300 hover:text-fuchsia-400 transition-colors w-full text-left"
                                >
                                  {item.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Shop - Single Link */}
                <NavigationMenuItem>
                  <button onClick={() => handleNavigation('/products')}>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-300 hover:text-fuchsia-400 bg-transparent hover:bg-gray-800/50")}>
                      Shop
                    </NavigationMenuLink>
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <SearchMenu />
            <Button 
              className="neon-button font-bold"
              asChild
            >
              <Link to="/get-started">
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
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
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 border-t border-fuchsia-500/30 cyber-grid max-h-[80vh] overflow-y-auto">
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <SearchMenu />
              </div>

              {/* First Timers */}
              <button
                onClick={() => handleNavigation('/first-timers')}
                className="text-fuchsia-400 font-medium block px-3 py-2 text-sm w-full text-left"
              >
                First Timers
              </button>

              <Accordion type="multiple" className="w-full">
                {/* Mobile Programs Accordion */}
                <AccordionItem value="programs" className="border-fuchsia-500/30">
                  <AccordionTrigger className="px-3 py-2 text-sm font-medium text-fuchsia-400 hover:text-fuchsia-300">
                    Programs
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pl-3">
                      {Object.entries(programsData).map(([key, category]) => (
                        <div key={key}>
                          {key === 'pole' ? (
                            <button
                              onClick={() => handleNavigation('/programs/pole')}
                              className="text-xs uppercase tracking-wider text-fuchsia-400 mb-2 px-3 hover:text-fuchsia-300 transition-colors"
                            >
                              {category.title} →
                            </button>
                          ) : (
                            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 px-3">{category.title}</p>
                          )}
                          {category.items.map((item) => (
                            <button
                              key={item.name}
                              onClick={() => handleNavigation(item.href)}
                              className="text-gray-300 hover:text-fuchsia-400 block px-3 py-1.5 text-sm w-full text-left"
                            >
                              {item.name}
                            </button>
                          ))}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Mobile Studios Accordion */}
                <AccordionItem value="studios" className="border-fuchsia-500/30">
                  <AccordionTrigger className="px-3 py-2 text-sm font-medium text-fuchsia-400 hover:text-fuchsia-300">
                    Studios
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-1">
                      {studiosItems.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => handleNavigation(item.href)}
                          className="text-gray-300 hover:text-fuchsia-400 block px-6 py-2 text-sm w-full text-left"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Mobile Functions Accordion */}
                <AccordionItem value="functions" className="border-fuchsia-500/30">
                  <AccordionTrigger className="px-3 py-2 text-sm font-medium text-fuchsia-400 hover:text-fuchsia-300">
                    Functions
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-1">
                      {functionsItems.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => handleNavigation(item.href)}
                          className="text-gray-300 hover:text-fuchsia-400 block px-6 py-2 text-sm w-full text-left"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Mobile About Accordion */}
                <AccordionItem value="about" className="border-fuchsia-500/30">
                  <AccordionTrigger className="px-3 py-2 text-sm font-medium text-fuchsia-400 hover:text-fuchsia-300">
                    About
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pl-3">
                      {Object.entries(aboutData).map(([key, category]) => (
                        <div key={key}>
                          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 px-3">{category.title}</p>
                          {category.items.map((item) => (
                            <button
                              key={item.name}
                              onClick={() => handleNavigation(item.href)}
                              className="text-gray-300 hover:text-fuchsia-400 block px-3 py-1.5 text-sm w-full text-left"
                            >
                              {item.name}
                            </button>
                          ))}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Shop */}
              <button
                onClick={() => handleNavigation('/products')}
                className="text-gray-300 hover:text-fuchsia-400 block px-3 py-2 text-sm font-medium w-full text-left"
              >
                Shop
              </button>

              <div className="px-3 pt-4">
                <Button 
                  className="w-full neon-button font-bold"
                  asChild
                >
                  <Link to="/get-started">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button"> & { title: string; href: string }
>(({ className, title, children, href, ...props }, ref) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(href);
  }, [navigate, href]);

  return (
    <li>
      <NavigationMenuLink asChild>
        <button
          ref={ref}
          onClick={handleClick}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800/50 hover:text-fuchsia-400 focus:bg-gray-800/50 focus:text-fuchsia-400 w-full text-left",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-gray-300">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
            {children}
          </p>
        </button>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Header;
