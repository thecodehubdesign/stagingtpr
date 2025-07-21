import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import VoucherClaimForm from './VoucherClaimForm';
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

  const aboutUsItems = [
    { name: 'About Us', href: '/about', description: 'Learn about our story, mission and values' },
    { name: 'Instructors', href: '/instructors', description: 'Meet our amazing team of certified instructors' },
    { name: 'Pricing', href: '/pricing', description: 'Flexible packages and membership options' },
    { name: 'Events', href: '/events', description: 'Competitions, showcases, and community events' },
    { name: 'Franchise', href: '/franchise', description: 'Join the movement and open your own studio' },
    { name: 'Blog', href: '/blog', description: 'Tips, stories, and inspiration from our community' },
    { name: 'Contact', href: '/contact', description: 'Get in touch with questions or to book a class' },
  ];

  const classesItems = [
    { name: 'All Classes', href: '/classes', description: 'Explore our full range of classes' },
    { name: 'Pole Classes', href: '/classes/beginner-pole', description: 'Perfect starting point for newcomers' },
    { name: 'Aerial Silks Classes', href: '/classes/aerial-silks', description: 'Grace and strength in the air' },
    { name: 'Lyra Hoop Classes', href: '/classes/lyra-hoop', description: 'Elegant moves on the aerial hoop' },
    { name: 'Stretch Classes', href: '/classes/flexibility', description: 'Improve your range of motion' },
    { name: 'Dance Classes', href: '/classes/dance', description: 'Improve your range of motion' },
  ];

  const studiosItems = [
    { name: 'All Locations', href: '/studios', description: 'Find your perfect studio location' },
    { name: 'Eltham', href: '/studios/eltham', description: 'Our Eltham location in the heart of the community' },
    { name: 'Kilsyth', href: '/studios/kilsyth', description: 'Modern facilities in beautiful Kilsyth' },
    { name: 'Highett', href: '/studios/highett', description: 'Convenient Highett studio with ample parking' },
    { name: 'Mitcham', href: '/studios/mitcham', description: 'Spacious Mitcham location with all amenities' },
    { name: 'Melbourne CBD', href: '/studios/cbd', description: 'Central city location for urban convenience' },
    { name: 'Narre Warren', href: '/studios/narre-warren', description: 'Southeast Melbourne hub in Narre Warren' },
  ];

  const singleNavItems = [
    { name: 'First Timers', href: '/first-timers' },
    { name: 'Shop', href: '/products' }
  ];

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
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {/* About Us Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-300 hover:text-fuchsia-400 bg-transparent data-[state=open]:bg-gray-800/50">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1">
                      {aboutUsItems.map((item) => (
                        <ListItem
                          key={item.name}
                          title={item.name}
                          href={item.href}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Classes Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-300 hover:text-fuchsia-400 bg-transparent data-[state=open]:bg-gray-800/50">
                    Classes
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1">
                      {classesItems.map((item) => (
                        <ListItem
                          key={item.name}
                          title={item.name}
                          href={item.href}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Studios Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-300 hover:text-fuchsia-400 bg-transparent data-[state=open]:bg-gray-800/50">
                    Studios
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1">
                      {studiosItems.map((item) => (
                        <ListItem
                          key={item.name}
                          title={item.name}
                          href={item.href}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Single Items */}
                {singleNavItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <button onClick={() => handleNavigation(item.href)}>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-300 hover:text-fuchsia-400 bg-transparent hover:bg-gray-800/50")}>
                        {item.name}
                      </NavigationMenuLink>
                    </button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Search and CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchMenu />
            <Button 
              asChild
              variant="outline" 
              className="cyber-border text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <Link to="/free-gifts">
                Free Gifts 💝
              </Link>
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
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <SearchMenu />
              </div>

              <Accordion type="multiple" className="w-full">
                {/* Mobile About Us Accordion */}
                <AccordionItem value="about-us" className="border-fuchsia-500/30">
                  <AccordionTrigger className="px-3 py-2 text-sm font-medium text-fuchsia-400 hover:text-fuchsia-300">
                    About Us
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-1">
                      {aboutUsItems.map((item) => (
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

                {/* Mobile Classes Accordion */}
                <AccordionItem value="classes" className="border-fuchsia-500/30">
                  <AccordionTrigger className="px-3 py-2 text-sm font-medium text-fuchsia-400 hover:text-fuchsia-300">
                    Classes
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-1">
                      {classesItems.map((item) => (
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
              </Accordion>

              {/* Mobile Single Items */}
              {singleNavItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="text-gray-300 hover:text-fuchsia-400 block px-3 py-2 text-sm font-medium w-full text-left"
                >
                  {item.name}
                </button>
              ))}

              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button 
                  asChild
                  variant="outline" 
                  className="cyber-border text-cyan-400 hover:bg-cyan-400/10"
                >
                  <Link to="/free-gifts">
                    Free Gifts 💝
                  </Link>
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
