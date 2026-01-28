

## Restyle "What's Waiting For You Inside?" Section

### Overview

Completely restyle the membership inclusions section to match the professional aesthetic of the Virtual Studio and Performance Opportunities sections. Remove pricing values and emojis, replace with icons, badges, and cleaner design elements.

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Pricing.tsx` | Restyle the "whats-included" section (lines 277-440) |

---

### Design Pattern to Follow

Based on the Virtual Studio and Performance sections:

| Element | Current (Remove) | New (Add) |
|---------|------------------|-----------|
| Bullet icons | Emojis (📈💪✨) | Lucide icons (Check, Zap, TrendingUp, etc.) |
| Value labels | "Value: $199" | Remove entirely |
| Badge style | Large standalone badge | Top badge like "Included with Membership" |
| List style | emoji + text | Star/Check icon + bold label + description |

---

### New Section Structure

#### Header (Simplified)

```tsx
<div className="text-center mb-16">
  <span className="px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-sm font-medium mb-6 inline-block">
    <Gift className="w-4 h-4 inline mr-2" />
    Everything Included
  </span>
  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
    What's Waiting For You <span className="gradient-text">Inside?</span>
  </h2>
  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
    Your membership is your all-access pass to spins, strength, and serious fun. 
    Consistent, supported training that builds real skill and confidence.
  </p>
</div>
```

---

#### Inclusion 1: Pole Foundations Course

```tsx
<motion.div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-4 inline-block">
      <BookOpen className="w-4 h-4 inline mr-2" />
      4-Week Structured Course
    </span>
    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
      Progressive Training That <span className="gradient-text">Builds You Up</span>
    </h3>
    <p className="text-lg text-gray-300 mb-6">
      A structured pathway where each week builds on the last, so you're never stuck, always improving, and constantly surprised by what you can do.
    </p>
    
    <ul className="space-y-3 mb-6">
      <li className="flex items-center gap-3 text-gray-300">
        <TrendingUp className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
        <span><strong>Step by step progress</strong> with clear milestones each week</span>
      </li>
      <li className="flex items-center gap-3 text-gray-300">
        <Zap className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
        <span><strong>Stronger every session</strong> - technique and stamina that sticks</span>
      </li>
      <li className="flex items-center gap-3 text-gray-300">
        <Sparkles className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
        <span><strong>Confidence on repeat</strong> - new wins with every class</span>
      </li>
    </ul>
  </motion.div>
  
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <div className="aspect-square rounded-2xl overflow-hidden border-2 border-fuchsia-500/30 bg-gray-800">
      <img src={coursesAsset} alt="Pole Foundations Course" className="w-full h-full object-cover" />
    </div>
  </motion.div>
</motion.div>
```

---

#### Inclusion 2: Session Flexi Pass (Image Left)

```tsx
<motion.div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <div className="aspect-square rounded-2xl overflow-hidden border-2 border-fuchsia-500/30 bg-gray-800">
      <img src={flexiPassAsset} alt="Weekly Classes" className="w-full h-full object-cover" />
    </div>
  </motion.div>
  
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4 inline-block">
      <Calendar className="w-4 h-4 inline mr-2" />
      8 Sessions Per Month
    </span>
    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
      Weekly Classes Designed to <span className="gradient-text">Empower You</span>
    </h3>
    <p className="text-lg text-gray-300 mb-6">
      Dance, conditioning, and skill-based classes across the week to keep your training fresh, fun, and effective.
    </p>
    
    <ul className="space-y-3 mb-6">
      <li className="flex items-center gap-3 text-gray-300">
        <Heart className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
        <span><strong>Choose your vibe</strong> - variety keeps every session fresh</span>
      </li>
      <li className="flex items-center gap-3 text-gray-300">
        <Zap className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
        <span><strong>Fun that works</strong> - sweaty, smiling, and stronger</span>
      </li>
      <li className="flex items-center gap-3 text-gray-300">
        <Sparkles className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
        <span><strong>Grow on your terms</strong> - explore and find what you love</span>
      </li>
    </ul>
  </motion.div>
</motion.div>
```

---

#### Inclusion 3: Unlimited Practice (Image Right)

```tsx
<motion.div className="grid lg:grid-cols-2 gap-12 items-center">
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-4 inline-block">
      <RefreshCw className="w-4 h-4 inline mr-2" />
      Unlimited Access
    </span>
    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
      Practice Time to Perfect Your <span className="gradient-text">Power Moves</span>
    </h3>
    <p className="text-lg text-gray-300 mb-6">
      Repeat moves until they click and feel natural in your body. The more you practice, the faster you progress.
    </p>
    
    <ul className="space-y-3 mb-6">
      <li className="flex items-center gap-3 text-gray-300">
        <Target className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
        <span><strong>Progress at your pace</strong> - until moves feel natural</span>
      </li>
      <li className="flex items-center gap-3 text-gray-300">
        <Zap className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
        <span><strong>Lock in muscle memory</strong> - retain skills faster</span>
      </li>
      <li className="flex items-center gap-3 text-gray-300">
        <Sparkles className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
        <span><strong>Consistency builds confidence</strong> - smoother and fearless</span>
      </li>
    </ul>
  </motion.div>
  
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <div className="aspect-square rounded-2xl overflow-hidden border-2 border-fuchsia-500/30 bg-gray-800">
      <img src={practiceAsset} alt="Unlimited Practice" className="w-full h-full object-cover" />
    </div>
  </motion.div>
</motion.div>
```

---

### Icon Imports to Add

```tsx
import { 
  // ... existing imports
  Gift, 
  BookOpen, 
  TrendingUp, 
  Sparkles, 
  Calendar, 
  Heart, 
  RefreshCw, 
  Target 
} from 'lucide-react';
```

---

### Summary of Changes

| Before | After |
|--------|-------|
| Emojis (📈💪✨💜🔄) | Lucide icons (TrendingUp, Zap, Sparkles, Heart, RefreshCw, Target) |
| "Value: $199" pricing text | Removed |
| Large `<Badge>` component | Styled `<span>` badges with icons (matching Virtual Studio style) |
| Simple motion y-axis animation | Left/right x-axis animations (matching other sections) |
| `gap-8` spacing | `gap-12` spacing (matching other sections) |
| `mb-16` between cards | `mb-20` for more breathing room |

---

### Visual Consistency Achieved

The restyled section will now match:
- Virtual Studio: top badge with icon, x-axis animations, clean typography
- Performance Opportunities: icon-based bullet lists with bold labels, professional spacing

Color-coded badges for each inclusion:
- Pole Foundations: Purple (learning/education)
- Session Pass: Cyan (variety/freshness)  
- Unlimited Practice: Green (growth/progress)

