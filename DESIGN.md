---
name: Beauty by Raquel Nicole
description: Modern Retro salon brand for a Milford hairstylist. Warm maroon, cream, bookable, photo-forward.
colors:
  retro-maroon: "#a43716"
  maroon-deep: "#862201"
  maroon-container: "#c54f2c"
  peach-fixed: "#ffdbd1"
  peach-container: "#fdad99"
  terracotta-secondary: "#8b4e3e"
  magenta-tertiary: "#973b67"
  pink-fixed: "#ffd9e5"
  pink-container: "#b55380"
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
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.2
rounded:
  button: "9999px"
  card: "40px"
  frame: "40px 120px 40px 120px"
spacing:
  xs: "4px"
  s: "8px"
  m: "16px"
  l: "24px"
  xl: "48px"
  margin-mobile: "20px"
  margin-desktop: "64px"
components:
  button-primary:
    backgroundColor: "{colors.retro-maroon}"
    textColor: "{colors.pure-surface}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.maroon-deep}"
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
  service-card:
    backgroundColor: "{colors.cream-surface}"
    textColor: "{colors.ink-text}"
    rounded: "{rounded.card}"
    padding: "32px"
---

# Design System: Beauty by Raquel Nicole

## Overview

**Creative North Star: "The Bright Chair" (Modern Retro)**

Independent salon site where warm maroon and cream carry the brand before copy does. Stitch Option 1 (Modern Retro Homepage) is the active direction: retro frames, groovy offset shadows, Bricolage Grotesque headlines, and a single booking label everywhere.

**Key characteristics:**

- Committed palette: maroon primary, peach/pink accents, cream ground
- Bricolage Grotesque + DM Sans + Space Grotesk
- Photo-forward heroes with `retro-frame` and `groovy-shadow`
- Pill buttons, maroon sticky header with 4px bottom shadow
- Single CTA label: **Book Appointment**

## Colors

### Primary

- **Retro Maroon** (#a43716): Headlines, primary buttons, header shadow, retro frames
- **Maroon Deep** (#862201): Hover states
- **Peach Fixed** (#ffdbd1): Section tints, marquee band

### Secondary

- **Peach Container** (#fdad99): Badges, sparkle accents
- **Terracotta Secondary** (#8b4e3e): Secondary headlines, service card variant

### Tertiary

- **Magenta Tertiary** (#973b67): Service cards, testimonial blocks
- **Pink Fixed** (#ffd9e5): Floating accent badges

### Neutral

- **Cream BG** (#fff9ee): Page background
- **Ink Text** (#1d1c15): Body copy
- **Ink Muted** (#58423c): Supporting text

**The One Maroon Rule.** Every primary action uses retro maroon. Instagram DM is secondary.

## Typography

**Display:** Bricolage Grotesque, extrabold, tight tracking for hero only.

**Headline:** Bricolage Grotesque, bold, maroon section titles.

**Body:** DM Sans, 16px, max ~65ch.

**Label:** Space Grotesk, semibold, buttons and nav.

## Elevation

- **Groovy shadow:** `8px 8px 0 #a43716` on primary CTAs and retro frames
- **Hover lift:** translate + deeper shadow on service cards
- No glassmorphism; solid cream/white surfaces

## Components

### Buttons

- **Primary:** Maroon fill, white label, full pill, groovy shadow, min-height 48px
- **Secondary:** 2px maroon border, maroon text, pill, hover peach-fixed fill

### Cards

- **Service cards:** 40px radius, 2px border, tinted backgrounds per service type
- **Retro frame:** 4px maroon border, asymmetric radius for hero/gallery photos

### Navigation

- Sticky cream header, maroon wordmark, Space Grotesk links
- Desktop: phone + Book Appointment
- Mobile: hamburger + bottom floating CTA bar

## Do's and Don'ts

### Do:

- Use **Book Appointment** for every primary booking CTA
- Lead with real client photography
- Use retro-frame on hero and gallery highlights
- Respect `prefers-reduced-motion` on marquee and sparkle animations

### Don't:

- Revert to Coral Glow (#FFB8A8 / #FF5C32) palette
- Use side-stripe borders, gradient text, or decorative blur
- Mix CTA labels (Book Now, Schedule, Book Your Spot)
- Use em dashes in user-facing marketing copy
