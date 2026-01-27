

## First Timers Page: Horizontal Accordion, Recurring Countdown & Section Reorder

### Overview

This plan implements 3 changes:
1. Convert "What to Expect in Your First Visit" to a **horizontal/sideways accordion** layout with the image visible alongside the step details
2. Move the "What to Expect" section **directly underneath the reviews section** (after Section 2)
3. Update the countdown timer to **Feb 9th** and make it **automatically cycle every 4 weeks**

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/pages/FirstTimers.tsx` | Redesign accordion to horizontal layout, move section, update countdown logic |

---

### Change 1: Horizontal "What to Expect" Accordion

**Current Layout:** Vertical accordion that expands downward to show an image below the title.

**New Layout:** Full-width section with:
- Left side: Stacked accordion items (just titles, no images in accordion)
- Right side: Large image that changes based on which accordion item is open

**New Section Structure:**

```tsx
{/* Section 3: What to Expect - Horizontal Layout */}
<section className="py-16 bg-gray-900/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Left: Accordion Steps */}
      <Accordion 
        type="single" 
        defaultValue="visit-0"
        value={activeVisitStep}
        onValueChange={setActiveVisitStep}
        className="space-y-3"
      >
        {firstVisitAccordion.map((item, index) => (
          <AccordionItem 
            key={index} 
            value={`visit-${index}`}
            className="cyber-card rounded-xl border-fuchsia-500/30 px-6 overflow-hidden"
          >
            <AccordionTrigger className="text-white hover:text-fuchsia-400 text-left py-4 hover:no-underline">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-400 font-normal">{item.description}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {/* Mobile only: show image in accordion on small screens */}
              <div className="pb-4 lg:hidden">
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
      
      {/* Right: Active Image (desktop only) */}
      <div className="hidden lg:block sticky top-24">
        <motion.div
          key={activeVisitStep}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-fuchsia-500/30"
        >
          <img 
            src={firstVisitAccordion[parseInt(activeVisitStep?.split('-')[1] || '0')]?.image || firstVisitAccordion[0].image}
            alt="First visit step"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  </div>
</section>
```

**Add new state for tracking active accordion step:**

```tsx
const [activeVisitStep, setActiveVisitStep] = useState<string | undefined>('visit-0');
```

---

### Change 2: Move Section Position

**Current Order:**
1. Hero
2. Social Proof Strip (reviews)
3. Next Intake Countdown
4. Start with Pole, Explore Aerials
5. First Timer Classes Carousel
6. How Our Curriculum Works
7. Choose Your Studio
8. Intro Offers
9. **What to Expect** ← Currently here (Section 8)
10. What to Wear

**New Order:**
1. Hero
2. Social Proof Strip (reviews)
3. **What to Expect** ← Moved here (directly after reviews)
4. Next Intake Countdown
5. Start with Pole, Explore Aerials
6. First Timer Classes Carousel
7. How Our Curriculum Works
8. Choose Your Studio
9. Intro Offers
10. What to Wear

---

### Change 3: Recurring Countdown (Feb 9th + Every 4 Weeks)

**Current Logic:** Fixed date of Feb 3rd, 2025 - shows 0 when passed.

**New Logic:** 
- Starts with Feb 9th, 2025
- Automatically calculates the next intake date (every 4 weeks from Feb 9th)
- Always shows countdown to the next upcoming intake

**Updated Countdown Function:**

```tsx
useEffect(() => {
  // First intake date: February 9th, 2025
  const firstIntakeDate = new Date('2025-02-09T09:00:00');
  const fourWeeksMs = 4 * 7 * 24 * 60 * 60 * 1000; // 4 weeks in milliseconds
  
  const getNextIntakeDate = () => {
    const now = new Date();
    let nextIntake = new Date(firstIntakeDate);
    
    // Keep adding 4 weeks until we find a date in the future
    while (nextIntake <= now) {
      nextIntake = new Date(nextIntake.getTime() + fourWeeksMs);
    }
    
    return nextIntake;
  };
  
  const updateCountdown = () => {
    const now = new Date().getTime();
    const targetDate = getNextIntakeDate().getTime();
    const difference = targetDate - now;
    
    if (difference > 0) {
      setCountdown({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      });
    }
  };

  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);
  
  return () => clearInterval(timer);
}, []);
```

**Update the heading to be dynamic:**

```tsx
<h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
  Next Beginner Intake Opens Soon
</h2>
```

Or calculate and display the actual date:

```tsx
// Add state for next intake date display
const [nextIntakeDate, setNextIntakeDate] = useState('');

// In useEffect, also set the date string:
const formattedDate = nextIntake.toLocaleDateString('en-AU', { 
  month: 'long', 
  day: 'numeric' 
});
setNextIntakeDate(formattedDate);

// In JSX:
<h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
  Next Beginner Intake Opens {nextIntakeDate}
</h2>
```

---

### Summary of Changes

| Change | Description |
|--------|-------------|
| Horizontal Accordion | Left side: accordion steps, Right side: large image that changes on selection |
| Section Position | Move "What to Expect" from position 8 to position 3 (after reviews) |
| Recurring Countdown | Feb 9th base date, automatically cycles to next intake every 4 weeks |

---

### Technical Notes

- Add `activeVisitStep` state to track which accordion item is open
- Use `value` and `onValueChange` props on Accordion for controlled behavior
- Default to `visit-0` so first step is open and image shows on load
- On mobile (lg:hidden), images still appear inside accordion content for better UX
- On desktop (lg:block), image panel is sticky and animates when selection changes
- The countdown uses modular arithmetic to always find the next valid intake date

