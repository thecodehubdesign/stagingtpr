
import { useState, useEffect, useRef } from 'react';

interface Section {
  id: string;
  label: string;
}

interface SectionNavigationProps {
  sections: Section[];
}

const SectionNavigation = ({ sections }: SectionNavigationProps) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (currentScrollY / documentHeight) * 100;
      
      // Show navigation after 15% scroll
      const shouldShow = scrollPercentage >= 15;
      
      // Hide when scrolling up (except if at very top)
      const isScrollingUp = currentScrollY < lastScrollY && currentScrollY > 100;
      
      // Update visibility: show if past 15% and not scrolling up, or if scrolling down
      setIsVisible(shouldShow && !isScrollingUp);
      
      // Update last scroll position
      setLastScrollY(currentScrollY);
      
      // Handle active section detection
      const scrollPosition = currentScrollY + 100; // Offset for header
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, lastScrollY]);

  // Auto-scroll active section into view on mobile
  useEffect(() => {
    if (activeSection && scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.querySelector(`[data-section-id="${activeSection}"]`) as HTMLElement;
      if (activeElement) {
        const container = scrollContainerRef.current;
        const containerWidth = container.offsetWidth;
        const elementLeft = activeElement.offsetLeft;
        const elementWidth = activeElement.offsetWidth;
        
        // Calculate the scroll position to center the active element
        const scrollLeft = elementLeft - (containerWidth / 2) + (elementWidth / 2);
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 120; // Account for header height
      const elementPosition = element.offsetTop - headerOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Don't render if not visible
  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={`sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={scrollContainerRef}
          className="flex items-center justify-center space-x-6 py-2 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {sections.map((section) => (
            <span
              key={section.id}
              data-section-id={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-xs whitespace-nowrap cursor-pointer transition-colors duration-200 p-0 ${
                activeSection === section.id
                  ? 'text-primary font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {section.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionNavigation;
