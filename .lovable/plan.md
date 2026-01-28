

## Memberships Page Redesign

### Overview

Major overhaul of the Pricing page to create a cleaner, more focused Memberships page with alternating section colors, dynamic image galleries, simplified membership options (Casual Flyer & High Flyer only), and a membership-focused FAQ.

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Pricing.tsx` | Complete restructure with new sections, layouts, and FAQ |

---

### Summary of Changes

| Current | New |
|---------|-----|
| Title: "Pricing & Packages" | Title: "Memberships" |
| 3 membership plans (Drop In, Casual Flyer, High Flyer) | 2 plans only (Casual Flyer, High Flyer) |
| Special Offers section | **REMOVE** |
| Add-Ons & Extras section | **REMOVE** |
| Single images per inclusion | Multi-image galleries (2-3 overlapping images) |
| Same background color pattern | Alternating section colors as you scroll |
| Generic FAQ | Membership-specific FAQ |

---

### Section Navigation Update

```text
const pricingSections = [
  { id: 'membership', label: 'Membership' },
  { id: 'whats-included', label: "What's Included" },
  { id: 'virtual-studio', label: 'Virtual Studio' },
  { id: 'performances', label: 'Performances' },
  { id: 'guarantee', label: 'Guarantee' },
  { id: 'faq', label: 'FAQ' },
];
```

---

### Hero Section Changes

```text
<h1 className="text-4xl sm:text-6xl font-bold gradient-text neon-glow mb-6">
  Memberships
</h1>
<p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
  Flexible memberships designed to fit your schedule and goals. 
  Start your transformation journey today!
</p>
```

---

### Membership Plans - 2 Options Only

Remove "Drop In Session" and keep only:

| Plan | Description |
|------|-------------|
| **Casual Flyer** | 8 classes per month, flexible scheduling |
| **High Flyer** | Unlimited classes, priority booking, full access |

Grid changes from `md:grid-cols-3` to `md:grid-cols-2 max-w-4xl mx-auto` for centered 2-column layout.

---

### Alternating Section Colors

| Section | Background |
|---------|------------|
| Hero | `bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900` |
| Membership Plans | `bg-gray-900` |
| What's Included (Foundations) | `bg-gray-800` |
| What's Included (Flexi Pass) | `bg-gray-900` |
| What's Included (Practice) | `bg-gray-800` |
| Virtual Studio | `bg-gray-900` |
| Performances | `bg-gray-800` |
| Guarantee | `bg-gradient-to-r from-green-600 to-emerald-600` |
| FAQ | `bg-gray-900` |
| Final CTA | `bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900` |

---

### Multi-Image Gallery Layout

Replace single square images with dynamic overlapping galleries:

**Gallery Option A (3 images - stacked overlap):**
```text
<div className="relative h-[500px]">
  {/* Main large image */}
  <div className="absolute top-0 right-0 w-[75%] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-fuchsia-500/30 shadow-2xl z-10">
    <img src={image1} className="w-full h-full object-cover" />
  </div>
  {/* Secondary image - offset left */}
  <div className="absolute bottom-8 left-0 w-[55%] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-xl z-20">
    <img src={image2} className="w-full h-full object-cover" />
  </div>
  {/* Small accent image - top left */}
  <div className="absolute top-12 left-8 w-[35%] aspect-square rounded-xl overflow-hidden border-2 border-cyan-500/30 shadow-lg z-0">
    <img src={image3} className="w-full h-full object-cover" />
  </div>
</div>
```

**Gallery Option B (2 images - side overlap):**
```text
<div className="relative h-[450px]">
  {/* Primary image */}
  <div className="absolute top-0 left-0 w-[65%] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-fuchsia-500/30 shadow-2xl z-10">
    <img src={image1} className="w-full h-full object-cover" />
  </div>
  {/* Secondary image - offset right and down */}
  <div className="absolute bottom-0 right-0 w-[55%] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-xl z-20">
    <img src={image2} className="w-full h-full object-cover" />
  </div>
</div>
```

Each "What's Included" section will use a different gallery arrangement for visual variety.

---

### Image Sources for Galleries

Use existing project images:

| Section | Images to Use |
|---------|---------------|
| Pole Foundations | `coursesAsset`, `/images/glow/hero-1.png`, `/images/glow/hero-4.png` |
| Flexi Pass Classes | `flexiPassAsset`, `/images/glow/hero-2.png`, `/images/glow/hero-5.png` |
| Unlimited Practice | `practiceAsset`, `/images/glow/hero-3.png` |

---

### Removed Sections

Delete these sections entirely (lines 438-513):
- **Special Offers** (`id="offers"`) - student deals grid
- **Add-Ons & Extras** (`id="add-ons"`) - private sessions, workshops grid

Also remove the `studentDeals` and `addOns` arrays from the component.

---

### New Membership FAQ

Replace generic pricing FAQ with membership-focused questions:

| Question | Answer |
|----------|--------|
| What's the difference between Casual Flyer and High Flyer? | Casual Flyer gives you 8 classes per month - perfect if you train 2x per week. High Flyer is unlimited, so you can attend as many classes as you like across all our studios. |
| Can I switch between membership types? | Absolutely! You can upgrade or downgrade your membership at any time. Changes take effect from your next billing cycle. |
| Can I use my membership at any studio? | Yes! Both Casual Flyer and High Flyer memberships give you access to all 6 of our studio locations. Train wherever is convenient for you. |
| What happens if I miss a class? | Life happens! Casual Flyer sessions roll over for up to 6 weeks. High Flyer members have unlimited access so there's nothing to track. |
| Can I freeze my membership? | Yes, you can freeze your membership for up to 3 months per year for medical reasons, travel, or other circumstances. Just give us 7 days notice. |
| Do you offer a trial before I commit? | We offer a free first class so you can experience our studio, instructors, and community before making any commitment. |
| What's included in my membership? | Every membership includes access to our structured courses, weekly classes, unlimited practice sessions, Virtual Studio content, and performance opportunities. |
| Is there a joining fee? | No joining fee! The price you see is the price you pay. We also offer a 100% satisfaction guarantee on your first month. |

---

### Technical Implementation

1. **Update imports** - Remove unused `Clock`, `Users` if not needed after section removal
2. **Update `pricingSections` array** - Remove 'offers' and 'add-ons'
3. **Update hero title** - Change to "Memberships"
4. **Filter `membershipPlans`** - Keep only Casual Flyer and High Flyer
5. **Update membership grid** - 2 columns centered instead of 3
6. **Split "What's Included" section** - Each inclusion becomes its own section with alternating backgrounds
7. **Create image gallery components** - Overlapping image layouts for each section
8. **Delete Special Offers section** - Lines 438-472
9. **Delete Add-Ons section** - Lines 474-513
10. **Replace FAQ content** - New membership-focused questions

---

### Visual Rhythm

The page will flow with alternating dark/darker backgrounds:

```text
[HERO - gradient purple] ↓
[MEMBERSHIP PLANS - gray-900] ↓
[FOUNDATIONS - gray-800 with 3-image gallery] ↓
[FLEXI PASS - gray-900 with 2-image gallery] ↓
[PRACTICE - gray-800 with 2-image gallery] ↓
[VIRTUAL STUDIO - gray-900] ↓
[PERFORMANCES - gray-800] ↓
[GUARANTEE - green gradient] ↓
[FAQ - gray-900] ↓
[FINAL CTA - gradient purple]
```

Each section transition creates visual breathing room while maintaining cohesion.

