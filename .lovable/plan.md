
## Remove Hero Section from Pole Program Pages & Match First Timers Theme

### Overview

Update the `ProgramPageTemplate` to remove the large background image hero section and replace it with a cleaner, more subtle header that matches the `/first-timers` page aesthetic.

---

### Current State vs Target State

| Element | Current (ProgramPageTemplate) | Target (First Timers Style) |
|---------|------------------------------|----------------------------|
| Hero | 70vh background image with dark overlay | Subtle gradient background, no full-bleed image |
| Badge | Sparkles icon + generic Badge component | Fuchsia pill badge (`bg-fuchsia-500/10 border-fuchsia-500/30`) |
| Title | `gradient-text` class (existing) | Keep `gradient-text` styling |
| Background | Image with linear gradient overlay | `bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900` with blur orb |
| CTA Button | Neon button in hero | Move CTA to later sections only |

---

### Changes to ProgramPageTemplate.tsx

**1. Remove the hero background image and full-height section**

Replace the current hero (lines 74-106):
```tsx
{/* Hero Section */}
<section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('${heroImage}')`
    }}
  />
  ...
</section>
```

With a First Timers-style header (matching cyberpunk theme):
```tsx
{/* Hero Section */}
<section className="relative pt-24 pb-16 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900" />
  <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
  
  <div className="relative max-w-4xl mx-auto px-4 text-center">
    {/* Fuchsia Pill Badge */}
    <span className="inline-block px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-sm font-medium mb-6">
      {badge}
    </span>
    
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
      {title}
    </h1>
    
    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
      {subtitle}
    </p>
  </div>
</section>
```

**2. Remove the `heroImage` dependency from hero display**

The `heroImage` prop will still exist for potential use elsewhere (like Course Overview section) but won't display as a full-bleed background.

**3. Update imports**

Remove the unused `Sparkles` icon from hero (can keep for Final CTA section).

---

### Files Affected

| File | Change |
|------|--------|
| `src/components/templates/ProgramPageTemplate.tsx` | Replace hero section with First Timers-style header |

This single template change will automatically update all 6 pole program pages:
- `/programs/pole/beginner`
- `/programs/pole/intermediate`
- `/programs/pole/advanced`
- `/programs/pole/elite`
- `/programs/pole/teens`
- `/programs/pole/40-plus`

Plus any other pages using this template (aerial hoop, aerial silks, self-practice, etc.).

---

### Visual Comparison

**Before (Current Hero)**
- Large 70vh section
- Stock image background with dark gradient overlay
- Badge with Sparkles icon
- CTA button in hero

**After (First Timers Style)**
- Compact header section with `pt-24 pb-16`
- Subtle purple gradient background with fuchsia blur orb
- Fuchsia pill badge matching `/first-timers`
- No CTA in header (moved to later sections)
- Clean, consistent cyberpunk aesthetic

---

### Implementation Notes

- The `heroImage` prop remains in the interface but is no longer displayed in the hero
- All gradient text, neon buttons, and cyber-card styling remains unchanged in other sections
- The change maintains the responsive design patterns from First Timers
