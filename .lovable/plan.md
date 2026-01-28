

## Memberships Page URL & Content Updates

### Overview

This plan updates the Pricing page to use `/memberships` URL, adds a sister studios section, updates section badges, and removes several sections as requested.

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/App.tsx` | Change route from `/pricing` to `/memberships` |
| `src/components/Header.tsx` | Update navigation links (desktop + mobile) |
| `src/components/Footer.tsx` | Update footer link |
| `src/pages/Pricing.tsx` | Major content updates |

---

### 1. Route Change (App.tsx)

**Line 79:** Change `/pricing` to `/memberships`

```text
<Route path="/memberships" element={<Pricing />} />
```

---

### 2. Header Navigation Updates (Header.tsx)

**Line 96:** Update About menu link from `/pricing` to `/memberships`

```text
{ name: 'Memberships', href: '/memberships', description: 'Flexible packages' },
```

Also update the mobile menu section that references pricing (around line 390+).

---

### 3. Footer Link Update (Footer.tsx)

**Line 130:** Update company links array

```text
{ name: 'Memberships', href: '/memberships' },
```

---

### 4. Pricing.tsx Content Updates

#### 4.1 Update Section Navigation (Lines 18-25)

Remove 'guarantee' from the sections array:

```text
const pricingSections = [
  { id: 'membership', label: 'Membership' },
  { id: 'whats-included', label: "What's Included" },
  { id: 'virtual-studio', label: 'Virtual Studio' },
  { id: 'performances', label: 'Performances' },
  { id: 'sister-studios', label: 'Sister Studios' },
  { id: 'faq', label: 'FAQ' },
];
```

#### 4.2 Update Hero Section (Lines 99-124)

- Remove the "Claim Your Free Class" button (lines 117-121)
- Keep hero text as is

#### 4.3 Update Main Header Text (Lines 261-272)

Change the header badge and title:

```text
<span className="px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-sm font-medium mb-6 inline-block">
  <Gift className="w-4 h-4 inline mr-2" />
  Everything Included in Our Memberships
</span>
```

#### 4.4 Update Section Badges

Replace each section's badge text:

| Section | Current Badge | New Badge |
|---------|--------------|-----------|
| Pole Foundations (line 284) | "4-Week Structured Course" | "Structured Course Lessons" |
| Flexi Pass (line 367) | "8 Sessions Per Month" | "Casual Class Sessions" |
| Practice (line 407) | "Unlimited Access" | "Unlimited Practice Time" |
| Virtual Studio (line 467) | "Included with Membership" | "Virtual Studio Access" |
| Performances (line 533) | None | Add: "TPR Stage Shows & Comp Eligibility" |

#### 4.5 Remove 100% Satisfaction Guarantee Section (Lines 606-633)

Delete entire section:
```text
{/* Money Back Guarantee */}
<section id="guarantee" className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
  ...
</section>
```

#### 4.6 Add Sister Studios / Training Relationships Section

Insert new section before FAQ (after performances section, around line 604):

```text
{/* Sister Studios / Training Relationships */}
<section id="sister-studios" className="py-20 bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6 inline-block">
        <Heart className="w-4 h-4 inline mr-2" />
        Training Relationships
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Sister <span className="gradient-text">Studios</span>
      </h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto">
        Our studios share training partnerships, giving you more flexibility and options for your pole journey.
      </p>
    </motion.div>
    
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Partnership 1 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="cyber-card p-6 rounded-xl"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-fuchsia-500/20 flex items-center justify-center">
            <MapPin className="w-6 h-6 text-fuchsia-400" />
          </div>
          <h3 className="text-xl font-bold text-white">Rowville & Narre Warren</h3>
        </div>
        <p className="text-gray-300">
          These sister studios share memberships - train at either location when holding a membership at one of these two studios.
        </p>
      </motion.div>
      
      {/* Partnership 2 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="cyber-card p-6 rounded-xl"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
            <MapPin className="w-6 h-6 text-cyan-400" />
          </div>
          <h3 className="text-xl font-bold text-white">Mitcham & Kilsyth</h3>
        </div>
        <p className="text-gray-300">
          These sister studios share memberships - train at either location when holding a membership at one of these two studios.
        </p>
      </motion.div>
    </div>
  </div>
</section>
```

#### 4.7 Remove "Ready to Start Your Journey" Section (Lines 663-694)

Delete the entire Final CTA section:
```text
{/* Final CTA */}
<section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 cyber-grid">
  ...
</section>
```

#### 4.8 Add MapPin Icon Import (Line 8)

Add `MapPin` to lucide-react imports for the sister studios section.

---

### Summary of Removals

| Section | Status |
|---------|--------|
| Hero "Claim Your Free Class" button | REMOVE |
| 100% Satisfaction Guarantee section | REMOVE |
| "Ready to Start Your Journey" final CTA | REMOVE |

### Summary of Additions

| Section | Status |
|---------|--------|
| Sister Studios section | ADD (before FAQ) |
| Performance badge "TPR Stage Shows & Comp Eligibility" | ADD |

### URL Changes

| Location | Old | New |
|----------|-----|-----|
| Route (App.tsx) | `/pricing` | `/memberships` |
| Header menu | `Pricing` → `/pricing` | `Memberships` → `/memberships` |
| Footer link | `Pricing` → `/pricing` | `Memberships` → `/memberships` |

---

### Technical Notes

- The Rowville studio mentioned in the sister studios section needs to be added to the studios data if not already present
- All internal links referencing `/pricing` should be updated to `/memberships`
- The section navigation will automatically update scroll-spy behavior based on the new sections array

