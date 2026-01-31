

## Redesign ProgramPageTemplate to Match First Timers Page

### Overview

Completely restructure the ProgramPageTemplate with 6 major changes: new hero with page title, image carousel in course overview, horizontal stats bar, remove "Ready to Start" CTA, add studio availability section, and add program search functionality.

---

### Change 1: Hero Section - Clear Page Labeling

**Current State:**
- Badge shows generic text (e.g., "Beginner Course")
- Title is the tagline (e.g., "Start Your Pole Journey")

**New Design:**
- Badge (bubble) contains the tagline/subtitle
- H1 title is the actual program name (e.g., "Pole Beginner")

```tsx
{/* Hero Section */}
<section className="relative pt-24 pb-16 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900" />
  <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
  
  <div className="relative max-w-4xl mx-auto px-4 text-center">
    {/* Tagline in bubble */}
    <motion.span className="inline-block px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-sm font-medium mb-6">
      {subtitle}
    </motion.span>
    
    {/* Page name as title */}
    <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
      <span className="gradient-text">{title}</span>
    </motion.h1>
    
    <motion.p className="text-xl text-gray-300 max-w-2xl mx-auto">
      {description}
    </motion.p>
  </div>
</section>
```

**Props Change:**
- `title` = "Pole Beginner" (actual program name)
- `subtitle` = "Build strength, confidence, and grace from day one" (goes in bubble)
- `badge` = removed or repurposed

---

### Change 2: Course Overview - Image Carousel + Highlights Grid

**Current State:**
- 2x2 grid of stat cards (Duration, Class Size, Frequency, Level)
- Course Highlights list beside it

**New Design:**
- Top row: Course Highlights list on left, Image Carousel on right
- Bottom row: Horizontal stats bar (4 items in a row)

**New Props:**
```tsx
interface ProgramPageProps {
  // ... existing props
  images?: string[]; // NEW - array of course images for carousel
}
```

**Image Carousel Component (embedded):**
```tsx
const [currentImageIndex, setCurrentImageIndex] = useState(0);

{/* Course Overview Section */}
<section className="py-20 bg-gray-900/50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <motion.div className="text-center mb-12">
      <span className="text-fuchsia-400 font-medium text-sm uppercase tracking-wider">
        Course Overview
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
        What You'll <span className="gradient-text">Learn</span>
      </h2>
    </motion.div>
    
    {/* Top Row: Highlights + Image Carousel */}
    <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
      {/* Left: Highlights */}
      <motion.div>
        <h3 className="text-2xl font-bold text-white mb-6">Course Highlights</h3>
        <div className="space-y-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-gray-300">{highlight}</p>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Right: Image Carousel */}
      <motion.div className="relative">
        <div className="aspect-[4/3] rounded-2xl overflow-hidden cyber-card">
          <img 
            src={images[currentImageIndex] || heroImage}
            alt="Course preview"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Carousel Navigation - only show if multiple images */}
        {images && images.length > 1 && (
          <>
            <button 
              onClick={() => setCurrentImageIndex(prev => prev === 0 ? images.length - 1 : prev - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-fuchsia-500/30 flex items-center justify-center text-white hover:bg-fuchsia-500/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setCurrentImageIndex(prev => prev === images.length - 1 ? 0 : prev + 1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-fuchsia-500/30 flex items-center justify-center text-white hover:bg-fuchsia-500/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-fuchsia-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </motion.div>
    </div>
    
    {/* Bottom Row: Horizontal Stats Bar */}
    <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="cyber-card rounded-xl p-4 flex items-center gap-3">
        <Clock className="w-6 h-6 text-fuchsia-400" />
        <div>
          <p className="text-sm text-gray-400">Duration</p>
          <p className="font-semibold text-white">{duration}</p>
        </div>
      </div>
      <div className="cyber-card rounded-xl p-4 flex items-center gap-3">
        <Users className="w-6 h-6 text-fuchsia-400" />
        <div>
          <p className="text-sm text-gray-400">Class Size</p>
          <p className="font-semibold text-white">{classSize}</p>
        </div>
      </div>
      <div className="cyber-card rounded-xl p-4 flex items-center gap-3">
        <Calendar className="w-6 h-6 text-fuchsia-400" />
        <div>
          <p className="text-sm text-gray-400">Frequency</p>
          <p className="font-semibold text-white">{frequency}</p>
        </div>
      </div>
      <div className="cyber-card rounded-xl p-4 flex items-center gap-3">
        <Star className="w-6 h-6 text-fuchsia-400" />
        <div>
          <p className="text-sm text-gray-400">Level</p>
          <p className="font-semibold text-white">{level}</p>
        </div>
      </div>
    </motion.div>
  </div>
</section>
```

---

### Change 3: Remove "Ready to Start Your Journey?" CTA Section

**Current State (lines 350-385):**
```tsx
<section className="py-20 relative overflow-hidden">
  ...
  <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
  <h2>Ready to Start Your Journey?</h2>
  <Button>Book Your Free Trial</Button>
  ...
</section>
```

**Action:** Remove this entire section completely.

---

### Change 4: Add "Available At" Studio Section

**New Section - after FAQ, before Footer:**

**New Props:**
```tsx
interface ProgramPageProps {
  // ... existing props
  availableStudios?: string[]; // NEW - array of studio IDs where program is offered
}
```

```tsx
{/* Available Studios Section */}
{availableStudios && availableStudios.length > 0 && (
  <section className="py-20 bg-gray-900/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Available <span className="gradient-text">Locations</span>
        </h2>
        <p className="text-gray-300">This program is offered at these studios</p>
      </motion.div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableStudios.map((studioId) => {
          const studio = studios.find(s => s.id === studioId);
          if (!studio) return null;
          return (
            <motion.div
              key={studioId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link 
                to={`/studios/${studioId}`}
                className="block cyber-card rounded-xl p-6 hover:border-fuchsia-500/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {studio.name.replace('The Pole Room ', '')}
                    </h3>
                    <p className="text-sm text-gray-400">{studio.address}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
)}
```

---

### Change 5: Add Program Search Section (Like Instructors Page)

**New Section - at the bottom, before Footer:**

This mirrors the Instructors page search/filter functionality but for programs/classes.

```tsx
{/* Explore Other Programs Section */}
<section className="py-20 bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Explore Our <span className="gradient-text">Programs</span>
      </h2>
      <p className="text-gray-300">Find other classes that match your interests</p>
    </motion.div>
    
    {/* Search and Filters */}
    <div className="flex flex-col items-center gap-4 mb-12">
      {/* Search Input */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-fuchsia-400" />
        <Input
          type="text"
          placeholder="Search programs..."
          value={programSearch}
          onChange={(e) => setProgramSearch(e.target.value)}
          className="pl-10 border-fuchsia-500/50 bg-background/50 focus:border-fuchsia-400"
        />
      </div>

      {/* Dropdown Filters */}
      <div className="flex flex-wrap justify-center gap-4">
        {/* Filter by Studio */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-fuchsia-500/50 bg-background/50 min-w-[200px] justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-fuchsia-400" />
                {selectedProgramStudio || 'All Studios'}
              </div>
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setSelectedProgramStudio(null)}>
              All Studios
            </DropdownMenuItem>
            {studios.map((studio) => (
              <DropdownMenuItem key={studio.id} onClick={() => setSelectedProgramStudio(studio.name)}>
                {studio.name.replace('The Pole Room ', '')}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Filter by Category */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-fuchsia-500/50 bg-background/50 min-w-[200px] justify-between">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-fuchsia-400" />
                {selectedProgramCategory || 'All Categories'}
              </div>
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setSelectedProgramCategory(null)}>All Categories</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedProgramCategory('Pole')}>Pole</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedProgramCategory('Aerial')}>Aerial</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedProgramCategory('Dance')}>Dance</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedProgramCategory('Flexibility')}>Flexibility</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
    
    {/* Program Cards Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredPrograms.map((program, index) => (
        <motion.div
          key={program.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
        >
          <Link to={program.href}>
            <Card className="cyber-card rounded-xl overflow-hidden hover:scale-105 transition-transform">
              <div className="h-48 overflow-hidden">
                <img src={program.image} alt={program.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/30">
                    {program.category}
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-500/10 text-gray-400 border border-gray-500/30">
                    {program.level}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{program.name}</h3>
                <p className="text-gray-400 text-sm line-clamp-2">{program.description}</p>
              </div>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>
```

---

### New Imports Required

```tsx
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, MapPin, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { studios } from '@/data/studios';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
```

---

### Updated Props Interface

```tsx
interface ProgramPageProps {
  badge: string;           // Keep for backwards compatibility
  title: string;           // NOW: Actual program name (e.g., "Pole Beginner")
  subtitle: string;        // NOW: Goes in the bubble (e.g., "Build strength, confidence...")
  heroImage: string;
  description: string;
  duration: string;
  classSize: string;
  frequency: string;
  level: string;
  highlights: string[];
  curriculum: CurriculumWeek[];
  whatToBring: string[];
  prerequisites?: string[];
  faqs: FAQ[];
  instructors?: Instructor[];
  price?: string;
  ctaText?: string;
  images?: string[];           // NEW - carousel images
  availableStudios?: string[]; // NEW - studio IDs where program runs
}
```

---

### Files to Update

| File | Changes |
|------|---------|
| `src/components/templates/ProgramPageTemplate.tsx` | Complete restructure with all 5 changes |
| `src/pages/programs/pole/BeginnerPage.tsx` | Update props (title, subtitle swap) |
| `src/pages/programs/pole/IntermediatePage.tsx` | Update props (title, subtitle swap) |
| `src/pages/programs/pole/AdvancedPage.tsx` | Update props |
| `src/pages/programs/pole/ElitePage.tsx` | Update props |
| `src/pages/programs/pole/TeensPage.tsx` | Update props |
| `src/pages/programs/pole/40PlusPage.tsx` | Update props |
| All aerial hoop pages | Update props |
| All aerial silks pages | Update props |

---

### Program Data for Search Section

Create a static programs array within the template (or import from a new data file):

```tsx
const allPrograms = [
  { name: 'Pole Beginner', href: '/programs/pole/beginner', category: 'Pole', level: 'Beginner', image: '...', description: '...' },
  { name: 'Pole Intermediate', href: '/programs/pole/intermediate', category: 'Pole', level: 'Intermediate', image: '...', description: '...' },
  { name: 'Aerial Hoop Beginner', href: '/programs/aerial-hoop/beginner', category: 'Aerial', level: 'Beginner', image: '...', description: '...' },
  // ... etc
];
```

---

### Visual Summary

```text
Before:
+------------------+
| Badge: "Beginner"|
| Title: Tagline   |
+------------------+
| Stats 2x2 | High |
+------------------+
| Curriculum       |
| What to Bring    |
| FAQ              |
| READY TO START?  | <-- Remove this
+------------------+

After:
+------------------+
| Bubble: Tagline  |
| Title: "Pole     |
|   Beginner"      |
+------------------+
| Highlights |Image|
|            |<--->|
+------------------+
| Duration | Size | Freq | Level |
+------------------+
| Curriculum       |
| What to Bring    |
| FAQ              |
| AVAILABLE AT     | <-- New
| [Studio Cards]   |
| EXPLORE PROGRAMS | <-- New
| [Search + Grid]  |
+------------------+
```

