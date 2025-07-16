
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SectionNavigationProps {
  sections: Array<{
    id: string;
    label: string;
  }>;
}

const SectionNavigation = ({ sections }: SectionNavigationProps) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header
      
      // Check if we should show sticky nav
      setIsSticky(window.scrollY > 300);

      // Find active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Account for header and nav height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!isSticky) return null;

  return (
    <nav className="fixed top-16 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-fuchsia-500/30 cyber-grid animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-2">
          <div className="flex space-x-4 overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "px-2 py-1 text-sm font-medium transition-colors whitespace-nowrap",
                  activeSection === section.id
                    ? "text-fuchsia-400"
                    : "text-gray-300 hover:text-fuchsia-400"
                )}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SectionNavigation;
