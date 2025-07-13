
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import VoucherClaimForm from './VoucherClaimForm';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const aboutUsItems = [
    { name: 'Instructors', href: '/instructors', description: 'Meet our amazing team of certified instructors' },
    { name: 'Pricing', href: '/pricing', description: 'Flexible packages and membership options' },
    { name: 'Events', href: '/events', description: 'Competitions, showcases, and community events' },
    { name: 'Franchise', href: '/franchise', description: 'Join the movement and open your own studio' },
    { name: 'Blog', href: '/blog', description: 'Tips, stories, and inspiration from our community' },
  ];

  const classesItems = [
    { name: 'All Classes', href: '/classes', description: 'Explore our full range of classes' },
    { name: 'Beginner Pole', href: '/classes/beginner-pole', description: 'Perfect starting point for newcomers' },
    { name: 'Aerial Silks', href: '/classes/aerial-silks', description: 'Grace and strength in the air' },
    { name: 'Lyra Hoop', href: '/classes/lyra-hoop', description: 'Elegant moves on the aerial hoop' },
    { name: 'Flexibility', href: '/classes/flexibility', description: 'Improve your range of motion' },
  ];

  const studiosItems = [
    { name: 'All Locations', href: '/studios', description: 'Find your perfect studio location' },
    { name: 'South Yarra', href: '/studios/south-yarra', description: 'Our flagship location in the heart of Melbourne' },
    { name: 'Richmond', href: '/studios/richmond', description: 'Industrial chic meets pole artistry' },
    { name: 'Fitzroy', href: '/studios/fitzroy', description: 'Creative hub for the alternative crowd' },
  ];

  const singleNavItems = [
    { name: 'First Timers', href: '/first-timers' }
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
                    <Link to={item.href}>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-300 hover:text-fuchsia-400 bg-transparent hover:bg-gray-800/50")}>
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
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
              {/* Mobile About Us */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-medium text-fuchsia-400">About Us</div>
                {aboutUsItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-300 hover:text-fuchsia-400 block px-6 py-2 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Classes */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-medium text-fuchsia-400">Classes</div>
                {classesItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-300 hover:text-fuchsia-400 block px-6 py-2 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Studios */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-medium text-fuchsia-400">Studios</div>
                {studiosItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-300 hover:text-fuchsia-400 block px-6 py-2 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Single Items */}
              {singleNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-fuchsia-400 block px-3 py-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
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
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href || '#'}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800/50 hover:text-fuchsia-400 focus:bg-gray-800/50 focus:text-fuchsia-400",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-gray-300">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Header;
