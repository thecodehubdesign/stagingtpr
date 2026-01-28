

## Add Sister Studio Relationships to Location Pages

### Overview

Create a new component that displays sister studio training relationships directly under the timetable section on specific studio pages. This will only appear on Rowville, Narre Warren, Mitcham, and Kilsyth studio pages.

---

### Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `src/components/studio/StudioSisterStudio.tsx` | CREATE | New component for sister studio relationship |
| `src/pages/StudioDetail.tsx` | MODIFY | Add the new component after timetable |

---

### Sister Studio Relationships

| Studio | Sister Studio |
|--------|---------------|
| Rowville | Narre Warren |
| Narre Warren | Rowville |
| Mitcham | Kilsyth |
| Kilsyth | Mitcham |

---

### New Component: StudioSisterStudio.tsx

```text
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, MapPin, ArrowRight } from 'lucide-react';
import { Studio, studios } from '@/data/studios';

interface StudioSisterStudioProps {
  studio: Studio;
}

// Define sister studio relationships
const sisterRelationships: Record<string, string> = {
  'rowville': 'narre-warren',
  'narre-warren': 'rowville',
  'mitcham': 'kilsyth',
  'kilsyth': 'mitcham',
};

const StudioSisterStudio = ({ studio }: StudioSisterStudioProps) => {
  const sisterStudioId = sisterRelationships[studio.id];
  
  // Only render if this studio has a sister relationship
  if (!sisterStudioId) return null;
  
  const sisterStudio = studios.find(s => s.id === sisterStudioId);
  if (!sisterStudio) return null;
  
  const currentLocation = studio.name.replace('The Pole Room ', '');
  const sisterLocation = sisterStudio.name.replace('The Pole Room ', '');

  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cyber-card p-6 sm:p-8 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Heart className="w-5 h-5 text-purple-400" />
            </div>
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium">
              Sister Studio
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3">
            Train at <span className="gradient-text">{sisterLocation}</span> Too!
          </h3>
          
          <p className="text-gray-300 mb-6">
            Your {currentLocation} membership gives you access to train at our {sisterLocation} studio too! 
            Enjoy the flexibility of training at either location with the same membership.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4 text-fuchsia-400" />
              <span className="text-sm">{sisterStudio.address}</span>
            </div>
            
            <Link 
              to={`/studios/${sisterStudioId}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-fuchsia-500/20 text-fuchsia-400 hover:bg-fuchsia-500/30 transition-colors text-sm font-medium"
            >
              View {sisterLocation} Studio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudioSisterStudio;
```

---

### StudioDetail.tsx Updates

**Add import (after line 7):**
```text
import StudioSisterStudio from '@/components/studio/StudioSisterStudio';
```

**Add section after timetable (after line 73):**
```text
      {/* Sister Studio Section - Only shows for partnered studios */}
      <StudioSisterStudio studio={studio} />
```

---

### Component Behavior

The component will:

1. **Check if the current studio has a sister relationship** - Uses a lookup object to find the partner
2. **Return null if no relationship exists** - CBD, Eltham, and Highett pages won't show anything
3. **Only render on these 4 studios**: Rowville, Narre Warren, Mitcham, Kilsyth
4. **Display dynamically** - Shows the correct sister studio name, address, and link

---

### Visual Design

The component will match the existing cyberpunk aesthetic with:

| Element | Style |
|---------|-------|
| Container | `cyber-card` with `bg-gray-800` background |
| Badge | Purple color scheme (`purple-500/10` border, `purple-400` text) |
| Icon | Heart icon in a purple-tinted circle |
| Title | Bold white with gradient text for sister location |
| CTA Button | Fuchsia link button with arrow |

---

### Summary

| Studio Page | Will Show Sister Studio Section? | Partner Displayed |
|-------------|----------------------------------|-------------------|
| `/studios/rowville` | Yes | Narre Warren |
| `/studios/narre-warren` | Yes | Rowville |
| `/studios/mitcham` | Yes | Kilsyth |
| `/studios/kilsyth` | Yes | Mitcham |
| `/studios/highett` | No | - |
| `/studios/eltham` | No | - |
| `/studios/cbd` | No | - |

