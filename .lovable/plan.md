

# First Timers Page Migration and Rebuild

## Overview

This plan involves two major changes:
1. **Move** the current First Timers page content to `/about/pole-vs-gym`
2. **Create** a completely new First Timers page based on your detailed 14-section layout

---

## Phase 1: Create Pole vs Gym Page

### New File: `src/pages/about/PoleVsGymPage.tsx`

Copy the entire current `FirstTimers.tsx` content (909 lines) to a new location under the About section. This preserves all the existing sales content:

| Current Section | Content Preserved |
|-----------------|-------------------|
| Hero | Video + benefits checklist |
| Social Proof Banner | 4.9 rating + reviews count |
| Marquee Banner | "Transform Your Body" animation |
| Pathway Section | Transformation story |
| Gallery | 6-image bento grid |
| "It's Not You" | Fitness industry narrative |
| Comparison Chart | Gym vs Pole Room with icons |
| S.H.I.N.E. Framework | 5-step blueprint |
| Founder Story | Jasmine's story + signature |
| 7 Studios Map | Interactive Google Map |
| Testimonials | 3 student stories |
| FAQ | 5 common questions |
| Final CTA | Conversion banner |

---

## Phase 2: Update Navigation

### File: `src/components/Header.tsx`

Add "Pole vs Gym" to the About mega menu in the "Company" category (around line 93):

```tsx
company: {
  title: 'Company',
  items: [
    { name: 'Our Story', href: '/about', description: 'Learn about our journey' },
    { name: 'Pole vs Gym', href: '/about/pole-vs-gym', description: 'Why pole beats the gym' },  // NEW
    { name: 'Instructors', href: '/instructors', description: 'Meet our amazing team' },
    // ... rest unchanged
  ]
}
```

---

## Phase 3: Update App Routing

### File: `src/App.tsx`

Add import and route for the new page:

```tsx
// Add import
import PoleVsGymPage from "./pages/about/PoleVsGymPage";

// Add route under About section
<Route path="/about/pole-vs-gym" element={<PoleVsGymPage />} />
```

---

## Phase 4: Create New First Timers Page

### File: `src/pages/FirstTimers.tsx` (Complete Rebuild)

Replace the entire file with the new 14-section layout you specified. The new page is focused on practical first-class information rather than sales copy.

---

### Section-by-Section Implementation

#### Section 1: Hero (Above the Fold)

```text
+--------------------------------------------------+
|  [Text - Left 60%]        |  [Video/Image - 40%] |
|                           |                      |
|  H1: "Your first class    |   10-20 sec video    |
|       starts here"        |   montage or hero    |
|                           |   photo of real      |
|  2-line reassurance copy  |   class              |
|                           |                      |
|  [Primary CTA] [Sec CTA]  |                      |
|                           |                      |
|  [ Icon Row: 4 trust badges ]                    |
+--------------------------------------------------+
```

**Image placement**: Right side - video placeholder or `/images/first-timers/gallery-1.png`

**Trust icons row**:
- Beginner only entry point
- Runs in terms
- Expert instructors
- Virtual Studio included

---

#### Section 2: Social Proof Strip

```text
+--------------------------------------------------+
|  [Review 1] [Review 2] [Review 3] ... carousel   |
|  (6-10 short first-class reviews)                |
|  Optional: small headshots next to each review   |
+--------------------------------------------------+
```

**Layout**: Horizontal scrolling carousel using existing `infinite-slider` component or Embla Carousel

**Data**: New `firstClassReviews` array with short quotes focused on nerves, welcoming vibe, supportive atmosphere

---

#### Section 3: "Start with Pole, Explore Aerials"

```text
+--------------------------------------------------+
|  [Copy - Left 50%]        |  [2x2 Image Grid]    |
|                           |                      |
|  Explanation that many    |  +------+------+     |
|  start with pole then     |  | Pole | Lyra |     |
|  move into aerials.       |  +------+------+     |
|  Mixing is encouraged.    |  |Silks |Dance |     |
|                           |  +------+------+     |
+--------------------------------------------------+
```

**Image placement**: 2x2 grid on right side with discipline images

---

#### Section 4: First Timer Classes

```text
+--------------------------------------------------+
|  Heading: "First Timer Classes"                  |
|  Copy: About packing the SHINE table...          |
|                                                  |
|  [CTA Row]                |  [Image - Right]     |
|  "View schedule"          |  Instructor helping  |
|  "Choose my studio"       |  beginner image      |
+--------------------------------------------------+
```

**Image placement**: Right side - instructor assisting beginner

---

#### Section 5: How Our Curriculum Works

**A. Curriculum Pathway Diagram (Centered)**

```text
+--------------------------------------------------+
|                                                  |
|  Step 1        Step 2        Step 3       Step 4 |
|    O------------>O------------>O---------->O     |
|  Choose      Beginner      Foundations  Progress |
|  Studio      Induction     Classes      Pathways |
|                                                  |
+--------------------------------------------------+
```

**Visual**: Flow diagram with 4 connected steps using CSS/SVG

**B. Mini Term Schedule Table**

```text
+--------------------------------------------------+
|  [Thin wide studio photo banner above]           |
+--------------------------------------------------+
|  Mini Term    | Induction Day | What to Do | CTA |
|  Start Date   | & Time        |            |     |
|---------------|---------------|------------|-----|
|  Week 1       | Saturday 10am | Register   |[Join]|
|  Weeks 2-6    | Foundations   | Attend     |     |
|  End of term  | Next steps    | Review     |     |
+--------------------------------------------------+
```

**Image placement**: Thin wide banner above table

---

#### Section 6: Choose Your Studio (Location Selector)

```text
+--------------------------------------------------+
|  Grid of Studio Cards (2-3 across desktop)       |
|                                                  |
|  +-------------+  +-------------+  +-------------+|
|  | [Photo]     |  | [Photo]     |  | [Photo]     ||
|  | Mitcham     |  | Eltham      |  | CBD         ||
|  | [Timetable] |  | [Timetable] |  | [Timetable] ||
|  | [Directions]|  | [Directions]|  | [Directions]||
|  +-------------+  +-------------+  +-------------+|
|                                                  |
|  [Optional small map embed below]                |
+--------------------------------------------------+
```

**Data source**: Import from `src/data/studios.ts`

**Image placement**: One photo per card (studio exterior/interior)

---

#### Section 7: Intro Offers (Brand New Students Only)

```text
+--------------------------------------------------+
|  [Left - Rules & CTA]     |  [Right - Offer Card]|
|                           |                      |
|  Clear eligibility rule   |  Visual pricing card |
|  What offer includes      |  showing intro offer |
|  [Claim Newbie Offer]     |                      |
+--------------------------------------------------+
|  [Small FAQ accordion below]                     |
|  - Returning after long break?                   |
+--------------------------------------------------+
|  Eligibility Table                               |
|  Brand new: Yes | Returning: No | Long break: No |
+--------------------------------------------------+
```

**Table**: Simple eligibility matrix

---

#### Section 8: What to Expect in Your First Visit

```text
+--------------------------------------------------+
|  [Left - Step List]       |  [Right - 3 Images]  |
|                           |                      |
|  1. Arrive 10 min early   |  [ Check-in photo ]  |
|  2. Check in at desk      |  [ Warm-up shot   ]  |
|  3. Warm up together      |  [ Instructor demo]  |
|  4. Foundations moves     |                      |
|  5. Cool down & stretch   |                      |
+--------------------------------------------------+
```

**Image placement**: 3-image vertical stack on right

**Tone**: Emotional and reassuring, no charts

---

#### Section 9: What to Wear & Studio Guidelines

**A. What to Wear Table**

```text
+--------------------------------------------------+
|  Class Type    | Wear This          | Avoid This |
|----------------|--------------------+------------|
|  Pole          | Shorts, singlet    | Moisturiser|
|  Lyra          | Leggings, fitted   | Jewellery  |
|  Silks/Hammock | Leggings, sleeves  | Zips       |
+--------------------------------------------------+
```

**B. Do and Don't List**

- No moisturiser on the day
- No jewellery
- No zips

**Image placement**: Small "flat lay" photo of recommended outfit items

---

#### Section 10: Why Choose The Pole Room

```text
+--------------------------------------------------+
|  [Feature 1]    [Feature 2]    [Feature 3]    [4]|
|  Performance    Community       Studios       Team|
|  [Stage photo]  [Group shot]    [Interior]   [Coach]|
+--------------------------------------------------+
|  Optional: Stats row                             |
|  "7 Studios" | "10+ Years" | "5000+ Members"     |
+--------------------------------------------------+
```

**Image placement**: One image per feature block

**Stats**: Only if accurate numbers available

---

#### Section 11: Performance Opportunities (Expandable)

```text
+--------------------------------------------------+
|  [Left - Copy]            |  [Right - Carousel]  |
|                           |                      |
|  Explains showcases,      |  SHINE/GLOW          |
|  competitions, optional   |  showcase images     |
|  nature of performing     |                      |
+--------------------------------------------------+
|  Optional: Simple timeline graphic               |
|  Train --> Rehearse --> Showcase                 |
+--------------------------------------------------+
```

**Image placement**: Carousel of showcase/performance images

---

#### Section 12: Virtual Studio for Members

```text
+--------------------------------------------------+
|  [Left - Copy]            |  [Right - Screenshots]|
|                           |                       |
|  What Virtual Studio      |  2-3 app/interface   |
|  is used for              |  mockups             |
+--------------------------------------------------+
|  Comparison Table: In-Studio vs Virtual Studio   |
|  Feature        | In Studio | Virtual Studio     |
|-----------------|-----------|-------------------- |
|  Coaching       | Yes       | Limited            |
|  Skill learning | Yes       | Support content    |
|  Strength/Flex  | Yes       | Yes                |
|  Consistency    | Good      | Excellent          |
+--------------------------------------------------+
|  [Explore Memberships] [See Virtual Preview]     |
+--------------------------------------------------+
```

**Image placement**: Screenshot mockups on right

---

#### Section 13: FAQs (Core Conversion FAQ)

```text
+--------------------------------------------------+
|  Accordion Style                                 |
|  - Can I start mid-term?                         |
|  - Do I need strength or flexibility?            |
|  - Can I do pole AND aerials?                    |
|  - What if I miss a week?                        |
|  - Returning after a long break?                 |
|  - How do I find my studio schedule?             |
+--------------------------------------------------+
```

**Format**: Lean accordion using existing `Accordion` component

---

#### Section 14: Final CTA Banner

```text
+--------------------------------------------------+
|  [Background: Smiling group photo / studio shot] |
|                                                  |
|  "Next Beginner Induction starts soon"           |
|                                                  |
|  [Join the Next Intake]  [Choose My Studio]      |
+--------------------------------------------------+
```

**Image placement**: Full-width background image

---

## Data Structures to Create

### New Arrays for FirstTimers.tsx

```tsx
// Section 2: Social proof reviews
const firstClassReviews = [
  { quote: "I was so nervous but everyone was amazing!", name: "Sarah", studio: "Mitcham" },
  // ... 6-10 more
];

// Section 5: Mini term schedule
const miniTermSchedule = [
  { week: "Week 1", event: "Induction", action: "Register & attend intro session" },
  { week: "Weeks 2-6", event: "Foundations", action: "Weekly progression classes" },
  { week: "End of term", event: "Next steps", action: "Level guidance & pathway selection" }
];

// Section 9: What to wear
const classAttire = [
  { classType: "Pole", wear: "Shorts, singlet, grip-friendly", avoid: "Moisturiser, oils" },
  { classType: "Lyra", wear: "Leggings, fitted top", avoid: "Loose clothing" },
  { classType: "Silks/Hammock", wear: "Leggings, sleeves optional", avoid: "Zips, jewellery" }
];

// Section 12: In-studio vs Virtual comparison
const studioComparison = [
  { feature: "Coaching feedback", inStudio: "Yes", virtual: "Limited" },
  { feature: "Skill learning", inStudio: "Yes", virtual: "Support content" },
  { feature: "Strength/Flexibility", inStudio: "Yes", virtual: "Yes" },
  { feature: "Consistency between classes", inStudio: "Good", virtual: "Excellent" }
];

// Section 13: FAQs (new set focused on conversion)
const faqs = [
  { question: "Can I start mid-term?", answer: "Beginners join at induction only..." },
  { question: "Do I need strength or flexibility?", answer: "Absolutely not!..." },
  // ... more
];
```

---

## Files Summary

| Action | File | Description |
|--------|------|-------------|
| CREATE | `src/pages/about/PoleVsGymPage.tsx` | Full copy of current FirstTimers content (~909 lines) |
| MODIFY | `src/App.tsx` | Add import + route for PoleVsGymPage |
| MODIFY | `src/components/Header.tsx` | Add "Pole vs Gym" to About menu |
| REPLACE | `src/pages/FirstTimers.tsx` | Complete rebuild with 14-section layout |

---

## Technical Notes

### Components to Reuse
- `Accordion` for FAQ sections
- `Button` for CTAs
- `studios` data from `src/data/studios.ts` for location selector
- `motion` from framer-motion for animations
- Existing `cyber-card`, `gradient-text`, `neon-button` CSS classes

### New Components Potentially Needed
- `CurriculumPathway`: Visual flow diagram component (Section 5A)
- `ReviewCarousel`: Horizontal scrolling reviews (Section 2)

### Image Assets Required
The plan references several image placements. Existing assets that can be reused:
- `/images/first-timers/gallery-*.avif` for class photos
- Studio photos from `studios.ts` data
- Instructor photos from existing assets

### Tables Confirmed for This Page
1. Mini term intake schedule (Section 5)
2. Eligibility table for intro offer (Section 7)
3. What to wear table (Section 9)
4. In-studio vs Virtual comparison (Section 12)

### Diagrams Confirmed
1. Curriculum pathway diagram (Section 5A) - simple 4-step flow

---

## Navigation Structure After Changes

```text
Top Nav:
├── First Timers → /first-timers (NEW TEMPLATE - practical guide)
├── Programs → (unchanged)
├── Studios → (unchanged)
├── Functions → (unchanged)
├── About
│   ├── Company
│   │   ├── Our Story → /about
│   │   ├── Pole vs Gym → /about/pole-vs-gym (MOVED FROM FIRST TIMERS)
│   │   ├── Instructors → /instructors
│   │   └── ...
│   └── ...
└── Shop → (unchanged)
```

---

## Estimated Size

| File | Approximate Lines |
|------|-------------------|
| `PoleVsGymPage.tsx` | ~910 lines (direct copy) |
| New `FirstTimers.tsx` | ~800-1000 lines (14 sections) |
| `App.tsx` changes | +3 lines |
| `Header.tsx` changes | +1 line |

