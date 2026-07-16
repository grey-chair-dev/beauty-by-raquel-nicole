# Product

## Register

brand

## Users

**Primary:** Women and bridal parties in Milford, OH and greater Cincinnati who want lived-in color, dimensional blonding, extensions, or event styling. They are often on mobile, comparing Instagram portfolios, and deciding whether to book through Square or DM on Instagram.

**Secondary:** Returning clients checking hours, location (The Beauty Bar, Floor 2), and service pricing before rebooking.

**Context:** Browsing between work or on the couch, often with a reference photo saved. They need to trust the stylist quickly, understand what Raquel specializes in, and book without friction.

## Product Purpose

Beauty by Raquel Nicole is a conversion-focused marketing site for an independent hairstylist at The Beauty Bar in Old Milford. The site exists to:

1. Explain what Raquel does best (lived-in color, blonding, hand-tied extensions, bridal).
2. Show real work and social proof (gallery, reviews, transformations).
3. Drive bookings via Square Appointments and Instagram DMs.

Success looks like: a visitor understands the specialty in under 5 seconds, finds pricing and location without hunting, and taps **Book Appointment** with confidence. Built and maintained by Grey Chair Digital for client review before launch.

## Brand Personality

**Three words:** Warm, bright, expert.

**Voice:** Friendly and direct, like a stylist who knows her craft. Confident without hype. Local and personal (Milford, Old Milford, The Beauty Bar). Avoids superlatives like "best hair stylist" in favor of specific specialties.

**Emotional goals:** Delight and reassurance. The site should feel alive and colorful (client asked for brighter tones, less plain), while still reading as a professional salon, not a template or a generic spa.

**References (directional):** Independent stylist brands with strong photography and clear booking paths; warm consumer sites with saturated but controlled color; local businesses that feel human, not corporate.

## Anti-references

- **Muted beige salon templates:** Blush-on-beige palettes that feel flat or interchangeable (Raquel explicitly wanted more color).
- **Generic AI landing pages:** Three equal feature cards, purple gradients, glassmorphism everywhere, gradient text, stock "Jane Doe" testimonials.
- **SaaS marketing clichés:** Hero metrics, dark mesh backgrounds, version badges, endless eyebrows on every section.
- **Spammy local SEO:** "Best hair stylist near me" stuffing; vague claims without proof.
- **Corporate franchise sites:** Cold, impersonal, no face behind the chair.
- **Over-designed agency portfolios:** Rotated labels, scroll cues, decoration strips that distract from booking.

## Design Principles

1. **Book first.** Every page supports one primary action: Book Appointment. Secondary paths (Instagram DM, phone) are visible but do not compete with the same intent label.

2. **Show the work.** Photography and transformations carry trust. Copy supports the images; it does not replace them.

3. **Bright but disciplined.** Color is committed (maroon, peach, cream) across the site. One accent system, no random section palettes.

4. **Local and honest.** Hours, floor, parking, and service scope are stated plainly. No fake precision or inflated claims.

5. **Fast and accessible.** Mobile-first, sub-2s load target, WCAG 2.1 AA contrast on text, buttons, and forms. Respect reduced motion.

## Accessibility & Inclusion

- **Target:** WCAG 2.1 AA minimum for text, interactive elements, and form fields.
- **Focus:** Visible 2px accent outline with offset on links, buttons, and inputs (`globals.css`).
- **Touch:** Minimum 44–48px tap targets on mobile CTAs and nav.
- **Motion:** Framer Motion used sparingly; must degrade under `prefers-reduced-motion`.
- **Color:** Maroon primary (#a43716) on cream must maintain WCAG AA contrast; audit ghost buttons over tinted backgrounds.
