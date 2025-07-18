
import { useState, useEffect } from 'react';

interface Section {
  id: string;
  label: string;
}

interface SectionNavigationProps {
  sections: Section[];
}

const SectionNavigation = ({ sections }: SectionNavigationProps) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

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

  return (
    <div className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-6 py-2 overflow-x-auto">
          {sections.map((section) => (
            <span
              key={section.id}
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
