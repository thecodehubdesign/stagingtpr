

## Update Hero Section Layout

### Changes Overview

1. **Move H1 to single column** at the top of the hero (outside the 2-column grid)
2. **Remove the two CTA buttons** ("Join the Next Beginner Induction" and "Pick Your Studio")
3. **Update trust badges** to 8 new items displayed in a responsive grid

---

### File: `src/pages/FirstTimers.tsx`

#### Change 1: Restructure Hero Layout

Current structure (lines 164-235):
```text
<div className="grid lg:grid-cols-2">
  [Left Column: H1 + Copy + Buttons + Trust Badges]
  [Right Column: Image]
</div>
```

New structure:
```text
[H1 - Full Width Single Column at Top]
<div className="grid lg:grid-cols-2">
  [Left Column: Copy + Trust Badges (8 items)]
  [Right Column: Image]
</div>
```

---

#### Change 2: Remove CTA Buttons

**Lines 184-195** - Remove this entire block:
```tsx
<div className="flex flex-col sm:flex-row gap-4 mb-8">
  <Button className="neon-button...">Join the Next Beginner Induction</Button>
  <Button variant="outline"...>Pick Your Studio</Button>
</div>
```

---

#### Change 3: Update Trust Badges Array

**Lines 39-44** - Replace with 8 new items:

| Current (4 items) | New (8 items) |
|-------------------|---------------|
| Beginner-only entry point | Structured Terms |
| Runs in structured terms | Expert Instructors |
| Expert instructors | Beginner Friendly |
| Virtual Studio included | Variety of Classes |
| | Level Programs |
| | Female Owned |
| | 7 Locations In Melb |
| | Top Rated Studios |

---

#### Change 4: Update Trust Badges Grid

**Lines 198-211** - Update grid to display 4 columns on desktop:
```tsx
// From:
<div className="grid grid-cols-2 gap-4">

// To:
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
```

---

### Visual Result

```text
+----------------------------------------------------------+
|  H1: "Your first class starts here"                      |
|  (Full width, centered or left-aligned, single column)   |
+----------------------------------------------------------+
|  [Left Column - 50%]           |  [Right Column - 50%]   |
|                                |                         |
|  Reassurance copy paragraph    |  Hero image/video       |
|                                |                         |
|  [8 Trust Badges - 4x2 grid]   |                         |
|  Structured Terms | Expert     |                         |
|  Beginner Friendly | Variety   |                         |
|  Level Programs | Female Owned |                         |
|  7 Locations | Top Rated       |                         |
+----------------------------------------------------------+
```

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/pages/FirstTimers.tsx` | Move H1 outside grid, remove buttons, update trustBadges array to 8 items, update grid to 4 columns |

