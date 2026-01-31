

## Redesign Studio Specs with Icons - Mirroring Address Layout

### Overview

Update the Studio Specs section in `StudioHero.tsx` to:
1. Remove the "Studio Specs" title label
2. Parse the spec string into individual items
3. Add relevant icons for each spec type (poles, hammocks, hoops, rigs, etc.)
4. Display in a horizontal row format to mirror the address layout above

---

### Current Layout (Lines 115-120)

```tsx
{studio.studioSpecs && (
  <div className="pt-3 sm:pt-4 border-t border-white/10">
    <p className="text-cyan-400 text-xs sm:text-sm font-medium mb-1 sm:mb-2">Studio Specs</p>
    <p className="text-gray-300 text-xs sm:text-sm">{studio.studioSpecs}</p>
  </div>
)}
```

---

### New Layout

Parse the specs string (e.g., `"8 Poles 35mm X-Pole • 8 Aerial Hammocks • Eurotruss 290 Rig"`) by splitting on `•` and assign appropriate icons based on keywords:

```tsx
{studio.studioSpecs && (
  <div className="pt-3 sm:pt-4 border-t border-white/10">
    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
      {studio.studioSpecs.split('•').map((spec, index) => {
        const specTrimmed = spec.trim();
        const IconComponent = getSpecIcon(specTrimmed);
        return (
          <div key={index} className="flex items-center gap-2">
            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
            <span className="text-gray-300 text-xs sm:text-sm">{specTrimmed}</span>
          </div>
        );
      })}
    </div>
  </div>
)}
```

---

### Icon Mapping Function

Add a helper function to determine the appropriate icon based on spec content:

```tsx
import { Circle, Disc, LayoutGrid } from 'lucide-react';

// Helper to get appropriate icon for studio spec
const getSpecIcon = (spec: string) => {
  const specLower = spec.toLowerCase();
  if (specLower.includes('pole')) return Circle;        // Circle for poles
  if (specLower.includes('hammock')) return Disc;       // Disc for hammocks  
  if (specLower.includes('hoop')) return Circle;        // Circle for hoops
  if (specLower.includes('silk')) return Disc;          // Disc for silks
  if (specLower.includes('rig') || specLower.includes('truss')) return LayoutGrid; // Grid for rigging
  return Circle; // Default
};
```

---

### Visual Comparison

```text
Before:
+------------------------------------------+
| [MapPin] Factory 2/38 Bridge Street...   |
|          Minutes from Bunnings Eltham    |
+------------------------------------------+
| Studio Specs                             |
| 8 Poles 35mm X-Pole • 8 Aerial Hammocks • Eurotruss 290 Rig |
+------------------------------------------+

After:
+------------------------------------------+
| [MapPin] Factory 2/38 Bridge Street...   |
|          Minutes from Bunnings Eltham    |
+------------------------------------------+
| [○] 8 Poles 35mm X-Pole  [◉] 8 Aerial Hammocks  [⊞] Eurotruss 290 Rig |
+------------------------------------------+
```

---

### New Imports Required

```tsx
import { Circle, Disc, LayoutGrid } from 'lucide-react';
```

---

### Files Changed

| File | Changes |
|------|---------|
| `src/components/studio/StudioHero.tsx` | Add icon imports, add `getSpecIcon` helper function, update specs display to use icon row layout |

---

### Technical Details

- The specs string is split by `•` (bullet character) which is the existing delimiter
- Each spec item gets an icon based on keyword matching (pole, hammock, hoop, silk, rig/truss)
- Layout uses `flex-wrap` to handle different numbers of specs per studio
- Maintains responsive sizing with `text-xs sm:text-sm` and `w-4 h-4 sm:w-5 sm:h-5`
- No changes needed to studio data - works with existing `studioSpecs` string format

