
## Complete Restyle of ProgramPageTemplate to Match First Timers Page

### Overview

This plan will completely redesign the `ProgramPageTemplate.tsx` to match every design element from `/first-timers` - including typography, colors, backgrounds, section structure, card styling, icons, animations, and FAQ styling.

---

### Design System Analysis: First Timers vs Current Template

| Element | First Timers Page | Current ProgramPageTemplate | Action |
|---------|-------------------|----------------------------|--------|
| **Background** | `bg-background` (dark theme) | `min-h-screen` (no bg class) | Add `bg-background` |
| **Hero Badge** | Fuchsia pill (`bg-fuchsia-500/10 border-fuchsia-500/30 text-fuchsia-400`) | Already updated | Keep |
| **Hero Title** | White text with `gradient-text` span | Plain white text | Add gradient-text span |
| **Section Backgrounds** | Alternating: transparent, `bg-gray-900/50`, `bg-gray-900` | `bg-gradient-to-br from-gray-900 to-gray-800` etc. | Match FT pattern |
| **Section Headers** | Custom inline styling with fuchsia accent | Uses `SectionHeader` component with indigo/purple | Create FT-style headers |
| **Cards** | `cyber-card rounded-xl` with fuchsia borders | `cyber-card` (basic) | Add rounded-xl, consistent styling |
| **Icon Colors** | `text-fuchsia-400` consistently | `text-primary` (default pink) | Change to fuchsia-400 |
| **Text Colors** | `text-white`, `text-gray-300`, `text-gray-400` | `text-muted-foreground` | Use explicit gray classes |
| **Animations** | `motion` components with `whileInView` | None | Add framer-motion animations |
| **FAQ Section** | Already standardized to `cyber-faq-item` | Already updated | Keep |
| **Final CTA** | Background image with gradient overlay + cyber-grid | Solid gradient background | Update to FT style |
| **Curriculum** | Gradient pathway line with circular badges | Week cards with W1/W2 badges | Update to FT pathway style |

---

### Complete Section-by-Section Changes

**1. Root Container (Line 71)**
```tsx
// FROM:
<div className="min-h-screen">

// TO:
<div className="min-h-screen bg-background">
```

**2. Hero Section - Already updated in previous change but needs gradient-text on title (Lines 74-93)**

Currently missing `gradient-text` on title. Update to:
```tsx
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
  {title.split(' ').slice(0, -1).join(' ')}{' '}
  <span className="gradient-text">{title.split(' ').slice(-1)}</span>
</h1>
```

Or if we want to keep it simple, just apply gradient-text to the whole title:
```tsx
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
  <span className="gradient-text">{title}</span>
</h1>
```

**3. Course Overview Section (Lines 95-161)**

Current: Uses `SectionHeader` with indigo styling, `text-primary` icons, basic cards

Change to First Timers style:
- Replace `SectionHeader` with inline FT-style header
- Replace `bg-gradient-to-br from-gray-900 to-gray-800` with `bg-gray-900/50`
- Add framer-motion animations
- Change icon colors from `text-primary` to `text-fuchsia-400`
- Add `rounded-xl` to cards
- Change text from `text-muted-foreground` to `text-gray-400`

```tsx
<section className="py-20 bg-gray-900/50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <span className="text-fuchsia-400 font-medium text-sm uppercase tracking-wider">
        Course Overview
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
        What You'll <span className="gradient-text">Learn</span>
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto">{description}</p>
    </motion.div>
    
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Each stat card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cyber-card rounded-xl p-4 flex items-center gap-3"
        >
          <Clock className="w-6 h-6 text-fuchsia-400" />
          <div>
            <p className="text-sm text-gray-400">Duration</p>
            <p className="font-semibold text-white">{duration}</p>
          </div>
        </motion.div>
        {/* ... repeat for other stats */}
      </div>
      
      {/* Highlights */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
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
    </div>
  </div>
</section>
```

**4. Curriculum Section (Lines 164-190)**

Current: Week cards with W1/W2 badges
Change to: First Timers pathway style with horizontal gradient line and circular step badges

```tsx
<section className="py-20">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Your <span className="gradient-text">Journey</span>
      </h2>
      <p className="text-xl text-gray-300">Week by week progression</p>
    </motion.div>
    
    {/* Pathway Diagram */}
    <div className="relative mb-12">
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 -translate-y-1/2 rounded-full" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {curriculum.slice(0, 4).map((week, index) => (
          <motion.div
            key={week.week}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center mx-auto mb-4 relative z-10 border-4 border-background">
              <span className="text-xl font-bold text-white">{week.week}</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{week.title}</h3>
            <p className="text-sm text-gray-400">{week.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
    
    {/* Remaining weeks as cards if more than 4 */}
    {curriculum.length > 4 && (
      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        {curriculum.slice(4).map((week, index) => (
          <motion.div
            key={week.week}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="cyber-card rounded-xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20 border border-fuchsia-500/30 flex items-center justify-center flex-shrink-0">
                <span className="text-fuchsia-400 font-bold">W{week.week}</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">{week.title}</h4>
                <p className="text-gray-400">{week.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    )}
  </div>
</section>
```

**5. What to Bring / Prerequisites Section (Lines 193-227)**

Current: Basic cyber-card with `text-primary` icons
Change to: FT-style with animations, fuchsia borders, gray text classes

```tsx
<section className="py-20 bg-gray-900/50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="cyber-card rounded-xl p-8"
      >
        <h3 className="text-2xl font-bold text-white mb-6">What to Bring</h3>
        <ul className="space-y-3">
          {whatToBring.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
      
      {prerequisites && prerequisites.length > 0 && (
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="cyber-card rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Prerequisites</h3>
          <ul className="space-y-3">
            {prerequisites.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  </div>
</section>
```

**6. FAQ Section (Lines 230-251)**

Current: Uses `SectionHeader` component, but FAQ items already updated
Change to: FT-style inline header with animations

```tsx
<section className="py-20">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Frequently Asked <span className="gradient-text">Questions</span>
      </h2>
    </motion.div>
    
    <Accordion type="single" collapsible className="space-y-4">
      {/* ... existing FAQ items (already standardized) */}
    </Accordion>
  </div>
</section>
```

**7. Final CTA Section (Lines 254-274)**

Current: Solid gradient background
Change to: FT-style with background image, gradient overlay, and cyber-grid

```tsx
<section className="py-20 relative overflow-hidden">
  <div className="absolute inset-0">
    <img 
      src={heroImage} 
      alt="Studio atmosphere" 
      className="w-full h-full object-cover opacity-30"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/80 via-purple-600/80 to-cyan-600/80" />
  </div>
  <div className="absolute inset-0 cyber-grid opacity-20" />
  
  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
        Ready to Start Your Journey?
      </h2>
      <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
        Join hundreds of students who have transformed their lives through pole and aerial fitness.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="bg-white text-purple-900 hover:bg-gray-100 font-bold text-lg px-8 py-4 h-auto" asChild>
          <Link to="/get-started">
            {ctaText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>
      </div>
    </motion.div>
  </div>
</section>
```

---

### Import Changes

Add these imports at the top of the file:
```tsx
import { motion } from 'framer-motion';
import { Check } from 'lucide-react'; // Add Check if not present
```

Remove:
- `SectionHeader` import (replacing with inline headers)
- Unused `Card` and `CardContent` imports if no longer needed

---

### Summary of Visual Changes

| Before | After |
|--------|-------|
| Indigo/purple gradient SectionHeaders | Inline headers with fuchsia accent + gradient-text |
| `text-primary` icons | `text-fuchsia-400` icons consistently |
| `text-muted-foreground` text | Explicit `text-gray-300`, `text-gray-400` |
| Heavy gradient section backgrounds | Subtle `bg-gray-900/50` alternating |
| Static content | Framer-motion scroll animations |
| Week cards with W# badges | Pathway diagram with circular badges + gradient line |
| Solid gradient Final CTA | Image background + gradient overlay + cyber-grid |
| Basic `cyber-card` | `cyber-card rounded-xl` consistently |

---

### Files Changed

| File | Changes |
|------|---------|
| `src/components/templates/ProgramPageTemplate.tsx` | Complete restyle matching First Timers design |

This single file update will automatically apply to all program pages:
- `/programs/pole/beginner`
- `/programs/pole/intermediate`
- `/programs/pole/advanced`
- `/programs/pole/elite`
- `/programs/pole/teens`
- `/programs/pole/40-plus`
- All aerial hoop pages
- All aerial silks pages
- Self-practice, workshops, etc.
