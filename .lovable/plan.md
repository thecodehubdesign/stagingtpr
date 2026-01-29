

## Remove Gap Between Mindbody Widget and Purple Border

### The Issue

The timetable section has a `cyber-card` container with `p-8` padding (32px) creating visible blue/dark space between the Mindbody widget content and the purple neon border. The widget should extend closer to the edges.

---

### Solution

Reduce the padding around the Mindbody widget while keeping the header nicely spaced.

---

### File to Modify

| File | Change |
|------|--------|
| `src/components/studio/StudioClassList.tsx` | Adjust padding structure for the cyber-card |

---

### Changes

#### Current (Line 50-62):
```text
<div className="cyber-card rounded-2xl p-8">
  <div className="flex items-center justify-center mb-6">
    ...header...
  </div>
  
  <div className="min-h-[500px]">
    <div 
      className="mindbody-widget" 
      data-widget-type="Schedules" 
      data-widget-id="d98131628e"
    />
  </div>
</div>
```

#### Updated:
```text
<div className="cyber-card rounded-2xl overflow-hidden">
  {/* Header with padding */}
  <div className="flex items-center justify-center py-4 px-6 border-b border-primary/20">
    ...header...
  </div>
  
  {/* Widget extends to edges with minimal padding */}
  <div className="min-h-[500px] p-2">
    <div 
      className="mindbody-widget" 
      data-widget-type="Schedules" 
      data-widget-id="d98131628e"
    />
  </div>
</div>
```

---

### Key Changes

| Element | Before | After |
|---------|--------|-------|
| Card padding | `p-8` (32px all sides) | `overflow-hidden` (no padding on card) |
| Header | `mb-6` margin | `py-4 px-6` padding with bottom border |
| Widget container | No padding | `p-2` (8px) minimal edge padding |

---

### Visual Result

- The "Live Class Schedule" header remains nicely padded with a subtle divider
- The Mindbody widget content extends much closer to the purple border
- Only 8px (p-2) of breathing room between widget and border edges
- `overflow-hidden` ensures any widget content stays within the rounded corners

