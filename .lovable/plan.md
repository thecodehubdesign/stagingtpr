
## Add Section Navigation & Move Content to Pricing Page

### Overview

This plan adds a sticky section submenu (like on studio/location pages) to the Pricing page, and moves the Virtual Studio and Performance Opportunities sections from FirstTimers.tsx to Pricing.tsx.

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Pricing.tsx` | Add SectionNavigation component, add section IDs, add Virtual Studio & Performance Opportunities sections |
| `src/pages/FirstTimers.tsx` | Remove Virtual Studio & Performance Opportunities sections |

---

### Change 1: Add SectionNavigation to Pricing.tsx

**Import the component and define sections array:**

```tsx
import SectionNavigation from '@/components/SectionNavigation';
import { motion } from 'framer-motion';
import { Star, ChevronRight, Monitor } from 'lucide-react';
import appMockup from '@/assets/app-mockup.png';

const pricingSections = [
  { id: 'membership', label: 'Membership' },
  { id: 'offers', label: 'Special Offers' },
  { id: 'add-ons', label: 'Add-Ons' },
  { id: 'virtual-studio', label: 'Virtual Studio' },
  { id: 'performances', label: 'Performances' },
  { id: 'guarantee', label: 'Guarantee' },
  { id: 'faq', label: 'FAQ' },
];
```

**Place SectionNavigation after Header:**

```tsx
<Header />
<SectionNavigation sections={pricingSections} />
```

---

### Change 2: Add Section IDs to Existing Sections

Add `id` attributes to each existing section so the navigation can scroll to them:

| Section | ID to Add |
|---------|-----------|
| Main Pricing Plans | `id="membership"` |
| Special Offers | `id="offers"` |
| Add-Ons & Extras | `id="add-ons"` |
| Money Back Guarantee | `id="guarantee"` |
| FAQ Section | `id="faq"` |

---

### Change 3: Add Virtual Studio Section to Pricing.tsx

**Add after Add-Ons section (before Money Back Guarantee):**

```tsx
{/* Virtual Studio Section */}
<section id="virtual-studio" className="py-20 bg-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-sm font-medium mb-4 inline-block">
          <Monitor className="w-4 h-4 inline mr-2" />
          Included with Membership
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Virtual Studio for <span className="gradient-text">Members</span>
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Can't make it to class? Traveling? Want extra practice between sessions? 
          Our Virtual Studio gives you on-demand access to tutorials, drills, and training content.
        </p>
        
        {/* Comparison Table */}
        <div className="cyber-card rounded-xl p-6 mb-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-fuchsia-500/30">
                <th className="text-left py-3 text-gray-400 font-medium">Feature</th>
                <th className="text-center py-3 text-fuchsia-400 font-semibold">In-Studio</th>
                <th className="text-center py-3 text-fuchsia-400 font-semibold">Virtual</th>
              </tr>
            </thead>
            <tbody>
              {studioComparison.map((row, index) => (
                <tr key={index} className="border-b border-gray-700/50 last:border-b-0">
                  <td className="py-3 text-gray-300">{row.feature}</td>
                  <td className="py-3 text-center text-white">{row.inStudio}</td>
                  <td className="py-3 text-center text-gray-400">{row.virtual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex gap-4">
          <Button className="neon-button text-black font-bold">
            Preview Virtual Studio
          </Button>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-fuchsia-500/30 bg-gray-800">
          <img 
            src={appMockup} 
            alt="Virtual Studio interface" 
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>
    </div>
  </div>
</section>
```

**Add data array for comparison table:**

```tsx
const studioComparison = [
  { feature: "Coaching feedback", inStudio: "Live, personalised", virtual: "Video-based support" },
  { feature: "Skill learning", inStudio: "Hands-on guidance", virtual: "Tutorials & drills" },
  { feature: "Strength & Flexibility", inStudio: "Class-based", virtual: "On-demand programs" },
  { feature: "Consistency between classes", inStudio: "Weekly schedule", virtual: "Train anytime" },
];
```

---

### Change 4: Add Performance Opportunities Section to Pricing.tsx

**Add after Virtual Studio section:**

```tsx
{/* Performance Opportunities Section */}
<section id="performances" className="py-20 bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Performance <span className="gradient-text">Opportunities</span>
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Performing is completely optional, but for many students, it becomes the highlight 
          of their pole journey. We host regular showcase events where you can share what 
          you've learned with friends and family.
        </p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-center gap-3 text-gray-300">
            <Star className="w-5 h-5 text-fuchsia-400" />
            <strong>SHINE Competition</strong> - Our annual student competition
          </li>
          <li className="flex items-center gap-3 text-gray-300">
            <Star className="w-5 h-5 text-fuchsia-400" />
            <strong>GLOW Showcase</strong> - Australia's largest pole showcase
          </li>
          <li className="flex items-center gap-3 text-gray-300">
            <Star className="w-5 h-5 text-fuchsia-400" />
            <strong>Performance Nights</strong> - End of term showcases
          </li>
        </ul>
        
        {/* Timeline */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-fuchsia-500/20 flex items-center justify-center">
              <span className="text-fuchsia-400 text-sm">1</span>
            </div>
            <span className="text-gray-300 text-sm">Train</span>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-500" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-fuchsia-500/20 flex items-center justify-center">
              <span className="text-fuchsia-400 text-sm">2</span>
            </div>
            <span className="text-gray-300 text-sm">Rehearse</span>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-500" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-fuchsia-500/20 flex items-center justify-center">
              <span className="text-fuchsia-400 text-sm">3</span>
            </div>
            <span className="text-gray-300 text-sm">Showcase</span>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4"
      >
        <div className="aspect-[3/4] rounded-xl overflow-hidden border border-fuchsia-500/20">
          <img 
            src="/images/glow/hero-2.png" 
            alt="GLOW showcase performance" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[3/4] rounded-xl overflow-hidden border border-fuchsia-500/20">
          <img 
            src="/images/glow/hero-3.png" 
            alt="SHINE competition" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  </div>
</section>
```

---

### Change 5: Remove Sections from FirstTimers.tsx

**Remove the following from FirstTimers.tsx:**

1. Lines 791-869: Performance Opportunities section
2. Lines 871-939: Virtual Studio section
3. Lines 147-152: `studioComparison` data array (no longer needed on this page)

---

### Final Section Order on Pricing Page

| # | Section | ID |
|---|---------|-----|
| 1 | Hero | (no id) |
| 2 | Section Navigation | (sticky) |
| 3 | Membership Plans | `membership` |
| 4 | Special Offers | `offers` |
| 5 | Add-Ons & Extras | `add-ons` |
| 6 | Virtual Studio | `virtual-studio` |
| 7 | Performance Opportunities | `performances` |
| 8 | Money Back Guarantee | `guarantee` |
| 9 | FAQ | `faq` |
| 10 | Final CTA | (no id) |

---

### Technical Notes

- The `SectionNavigation` component is already built and works by detecting scroll position and highlighting the active section
- Framer Motion is needed for the new sections' animations - will be imported
- The `appMockup` asset needs to be imported for the Virtual Studio image
- Section IDs must match the `pricingSections` array for scroll-spy to work correctly
