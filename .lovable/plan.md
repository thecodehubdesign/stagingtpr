
# Plan: Add Calories Burnt Per Hour Comparison Section

## Overview
Add a visual "Calories Burnt Per Hour" comparison section to the Pole vs Gym page, using a horizontal bar chart design inspired by the reference image. This section will highlight how pole fitness compares favorably to other popular workout types.

## Placement
The section will be added **after the "Traditional Gyms VS The Pole Room" comparison chart** (around line 660) and **before the S.H.I.N.E. Framework section** (line 662). This placement makes sense as it continues the comparison narrative with concrete data.

## Design Approach
Based on the reference image and the site's cyberpunk aesthetic:

### Data to Display (sorted by calories, ascending)
| Activity | Calories/Hour | Highlight |
|----------|--------------|-----------|
| Walking - Moderate | 195 | - |
| Yoga | 236 | - |
| Pole - Beginner | 400 | **Highlighted** |
| Zumba & Aerobics | 464 | - |
| Cycling | 483 | - |
| Running | 557 | - |
| Pole - Advanced | 700 | **Highlighted** |
| Swimming | 784 | - |

### Visual Design
- **Layout**: Horizontal bar chart with animated bars
- **Standard activities**: Purple/blue gradient bars matching site colors
- **Pole activities**: Highlighted with fuchsia/gold gradient and glow effect
- **Icons**: Use Lucide icons where available (Activity for walking, Heart for yoga, Flame for pole, etc.)
- **Animation**: Bars animate in width on scroll using Framer Motion
- **Styling**: Dark background with cyber-grid overlay, matching the page's established aesthetic

### Section Structure
```
Section Header:
  - Badge: "THE FACTS"
  - Title: "Calories Burnt Per Hour"
  - Subtitle: Describing pole fitness calorie benefits

Bar Chart:
  - Each row contains:
    - Calorie number (left-aligned, bold)
    - Icon in circular container
    - Horizontal bar (width proportional to max value)
    - Activity name (inside or right of bar)
```

---

## Technical Implementation

### File to Modify
- `src/pages/about/PoleVsGymPage.tsx`

### Changes Required

1. **Add calories data array** to the component's data definitions (around line 14-150):
```tsx
const caloriesData = [
  { activity: "Walking - Moderate", calories: 195, isPole: false },
  { activity: "Yoga", calories: 236, isPole: false },
  { activity: "Pole - Beginner", calories: 400, isPole: true },
  { activity: "Zumba & Aerobics", calories: 464, isPole: false },
  { activity: "Cycling", calories: 483, isPole: false },
  { activity: "Running", calories: 557, isPole: false },
  { activity: "Pole - Advanced", calories: 700, isPole: true },
  { activity: "Swimming", calories: 784, isPole: false },
];
```

2. **Import additional icons** from Lucide if needed (Flame icon for the header)

3. **Add new section JSX** after the comparison chart (after line 660):
   - Outer section with `bg-gray-900/50` background
   - Cyber-grid overlay at 20% opacity
   - Centered header with badge, title, and description
   - Vertical list of animated bar rows
   - Each bar uses `motion.div` with `scaleX` animation triggered on viewport entry
   - Pole activities get special styling (fuchsia border, glow effect, gold/fuchsia bar color)
   - Maximum bar width calculated as percentage of highest value (784 calories)

### Responsive Considerations
- Mobile: Stack layout with smaller bars and text
- Desktop: Full-width bars with numbers displayed prominently
- Bar widths calculated as percentages for responsive scaling
