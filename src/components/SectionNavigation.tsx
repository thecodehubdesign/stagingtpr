
import { useState, useEffect, useRef } from 'react';

interface Section {
  id: string;
  label: string;
}

interface SectionNavigationProps {
  sections: Section[];
}

const SectionNavigation = ({ sections }: SectionNavigationProps) => {
  // Default to first section
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navigation after scrolling 50px in any direction
      setIsVisible(currentScrollY > 50);
      
      // Handle active section detection
      const scrollPosition = currentScrollY + 120; // Offset for header + nav
      
      // Find the current section based on scroll position
      let currentSection = sections[0]?.id || '';
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sections[i].id;
          break;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

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
