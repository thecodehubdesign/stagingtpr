

## Rejig "What to Expect in Your First Visit" Section

### Overview

Transform the accordion section from step-by-step visit instructions into a studio vibe showcase featuring what makes The Pole Room special. Add an animated word cycling effect in the "Start with pole" section.

---

### Change 1: Update `firstVisitAccordion` Data Array

**Current (lines 74-105):**
5 steps about arrival timing and class flow

**New:**
4 items about studio vibe and culture

```tsx
const firstVisitAccordion = [
  { 
    step: 1, 
    title: "A welcoming front desk", 
    description: "Friendly faces ready to greet you and answer any questions",
    image: "/images/first-timers/gallery-2.avif"
  },
  { 
    step: 2, 
    title: "A vibrant community", 
    description: "Join a supportive crew who celebrate every win together",
    image: "/images/first-timers/gallery-3.avif"
  },
  { 
    step: 3, 
    title: "Fun engaging classes", 
    description: "Workouts that don't feel like workouts - you'll actually look forward to them",
    image: "/images/first-timers/gallery-4.avif"
  },
  { 
    step: 4, 
    title: "Instructors who want you to succeed", 
    description: "Passionate teachers dedicated to your progress and confidence",
    image: "/images/first-timers/gallery-5.avif"
  },
];
```

---

### Change 2: Update Section Header Title

**Current (lines 368-370):**
```tsx
<h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
  What to Expect in Your <span className="gradient-text">First Visit</span>
</h2>
```

**New:**
```tsx
<h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
  What to Expect at <span className="gradient-text">The Pole Room</span>
</h2>
<p className="text-gray-300 max-w-xl mx-auto">
  More than a studio - it's a community that celebrates you
</p>
```

---

### Change 3: Add Animated Word Cycling to "Start with pole" Section

**Current (lines 486-489):**
```tsx
<h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
  Start with pole,{' '}
  <span className="gradient-text">explore aerials</span>
</h2>
```

**New - with cycling animation:**

Add new state and effect at component level:
```tsx
const [disciplineIndex, setDisciplineIndex] = useState(0);
const disciplines = ['Pole', 'Lyra', 'Silks', 'More'];

useEffect(() => {
  const interval = setInterval(() => {
    setDisciplineIndex((prev) => (prev + 1) % disciplines.length);
  }, 2000); // Change every 2 seconds
  
  return () => clearInterval(interval);
}, []);
```

Update the heading:
```tsx
<h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
  Start with{' '}
  <motion.span
    key={disciplineIndex}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="gradient-text inline-block min-w-[120px]"
  >
    {disciplines[disciplineIndex]}
  </motion.span>
</h2>
```

And wrap with `AnimatePresence` for smooth transitions:
```tsx
import { motion, AnimatePresence } from 'framer-motion';

<h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
  Start with{' '}
  <AnimatePresence mode="wait">
    <motion.span
      key={disciplineIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="gradient-text inline-block"
    >
      {disciplines[disciplineIndex]}
    </motion.span>
  </AnimatePresence>
</h2>
```

---

### Change 4: Optional - Update Accordion Step Icons

Replace numbered circles with relevant icons to match the vibe theme:

```tsx
import { Heart, Users, Sparkles, GraduationCap } from 'lucide-react';

const vibeIcons = [Heart, Users, Sparkles, GraduationCap];
```

In the accordion:
```tsx
{firstVisitAccordion.map((item, index) => {
  const IconComponent = vibeIcons[index];
  return (
    <AccordionItem ...>
      <AccordionTrigger ...>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center flex-shrink-0">
            <IconComponent className="w-5 h-5 text-white" />
          </div>
          ...
        </div>
      </AccordionTrigger>
    </AccordionItem>
  );
})}
```

---

### Updated Section Flow

```text
Before:
+------------------------------------------+
| What to Expect in Your First Visit       |
+------------------------------------------+
| [1] Arrive 10 minutes early              |
| [2] Check in at the desk                 |
| [3] Warm up together                     |
| [4] Foundations moves                    |
| [5] Cool down & stretch                  |
+------------------------------------------+

After:
+------------------------------------------+
| What to Expect at The Pole Room          |
| More than a studio - it's a community    |
+------------------------------------------+
| [Heart] A welcoming front desk           |
| [Users] A vibrant community              |
| [Sparkles] Fun engaging classes          |
| [Grad] Instructors who want you to succeed|
+------------------------------------------+

Word Cycling Section:
+------------------------------------------+
| Start with [Pole/Lyra/Silks/More]        |
|          ↑ cycles every 2 seconds        |
+------------------------------------------+
```

---

### Files Changed

| File | Changes |
|------|---------|
| `src/pages/FirstTimers.tsx` | Update accordion data, add word cycling state/effect, update section header |

---

### New Imports Required

```tsx
import { AnimatePresence } from 'framer-motion';
import { Heart, GraduationCap } from 'lucide-react';
// Users and Sparkles already imported
```

