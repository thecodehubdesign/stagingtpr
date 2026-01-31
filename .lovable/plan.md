

## Complete Restyle of Function Page Template

### Overview

Completely reformat `FunctionPageTemplate.tsx` to match the high-impact cyberpunk aesthetic used on the FirstTimers page. This affects all function pages (Hens Parties, Birthday Parties, Corporate Events, Custom Events).

---

### Current Issues with Function Pages

1. **Hero Section**: Uses basic full-screen hero with simple overlay - lacks the gradient effects and animated elements
2. **Section Headers**: Uses generic `SectionHeader` component - doesn't match the gradient-text H2 style
3. **Feature Cards**: Basic `cyber-card` styling - missing the fuchsia border glow and icon styling
4. **Steps Section**: Plain numbered circles - should use gradient icons and motion animations
5. **Packages Section**: Standard card layout - needs more visual impact with gradients
6. **FAQ Section**: Uses generic cards instead of the standardized `.cyber-faq-item` accordion style
7. **Form Section**: Basic card with inputs - needs cyber styling and better visual hierarchy
8. **Backgrounds**: Alternating gray gradients - should use the purple/fuchsia accent gradients
9. **Typography**: Missing gradient-text styling and proper heading hierarchy

---

### Change 1: Hero Section Redesign

**Current**: Full-screen with basic overlay
**New**: Compact hero matching FirstTimers style with motion animations

```tsx
{/* Hero Section */}
<section className="relative pt-24 pb-16 overflow-hidden">
  {/* Background gradients */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900" />
  <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
  <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
  
  <div className="relative max-w-4xl mx-auto px-4 text-center">
    {/* Badge */}
    <motion.span
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-sm font-medium mb-6"
    >
      <Sparkles className="w-4 h-4" />
      {badge}
    </motion.span>
    
    {/* Title with gradient */}
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
    >
      <span className="gradient-text">{title}</span>
    </motion.h1>
    
    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
    >
      {subtitle}
    </motion.p>
    
    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Button 
        size="lg" 
        className="neon-button text-base py-3 px-6 sm:text-lg sm:py-4 sm:px-8"
        onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Enquire Now
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </motion.div>
  </div>
</section>
```

---

### Change 2: Introduction Section

**Current**: Basic centered text with SectionHeader
**New**: Two-column layout with image and styled content

```tsx
{/* Introduction Section */}
<section className="py-16 bg-gray-900/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left: Image */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative aspect-[4/3] rounded-2xl overflow-hidden cyber-card"
      >
        <img 
          src={heroImage} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </motion.div>
      
      {/* Right: Content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          <span className="gradient-text">{introTitle}</span>
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          {introDescription}
        </p>
      </motion.div>
    </div>
  </div>
</section>
```

---

### Change 3: Features Section - Icon Grid

**Current**: 4-column card grid with basic icons
**New**: Styled grid with gradient icon circles and hover effects

```tsx
{/* Features Section */}
<section className="py-16 bg-gray-900/80 border-y border-fuchsia-500/20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        What Makes Us <span className="gradient-text">Special</span>
      </h2>
    </motion.div>
    
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="text-center p-6 rounded-xl bg-gray-800/50 border border-fuchsia-500/20 hover:border-fuchsia-500/40 transition-colors"
        >
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
            <feature.icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
          <p className="text-sm text-gray-400">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
```

---

### Change 4: Steps Section - Timeline Style

**Current**: Basic numbered cards
**New**: Connected timeline with gradient line and motion

```tsx
{/* Steps Section */}
<section className="py-16 bg-gray-900/50">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        What Happens <span className="gradient-text">On The Day</span>
      </h2>
    </motion.div>
    
    <div className="relative">
      {/* Connecting line */}
      <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 rounded-full" />
      
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="relative text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-background">
              <span className="text-xl font-bold text-white">{step.step}</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
            <p className="text-gray-400">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>
```

---

### Change 5: Packages Section - Premium Cards

**Current**: Basic card layout
**New**: Glassmorphism cards with highlighted popular option

```tsx
{/* Packages Section */}
<section className="py-16 bg-gray-900/80">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Packages & <span className="gradient-text">Pricing</span>
      </h2>
    </motion.div>
    
    <div className="grid md:grid-cols-3 gap-6">
      {packages.map((pkg, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`relative rounded-2xl p-6 ${
            pkg.popular 
              ? 'bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20 border-2 border-fuchsia-500' 
              : 'bg-gray-800/50 border border-fuchsia-500/20'
          }`}
        >
          {pkg.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white text-xs font-semibold">
              Most Popular
            </span>
          )}
          
          <div className="text-center mb-6 pt-2">
            <h3 className="text-xl font-semibold text-white mb-2">{pkg.name}</h3>
            <div className="text-3xl font-bold gradient-text">
              {pkg.price}
              {pkg.priceNote && <span className="text-base text-gray-400">{pkg.priceNote}</span>}
            </div>
          </div>
          
          <ul className="space-y-3 mb-6">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            className={`w-full ${pkg.popular ? 'neon-button' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}
            onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Enquire Now
          </Button>
        </motion.div>
      ))}
    </div>
  </div>
</section>
```

---

### Change 6: FAQ Section - Accordion Style

**Current**: Stacked cards with question/answer
**New**: Proper accordion with `.cyber-faq-item` styling

```tsx
{/* FAQ Section */}
<section className="py-16 bg-gray-900/50">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Frequently Asked <span className="gradient-text">Questions</span>
      </h2>
    </motion.div>
    
    <Accordion type="single" collapsible className="space-y-3">
      {faqs.map((faq, index) => (
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
      ))}
    </Accordion>
  </div>
</section>
```

---

### Change 7: Contact Form Section - Enhanced Styling

**Current**: Basic card with form
**New**: Styled container with better input styling and visual hierarchy

```tsx
{/* Contact Form Section */}
<section id="enquiry-form" className="py-16 bg-gray-900/80 border-t border-fuchsia-500/20">
  <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-10"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        <span className="gradient-text">{formTitle}</span>
      </h2>
      <p className="text-gray-400">{formSubtitle}</p>
    </motion.div>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl p-8 bg-gray-800/50 border border-fuchsia-500/20"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form fields with updated label styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
            <Input className="bg-gray-900/50 border-gray-700 focus:border-fuchsia-500" ... />
          </div>
          {/* ... other fields ... */}
        </div>
        
        <Button type="submit" className="w-full neon-button text-base py-3 sm:text-lg sm:py-4">
          Submit Enquiry
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </form>
    </motion.div>
  </div>
</section>
```

---

### New Imports Required

```tsx
import { motion } from 'framer-motion';
// Existing imports remain
```

---

### Typography Updates Summary

| Element | Before | After |
|---------|--------|-------|
| H1 Title | `text-5xl md:text-7xl font-bold` | `text-4xl sm:text-5xl lg:text-6xl font-bold` with `gradient-text` |
| H2 Headings | Via SectionHeader | Direct with `text-3xl sm:text-4xl font-bold text-white` + `gradient-text` spans |
| Section text | `text-muted-foreground` | `text-gray-300` or `text-gray-400` |
| Card text | Default | `text-sm text-gray-400` for descriptions |
| Labels | `text-sm font-medium` | `text-sm font-medium text-gray-300` |

---

### Background Updates Summary

| Section | Before | After |
|---------|--------|-------|
| Hero | Full-screen with image overlay | Compact with gradient blurs (`bg-gradient-to-br from-gray-900 via-purple-900/30`) |
| Intro | `bg-gradient-to-br from-gray-900 to-gray-800` | `bg-gray-900/50` |
| Features | `bg-gradient-to-br from-gray-800 to-gray-900` | `bg-gray-900/80 border-y border-fuchsia-500/20` |
| Steps | `bg-gradient-to-br from-gray-900 to-gray-800` | `bg-gray-900/50` |
| Packages | `bg-gradient-to-br from-gray-800 to-gray-900` | `bg-gray-900/80` |
| FAQ | `bg-gradient-to-br from-gray-900 to-gray-800` | `bg-gray-900/50` |
| Form | `bg-gradient-to-br from-gray-800 to-gray-900` | `bg-gray-900/80 border-t border-fuchsia-500/20` |

---

### Files Changed

| File | Changes |
|------|---------|
| `src/components/templates/FunctionPageTemplate.tsx` | Complete restyle of all sections with motion animations, gradient-text typography, updated backgrounds, timeline steps, premium package cards, proper FAQ accordion |

---

### Visual Diagram

```text
Before:                          After:
+------------------------+       +------------------------+
| Full Screen Hero       |       | Compact Hero           |
| (plain overlay)        |       | (gradient blurs)       |
+------------------------+       | gradient-text H1       |
| Basic Intro Section    |       +------------------------+
| (centered text)        |       | 2-Column Intro         |
+------------------------+       | (image + text)         |
| Feature Cards          |       +------------------------+
| (basic icons)          |       | Feature Grid           |
+------------------------+       | (gradient icon circles)|
| Step Cards             |       +------------------------+
| (numbered circles)     |       | Timeline Steps         |
+------------------------+       | (connected line)       |
| Package Cards          |       +------------------------+
| (basic layout)         |       | Premium Package Cards  |
+------------------------+       | (glassmorphism)        |
| FAQ Cards              |       +------------------------+
| (stacked cards)        |       | FAQ Accordion          |
+------------------------+       | (cyber-faq-item)       |
| Contact Form           |       +------------------------+
| (basic card)           |       | Enhanced Form          |
+------------------------+       | (styled container)     |
                                 +------------------------+
```

