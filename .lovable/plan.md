

## First Timers Page Updates + Move Section to Home Page

### Overview

This plan implements 3 major changes:
1. Add a countdown timer section (DD:HH format like GLOW page) for "Next Intake Starts In"
2. Replace the "First Timer Classes" section with the StudioClassesFilter carousel component (like location pages)
3. Move "Why Choose The Pole Room" section to the home page

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/pages/FirstTimers.tsx` | Add countdown timer, replace First Timer Classes with classes carousel, remove Why Choose section |
| `src/pages/Index.tsx` | Add WhyChooseSection component |
| `src/components/WhyChooseSection.tsx` | **NEW** - Extracted component for Why Choose The Pole Room |

---

### Change 1: Add Countdown Timer Section to FirstTimers.tsx

**Add useState and useEffect for countdown logic** (similar to GlowPage.tsx):

```tsx
const [countdown, setCountdown] = useState({ days: 0, hours: 0 });

useEffect(() => {
  // Target next term start - February 3rd, 2025 at 9:00 AM
  const targetDate = new Date('2025-02-03T09:00:00').getTime();
  
  const updateCountdown = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    
    if (difference > 0) {
      setCountdown({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      });
    } else {
      setCountdown({ days: 0, hours: 0 });
    }
  };

  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);
  
  return () => clearInterval(timer);
}, []);
```

**Add new section after the Social Proof Strip (Section 2):**

```tsx
{/* Next Intake Countdown Section */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Left: Intake Info */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
          Next Beginner Intake Opens February 3rd
        </h2>
        <p className="text-gray-400 text-lg">
          Join our structured beginner program and start your pole journey with others at your level.
        </p>
      </div>
      
      {/* Right: Countdown Card */}
      <Card className="cyber-card p-8">
        <div className="text-center">
          <p className="text-fuchsia-400 uppercase tracking-wider text-sm font-semibold mb-6">
            Next Intake Starts In
          </p>
          <div className="flex justify-center items-center gap-4">
            {/* Days */}
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-bold text-white font-mono">
                {countdown.days.toString().padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-sm uppercase mt-2">Days</div>
            </div>
            <div className="text-4xl sm:text-5xl font-bold text-fuchsia-400 mb-6">:</div>
            {/* Hours */}
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-bold text-white font-mono">
                {countdown.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-sm uppercase mt-2">Hours</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</section>
```

---

### Change 2: Replace First Timer Classes Section with Classes Carousel

**Current Section 4 (Lines 340-389):** Static two-column layout with text + single image

**Replace with:** The StudioClassesFilter component adapted for First Timers (without requiring a studio prop)

**Create new adapted component or inline the carousel:**

```tsx
{/* Section 4: First Timer Classes - Carousel */}
<section className="py-20 bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <span className="text-fuchsia-400 font-medium text-sm uppercase tracking-wider">
        What We Offer
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
        First Timer <span className="gradient-text">Classes</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Our First Timer classes are packed with beginners just like you. It's the best place to start your journey.
      </p>
    </motion.div>

    {/* Filter Tabs */}
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {['All', 'Pole', 'Aerial', 'Dance', 'Stretch'].map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveClassFilter(filter)}
          className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
            activeClassFilter === filter
              ? 'neon-button'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>

    {/* Classes Carousel */}
    <div className="relative">
      <div 
        ref={classesScrollRef} 
        className="flex items-stretch gap-6 overflow-x-auto pb-4 scrollbar-none [&::-webkit-scrollbar]:hidden" 
        style={{ scrollbarWidth: 'none' }}
      >
        {filteredClasses.map((classItem, index) => (
          <motion.div
            key={classItem.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-72 h-full"
          >
            <div className="cyber-card overflow-hidden group cursor-pointer h-full flex flex-col rounded-2xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                <img 
                  src={classItem.image} 
                  alt={classItem.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-fuchsia-500/80 text-white backdrop-blur-sm">
                    {classItem.level}
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-white mb-2">{classItem.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{classItem.description}</p>
                <Link 
                  to="/studios" 
                  className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-medium mt-auto"
                >
                  View timetable →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={() => scrollClasses('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-gray-800 border border-fuchsia-500/30 flex items-center justify-center hover:bg-fuchsia-500/20 transition-colors hidden lg:flex"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button 
        onClick={() => scrollClasses('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-gray-800 border border-fuchsia-500/30 flex items-center justify-center hover:bg-fuchsia-500/20 transition-colors hidden lg:flex"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  </div>
</section>
```

**Add required state and refs:**

```tsx
const [activeClassFilter, setActiveClassFilter] = useState('All');
const classesScrollRef = useRef<HTMLDivElement>(null);

const scrollClasses = (direction: 'left' | 'right') => {
  if (classesScrollRef.current) {
    const scrollAmount = 300;
    classesScrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }
};
```

**Add classes data array:**

```tsx
const beginnerClasses = [
  {
    name: 'Pole Foundations',
    image: '/lovable-uploads/8b589fd4-a71e-43de-823f-c2af97fef88d.jpg',
    level: 'Beginner Friendly',
    description: 'Build your pole strength and technique with our conditioning classes.',
    category: 'Pole'
  },
  {
    name: 'Pole Courses',
    image: '/lovable-uploads/c7f8bec0-23c5-44db-871b-dccfbacb26a5.jpg',
    level: 'Beginner to Advanced',
    description: 'Structured learning from beginner to advanced with our 8-week courses.',
    category: 'Pole'
  },
  {
    name: 'Aerial Silks',
    image: '/lovable-uploads/4d4d16ef-17d9-47e3-a464-cfa3c9b9eef6.jpg',
    level: 'All Levels',
    description: 'Flow through the air with grace and strength on aerial silks.',
    category: 'Aerial'
  },
  {
    name: 'Aerial Hammock',
    image: '/lovable-uploads/1d83d83b-0057-4bd1-8052-79584b039a97.jpg',
    level: 'Beginner Friendly',
    description: 'Experience the joy of aerial arts in our supportive hammock classes.',
    category: 'Aerial'
  },
  {
    name: 'Flexibility Training',
    image: '/lovable-uploads/3cc0b943-7d1c-4140-a59c-a60390d03154.jpg',
    level: 'All Levels',
    description: 'Improve your flexibility and mobility with targeted stretching.',
    category: 'Stretch'
  }
];

const filteredClasses = activeClassFilter === 'All' 
  ? beginnerClasses 
  : beginnerClasses.filter(c => c.category === activeClassFilter);
```

---

### Change 3: Move "Why Choose The Pole Room" to Home Page

**Step 3a: Create new component `src/components/WhyChooseSection.tsx`**

Extract the section from FirstTimers.tsx (lines 727-783) into a reusable component:

```tsx
import { motion } from 'framer-motion';
import { Trophy, Heart, Building2, Award } from 'lucide-react';

const whyChooseFeatures = [
  { 
    title: "Performance Opportunities", 
    description: "Showcase your skills at SHINE and GLOW events",
    icon: Trophy,
    image: "/images/glow/hero-1.png"
  },
  { 
    title: "Strong Community", 
    description: "No mean girl vibes - just genuine support",
    icon: Heart,
    image: "/images/first-timers/gallery-5.avif"
  },
  { 
    title: "Beautiful Studios", 
    description: "Purpose-built spaces designed for you",
    icon: Building2,
    image: "/images/first-timers/gallery-6.avif"
  },
  { 
    title: "Expert Instructors", 
    description: "Trained professionals who care",
    icon: Award,
    image: "/images/instructors/courtney.png"
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose <span className="gradient-text">The Pole Room</span>
          </h2>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {whyChooseFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="cyber-card rounded-xl overflow-hidden hover:border-fuchsia-500/50 transition-all group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <feature.icon className="w-6 h-6 text-fuchsia-400 mb-2" />
                <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text">7</div>
            <p className="text-gray-400">Studios</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text">10+</div>
            <p className="text-gray-400">Years</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text">5000+</div>
            <p className="text-gray-400">Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
```

**Step 3b: Update `src/pages/Index.tsx`**

Add the new section between Testimonials and Locations:

```tsx
import WhyChooseSection from '@/components/WhyChooseSection';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'video', label: 'Video' },
  { id: 'method', label: 'Method' },
  { id: 'classes', label: 'Classes' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'why-choose', label: 'Why Us' },  // NEW
  { id: 'locations', label: 'Locations' }
];

// In the JSX, add:
<div id="why-choose">
  <WhyChooseSection />
</div>
```

**Step 3c: Remove from `src/pages/FirstTimers.tsx`**

- Delete Section 10 (lines 727-783)
- Remove `whyChooseFeatures` data array (lines 120-145)
- Remove unused icons from imports: `Trophy`, `Heart`, `Building2` (if no longer needed elsewhere)

---

### Summary of Section Order Changes

**FirstTimers.tsx - New Order:**

| # | Section | Status |
|---|---------|--------|
| 1 | Hero | Keep |
| 2 | Social Proof Strip | Keep |
| 3 | **Next Intake Countdown** | **NEW** |
| 4 | Start with Pole, Explore Aerials | Keep |
| 5 | **First Timer Classes Carousel** | **REPLACED** |
| 6 | How Our Curriculum Works | Keep |
| 7 | Choose Your Studio (slider) | Keep |
| 8 | Intro Offers | Keep |
| 9 | What to Expect (accordion) | Keep |
| 10 | What to Wear | Keep |
| 11 | FAQs | Keep |
| 12 | Final CTA | Keep |

**Index.tsx - New Order:**

| # | Section | Status |
|---|---------|--------|
| 1 | Hero | Keep |
| 2 | Video | Keep |
| 3 | Method | Keep |
| 4 | Classes | Keep |
| 5 | Testimonials | Keep |
| 6 | **Why Choose The Pole Room** | **NEW** |
| 7 | Locations | Keep |

---

### Files Changed

| File | Action |
|------|--------|
| `src/pages/FirstTimers.tsx` | Add countdown, replace classes section, remove Why Choose |
| `src/pages/Index.tsx` | Add WhyChooseSection import and section |
| `src/components/WhyChooseSection.tsx` | **CREATE** - New extracted component |

---

### Technical Notes

- The countdown timer uses the same logic as GlowPage.tsx (DD:HH format)
- Target date for countdown: February 3rd, 2025 (configurable)
- The classes carousel uses the same pattern as StudioClassesFilter but without requiring a studio prop
- The Card component needs to be imported for the countdown section
- useRef and useState imports needed for carousel scroll functionality

