

## Sister Studio Component Updates

### Overview

Update the StudioSisterStudio component with distance badges, updated messaging, membership hyperlink, blue/cyan color scheme, and move it directly below the Mindbody widget inside the timetable section.

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/components/studio/StudioSisterStudio.tsx` | Add distances, update colors to blue/cyan, update text, add membership link, make inline-ready |
| `src/components/studio/StudioClassList.tsx` | Import and embed StudioSisterStudio below Mindbody widget |
| `src/pages/StudioDetail.tsx` | Remove standalone StudioSisterStudio import and usage |

---

### 1. StudioSisterStudio.tsx Updates

#### Add Distance Data

```text
const sisterDistances: Record<string, string> = {
  'mitcham': '12km',
  'kilsyth': '12km',
  'rowville': '16.6km',
  'narre-warren': '16.6km',
};
```

#### Color Scheme Changes (Purple to Cyan/Blue)

| Element | Old | New |
|---------|-----|-----|
| Icon circle | `bg-purple-500/20` | `bg-cyan-500/20` |
| Heart icon | `text-purple-400` | `text-cyan-400` |
| Badge bg | `bg-purple-500/10` | `bg-cyan-500/10` |
| Badge border | `border-purple-500/30` | `border-cyan-500/30` |
| Badge text | `text-purple-400` | `text-cyan-400` |
| MapPin icon | `text-fuchsia-400` | `text-cyan-400` |
| CTA button | `bg-fuchsia-500/20 text-fuchsia-400` | `bg-cyan-500/20 text-cyan-400` |
| Card wrapper | `cyber-card` | `border border-cyan-500/30 bg-gray-800/50` |

#### Updated Text Content

**From:**
```text
Your {currentLocation} membership gives you access to train at our {sisterLocation} studio too! 
Enjoy the flexibility of training at either location with the same membership.
```

**To:**
```text
Your {currentLocation} class passes can be used to book classes at our {sisterLocation} studio too! 
Enjoy the flexibility of training at either location with the same <Link to="/memberships">membership</Link> or introductory package.
```

#### Add Distance Badge

Display next to the "Sister Studio" badge:
```text
<span className="px-3 py-1 rounded-full bg-gray-700 text-gray-300 text-sm font-medium">
  {distance} away
</span>
```

#### Make Component Inline-Ready

- Add `inline?: boolean` prop to interface
- Remove `<section>` wrapper when inline
- Use conditional styling for embedded vs standalone use

---

### 2. StudioClassList.tsx Updates

#### Add Import

```text
import StudioSisterStudio from './StudioSisterStudio';
```

#### Embed Below Mindbody Widget

After the cyber-card containing the Mindbody widget (line 62), add:

```text
{/* Sister Studio - appears directly below timetable for partnered studios */}
<StudioSisterStudio studio={studio} inline />
```

This places the sister studio card inside the same `max-w-4xl mx-auto` container, directly under the schedule.

---

### 3. StudioDetail.tsx Updates

#### Remove Import (Line 15)

Delete:
```text
import StudioSisterStudio from '@/components/studio/StudioSisterStudio';
```

#### Remove Standalone Usage (Lines 76-77)

Delete:
```text
{/* Sister Studio Section - Only shows for partnered studios */}
<StudioSisterStudio studio={studio} />
```

---

### Visual Result

The sister studio card will now:
- Appear directly below the Mindbody booking widget (inside the timetable section)
- Have a cyan/blue border matching the site's color scheme
- Show distance badges: "12km away" for Mitcham/Kilsyth, "16.6km away" for Rowville/Narre Warren
- Have "membership" hyperlinked to `/memberships`
- Use updated messaging about "class passes" and "introductory package"

---

### Distance Summary

| Studio Pair | Distance |
|-------------|----------|
| Mitcham ↔ Kilsyth | 12km |
| Rowville ↔ Narre Warren | 16.6km |

