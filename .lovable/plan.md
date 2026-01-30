

## Thumbnail Strip Redesign - Horizontal Scrolling Carousel

### Overview

Redesign the thumbnail strip below the main media display to show larger thumbnails in a single horizontal row with arrow navigation. Additional thumbnails will be revealed by clicking left/right arrows rather than scrolling.

---

### File to Modify

| File | Change |
|------|--------|
| `src/components/studio/StudioHero.tsx` | Refactor thumbnail strip to horizontal carousel |

---

### Current vs Proposed

| Aspect | Current | Proposed |
|--------|---------|----------|
| Layout | Flex-wrap, multiple rows | Single row, overflow hidden |
| Size (mobile) | 48x48px (w-12 h-12) | 96x96px (w-24 h-24) |
| Size (desktop) | 64x64px (w-16 h-16) | 128x128px (w-32 h-32) |
| Navigation | All visible, click to select | Arrow buttons reveal more |
| Scrolling | None (all visible) | No visible scrollbar, arrow-controlled |

---

### Implementation Details

#### 1. Add Thumbnail Navigation State

Add a ref for the thumbnail container and scroll functions:

```text
const thumbnailsRef = useRef<HTMLDivElement>(null);

const scrollThumbnails = (direction: 'left' | 'right') => {
  if (thumbnailsRef.current) {
    const scrollAmount = 150; // pixels to scroll
    thumbnailsRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }
};
```

#### 2. New Thumbnail Strip Structure

Replace lines 220-252 with:

```text
{/* Thumbnail Strip - Horizontal Carousel */}
<div className="relative">
  {/* Left Thumbnail Arrow */}
  <button
    onClick={() => scrollThumbnails('left')}
    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10
               w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm
               border border-white/20 hover:bg-fuchsia-500/30
               flex items-center justify-center transition-all"
    aria-label="Scroll thumbnails left"
  >
    <ChevronLeft className="w-4 h-4 text-white" />
  </button>

  {/* Right Thumbnail Arrow */}
  <button
    onClick={() => scrollThumbnails('right')}
    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10
               w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm
               border border-white/20 hover:bg-fuchsia-500/30
               flex items-center justify-center transition-all"
    aria-label="Scroll thumbnails right"
  >
    <ChevronRight className="w-4 h-4 text-white" />
  </button>

  {/* Thumbnail Container */}
  <div 
    ref={thumbnailsRef}
    className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth px-4"
    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
  >
    {allMedia.map((media, index) => (
      <button
        key={index}
        onClick={() => setCurrentIndex(index)}
        className={`relative flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden border-2 transition-all ${
          currentIndex === index
            ? 'border-fuchsia-500 ring-2 ring-fuchsia-500/50'
            : 'border-gray-600 hover:border-fuchsia-400'
        }`}
      >
        {/* thumbnail content */}
      </button>
    ))}
  </div>
</div>
```

---

### Size Comparison

| Breakpoint | Current | New | Increase |
|------------|---------|-----|----------|
| Mobile | 48x48px | 96x96px | 2x |
| Desktop | 64x64px | 128x128px | 2x |

---

### Key Features

1. **Single Row**: `flex` with `overflow-x-auto` and `scrollbar-hide`
2. **Double Size**: `w-24 h-24` mobile, `w-32 h-32` desktop (was w-12/w-16)
3. **Arrow Navigation**: Smaller arrow buttons on left/right of thumbnail strip
4. **No Visible Scrollbar**: Hidden with CSS but functional via arrows
5. **Smooth Scrolling**: `scroll-smooth` and `scrollBy` with smooth behavior
6. **Fixed Width Items**: `flex-shrink-0` prevents thumbnails from compressing

---

### Visual Result

```text
+------------------------------------------------+
|              [Main Video/Image]                |
+------------------------------------------------+

     [<]  [img1] [img2] [img3] [img4] [img5]  [>]
          ^-- visible thumbnails --^
          
     Clicking [>] reveals [img6] [img7] [img8] etc.
```

---

### Import Addition

Add `useRef` to the React import:

```text
import { useState, useRef } from 'react';
```

