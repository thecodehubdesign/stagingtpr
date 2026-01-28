

## Add "What's Waiting For You Inside?" Section to Pricing Page

### Overview

Add a new comprehensive section to the Pricing page that details what's included in memberships. This section will feature 3 inclusion cards with images, values, and benefit bullet points - styled similarly to the existing Virtual Studio and Performance Opportunities sections.

---

### Files to Modify/Create

| File | Action |
|------|---------|
| `src/pages/Pricing.tsx` | Add new "What's Waiting" section with 3 inclusion cards |
| `src/assets/courses-asset.png` | **COPY** - Pole Foundations image |
| `src/assets/flexi-pass-asset.png` | **COPY** - 8 Session Flexi Pass image |
| `src/assets/practice-asset.png` | **COPY** - Unlimited Practice image |

---

### Section Structure

The new section will be placed **after the Membership section (after line 271)** and **before Special Offers section**.

#### Header Content

```tsx
{/* What's Waiting Section */}
<section id="whats-included" className="py-20 bg-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        What's Waiting For You <span className="gradient-text">Inside?</span>
      </h2>
      <p className="text-xl text-fuchsia-400 font-semibold mb-4">
        Your Membership: Your All Access Pass to Spins, Strength and Serious Fun
      </p>
      <p className="text-gray-300 max-w-3xl mx-auto mb-4">
        Here's everything included in our Memberships, with each inclusion designed to keep you moving, motivated, and making real progress towards your pole goals.
      </p>
      <p className="text-gray-400 max-w-2xl mx-auto italic">
        This is not a "come when you feel like it" situation. It's consistent, supported training that builds real skill, real strength, and real confidence.
      </p>
    </div>
```

---

### Three Inclusion Cards

Each card will have:
- Large image on one side
- Title with value badge
- Description paragraph
- 3 bullet points with emoji icons

#### Card 1: Pole Foundations Course

```tsx
{/* Inclusion 1: Pole Foundations */}
<motion.div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
  <div className="order-2 lg:order-1">
    <div className="flex items-center gap-3 mb-4">
      <h3 className="text-2xl font-bold text-white">
        Progressive Pole Training That Builds You Up Fast
      </h3>
    </div>
    <div className="inline-block mb-4">
      <Badge className="bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30 text-lg px-4 py-2">
        1 x 4 Week Pole Foundations Course
      </Badge>
    </div>
    <p className="text-gray-400 mb-2">Value: <span className="text-white font-semibold">$199</span></p>
    
    <ul className="space-y-4 mt-6">
      <li className="flex items-start gap-3">
        <span className="text-2xl">📈</span>
        <div>
          <span className="text-white font-semibold">Step by step progress:</span>
          <span className="text-gray-300"> a structured pathway where each week builds on the last, so you're never stuck, always improving.</span>
        </div>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-2xl">💪</span>
        <div>
          <span className="text-white font-semibold">Stronger every session:</span>
          <span className="text-gray-300"> training that develops your strength, technique, and stamina in a way that actually sticks.</span>
        </div>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-2xl">✨</span>
        <div>
          <span className="text-white font-semibold">Confidence on repeat:</span>
          <span className="text-gray-300"> finish each session with new wins, new skills, and momentum for your next class.</span>
        </div>
      </li>
    </ul>
  </div>
  
  <div className="order-1 lg:order-2">
    <div className="aspect-square rounded-2xl overflow-hidden border-2 border-fuchsia-500/30">
      <img src={coursesAsset} alt="Pole Foundations Course" className="w-full h-full object-cover" />
    </div>
  </div>
</motion.div>
```

#### Card 2: 8 Session Flexi Pass (Image on left)

```tsx
{/* Inclusion 2: Flexi Pass */}
<motion.div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
  <div>
    <div className="aspect-square rounded-2xl overflow-hidden border-2 border-fuchsia-500/30">
      <img src={flexiPassAsset} alt="8 Session Flexi Pass" className="w-full h-full object-cover" />
    </div>
  </div>
  
  <div>
    <h3 className="text-2xl font-bold text-white mb-4">
      Sweat, Smile, Repeat: Weekly Classes Designed to Empower You
    </h3>
    <Badge className="bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30 text-lg px-4 py-2 mb-4 inline-block">
      8 x Session Flexi Pass
    </Badge>
    <p className="text-gray-400 mb-2">Value: <span className="text-white font-semibold">$336</span></p>
    
    <ul className="space-y-4 mt-6">
      <li className="flex items-start gap-3">
        <span className="text-2xl">💜</span>
        <div>
          <span className="text-white font-semibold">Choose your vibe every time:</span>
          <span className="text-gray-300"> with dance, conditioning, and skill based classes, your training stays fresh and fun.</span>
        </div>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-2xl">💪</span>
        <div>
          <span className="text-white font-semibold">Fun that works:</span>
          <span className="text-gray-300"> every session leaves you sweaty, smiling, and stronger - making showing up easier.</span>
        </div>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-2xl">✨</span>
        <div>
          <span className="text-white font-semibold">Grow on your terms:</span>
          <span className="text-gray-300"> explore different class styles, find what you love, and build confidence with every session.</span>
        </div>
      </li>
    </ul>
  </div>
</motion.div>
```

#### Card 3: Unlimited Practice (Image on right)

```tsx
{/* Inclusion 3: Unlimited Practice */}
<motion.div className="grid lg:grid-cols-2 gap-8 items-center">
  <div className="order-2 lg:order-1">
    <h3 className="text-2xl font-bold text-white mb-4">
      Unlimited Practice Time to Perfect Your Power Moves
    </h3>
    <Badge className="bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30 text-lg px-4 py-2 mb-4 inline-block">
      Unlimited Practice Sessions
    </Badge>
    <p className="text-gray-400 mb-2">Value: <span className="text-white font-semibold">$180</span></p>
    
    <ul className="space-y-4 mt-6">
      <li className="flex items-start gap-3">
        <span className="text-2xl">🔄</span>
        <div>
          <span className="text-white font-semibold">Progress at your own pace:</span>
          <span className="text-gray-300"> repeat moves until they click and feel natural in your body.</span>
        </div>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-2xl">💪</span>
        <div>
          <span className="text-white font-semibold">Lock in muscle memory faster:</span>
          <span className="text-gray-300"> extra practice helps you retain skills and improve quicker between classes.</span>
        </div>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-2xl">✨</span>
        <div>
          <span className="text-white font-semibold">Turn consistency into confidence:</span>
          <span className="text-gray-300"> the more you show up, the stronger, smoother, and more fearless you become.</span>
        </div>
      </li>
    </ul>
  </div>
  
  <div className="order-1 lg:order-2">
    <div className="aspect-square rounded-2xl overflow-hidden border-2 border-fuchsia-500/30">
      <img src={practiceAsset} alt="Unlimited Practice" className="w-full h-full object-cover" />
    </div>
  </div>
</motion.div>
```

---

### Navigation Update

Add new section to the `pricingSections` array:

```tsx
const pricingSections = [
  { id: 'membership', label: 'Membership' },
  { id: 'whats-included', label: "What's Included" },  // NEW
  { id: 'offers', label: 'Special Offers' },
  { id: 'add-ons', label: 'Add-Ons' },
  { id: 'virtual-studio', label: 'Virtual Studio' },
  { id: 'performances', label: 'Performances' },
  { id: 'guarantee', label: 'Guarantee' },
  { id: 'faq', label: 'FAQ' },
];
```

---

### Image Assets

Copy the 3 uploaded images to `src/assets/`:

| Source | Destination |
|--------|-------------|
| `user-uploads://Courses_Asset.png` | `src/assets/courses-asset.png` |
| `user-uploads://8Sessionpackage.png` | `src/assets/flexi-pass-asset.png` |
| `user-uploads://unlimited_Pratcice_Asset.png` | `src/assets/practice-asset.png` |

Add imports at the top of the file:

```tsx
import coursesAsset from '@/assets/courses-asset.png';
import flexiPassAsset from '@/assets/flexi-pass-asset.png';
import practiceAsset from '@/assets/practice-asset.png';
```

---

### Layout Pattern

The section alternates image positions for visual interest:

| Card | Image Position | Background |
|------|----------------|------------|
| 1. Pole Foundations | Right | - |
| 2. Flexi Pass | Left | - |
| 3. Unlimited Practice | Right | - |

Each card uses `motion.div` with staggered animations matching the existing Virtual Studio and Performance sections.

---

### Section Placement in Page Flow

1. Hero
2. Membership Plans (id="membership")
3. **What's Waiting For You Inside? (id="whats-included")** - NEW
4. Special Offers (id="offers")
5. Add-Ons (id="add-ons")
6. Virtual Studio (id="virtual-studio")
7. Performances (id="performances")
8. Guarantee (id="guarantee")
9. FAQ (id="faq")
10. Final CTA

---

### Technical Notes

- Images imported as ES6 modules from `src/assets/` for proper bundling
- Uses same motion animation patterns as existing sections (`initial`, `whileInView`, `viewport`)
- Maintains cyberpunk aesthetic with `cyber-card`, gradient borders, and fuchsia accent colors
- Emoji icons used for bullet points as specified in the content
- Alternating grid layout creates visual rhythm matching similar sections

