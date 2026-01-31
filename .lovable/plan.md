

## Standardize Button & FAQ Styling Site-Wide

### Overview

Create consistent, reusable button and FAQ styles across the entire website. This ensures design coherence and makes future WordPress block conversion straightforward.

---

### Part 1: Button Standardization

#### Current Issue
Buttons are styled inconsistently across 41+ files with variations like:
- `neon-button text-black`
- `neon-button text-primary-foreground`
- `bg-gradient-to-r from-fuchsia-500 to-purple-600`
- `bg-gradient-to-r from-rose-500 to-purple-600`
- Various dynamic color variants

#### Standard Button Design (From Screenshot)
The default primary button will use the **pink-to-cyan gradient** style shown in your screenshot:

| Property | Value |
|----------|-------|
| Background | `linear-gradient(45deg, #ff00ff, #00ffff)` (fuchsia to cyan) |
| Text | Black for contrast on gradient |
| Border Radius | Rounded (`rounded-full` for CTA, `rounded-md` for standard) |
| Shadow | Neon glow effect |
| Hover | Intensified glow + slight lift |

#### Implementation Approach

**Option A - Modify Button Component (Recommended)**
Update the `button.tsx` component to include a new `neon` variant as the recommended primary style:

```typescript
// In buttonVariants
neon: "neon-button text-black font-semibold",
```

Then update `defaultVariants` to use `neon` as the new default, or keep `default` for generic usage and explicitly use `variant="neon"` for primary CTAs.

**Option B - Enhanced CSS Class**
Keep using `neon-button` but ensure the CSS definition in `index.css` includes consistent text color:

```css
.neon-button {
  @apply relative overflow-hidden text-black font-semibold;
  background: linear-gradient(45deg, #ff00ff, #00ffff);
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.3);
}
```

#### Files Requiring Button Updates

All 41 files using `neon-button` with inconsistent text colors will be standardized to `neon-button` without additional text color overrides (the class will handle it).

Key files:
- `src/index.css` - Update `.neon-button` to include `text-black` by default
- `src/components/ui/button.tsx` - Optionally add `neon` variant

---

### Part 2: FAQ Accordion Standardization

#### Current Issue
FAQ accordions have different styles:
- **StudioFAQ**: Cyan/fuchsia cyber-styled borders with Blog badges
- **Standard FAQs**: Simple `border border-primary/20 rounded-lg`

#### Standard FAQ Design (From Screenshot)
Based on your StudioFAQ screenshot, the standard FAQ item will feature:

| Element | Style |
|---------|-------|
| Container | Dark background (`bg-gray-900/50`) |
| Border | Subtle fuchsia/cyan accent (`border-fuchsia-500/20` or `border-cyan-500/20`) |
| Border Radius | Rounded corners (`rounded-xl`) |
| Padding | Comfortable spacing (`px-5 py-5`) |
| Hover State | Border brightens on hover |
| Badge (if needed) | Pill badge indicating type (FAQ, Blog) |

#### Create Reusable FAQ Component

Create a new `StandardFAQItem` component or update the AccordionItem styling pattern:

```typescript
// Standard FAQ Item styling
<AccordionItem 
  value={`item-${index}`} 
  className="border border-fuchsia-500/20 rounded-xl px-5 bg-gray-900/50 
             hover:border-fuchsia-500/40 transition-colors"
>
  <AccordionTrigger className="py-5 hover:no-underline">
    <span className="font-medium text-white text-left hover:text-fuchsia-400 transition-colors">
      {question}
    </span>
  </AccordionTrigger>
  <AccordionContent className="text-gray-300 pb-5 leading-relaxed">
    {answer}
  </AccordionContent>
</AccordionItem>
```

#### Files Requiring FAQ Updates

| File | Current Style | Action |
|------|---------------|--------|
| `src/components/get-started/FAQ.tsx` | `border-primary/20` | Update to standard |
| `src/pages/Pricing.tsx` | `border-primary/20` | Update to standard |
| `src/pages/Contact.tsx` | `border-primary/20` | Update to standard |
| `src/pages/ClassDetail.tsx` | `border-primary/20` | Update to standard |
| `src/pages/events/PerformanceNightsPage.tsx` | `border-primary/20` | Update to standard |
| `src/components/studio/StudioFAQ.tsx` | Already styled | Keep as reference |

---

### Implementation Summary

#### Step 1: Update CSS in `index.css`
Ensure `.neon-button` includes `text-black` so no override is needed:

```css
.neon-button {
  @apply relative overflow-hidden text-black font-semibold;
  background: linear-gradient(45deg, #ff00ff, #00ffff);
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.3);
  transition: all 0.3s ease;
}
```

#### Step 2: Create Standard FAQ Styling Pattern
Define the standard accordion styling in either:
- A new CSS class `.cyber-faq-item` in `index.css`, or
- Document the consistent Tailwind classes to use

#### Step 3: Update All FAQ Instances
Apply the standard styling to all 6 FAQ locations.

#### Step 4: Audit Button Usages
Remove redundant `text-black` or `text-primary-foreground` overrides from buttons using `neon-button` since the class will handle it.

---

### Technical Details

#### New CSS Classes (in `index.css`)

```css
/* Standard FAQ Item */
.cyber-faq-item {
  @apply border border-fuchsia-500/20 rounded-xl px-5 bg-gray-900/50;
  transition: border-color 0.3s ease;
}

.cyber-faq-item:hover {
  @apply border-fuchsia-500/40;
}
```

#### Button Variant Addition (Optional)

```typescript
// In src/components/ui/button.tsx
neon: "neon-button",
```

This allows using `<Button variant="neon">` for explicit neon styling while keeping `default` for standard UI buttons.

---

### Benefits

1. **Consistency**: Every CTA and FAQ looks the same across all pages
2. **WordPress Ready**: Single class/pattern makes block creation straightforward
3. **Maintainability**: Change once in CSS, applies everywhere
4. **Reduced Code**: No need for inline style overrides on every button/FAQ

