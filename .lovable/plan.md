

## Simplify Level Progression & Highlight Current Page

### Overview

This plan streamlines the Level Progression pathway by:
1. Removing the headline and subheadline
2. Using consistent fuchsia coloring for all level circles
3. Replacing numbers with abbreviated level names (Beg, Int 1, Int 2, Adv 1, Adv 2, Elite)
4. Removing labels and descriptions below circles
5. Moving the progression into the Hero section
6. Highlighting the current page's level with a glow effect

---

### Change 1: Move Level Progression Into Hero Section

Move the pathway diagram directly into the Hero section (below the description), removing it as a separate section.

**Before:** Separate section with its own heading
**After:** Integrated into Hero, no heading/subheading

---

### Change 2: Update Level Data for Pole Programs

**Current (4 levels):**
```tsx
{ name: 'Beginner', ... },
{ name: 'Intermediate', ... },
{ name: 'Advanced', ... },
{ name: 'Elite', ... }
```

**New (6 levels with abbreviations):**
```tsx
const poleLevels = [
  { abbr: 'Beg', fullName: 'Pole Beginner', href: '/programs/pole/beginner' },
  { abbr: 'Int 1', fullName: 'Pole Intermediate', href: '/programs/pole/intermediate' },
  { abbr: 'Int 2', fullName: 'Pole Intermediate 2', href: '/programs/pole/intermediate-2' },
  { abbr: 'Adv 1', fullName: 'Pole Advanced', href: '/programs/pole/advanced' },
  { abbr: 'Adv 2', fullName: 'Pole Advanced 2', href: '/programs/pole/advanced-2' },
  { abbr: 'Elite', fullName: 'Pole Elite', href: '/programs/pole/elite' },
];
```

---

### Change 3: Highlight Current Level Based on Page Title

Use the `title` prop to determine which level is currently active:

```tsx
// Determine current level based on page title
const getCurrentLevelIndex = () => {
  const titleLower = title.toLowerCase();
  if (titleLower.includes('beginner')) return 0;
  if (titleLower.includes('intermediate 2') || titleLower.includes('inter 2')) return 2;
  if (titleLower.includes('intermediate')) return 1;
  if (titleLower.includes('advanced 2') || titleLower.includes('adv 2')) return 4;
  if (titleLower.includes('advanced')) return 3;
  if (titleLower.includes('elite')) return 5;
  return -1; // Not a pole level page
};
const currentLevelIndex = getCurrentLevelIndex();
```

---

### Change 4: Unified Circle Styling with Current Page Highlight

**All circles:** Same fuchsia gradient color
**Current level:** Glowing ring effect and scale

```tsx
{poleLevels.map((level, index) => {
  const isCurrentLevel = index === currentLevelIndex;
  
  return (
    <motion.div
      key={level.abbr}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative"
    >
      <Link to={level.href} className="group block">
        <div className={`
          w-14 h-14 rounded-full 
          bg-gradient-to-br from-fuchsia-500 to-purple-600 
          flex items-center justify-center mx-auto 
          relative z-10 border-4 
          ${isCurrentLevel 
            ? 'border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.5)] scale-110' 
            : 'border-background group-hover:scale-105'
          } 
          transition-all duration-300
        `}>
          <span className="text-xs font-bold text-white text-center leading-tight">
            {level.abbr}
          </span>
        </div>
        {/* No name or description labels below */}
      </Link>
    </motion.div>
  );
})}
```

---

### Change 5: Update Connecting Line

Single color gradient line connecting all 6 levels:

```tsx
<div className="hidden md:block absolute top-7 left-[8%] right-[8%] h-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-fuchsia-500 rounded-full" />
```

---

### Change 6: Updated Hero Section Layout

```tsx
{/* Hero Section */}
<section className="relative pt-24 pb-16 overflow-hidden">
  {/* ... background gradients ... */}
  
  <div className="relative max-w-4xl mx-auto px-4 text-center">
    {/* Tagline badge */}
    <motion.span className="...">
      {subtitle}
    </motion.span>
    
    {/* Page title */}
    <motion.h1 className="...">
      <span className="gradient-text">{title}</span>
    </motion.h1>
    
    {/* Description */}
    <motion.p className="...">
      {description}
    </motion.p>
    
    {/* Level Progression - Integrated here */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-10"
    >
      <div className="relative max-w-2xl mx-auto">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-7 left-[8%] right-[8%] h-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-fuchsia-500 rounded-full" />
        
        {/* Level circles - 6 columns on desktop, 3x2 on mobile */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-2">
          {poleLevels.map((level, index) => (
            // ... circle rendering with highlight logic
          ))}
        </div>
      </div>
    </motion.div>
  </div>
</section>
```

---

### Visual Diagram

```text
Before:
+-----------------------------------------------+
|              Your Path to Pole Mastery        |
|     Progress through our structured levels    |
+-----------------------------------------------+
| [1]--------[2]--------[3]--------[4]          |
| Beginner   Inter      Advanced   Elite        |
| Build...   Develop... Master...  Perform...   |
+-----------------------------------------------+

After (in Hero section):
+-----------------------------------------------+
|            [Beginner Course badge]            |
|              Pole Beginner                    |
|      Our beginner course is designed...       |
|                                               |
| [Beg]--[Int 1]--[Int 2]--[Adv 1]--[Adv 2]--[Elite] |
|   ↑ highlighted with cyan glow if current     |
+-----------------------------------------------+
```

---

### Files Changed

| File | Changes |
|------|---------|
| `src/components/templates/ProgramPageTemplate.tsx` | Remove separate Level Progression section, integrate into Hero, update to 6 levels with abbreviations, add current page highlighting |

---

### Technical Details

The current level detection uses the page `title` prop to match against level names. This approach:
- Works with existing page data (no prop changes needed)
- Handles the 6-level pole progression
- Falls back gracefully for non-pole program pages (currentLevelIndex = -1)

