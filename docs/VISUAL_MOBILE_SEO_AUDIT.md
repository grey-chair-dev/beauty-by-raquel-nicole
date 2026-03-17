# Visual & Mobile SEO Audit — Beauty by Raquel Nicole

**Scope:** Codebase-only (site 503).  
**Audit date:** 2025-03-17.  
**Conversion layout verified:** Hero → TrustBlock → HomepageTransformations → HomepageServicesStrip → About → Testimonials → ClosingCTA.

---

## Summary

| Category | Score (0–100) | Notes |
|----------|----------------|--------|
| Viewport & mobile | 82 | Viewport correct; most touch targets ≥44px; a few under. |
| Above-the-fold / CTA | 88 | Clear value prop and primary CTA; duplicate H1. |
| Section contrast & hierarchy | 85 | Good spacing and headings; some low-contrast text. |
| OG image | 70 | Dimensions correct; SVG may not render on major platforms. |
| Image alt text | 92 | Hero, About, Gallery, HomepageTransformations have descriptive alt. |
| Accessibility (focus, contrast) | 78 | Focus styles present; carousel/dots and Gallery need fixes. |
| **Overall** | **82** | Strong base; fix critical/high items for full score. |

---

## Strengths

- **Viewport:** `layout.tsx` sets `device-width`, `initialScale: 1`, `maximumScale: 5`, `viewportFit: 'cover'` — correct for mobile and safe areas.
- **Conversion order:** Homepage follows intended flow: Hero → TrustBlock → HomepageTransformations → HomepageServicesStrip → About → Testimonials → ClosingCTA (`src/app/page.tsx`).
- **Hero above-the-fold:** Clear outcome-led H1, social proof line, primary “Book Appointment” CTA with `min-h-[52px]`, and location line; hero image has descriptive alt and `priority` + blur placeholder.
- **TrustBlock:** Single strong testimonial and 5.0/REVIEW_COUNT; CTA uses `min-h-[48px]`.
- **Buttons/CTAs:** `.btn-primary` and `.btn-secondary` in `globals.css` use `min-h-[48px]` and `min-w-[44px]`; Hero, ClosingCTA, TrustBlock, Testimonials, HomepageServicesStrip, HomepageTransformations use these or explicit min-heights ≥48px.
- **Header mobile:** Hamburger is `min-h-[44px] min-w-[44px]`, `aria-label="Toggle menu"`; nav links use `py-3.5` and `touch-manipulation`; phone and Book link have `min-h-[44px]` / `min-h-[48px]`.
- **Footer & MobileCTA:** Footer nav/contact links use `min-h-[44px]`; MobileCTA floating buttons are `min-w-[48px] min-h-[48px]` with `aria-label` for Call/Book.
- **Gallery:** Category filters are `min-h-[44px]`; Instagram CTA is `min-h-[44px]`; image alts use title/context (e.g. “{title} transformation”).
- **Image alt text:** Hero (“Hair transformation — before and after lived-in color and dimensional blonding”), About (“Raquel Schmid - Licensed Hairstylist”), HomepageTransformations (“Before and after hair transformation…”), Gallery items — all descriptive.
- **OG image dimensions:** `public/og-image.svg` has `viewBox="0 0 1200 630"`; `layout.tsx` OpenGraph declares `width: 1200`, `height: 630`, `alt` set.
- **Focus styles:** `globals.css` defines `*:focus` and `button:focus, a:focus` with 2px accent outline and offset; `.btn-primary`/`.btn-secondary` use `focus:ring-2 focus:ring-accent focus:ring-offset-2`.
- **Decorative elements:** Hero blurs, gradient overlays, About wave SVG use `aria-hidden`.
- **Touch:** `touch-manipulation` and `-webkit-tap-highlight-color: transparent` used where appropriate.

---

## Issues by Priority

### Critical

| Issue | Location | Detail |
|-------|----------|--------|
| **Duplicate H1 on homepage** | `Header.tsx`, `Hero.tsx` | Header uses `<h1>` for “Beauty by Raquel Nicole” and Hero uses `<h1>` for “Lived-In Color & Dimensional Blonding…”. One page should have a single H1. **Fix:** Change Header logo to `<span>` or `<p>` (or use a visually hidden H1 once and style the other as a heading visually only). |
| **OG image format** | `layout.tsx`, `public/og-image.svg` | OG points to `/og-image.svg`. Many platforms (Facebook, LinkedIn, some Twitter clients) do not reliably render SVG for OG; they expect PNG or JPEG. **Fix:** Export or generate a 1200×630 PNG (and optionally keep SVG for other uses); set `openGraph.images[].url` and `twitter.images` to the PNG URL. |

### High

| Issue | Location | Detail |
|-------|----------|--------|
| **Carousel prev/next & dots below 44px** | `ReviewCarousel.tsx` | Prev/next buttons are `w-10 h-10` (40px). Dot indicators are `w-2 h-2` (8px) — too small for touch and hard to see. **Fix:** Use `min-h-[44px] min-w-[44px]` for prev/next; make dots at least 44px tap area (e.g. larger hit area with `p-3` and small visual dot) and add `aria-label` to prev/next. |
| **Gallery cards not keyboard-accessible** | `Gallery.tsx` | Cards use `<div onClick={() => setSelectedImage(item.id)}>` with `cursor-pointer`. No keyboard focus, no Enter/Space, no `role="button"`. **Fix:** Use `<button type="button">` for the card (or wrap in a link if it navigates), or add `tabIndex={0}`, `role="button"`, and `onKeyDown` (Enter/Space) so the interaction is keyboard and a11y compliant. |
| **Services strip “View details” links** | `HomepageServicesStrip.tsx` | “View details” / “Bridal info” are `<Link>` with `inline-flex items-center gap-1` and no minimum height. Tap target can be under 44px on mobile. **Fix:** Add `min-h-[44px] inline-flex items-center` and sufficient `py-2`/padding so the full line is tappable, or wrap in a larger clickable area. |
| **Footer tel/email tap height** | `Footer.tsx` | `<a href="tel:...">` and `<a href="mailto:...">` use `py-2` only; no `min-h-[44px]`. **Fix:** Add `min-h-[44px] flex items-center` to these links so tap target meets 44px. |

### Medium

| Issue | Location | Detail |
|-------|----------|--------|
| **not-found CTA touch target** | `src/app/not-found.tsx` | “Back to home” Link uses `btn-primary` but only `px-6 py-3`; no explicit `min-h-[48px]`. **Fix:** Add `min-h-[48px]` to the Link so it matches other primary CTAs (btn-primary in CSS already has min-height; ensure class is applied and not overridden). |
| **Low-contrast body text** | Multiple components | `text-text/60` (e.g. About “Off the clock”, ReviewCarousel “({REVIEW_COUNT}+ reviews)”, Gallery card overlay) and `text-text/70` on cream `#FBF6F2` may be close to 4.5:1 for small text. **Fix:** Prefer `text-text/80` for body copy where possible; test with a contrast checker and increase weight or opacity if needed. |
| **ReviewCarousel buttons missing aria** | `ReviewCarousel.tsx` | Prev/next and dot buttons have no `aria-label` or `aria-current` for the active slide. **Fix:** Add `aria-label="Previous review"` / `"Next review"` and `aria-current={index === currentIndex ? 'true' : undefined}` on dot buttons. |
| **Montserrat not loaded** | `globals.css`, `tailwind.config.js`, `layout.tsx` | `.btn-primary` / `.btn-secondary` use `font-montserrat`; Tailwind defines `montserrat`; layout only loads DM Serif Display, Lato, Dancing Script. Buttons fall back to system font. **Fix:** Load Montserrat in `layout.tsx` (e.g. `next/font/google`) and add to `className`, or change button font to Lato in CSS/config. |

### Low

| Issue | Location | Detail |
|-------|----------|--------|
| **ClosingCTA “spots left” not a CTA** | `ClosingCTA.tsx` | “Only X spots left” is a `<span>`. If it should be a secondary action (e.g. scroll or link), consider a link; otherwise fine as decorative urgency. |
| **HomepageTransformations “Before”/“After” badges** | `HomepageTransformations.tsx` | `px-3 py-1.5` — small but decorative; not primary controls. Optional: slightly larger tap area if you want them to be interactive later. |
| **Star icons in ReviewCarousel** | `ReviewCarousel.tsx` | Star icons could have `aria-hidden="true"` since the rating is conveyed by number and text. |

---

## Checklist (quick reference)

- [ ] **Viewport:** Correct in `layout.tsx`.
- [ ] **Conversion order:** Hero → TrustBlock → HomepageTransformations → HomepageServicesStrip → About → Testimonials → ClosingCTA.
- [ ] **Single H1:** Resolve duplicate H1 (Header vs Hero) on homepage.
- [ ] **OG image:** Provide 1200×630 PNG for Open Graph/Twitter; keep or remove SVG as needed.
- [ ] **Touch targets:** Fix ReviewCarousel (prev/next ≥44px, dots 44px tap area), HomepageServicesStrip links, Footer tel/email (min-h 44px), not-found CTA.
- [ ] **Accessibility:** Gallery cards keyboard + role/button; ReviewCarousel aria-labels and aria-current; optional contrast pass on text/60 and text/70.
- [ ] **Font:** Load Montserrat or switch button font to Lato.

---

## File/component index

| File | Role in audit |
|------|----------------|
| `src/app/layout.tsx` | Viewport, metadata, OG image, schema |
| `src/app/page.tsx` | Conversion section order |
| `src/app/globals.css` | Focus, buttons (min-height/width), touch-manipulation |
| `src/app/not-found.tsx` | CTA min-height |
| `src/components/Header.tsx` | H1 (logo), mobile nav, touch targets |
| `src/components/Hero.tsx` | H1, hero value prop, primary CTA, image alt |
| `src/components/TrustBlock.tsx` | CTA, testimonial |
| `src/components/HomepageTransformations.tsx` | Image alt, CTA, badges |
| `src/components/HomepageServicesStrip.tsx` | Service links (touch target) |
| `src/components/About.tsx` | Image alt, contrast |
| `src/components/Gallery.tsx` | Image alts, category buttons, card a11y |
| `src/components/Testimonials.tsx` | Section, CTA |
| `src/components/ReviewCarousel.tsx` | Prev/next and dots size, aria |
| `src/components/ClosingCTA.tsx` | CTA |
| `src/components/MobileCTA.tsx` | Floating buttons, aria-labels |
| `src/components/Footer.tsx` | Links min-height, contrast |
| `public/og-image.svg` | OG dimensions 1200×630 |
| `tailwind.config.js` | Colors, fonts, container |

---

**Overall score: 82/100.** Address Critical and High items first, then Medium/Low for a stronger visual, mobile, and SEO baseline.
