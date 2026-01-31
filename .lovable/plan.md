

## Instructors Page Enhancement

### Overview

Restyle the application section to match the cyberpunk theme, add name search functionality, implement "Show More" pagination after 3 rows, and transform the Teaching Philosophy section into a standout grid design.

---

### Files to Modify

| File | Change |
|------|--------|
| `src/pages/Instructors.tsx` | All changes below |

---

### 1. Restyle "Join Our Team" Application Section

Transform the current white/light banner into a cyberpunk-styled recruitment section:

**Current**: White background with simple layout
**New**: Dark gradient background with neon accents, cyber-border, and dynamic styling

| Element | Before | After |
|---------|--------|-------|
| Background | `bg-white` | Dark gradient with cyber-grid overlay |
| Container | Simple flex | `cyber-card` with neon border |
| Image | Basic rounded | Neon border glow effect |
| Typography | Gray text | White/gradient text with neon effects |
| Button | Pink solid | Animated neon-button with glow |

**New Layout**:
```text
+----------------------------------------------------------+
|  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ CYBER CARD ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  |
|                                                          |
|  [Team Photo with      Do you have what it takes to      |
|   neon border glow]    JOIN OUR TEAM?                    |
|                        --------------------------------   |
|                        Be part of Australia's leading    |
|                        pole & aerial studio team...      |
|                                                          |
|                        [✨ APPLICATIONS OPEN - Neon CTA]  |
|                                                          |
+----------------------------------------------------------+
```

Will use `teachersTeam` image already imported, styled with neon border effects.

---

### 2. Add Name Search Input

Add a search input field alongside the existing filters:

**Location**: Before the dropdown filters
**Styling**: Match existing filter buttons with cyber theme

```text
         [🔍 Search by name...          ]
    
    [Filter by Studio ▼]    [Filter by Specialty ▼]
```

**Implementation**:
- New state: `searchQuery: string`
- Filter logic update: `instructor.name.toLowerCase().includes(searchQuery.toLowerCase())`
- Input styled with `border-primary/50 bg-background/50` to match dropdowns

---

### 3. Add "Show More" After 3 Rows

Implement pagination to show only 9 instructors initially (3 rows of 3 on desktop).

**New State**:
```typescript
const [showAll, setShowAll] = useState(false);
const INITIAL_DISPLAY_COUNT = 9; // 3 rows of 3 cards
```

**Display Logic**:
```typescript
const displayedInstructors = showAll 
  ? filteredInstructors 
  : filteredInstructors.slice(0, INITIAL_DISPLAY_COUNT);
```

**Button Design**:
```text
      [    ↓ Show More (X more instructors)    ]
      or
      [    ↑ Show Less    ]
```

- Only visible if more than 9 filtered results
- Centered below the grid with cyberpunk styling
- Resets to collapsed when filters change

---

### 4. Transform Teaching Philosophy Section

Replace the current simple gray section with a standout grid design similar to the GLOW page and Pricing page patterns.

**Current**: Gray background, centered text, 3 simple icon blocks
**New**: Gradient background with cyber-grid overlay, prominent grid cards with neon effects

**New Layout**:
```text
+----------------------------------------------------------+
|  ▓▓▓▓▓▓▓ GRADIENT BG + CYBER-GRID OVERLAY ▓▓▓▓▓▓▓▓▓▓▓▓▓  |
|                                                          |
|            💜 OUR TEACHING PHILOSOPHY                    |
|       "Transformation happens when you feel..."          |
|                                                          |
|  +------------------+  +------------------+               |
|  | ⚡ EMPOWERING    |  | ❤️ SUPPORTIVE    |               |
|  | We celebrate... |  | Judgment-free...|               |
|  | [cyber-card]    |  | [cyber-card]    |               |
|  +------------------+  +------------------+               |
|                                                          |
|  +------------------+  +------------------+               |
|  | ⭐ EXPERT        |  | 🎯 PROGRESSIVE   |               |
|  | Highly trained..|  | Building skills..|               |
|  | [cyber-card]    |  | [cyber-card]    |               |
|  +------------------+  +------------------+               |
|                                                          |
+----------------------------------------------------------+
```

**Design Elements**:
- Background: `bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900`
- Overlay: `cyber-grid` with opacity
- Cards: `cyber-card` with hover effects and neon icon backgrounds
- Add a 4th philosophy pillar for better grid balance: "Progressive"
- Motion animations on scroll

---

### Technical Implementation Summary

#### New Imports
```typescript
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
```

#### New State Variables
```typescript
const [searchQuery, setSearchQuery] = useState('');
const [showAll, setShowAll] = useState(false);
const INITIAL_DISPLAY_COUNT = 9;
```

#### Updated Filter Logic
```typescript
const filteredInstructors = instructors.filter(i => {
  const matchesStudio = !selectedStudio || i.studioId === selectedStudio;
  const matchesSpecialty = !selectedSpecialty || i.specialties.includes(selectedSpecialty);
  const matchesSearch = !searchQuery || 
    i.name.toLowerCase().includes(searchQuery.toLowerCase());
  return matchesStudio && matchesSpecialty && matchesSearch;
});

// Reset showAll when filters change
useEffect(() => {
  setShowAll(false);
}, [selectedStudio, selectedSpecialty, searchQuery]);
```

#### Displayed Instructors
```typescript
const displayedInstructors = showAll 
  ? filteredInstructors 
  : filteredInstructors.slice(0, INITIAL_DISPLAY_COUNT);
const hasMoreToShow = filteredInstructors.length > INITIAL_DISPLAY_COUNT;
```

---

### Visual Summary

| Section | Before | After |
|---------|--------|-------|
| Join Our Team | White bg, simple layout | Cyber-card, gradient bg, neon effects |
| Filters | 2 dropdowns | Search input + 2 dropdowns |
| Instructor Grid | All visible | First 9, then "Show More" button |
| Teaching Philosophy | Gray bg, centered, 3 items | Gradient + cyber-grid, 4 cyber-cards in grid |

