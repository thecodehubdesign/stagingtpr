

## Update ProgramPageTemplate: Layout Swap, Terminology, Term Schedule & Grading CTA

### Overview

This plan restructures the Program Overview section, updates terminology, adds a term schedule table, removes the "What to Bring" card, and adds a grading assessment CTA for returning students.

---

### Change 1: Swap Image & Highlights in Program Overview

**Current Layout:**
```
[Highlights on LEFT] | [Image Carousel on RIGHT]
```

**New Layout:**
```
[Image Carousel on LEFT] | [Highlights on RIGHT]
```

**Implementation:**
Swap the grid column order in the Course Overview section (lines 162-227).

```tsx
{/* Top Row: Image Carousel + Highlights (swapped) */}
<div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
  {/* Left: Image Carousel (moved from right) */}
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative"
  >
    {/* ... existing carousel code ... */}
  </motion.div>
  
  {/* Right: Highlights (moved from left) */}
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <h3 className="text-2xl font-bold text-white mb-6">Program Highlights</h3>
    {/* ... existing highlights code ... */}
  </motion.div>
</div>
```

---

### Change 2: Update Terminology (Course to Program)

| Current | New |
|---------|-----|
| "Course Overview" | "Program Overview" |
| "Course Highlights" | "Program Highlights" |
| "Course preview" (alt text) | "Program preview" |

**Files affected:** Lines 154-158, 170, 191

---

### Change 3: Remove "What to Bring" Card

**Current State (lines 334-375):**
The section contains two cards:
1. "What to Bring" card
2. "Prerequisites" card

**New State:**
- Remove the "What to Bring" card entirely
- Keep only the "Prerequisites" card if it has content
- If no prerequisites, this section becomes optional/hidden

**Implementation:**
Remove the "What to Bring" card and adjust layout to show only Prerequisites when available.

---

### Change 4: Add Upcoming Term Schedule Section

**New Section** - after Curriculum, before Prerequisites

Uses the exact table styling from First Timers "How Beginners Join" section (lines 667-707):

```tsx
{/* Upcoming Term Schedule */}
<section className="py-20 bg-gray-900/50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Upcoming <span className="gradient-text">Term Dates</span>
      </h2>
      <p className="text-gray-300">8-week program blocks over the next 12 months</p>
    </motion.div>
    
    <div className="cyber-card rounded-2xl overflow-hidden">
      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-fuchsia-500/30">
                <th className="text-left py-3 px-4 text-fuchsia-400 font-semibold">Term</th>
                <th className="text-left py-3 px-4 text-fuchsia-400 font-semibold">Start Date</th>
                <th className="text-left py-3 px-4 text-fuchsia-400 font-semibold">End Date</th>
                <th className="text-left py-3 px-4 text-fuchsia-400 font-semibold">Status</th>
                <th className="text-right py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {termSchedule.map((term, index) => (
                <tr key={index} className="border-b border-gray-700/50 last:border-b-0">
                  <td className="py-4 px-4 text-white font-medium">{term.name}</td>
                  <td className="py-4 px-4 text-gray-300">{term.startDate}</td>
                  <td className="py-4 px-4 text-gray-300">{term.endDate}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      term.status === 'Enrolling' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : term.status === 'In Progress'
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                    }`}>
                      {term.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    {term.status === 'Enrolling' && (
                      <Button size="sm" className="neon-button text-black text-xs" asChild>
                        <Link to="/get-started">Enrol Now</Link>
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Term Schedule Data (static for now):**
```tsx
const termSchedule = [
  { name: 'Term 1 2025', startDate: 'Feb 10', endDate: 'Apr 4', status: 'In Progress' },
  { name: 'Term 2 2025', startDate: 'Apr 28', endDate: 'Jun 20', status: 'Enrolling' },
  { name: 'Term 3 2025', startDate: 'Jul 21', endDate: 'Sep 12', status: 'Coming Soon' },
  { name: 'Term 4 2025', startDate: 'Oct 13', endDate: 'Dec 5', status: 'Coming Soon' },
  { name: 'Term 1 2026', startDate: 'Feb 9', endDate: 'Apr 3', status: 'Coming Soon' },
  { name: 'Term 2 2026', startDate: 'Apr 27', endDate: 'Jun 19', status: 'Coming Soon' },
];
```

---

### Change 5: Add Grading Assessment CTA Section

**New Section** - after Prerequisites (or after Term Schedule if no prerequisites)

For returning students or students from other studios:

```tsx
{/* Grading Assessment CTA */}
<section className="py-16">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="cyber-card rounded-2xl p-8 text-center border-cyan-500/30"
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
        <ClipboardCheck className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">
        Returning or Coming From Another Studio?
      </h3>
      <p className="text-gray-300 mb-6 max-w-xl mx-auto">
        Not sure which level is right for you? Take our quick grading assessment to find the perfect fit for your current skill level.
      </p>
      <Button className="neon-button text-black" asChild>
        <Link to="/grading-assessment">
          Take the Grading Assessment
          <ChevronRight className="w-5 h-5 ml-2" />
        </Link>
      </Button>
    </motion.div>
  </div>
</section>
```

---

### New Imports Required

```tsx
import { ClipboardCheck } from 'lucide-react';
```

---

### Updated Section Order

```text
1. Hero Section
2. Program Overview (Image LEFT, Highlights RIGHT)
3. Horizontal Stats Bar (Duration, Class Size, Frequency, Level)
4. Curriculum Journey
5. Upcoming Term Schedule (NEW - First Timers table style)
6. Prerequisites (only, "What to Bring" REMOVED)
7. Grading Assessment CTA (NEW)
8. FAQ Section
9. Available Locations
10. Explore Programs Search
11. Footer
```

---

### Files Changed

| File | Changes |
|------|---------|
| `src/components/templates/ProgramPageTemplate.tsx` | Swap columns, update terminology, add term schedule, remove "What to Bring", add grading CTA |

---

### Visual Diagram

```text
Before Program Overview:
+-------------------+-------------------+
| Course Highlights | [Image Carousel]  |
|  - Bullet 1       |      < >          |
|  - Bullet 2       |                   |
+-------------------+-------------------+

After Program Overview:
+-------------------+-------------------+
| [Image Carousel]  | Program Highlights|
|      < >          |  - Bullet 1       |
|                   |  - Bullet 2       |
+-------------------+-------------------+

New Term Schedule Table:
+-------------------------------------------------------+
| Term        | Start Date | End Date | Status    |     |
+-------------------------------------------------------+
| Term 1 2025 | Feb 10     | Apr 4    | In Progress|     |
| Term 2 2025 | Apr 28     | Jun 20   | Enrolling  | [x] |
| Term 3 2025 | Jul 21     | Sep 12   | Coming Soon|     |
+-------------------------------------------------------+

New Grading CTA:
+-------------------------------------------------------+
|                     [Icon]                            |
|     Returning or Coming From Another Studio?          |
|   Take our grading assessment to find your level      |
|            [Take the Grading Assessment]              |
+-------------------------------------------------------+
```

