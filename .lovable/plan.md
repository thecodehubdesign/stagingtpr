

## Update Studio FAQ Section with Location-Specific Questions

### Overview

Restructure the `StudioFAQ` component to display 10 specific questions per studio location, with clear visual distinction between questions that link to blog posts and simple FAQ answers. The component will accept the studio prop to customize parking information per location.

---

### FAQ Questions & Types

| Question | Type | Content Approach |
|----------|------|------------------|
| How do I get started with The Pole Room [Location]? | FAQ | Simple inline answer with booking CTA |
| Do I need any experience to start pole dancing classes at [Location]? | BLOG | Links to "Getting Started" blog post |
| What should I wear to my first class? | BLOG | Links to "First Class" blog post |
| Is there parking available at the [Location] studio? | FAQ | Location-specific parking info from studio data |
| What are the class sizes like? | FAQ | Simple inline answer (6-10 students) |
| How do I choose my first class? | FAQ | Simple inline answer with guidance |
| Do I need to be fit, flexible or strong to start? | BLOG | Links to "Science of Flexibility" blog post |
| What ages is pole dancing appropriate for? | BLOG | Links to "Is Pole Right for You" blog post |
| What membership options do you offer? | BLOG | Links to "Membership Options" blog post |
| Can I visit the studio before signing up? | FAQ | Simple inline answer about studio tours |

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/components/studio/StudioFAQ.tsx` | Major refactor to support both FAQ and Blog types |
| `src/pages/StudioDetail.tsx` | Pass studio prop to StudioFAQ component |

---

### 1. StudioFAQ.tsx - Complete Refactor

#### 1.1 Update Interface & Props

```text
interface StudioFAQProps {
  studio: Studio;
}

interface FAQItem {
  question: string;
  type: 'faq' | 'blog';
  blogPostId?: number;
  answer?: string;
}
```

#### 1.2 New FAQ Data Structure

Create a function to generate location-specific FAQs:

```text
const getFAQsForStudio = (studio: Studio): FAQItem[] => [
  {
    question: `How do I get started with ${studio.name}?`,
    type: 'faq',
    answer: `Starting is easy! Book your first class through our online booking system or give us a call. We recommend starting with a Beginner Pole Foundations class - no experience required. Our friendly team will guide you through everything.`
  },
  {
    question: `Do I need any experience to start pole dancing classes at ${studio.name.replace('The Pole Room ', '')}?`,
    type: 'blog',
    blogPostId: 2  // "Getting Started: What to Expect"
  },
  {
    question: "What should I wear to my first class?",
    type: 'blog',
    blogPostId: 2  // Same blog covers attire
  },
  {
    question: `Is there parking available at the ${studio.name.replace('The Pole Room ', '')} studio?`,
    type: 'faq',
    answer: studio.parkingInfo?.join(' ') || 'Please contact the studio for parking information.'
  },
  {
    question: "What are the class sizes like?",
    type: 'faq',
    answer: "Our classes typically have 6-10 students maximum, ensuring you get personalized attention from your instructor. This intimate setting allows for proper supervision and hands-on corrections."
  },
  {
    question: "How do I choose my first class?",
    type: 'faq',
    answer: "We recommend starting with 'Beginner Pole Foundations' - it's designed specifically for first-timers with no experience required. After completing the foundations, your instructor will help guide you to the right progression class."
  },
  {
    question: "Do I need to be fit, flexible or strong to start?",
    type: 'blog',
    blogPostId: 3  // "Science Behind Flexibility"
  },
  {
    question: "What ages is pole dancing appropriate for?",
    type: 'blog',
    blogPostId: 7  // "Is Pole Dancing Right for You"
  },
  {
    question: "What membership options do you offer?",
    type: 'blog',
    blogPostId: 4  // "Membership Options"
  },
  {
    question: "Can I visit the studio before signing up?",
    type: 'faq',
    answer: "Absolutely! We encourage studio visits before booking your first class. Drop in during our opening hours to meet the team, see the space, and ask any questions. No appointment needed!"
  }
];
```

#### 1.3 Visual Differentiation

| FAQ Type | Badge Style | Click Behavior |
|----------|-------------|----------------|
| Blog | Fuchsia badge with newspaper icon | Opens side panel with blog content |
| FAQ | Cyan badge with info icon | Expands accordion inline |

```text
// Badge styles for each type
{faq.type === 'blog' ? (
  <Badge variant="outline" className="text-xs border-fuchsia-500/30 text-fuchsia-400">
    <Newspaper className="w-3 h-3 mr-1" />
    Blog
  </Badge>
) : (
  <Badge variant="outline" className="text-xs border-cyan-500/30 text-cyan-400">
    <Info className="w-3 h-3 mr-1" />
    FAQ
  </Badge>
)}
```

#### 1.4 Accordion for FAQ Items

Use the existing Accordion component for FAQ-type questions:

```text
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// For FAQ type items:
<AccordionItem value={`faq-${index}`}>
  <AccordionTrigger className="flex items-center justify-between gap-4 py-4">
    <span className="font-medium text-white">{faq.question}</span>
    <Badge variant="outline" className="text-xs border-cyan-500/30 text-cyan-400 shrink-0">
      <Info className="w-3 h-3 mr-1" />
      FAQ
    </Badge>
  </AccordionTrigger>
  <AccordionContent className="text-gray-300 pb-4">
    {faq.answer}
  </AccordionContent>
</AccordionItem>

// For Blog type items (clickable, opens panel):
<div 
  onClick={() => handleFaqClick(faq.blogPostId)}
  className="group cursor-pointer border border-primary/20 rounded-xl p-5 bg-gray-900/50 hover:border-fuchsia-500/50"
>
  <div className="flex items-center justify-between gap-4">
    <span className="font-medium text-white group-hover:text-fuchsia-400">
      {faq.question}
    </span>
    <div className="flex items-center gap-2 shrink-0">
      <Badge variant="outline" className="text-xs border-fuchsia-500/30 text-fuchsia-400">
        <Newspaper className="w-3 h-3 mr-1" />
        Blog
      </Badge>
      <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-fuchsia-400" />
    </div>
  </div>
</div>
```

---

### 2. StudioDetail.tsx Update

#### Pass Studio Prop to StudioFAQ

Update the StudioFAQ usage to include the studio data:

```text
// Current (line 87):
<StudioFAQ />

// Updated:
<StudioFAQ studio={studio} />
```

---

### 3. Blog Content Updates

Ensure the blog posts referenced cover the relevant topics. The existing blog posts align well:

| Blog ID | Title | Questions Covered |
|---------|-------|-------------------|
| 2 | Getting Started: What to Expect in Your First Pole Class | Experience needed?, What to wear? |
| 3 | The Science Behind Flexibility Training | Fit/flexible/strong needed? |
| 4 | Membership Options: Finding Your Perfect Fit | Membership options |
| 7 | Is Pole Dancing Right for You? | Age appropriateness |

---

### Component Visual Layout

```text
+--------------------------------------------------+
| Frequently Asked Questions                        |
| Click on any question for more details           |
+--------------------------------------------------+

| How do I get started with The Pole Room Mitcham? |
| [FAQ badge in cyan]                              |
|   > Expandable accordion answer                  |
+--------------------------------------------------+

| Do I need any experience to start?               |
| [Blog badge in fuchsia] →                        |
|   > Clicks open side panel                       |
+--------------------------------------------------+

| Is there parking at the Mitcham studio?          |
| [FAQ badge in cyan]                              |
|   > Free onsite parking available...             |
+--------------------------------------------------+
```

---

### Key Features

1. **Location-Specific Content**: Parking info dynamically pulled from studio data
2. **Clear Visual Distinction**: Cyan badges for FAQ (expands inline), Fuchsia badges for Blog (opens panel)
3. **Mixed Interaction Patterns**: Accordion for FAQs, side panel for blog posts
4. **Consistent Styling**: Matches existing cyberpunk aesthetic
5. **Mobile Optimized**: Responsive layout with appropriate touch targets

---

### Import Updates for StudioFAQ.tsx

Add these imports:

```text
import { Info } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Studio } from "@/data/studios";
```

