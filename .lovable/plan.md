

## Standardize All FAQ Sections Site-Wide

### Overview

Update all remaining FAQ sections to use the standard `cyber-faq-item` class for consistent styling across the entire website.

---

### Files Requiring Updates

| File | Current Styling | Status |
|------|-----------------|--------|
| `src/pages/FirstTimers.tsx` | `cyber-card rounded-xl border-fuchsia-500/30 px-6` | Needs update |
| `src/pages/Franchise.tsx` | `border border-primary/20 rounded-lg px-4` | Needs update |
| `src/pages/Events.tsx` | `border border-primary/20 rounded-lg px-4` | Needs update |
| `src/components/templates/ProgramPageTemplate.tsx` | `cyber-card px-6` | Needs update |
| `src/components/templates/FunctionPageTemplate.tsx` | Uses Card component (not Accordion) | Needs update |

---

### Files Already Standardized (No Changes)

These files already use `cyber-faq-item`:
- `src/pages/Pricing.tsx`
- `src/pages/Contact.tsx`
- `src/pages/ClassDetail.tsx`
- `src/components/get-started/FAQ.tsx`
- `src/pages/events/PerformanceNightsPage.tsx`

---

### Files Intentionally Different (Keep As-Is)

| File | Reason |
|------|--------|
| `src/components/studio/StudioFAQ.tsx` | Uses dual-style system (cyan for FAQs, fuchsia for blog links) with badges - this is a unique feature-specific design |
| `src/components/LevelUpMethod.tsx` | Not a FAQ - this is a feature accordion with icons/stages |

---

### Standard FAQ Pattern

All FAQ sections will use this consistent pattern:

```typescript
<AccordionItem 
  value={`item-${index}`} 
  className="cyber-faq-item"
>
  <AccordionTrigger className="py-5 text-left font-medium text-white hover:text-fuchsia-400 hover:no-underline transition-colors">
    {question}
  </AccordionTrigger>
  <AccordionContent className="text-gray-300 pb-5 leading-relaxed">
    {answer}
  </AccordionContent>
</AccordionItem>
```

The `cyber-faq-item` CSS class (already in `index.css`) provides:
- `border border-fuchsia-500/20`
- `rounded-xl`
- `px-5`
- `bg-gray-900/50`
- Hover state: `border-fuchsia-500/40`

---

### Changes by File

**1. `src/pages/FirstTimers.tsx` (lines 934-946)**

Change from:
```typescript
<AccordionItem 
  key={index} 
  value={`faq-${index}`}
  className="cyber-card rounded-xl border-fuchsia-500/30 px-6"
>
  <AccordionTrigger className="text-white hover:text-fuchsia-400 text-left">
    {faq.question}
  </AccordionTrigger>
  <AccordionContent className="text-gray-300">
    {faq.answer}
  </AccordionContent>
</AccordionItem>
```

To:
```typescript
<AccordionItem 
  key={index} 
  value={`faq-${index}`}
  className="cyber-faq-item"
>
  <AccordionTrigger className="py-5 text-left font-medium text-white hover:text-fuchsia-400 hover:no-underline transition-colors">
    {faq.question}
  </AccordionTrigger>
  <AccordionContent className="text-gray-300 pb-5 leading-relaxed">
    {faq.answer}
  </AccordionContent>
</AccordionItem>
```

---

**2. `src/pages/Franchise.tsx` (lines 690-698)**

Change from:
```typescript
<AccordionItem 
  key={index} 
  value={`item-${index}`} 
  className="border border-primary/20 rounded-lg px-4"
>
  <AccordionTrigger className="text-left font-medium hover:text-primary">
    {faq.question}
  </AccordionTrigger>
  <AccordionContent className="text-muted-foreground">
    {faq.answer}
  </AccordionContent>
</AccordionItem>
```

To:
```typescript
<AccordionItem 
  key={index} 
  value={`item-${index}`} 
  className="cyber-faq-item"
>
  <AccordionTrigger className="py-5 text-left font-medium text-white hover:text-fuchsia-400 hover:no-underline transition-colors">
    {faq.question}
  </AccordionTrigger>
  <AccordionContent className="text-gray-300 pb-5 leading-relaxed">
    {faq.answer}
  </AccordionContent>
</AccordionItem>
```

---

**3. `src/pages/Events.tsx` (lines 395-403)**

Same change as Franchise.tsx - update from `border border-primary/20 rounded-lg px-4` to `cyber-faq-item` with updated trigger/content styling.

---

**4. `src/components/templates/ProgramPageTemplate.tsx` (lines 253-261)**

Change from:
```typescript
<AccordionItem 
  key={index} 
  value={`item-${index}`} 
  className="cyber-card px-6"
>
  <AccordionTrigger className="text-left font-semibold">
    {faq.question}
  </AccordionTrigger>
  <AccordionContent className="text-muted-foreground">
    {faq.answer}
  </AccordionContent>
</AccordionItem>
```

To:
```typescript
<AccordionItem 
  key={index} 
  value={`item-${index}`} 
  className="cyber-faq-item"
>
  <AccordionTrigger className="py-5 text-left font-medium text-white hover:text-fuchsia-400 hover:no-underline transition-colors">
    {faq.question}
  </AccordionTrigger>
  <AccordionContent className="text-gray-300 pb-5 leading-relaxed">
    {faq.answer}
  </AccordionContent>
</AccordionItem>
```

---

**5. `src/components/templates/FunctionPageTemplate.tsx` (lines 231-239)**

This file uses Card components instead of Accordion. Convert to standard Accordion pattern:

Change from:
```typescript
<div className="space-y-6 mt-12">
  {faqs.map((faq, index) => (
    <Card key={index} className="cyber-card">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
        <p className="text-muted-foreground">{faq.answer}</p>
      </CardContent>
    </Card>
  ))}
</div>
```

To:
```typescript
<Accordion type="single" collapsible className="mt-12 space-y-4">
  {faqs.map((faq, index) => (
    <AccordionItem 
      key={index} 
      value={`item-${index}`} 
      className="cyber-faq-item"
    >
      <AccordionTrigger className="py-5 text-left font-medium text-white hover:text-fuchsia-400 hover:no-underline transition-colors">
        {faq.question}
      </AccordionTrigger>
      <AccordionContent className="text-gray-300 pb-5 leading-relaxed">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
```

Also add the Accordion import at the top of the file.

---

### Summary of Changes

| File | Lines Changed | Change Type |
|------|---------------|-------------|
| `FirstTimers.tsx` | ~935-946 | Update AccordionItem styling |
| `Franchise.tsx` | ~690-698 | Update AccordionItem styling |
| `Events.tsx` | ~395-403 | Update AccordionItem styling |
| `ProgramPageTemplate.tsx` | ~253-261 | Update AccordionItem styling |
| `FunctionPageTemplate.tsx` | ~1-5, 231-239 | Add import + convert Cards to Accordion |

---

### Benefits

1. **Visual Consistency**: All FAQs look identical across the site
2. **WordPress Ready**: Single `cyber-faq-item` class makes block conversion simple
3. **Maintainability**: Update once in CSS, applies everywhere
4. **Better UX**: Collapsible accordions take less space than static cards

