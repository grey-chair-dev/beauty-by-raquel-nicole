---
name: Beauty by Raquel Nicole
description: Modern Retro salon brand for a Milford hairstylist. Warm maroon, cream, bookable, photo-forward.
colors:
  retro-maroon: "#a43716"
  maroon-deep: "#862201"
  peach-fixed: "#ffdbd1"
  peach-container: "#fdad99"
  terracotta-secondary: "#8b4e3e"
  magenta-tertiary: "#973b67"
  pink-fixed: "#ffd9e5"
  cream-bg: "#fff9ee"
  cream-surface: "#f9f3e8"
  ink-text: "#1d1c15"
  ink-muted: "#58423c"
  pure-surface: "#ffffff"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.15
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.2
rounded:
  button: "9999px"
  card: "16px"
  frame: "40px 120px 40px 40px 120px"
spacing:
  xs: "4px"
  s: "8px"
  m: "16px"
  l: "24px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.retro-maroon}"
    textColor: "{colors.pure-surface}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "14px 32px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.retro-maroon}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "14px 32px"
---

# DESIGN.md - Beauty by Raquel Nicole

## Context (from discovery)

- **Artifact type:** Marketing / landing page (conversion-focused stylist site with inner service pages)
- **Positioning:** Creative / warm local (independent stylist, not corporate franchise)
- **Audience:** Women and bridal parties in Milford, OH and Cincinnati metro | **Primary action:** Book Appointment (Square)
- **Adjectives:** Warm, bright, expert, groovy, honest
- **Visual word translations:** Warm → maroon/peach cream ground | Bright → committed color blocks, not beige | Expert → real photos, pricing visible | Groovy → offset shadow + retro frame (controlled) | Honest → plain location/hours copy
- **Aesthetic essence (3 words):** Retro, warm, bookable
- **Single-minded proposition:** Lived-in color specialist you can book in one tap
- **References:** Stitch Modern Retro homepage (transposed); independent stylist Instagram portfolios
- **Avoid:** Muted beige salon templates, purple SaaS gradients, generic 3-icon feature cards
- **Mode:** light | **Density:** airy on marketing sections, medium on services pricing grid

## Aesthetic

- **Direction:** Modern Retro (70s salon warmth, 2026 craft)
- **Defining trait:** Maroon ink on cream paper with hard offset shadows, never soft SaaS elevation
- **Signature move:** **Groovy shadow** (8px 8px 0 #a43716) on primary CTAs and hero `retro-frame` photos

## Typography

- **Display + Headline + Label:** Bricolage Grotesque (Google Fonts, OFL)
- **Body:** DM Sans (Google Fonts, OFL)
- **Scale:** Major third (~1.25+) from 16px body to hero display
- **Weights:** 400 body, 600–800 headings | **Measure:** 65ch max on body blocks
- **Note:** Two families only. Space Grotesk removed (convergence tell).

## Color

- **Strategy:** Full palette, maroon-dominant. Not indigo SaaS, not reflex beige. Cream ground is brand-chosen (Stitch), not template default.
- **Distribution:** ~60% cream neutrals / ~30% peach-maroon tints / ~10% magenta accents
- **Palette:**
  - bg: #fff9ee
  - primary: #a43716
  - secondary: #8b4e3e
  - tertiary: #973b67
  - fg: #1d1c15
  - muted: #58423c

## Spacing, radius, shadow

- **Spacing base:** 8px | tight within service groups, generous between sections (py-20+)
- **Radius:** 16px cards (`rounded-2xl`), pill buttons, asymmetric retro-frame for photos only
- **Shadow:** ONE approach per element: either 2px border OR groovy offset shadow, not hairline + diffuse blur

## Layout and composition

- **Grid:** 12-col bento on homepage services (featured color block spans 7 cols)
- **Signature layout move:** Left-aligned section intros (not all centered); hero split image/text
- **Scanning:** F-pattern, Book Appointment repeated but same label

## Components and states

- **Buttons:** Primary filled maroon, secondary outline. Hover: translate + deep maroon. Focus: 2px ring.
- **Service cards:** Title, description, duration, tabular-nums price, single Book CTA. No star bullet lists.
- **Trust badges:** Brand-hued icons only (no semantic green/blue)

## Motion

- **Duration:** under 300ms | **Easing:** ease-out
- **Animates:** transform + opacity only (marquee, sparkle float)
- **Reduced motion:** marquee/sparkle disabled via `prefers-reduced-motion`

## Iconography

- Lucide, 24px grid, stroke 2. Used sparingly (nav, carousel, contact). Not stacked above every heading.

## Imagery

- Real client photos from `/gallery/` and hero before/after. No stock laptops or gradient blobs.

## Do's and Don'ts

### Do

- Book Appointment everywhere for primary booking
- Groovy shadow + retro-frame on hero/gallery
- Bento/asymmetric layouts over identical 3-card grids

### Don't

- Icon-tile feature cards
- Hero pill eyebrows stacked above headline
- Space Grotesk / Inter / purple gradients
- Side-stripe borders, glass blur, em dashes in marketing copy

## Slop audit

**Date:** 2026-07-16 | **Score:** 8/10 (post-deslop pass)

| Check | Status |
|-------|--------|
| No purple/indigo gradient | Pass |
| No gradient text | Pass |
| Distinct type pairing (Bricolage + DM Sans) | Pass |
| No icon-tile service grid | Pass (bento layout) |
| No side-stripe borders | Pass |
| Radius ≤16px on cards | Pass |
| No decorative glassmorphism | Pass |
| Signature move present | Pass (groovy shadow) |
| Reduced motion honored | Pass |
| Semantic green/blue trust icons | Fixed |
| Cream bg intentional not reflex | Pass (committed brand) |

**Remaining watch:** Marquee ticker is Stitch-derived decoration; keep unless Raquel finds it noisy. DM Sans is common but acceptable as body workhorse paired with distinctive Bricolage.

## Changelog

- **2026-07-16:** Deslop pass. Removed Space Grotesk, icon-tile services, hero pills, 40px blob cards, star feature lists, semantic trust colors. Added bento services, slop audit section.
- **2026-07-15:** Modern Retro (Stitch Option 1) applied site-wide.
