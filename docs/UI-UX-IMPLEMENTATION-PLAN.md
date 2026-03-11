# UI/UX Implementation Plan — Beauty by Raquel Nicole

**Based on customer mood boards:** Sawdust & Stain, Crush Parlor / Modern Retro Beauty, Retro Funky (bubble font), 70s Glow lettering  
**Project:** Beauty by Raquel Nicole (Milford, OH)  
**Stack:** Next.js, Tailwind CSS, Framer Motion  
**Priorities:** Speed (sub-2s), Clarity (Grunt Test), Lead capture, minimal heavy libraries  

---

## 1. Design direction (from mood boards)

The references establish a **unified aesthetic** to apply to Beauty by Raquel Nicole:

| From mood boards | Application for BBRN |
|------------------|----------------------|
| **Sawdust & Stain** — warm organic, serif + script, paintbrush/floral, wavy stripes, “hey i’m maari” personal intro | Personal, artisanal feel; “hey, I’m Raquel” intro; organic shapes and wavy dividers |
| **Crush Parlor** — modern retro beauty, bold display + thin sans + script tagline, blob backgrounds, “walk in, strut out” | Bold hero typography; punchy tagline; organic blob backgrounds; strong primary CTA color |
| **Retro Funky** — bubbly, rounded 70s bubble font; golden-orange with darker orange shadow; small sparkles/starbursts; cream/beige background | Optional **display variant** for hero or key headlines: fun, groovy, high-impact; use for short text only (legibility). Sparkles as subtle decorative accents. |
| **70s Glow lettering** — bold cursive/script wordmark; pastel pink, coral, vibrant orange; 3D shadow and two-tone (orange + pink) effects; starbursts and diamond shapes on background; muted beige/cream | **Hero wordmark or logo treatment**: "Glow"-style script for a key phrase; dimensional effect via CSS `text-shadow` or SVG; starburst/diamond motifs for section backgrounds or corners. |

**Unified direction:** **Modern retro beauty** — warm palette (peach, pink, orange, cream), bold display typography, script accent for taglines, organic shapes (waves, blobs), and a clear, personal “walk in, strut out” energy adapted to Raquel’s voice. Optional: **bubble/retro** (Retro Funky) or **70s script** (Glow) for hero wordmark; **sparkles, starbursts, dimensional script** used sparingly so they support clarity and speed.

---

## 2. Design tokens (Phase 1)

### 2.1 Color palette

Replace or extend the current palette to match the mood boards. Keep contrast and accessibility (WCAG AA).

| Role | Current | New (from boards) | Usage |
|------|---------|-------------------|--------|
| **Primary (brand)** | `#F9E6E6` (blush) | Warm peach / light coral — e.g. `#F5D5C8` or `#F4D1C7` | Backgrounds, cards, subtle fills |
| **Secondary** | `#F3D7C6` (beige) | Soft rose pink — e.g. `#E8B4B8` or `#E8C4C4` | Secondary backgrounds, stripes |
| **Accent (CTA)** | `#C2876C` (rose gold) | **Vibrant orange** — e.g. `#E07C4C` or `#D96B3B` | Buttons, links, “Book Now”, key CTAs |
| **Accent dark** | — | **Burnt orange / ochre** — e.g. `#B85C38` or `#A64B2A` | Hover states, emphasis |
| **Text** | `#3C3C3C` | Keep or warm up slightly — e.g. `#3D3632` | Body, headings (ensure contrast on cream) |
| **Background** | `#FFF8F5` | **Cream / off-white** — e.g. `#FDF8F5` or `#FBF6F2` | Page background |
| **Neutrals (optional)** | — | Light lavender `#E8E0EB`, soft mint `#D4E8E0` | Optional blob/shape accents (use sparingly) |
| **Golden-orange (retro)** | — | Golden-orange `#E8A84A`–`#D4892E`, darker shadow `#A64B2A` | Bubble/retro display text, sparkles; 70s Glow-style highlights |
| **Two-tone script** | — | Orange base + pastel pink overlay/highlight (from Glow refs) | Optional hero wordmark or key phrase (CSS or SVG) |

**Files to update:**

- `tailwind.config.js` — `theme.extend.colors`
- `src/app/globals.css` — `:root` CSS variables
- Any component using hardcoded hex (e.g. Toaster in `layout.tsx`)

### 2.2 Typography

| Role | Current | New (from boards) | Usage |
|------|---------|-------------------|--------|
| **Display / hero** | Playfair Display | **Bold, rounded display** — e.g. **DM Serif Display**, **Fraunces**, or **Outfit** (bold) | H1, hero headline, “Beautiful Hair” |
| **Headings** | Playfair Display | Keep serif or use same as display — e.g. **DM Serif Display** or **Playfair** | H2, H3, section titles |
| **Body** | Lato | **Clean sans** — keep **Lato** or use **Source Sans 3** / **Nunito Sans** | Body, captions, nav |
| **Accent / tagline** | — | **Script / handwritten** — e.g. **Dancing Script**, **Great Vibes**, **Caveat** | Tagline (“Walk in, strut out” style), signature, pull quotes |
| **Buttons / UI** | Montserrat | Keep or align with body — **Montserrat** or **Lato** (600/700) | Buttons, labels, small caps optional |
| **Display retro (optional)** | — | **Bubble / groovy 70s** (e.g. Retro Funky–style or similar) — rounded, 3D feel | Hero headline or one key phrase only; short text for legibility and Grunt Test |
| **Script 70s (optional)** | — | **Bold cursive** (Glow-style) — thick, rounded, hand-lettered | Wordmark, "Glow"-like hero phrase, or signature; implement as SVG or heavy script font with subset |

**Implementation:**

- `src/app/layout.tsx` — load 2–3 Google Fonts (display, body, script) with `display: 'swap'`, minimal weights.
- `tailwind.config.js` — `fontFamily` for `display`, `heading`, `body`, `script`.
- `globals.css` — set `--font-*` and base `font-family` on body/headings.

**Performance:** Subset to Latin; prefer variable fonts or 2 weights per family to keep sub-2s load. Any **custom bubble or 70s script** font: WOFF2, subset to used glyphs, load async so it doesn’t block LCP.

### 2.3 Decorative elements (Retro Funky + 70s Glow)

| Element | Source | Implementation |
|--------|--------|----------------|
| **Sparkles / starbursts** | Retro Funky (small 4-point starbursts); Glow (reddish-orange starbursts + diamonds) | Small inline SVGs or CSS shapes; use sparingly (hero corners, section accents, card embellishments). Keep under ~3–5 per view for performance. |
| **Dimensional script** | 70s Glow (layered shadow, two-tone) | CSS: multiple `text-shadow` layers for 3D effect; or SVG text with filter/drop-shadow. Two-tone: `background-clip: text` + gradient, or SVG with two fills. |
| **Bubble display effect** | Retro Funky (golden-orange + darker orange shadow) | `text-shadow` (e.g. 2–3px offset in burnt orange); optional very subtle stroke via `-webkit-text-stroke` or SVG. |
| **Diamond / geometric accents** | 70s Glow (small diamonds on background) | Tiny SVG or CSS (rotated squares); low opacity, scatter in hero or feature backgrounds. |

Use these to reinforce the retro vibe without cluttering; ensure they don’t hurt **clarity** (Grunt Test) or **speed** (minimal DOM/CSS).

### 2.4 Spacing and layout

- Keep existing `container-custom` and max-width scale.
- Add optional **wavy section dividers** (SVG or CSS) and **organic blob** background shapes (SVG or `border-radius` blobs) for hero and key sections.

---

## 3. Global layout and components (Phase 2)

### 3.1 Layout and document

- **`src/app/layout.tsx`**
  - Swap to new font variables/classes.
  - Ensure `<html>`/`<body>` use new `bg` and `text` tokens.
  - Update Toaster styles to use new primary/accent.

### 3.2 Header

- **`src/components/Header.tsx`**
  - Logo: use **display** font for “Beauty by Raquel Nicole” (or “Raquel Nicole” bold + “Beauty by” script if a split lockup is desired).
  - Nav: body font, hover state in new **accent** (orange).
  - “Book Now”: solid **accent** (vibrant orange), hover **accent-dark**.
  - Optional: thin bottom border or soft shadow using primary/secondary.

### 3.3 Hero

- **`src/components/Hero.tsx`**
  - **Headline:** One clear line that passes the Grunt Test (e.g. “Beautiful Hair Transformations” or “Your Best Hair, Here”) in **display** font, large size.
  - **Subhead / tagline:** Script or italic line in the “walk in, strut out” spirit (e.g. “Walk in. Leave glowing.”) using **script** font.
  - **Background:** Soft gradient (cream → peach → light pink) or **organic blob shapes** (SVG/CSS) in brand colors behind content; keep image area as-is.
  - **CTA:** Primary button in **accent** (orange); secondary outline or text in accent.
  - **Trust badge:** Keep “Hair Stylist in Milford, OH” visible; style to match new palette.

### 3.4 About / “Hey, I’m Raquel”

- **`src/components/About.tsx`** (and About page if separate)
  - Add a **personal intro block**: “Hey, I’m Raquel.” (or “Hi, I’m Raquel.”) in **display** or **heading** font, warm brown/orange tone.
  - Subhead or pull quote in **script** for a short, personal line.
  - Optional: **wavy stripe** (horizontal bands in peach/pink/orange) at bottom of section, like the Sawdust & Stain web mock.
  - Keep stats and body copy; update colors to new palette.

### 3.5 Reusable patterns

- **Wavy divider:** One SVG (or CSS wave) used between sections in 2–3 color variants (e.g. cream-to-peach, peach-to-pink).
- **Organic blobs:** 2–3 SVG blobs or large rounded divs for hero/feature sections; low opacity or soft gradients so they don't compete with content.
- **Sparkles / starbursts:** Small inline SVG (4-point starburst or Glow-style starburst + diamond); reusable as a component or icon. Use in hero, section headers, or cards; limit count per view.
- **Cards:** Keep “seamless” card style; update border/shadow to use new primary/secondary so they feel part of the new system; optional tiny starburst/diamond accent in a corner for retro touch.

---

## 4. Lead capture and CTAs (Phase 3)

- **Primary CTA:** One accent color (vibrant orange); used for “Book Now”, “Get in Touch”, “Book a Consult”.
- **Placement:** Header (sticky), hero (primary + secondary), end of Services/About, contact page, optional floating CTA on scroll (minimal, not intrusive).
- **Forms:** Keep forms high-frictionless (short fields, clear labels); style inputs with light border and focus ring in **accent**; button in **accent**.
- **SmartCTA / MobileCTA / Booking:** Ensure all use the new `btn-primary` / accent styles from globals and Tailwind.

---

## 5. Component checklist (by file)

| Component | Actions |
|-----------|--------|
| `globals.css` | New `:root` colors; optional blob/wave utilities; `.btn-primary`/`.btn-secondary` use new accent |
| `tailwind.config.js` | New colors, font families, any new spacing/animations |
| `layout.tsx` | Font imports and variables; body classes; Toaster colors |
| `Header.tsx` | Logo typography; nav hover; Book Now button color |
| `Hero.tsx` | Headline + tagline typography; optional bubble/retro or Glow-style wordmark; gradient or blob background; optional sparkles/starbursts; CTA colors |
| `About.tsx` | “Hey, I’m Raquel” block; script subhead; wavy stripe optional |
| `Footer.tsx` | Text and link colors; optional wavy top border |
| `Services.tsx` | Section title and card styles to new palette |
| `SmartCTA.tsx` / `MobileCTA.tsx` | Use shared primary/accent styles |
| `BookingForm.tsx` / `SquareBooking.tsx` | Accent for buttons and focus states |
| `Contact` page | Form and CTA in accent; optional blob or wave in background |
| `Testimonials.tsx` / `ReviewCarousel.tsx` | Quote or attribution in script font optional; card colors |

---

## 6. Assets and performance

- **Logos:** If client provides new wordmark or icon, use SVG for header/favicon; keep current text logo until then. Optional: 70s Glow–style script wordmark (e.g. "Glow" or brand phrase) as SVG for hero or section.
- **Backgrounds:** Prefer CSS gradients + 1–2 inline SVGs (waves/blobs) over large images; no heavy textures that hurt LCP. Starburst/diamond accents: small SVGs, minimal count.
- **Fonts:** Next.js `next/font/google` with `display: 'swap'`; 2 weights per family max where possible. Custom **bubble/retro** or **70s script**: WOFF2, subset, load asynchronously so LCP isn’t blocked.
- **Decorative (Retro Funky / Glow):** Sparkles, starbursts, diamonds as inline SVG or symbol sprite; avoid raster images. Dimensional script: CSS `text-shadow` or SVG filters preferred over heavy image assets.
- **Images:** Keep existing Next/Image usage; ensure hero image has priority and blur placeholder.

---

## 7. Suggested implementation order

1. **Phase 1 — Tokens**  
   - Update `tailwind.config.js` and `globals.css` with new colors and fonts.  
   - Update `layout.tsx` (fonts + Toaster).  
   - Smoke test: one page to confirm no contrast/readability regressions.

2. **Phase 2 — Hero and header**  
   - Hero: headline, tagline, background (gradient or blobs), CTA.  
   - Header: logo typography, nav, Book Now.  
   - Verify Grunt Test and above-the-fold load.

3. **Phase 3 — About and sections**  
   - About: “Hey, I’m Raquel” block, script accent, optional wavy stripe.  
   - Apply new palette and fonts to Services, Gallery, Footer.

4. **Phase 4 — Lead capture and polish**  
   - All CTAs and forms to new accent; focus states.  
   - Optional: one wavy divider component and one blob set; reuse in hero/About/contact.  
   - Final pass: accessibility (focus, contrast), and performance (LCP, CLS).

---

## 8. Success criteria

- **Speed:** LCP and FCP within sub-2s target; no new blocking scripts or huge images.
- **Clarity:** Hero answers “what is this?” in ~5 seconds (business + primary offer + CTA).
- **Lead capture:** Primary CTA visible in header and hero; forms styled and low-friction.
- **Brand:** Site feels warm, modern-retro, and personal; typography and color align with all mood boards (Sawdust & Stain, Crush Parlor, Retro Funky, 70s Glow) while staying clearly “Beauty by Raquel Nicole.”

---

*Document derived from customer mood boards (Sawdust & Stain, Crush Parlor / Modern Retro Beauty, Retro Funky bubble font, 70s Glow lettering) and existing Beauty by Raquel Nicole codebase. Adjust hex codes and font names to final brand assets when provided.*
