
## Update First Timers Page - Bubble, Studios Slider & First Visit Accordion

### Changes Overview

1. **Add "First Timers" bubble** at the very top of the hero section
2. **Replace studio locations grid** with a horizontal sliding carousel (matching the reviews slider style)
3. **Convert "What to Expect in Your First Visit"** to an accordion with images in the dropdown

---

### File: `src/pages/FirstTimers.tsx`

---

### Change 1: Add "First Timers" Bubble

**Location:** Inside the hero section, above the H1 heading (around line 167)

Add a centered pill/bubble badge above the main heading:

```tsx
<motion.span
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="inline-block px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-sm font-medium mb-6"
>
  First Timers
</motion.span>
```

**Visual Result:**
```text
+----------------------------------------------------------+
|              [ First Timers ]  ← Pill badge              |
|                                                          |
|       Your First Class Starts Here                       |
+----------------------------------------------------------+
```

---

### Change 2: Replace Studio Locations Grid with Sliding Carousel

**Current:** Lines 442-495 - 4-column grid of studio cards  
**Replace with:** Horizontal infinite slider (matching the reviews animation)

**New Implementation:**

```tsx
{/* Section 6: Choose Your Studio */}
<section className="py-20 bg-gray-900/50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Choose Your <span className="gradient-text">Studio</span>
      </h2>
      <p className="text-xl text-gray-300">7 locations across Melbourne</p>
    </motion.div>
  </div>
  
  {/* Sliding Studios Carousel */}
  <div className="relative">
    <div className="flex animate-scroll-left">
      {[...studios, ...studios].map((studio, index) => (
        <Link 
          key={`${studio.id}-${index}`}
          to={`/studios/${studio.id}`}
          className="flex-shrink-0 mx-3 w-[280px] cyber-card rounded-xl overflow-hidden hover:border-fuchsia-500/50 transition-all group"
        >
          <div className="aspect-video overflow-hidden">
            <img 
              src={studio.image} 
              alt={studio.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-white mb-1">
              {studio.name.replace('The Pole Room ', '')}
            </h3>
            <p className="text-sm text-gray-400 flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {studio.address.split(',')[0]}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>
```

This uses the same `animate-scroll-left` CSS animation already defined at the bottom of the file (lines 1031-1039).

---

### Change 3: Convert "What to Expect" to Accordion with Images

**Current:** Lines 587-672 - Two-column layout with steps list + stacked images  
**Replace with:** Accordion component where each step expands to show an image

**New Data Array** (add to data section around line 75):

```tsx
const firstVisitAccordion = [
  { 
    step: 1, 
    title: "Arrive 10 minutes early", 
    description: "Time to settle in and meet your instructor",
    image: "/images/first-timers/gallery-2.avif"
  },
  { 
    step: 2, 
    title: "Check in at the desk", 
    description: "Quick registration and waiver",
    image: "/images/first-timers/gallery-3.avif"
  },
  { 
    step: 3, 
    title: "Warm up together", 
    description: "Group stretches and body prep",
    image: "/images/first-timers/gallery-4.avif"
  },
  { 
    step: 4, 
    title: "Foundations moves", 
    description: "Learn your first spins and poses",
    image: "/images/first-timers/gallery-5.avif"
  },
  { 
    step: 5, 
    title: "Cool down & stretch", 
    description: "Wind down and celebrate your first class",
    image: "/images/first-timers/gallery-6.avif"
  },
];
```

**New Section Layout:**

```tsx
{/* Section 8: What to Expect */}
<section className="py-20 bg-gray-900/50">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        What to Expect in Your <span className="gradient-text">First Visit</span>
      </h2>
    </motion.div>
    
    <Accordion type="single" collapsible className="space-y-4">
      {firstVisitAccordion.map((item, index) => (
        <AccordionItem 
          key={index} 
          value={`visit-${index}`}
          className="cyber-card rounded-xl border-fuchsia-500/30 px-6 overflow-hidden"
        >
          <AccordionTrigger className="text-white hover:text-fuchsia-400 text-left py-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">{item.step}</span>
              </div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400 font-normal">{item.description}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="pb-4">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover rounded-xl border border-fuchsia-500/20"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
</section>
```

---

### Summary of Changes

| Location | Current | New |
|----------|---------|-----|
| Hero (top) | Just H1 heading | "First Timers" bubble + H1 |
| Section 6 (Studios) | 4-column grid of cards | Horizontal sliding carousel |
| Section 8 (First Visit) | 2-column with steps + images | Accordion with image dropdowns |

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/pages/FirstTimers.tsx` | Add bubble badge, replace studios grid with slider, convert first visit to accordion |

---

### Technical Notes

- The sliding animation reuses the existing `animate-scroll-left` CSS already in the file
- The Accordion component is already imported and used for FAQs, so no new imports needed
- The new `firstVisitAccordion` data array replaces `firstVisitSteps` (which can be removed)
- Studio cards link directly to the studio detail page for improved UX
