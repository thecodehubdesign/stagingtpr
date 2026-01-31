

## Add Level Progression, Midterm Enrollment Note, and Move Prerequisites

### Overview

This plan adds three key changes to the `ProgramPageTemplate.tsx`:
1. New "Level Progression" section between Hero and Program Overview (using the "Your Journey" pathway layout style)
2. Add midterm enrollment note to Upcoming Term Dates section
3. Move Prerequisites section directly below the Level Progression section

---

### Change 1: Add Level Progression Section (Between Hero and Program Overview)

**New Section** - positioned immediately after the Hero section (after line 153)

Uses the exact same visual style as the "Your Journey" curriculum pathway (lines 278-341) with:
- Gradient line connecting 4 circular badges
- Level names instead of week numbers
- Color-coded badges per level

```tsx
{/* Level Progression Journey */}
<section className="py-16">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Your Path to <span className="gradient-text">Pole Mastery</span>
      </h2>
      <p className="text-gray-300">Progress through our structured level system</p>
    </motion.div>
    
    {/* Pathway Diagram */}
    <div className="relative">
      <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-green-500 via-blue-500 via-purple-500 to-yellow-500 rounded-full" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { name: 'Beginner', description: 'Build foundation & confidence', color: 'from-green-400 to-emerald-500', href: '/programs/pole/beginner' },
          { name: 'Intermediate', description: 'Develop strength & flow', color: 'from-blue-400 to-cyan-500', href: '/programs/pole/intermediate' },
          { name: 'Advanced', description: 'Master complex moves', color: 'from-purple-400 to-pink-500', href: '/programs/pole/advanced' },
          { name: 'Elite', description: 'Performance ready', color: 'from-yellow-400 to-orange-500', href: '/programs/pole/elite' }
        ].map((level, index) => (
          <motion.div
            key={level.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative text-center"
          >
            <Link to={level.href} className="group block">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${level.color} flex items-center justify-center mx-auto mb-4 relative z-10 border-4 border-background group-hover:scale-110 transition-transform`}>
                <span className="text-xl font-bold text-white">{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-fuchsia-400 transition-colors">{level.name}</h3>
              <p className="text-sm text-gray-400">{level.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>
```

---

### Change 2: Move Prerequisites Section Below Level Progression

**Current Location:** After Term Schedule (lines 411-433)

**New Location:** Immediately after the new Level Progression section

This keeps important prerequisite information visible early in the page, right after users see where the current program sits in the overall level structure.

---

### Change 3: Add Midterm Enrollment Note to Term Dates Section

**Current State:** Only shows "8-week program blocks over the next 12 months"

**New State:** Add an informational callout about midterm enrollment availability

Add below the table (inside the section, after the table):

```tsx
{/* Midterm Enrollment Note */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-6 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30"
>
  <div className="flex items-start gap-3">
    <Calendar className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
    <div>
      <p className="text-cyan-400 font-medium mb-1">Midterm Enrollments Available</p>
      <p className="text-gray-300 text-sm">
        We accept enrolments every 4 weeks (midterm - Week 5) as our Pole Foundations Beginner level allows for flexible start dates.
      </p>
    </div>
  </div>
</motion.div>
```

---

### Updated Section Order

```text
1. Hero Section
2. Level Progression Journey (NEW - Beginner > Inter > Advanced > Elite)
3. Prerequisites (MOVED from after Term Schedule)
4. Program Overview (Image LEFT, Highlights RIGHT)
5. Horizontal Stats Bar
6. Curriculum Journey (Week by week)
7. Upcoming Term Dates + Midterm Enrollment Note (UPDATED)
8. Grading Assessment CTA
9. FAQ Section
10. Available Locations
11. Explore Programs Search
12. Footer
```

---

### Visual Diagram

```text
New Level Progression Section:
+---------------------------------------------------------------+
|        Your Path to Pole Mastery                              |
|     Progress through our structured level system              |
+---------------------------------------------------------------+
|  [1]----------[2]----------[3]----------[4]                   |
|  Beginner    Inter       Advanced      Elite                  |
|  Build       Develop     Master        Performance            |
|  foundation  strength    complex       ready                  |
+---------------------------------------------------------------+

Prerequisites (moved here):
+---------------------------------------------------------------+
|                    Prerequisites                               |
|  [x] Completed Pole Beginner program                          |
|  [x] Passed beginner grading assessment                       |
+---------------------------------------------------------------+

Term Dates with Midterm Note:
+---------------------------------------------------------------+
| Term        | Start Date | End Date | Status    |             |
+---------------------------------------------------------------+
| Term 1 2025 | Feb 10     | Apr 4    | In Progress|             |
| ...                                                           |
+---------------------------------------------------------------+
| [Calendar Icon] Midterm Enrollments Available                 |
| We accept enrolments every 4 weeks (midterm - Week 5)...      |
+---------------------------------------------------------------+
```

---

### Files Changed

| File | Changes |
|------|---------|
| `src/components/templates/ProgramPageTemplate.tsx` | Add Level Progression section, move Prerequisites, add midterm note |

