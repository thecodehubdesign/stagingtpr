

## Update Hero Section Layout

### Changes Overview

1. **Move H1 to single column** at the top of the hero (outside the 2-column grid)
2. **Remove the two CTA buttons** ("Join the Next Beginner Induction" and "Pick Your Studio")
3. **Update trust badges** to 6 new items displayed in a 2-column grid

---

### File: `src/pages/FirstTimers.tsx`

#### Change 1: Update Trust Badges Array

**Lines 39-44** - Replace with 6 new items:

```tsx
const trustBadges = [
  { icon: Calendar, text: "Runs in Structured Terms" },
  { icon: Award, text: "Expert Instructors" },
  { icon: Users, text: "Beginner Friendly" },
  { icon: Sparkles, text: "Variety of Classes" },
  { icon: Trophy, text: "Level Programs" },
  { icon: Heart, text: "Female Owned" },
];
```

---

#### Change 2: Restructure Hero Layout (Lines 164-235)

**Current structure:**
```text
<div className="grid lg:grid-cols-2">
  [Left Column: H1 + Copy + Buttons + Trust Badges]
  [Right Column: Image]
</div>
```

**New structure:**
```text
[H1 - Full Width Single Column at Top]
<div className="grid lg:grid-cols-2">
  [Left Column: Copy + Trust Badges (6 items, 2 columns)]
  [Right Column: Image]
</div>
```

Move the `<h1>` element outside the grid, before it, so it spans full width.

---

#### Change 3: Remove CTA Buttons

**Lines 184-195** - Remove this entire block:
```tsx
<div className="flex flex-col sm:flex-row gap-4 mb-8">
  <Button className="neon-button...">Join the Next Beginner Induction</Button>
  <Button variant="outline"...>Pick Your Studio</Button>
</div>
```

---

#### Change 4: Keep Trust Badges Grid at 2 Columns

**Lines 198** - Keep the existing 2-column grid:
```tsx
<div className="grid grid-cols-2 gap-4">
```

This will display the 6 badges as 3 rows of 2 items each.

---

### Visual Result

```text
+----------------------------------------------------------+
|  H1: "Your first class starts here"                      |
|  (Full width, single column at top)                      |
+----------------------------------------------------------+
|  [Left Column - 50%]           |  [Right Column - 50%]   |
|                                |                         |
|  Reassurance copy paragraph    |  Hero image/video       |
|                                |                         |
|  [6 Trust Badges - 2 columns]  |                         |
|  Structured Terms | Expert     |                         |
|  Beginner Friendly | Variety   |                         |
|  Level Programs | Female Owned |                         |
+----------------------------------------------------------+
```

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/pages/FirstTimers.tsx` | Move H1 outside grid, remove buttons, update trustBadges array to 6 items |

