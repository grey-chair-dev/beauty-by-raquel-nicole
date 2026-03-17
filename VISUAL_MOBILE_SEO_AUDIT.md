# Visual & Mobile SEO Audit — Beauty by Raquel Nicole

**Scope:** Codebase and UI analysis (live site https://beautybyraquelnicole.com returns 503; no screenshots).  
**Target:** Local hair stylist (Beauty by Raquel Nicole, Milford OH).  
**Pages:** Home, About, Services, Bridal, Gallery, Contact, Book.

---

## 1. Summary

| Severity | Count |
|----------|--------|
| Critical | 1 |
| High     | 3 |
| Medium   | 5 |
| Low      | 4 |

---

## 2. Strengths

- **Viewport & mobile foundation:** `src/app/layout.tsx` exports `viewport` with `device-width`, `initialScale: 1`, `maximumScale: 5`, and `viewportFit: 'cover'`. No meta viewport duplication.
- **Above-the-fold:** Hero (`src/components/Hero.tsx`) has a clear H1 (“My passion is making you feel like YOU again”), tagline, intro paragraph, and two CTAs (SmartCTA “Book” + “View Services”) in a responsive grid; primary CTA is visible without scroll.
- **Touch targets (primary actions):** `.btn-primary` and `.btn-secondary` in `globals.css` use `min-h-[48px] min-w-[44px]`. Header menu button and MobileCTA call/book buttons use `min-h-[44px]` / `min-w-[48px]` and `touch-manipulation`.
- **Responsive layout:** Tailwind default breakpoints (sm/md/lg) used consistently; `container-custom` with `px-4 sm:px-6 md:px-8 lg:px-12`; Hero and About use `grid-cols-1 lg:grid-cols-2`; no fixed widths that force horizontal scroll.
- **Overflow control:** `html, body` have `max-width: 100vw` and `overflow-x: hidden` in `globals.css`; Hero uses `overflow-hidden` for decorative blobs.
- **Focus visibility:** Global `*:focus` and `button:focus`, `a:focus`, `input:focus` use `outline: 2px solid var(--color-accent)` with offset. `.btn-primary` / `.btn-secondary` use `focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`, so keyboard focus remains visible.
- **Image alt text:** Hero image has descriptive alt (“Dramatic hair transformation - Before and After”); About image (“Raquel Schmid - Licensed Hairstylist”); Gallery items use `${item.title} transformation`.
- **Typography scale:** `tailwind.config.js` defines `text-h1-mobile` (32px), `text-body-mobile` (14px), `text-body` (16px); Hero uses `text-[28px]` → `text-h1-mobile` → `text-h1` across breakpoints and `text-[15px]` / `text-body-mobile` / `text-body` for body copy.
- **Safe area:** MobileCTA uses `bottom: max(1rem, env(safe-area-inset-bottom))` for notched devices.
- **Schema & OG metadata:** Layout includes WebSite, BeautySalon, Person JSON-LD and Open Graph/Twitter metadata with correct title/description and OG image dimensions (1200×630) declared.

---

## 3. Issues

### Critical

| Issue | Location | Detail |
|-------|----------|--------|
| **OG image file missing** | `public/` | Layout references `/og-image.jpg` (1200×630) in `openGraph.images` and `twitter.images`. File does not exist in `public/`. Only `favicon.svg`, `robots.txt`, `manifest.json`, and `gallery/` assets are present. Social shares and some crawlers will get a 404 for the image. |

**Recommendation:** Add `public/og-image.jpg` at 1200×630 (branded image with logo/tagline and “Milford, OH”). Keep the existing metadata in `src/app/layout.tsx` as-is.

---

### High

| Issue | Location | Detail |
|-------|----------|--------|
| **Touch target &lt; 44px** | `TrustBadges.tsx` (compact) | Compact badges use `min-h-[40px]` (line 42). WCAG 2.5.5 recommends at least 44×44 CSS px for touch targets. |
| **Footer link tap spacing** | `Footer.tsx` | Quick Links and Services use `py-2 sm:py-1`. On mobile, `py-2` (8px) gives a tap height that can be under 44px when combined with text. |
| **Gallery filter buttons** | `Gallery.tsx` | Category filter buttons use `px-6 py-3` with no `min-height`. On small screens or with font scaling, effective touch height can fall below 44px. |

**Recommendations:**

- **TrustBadges.tsx:** Change compact badge container to `min-h-[44px]` (and ensure tap area is at least 44px; if the whole badge is tappable, that’s sufficient).
- **Footer.tsx:** Use at least `py-3` for footer links on all breakpoints (or `min-h-[44px] flex items-center` on the link) so tap height ≥ 44px.
- **Gallery.tsx:** Add `min-h-[44px]` (and optionally `min-w-[44px]` for the smallest chips) to the category filter buttons.

---

### Medium

| Issue | Location | Detail |
|-------|----------|--------|
| **Small font size (12px)** | Multiple | `text-small` is 12px in `tailwind.config.js`. Used in Hero badge, About stats, TrustBadges, MobileCTA, BridalForm, BookingForm, etc. WCAG suggests at least 14px for secondary text; 12px is acceptable for captions/labels but can be hard to read for body-like content. |
| **Peach/cream contrast** | Palette | Primary `#F4D1C7` (peach) and bg `#FBF6F2` (cream) have very low contrast. Used for cards and decorative elements; ensure no critical text is placed on peach/cream alone. Accent `#D96B3B` on cream meets AA for large text; verify in a contrast checker if used for small text. |
| **Header nav uses `<a>`** | `Header.tsx` | Nav items use `<a href="...">` instead of Next.js `<Link>`. Works but causes full page reloads; `<Link>` would improve perceived performance and consistency with the rest of the app. |
| **Focus on nav links** | `Header.tsx` | Nav `<a>` and mobile drawer links don’t add an explicit focus style; they inherit global `*:focus` outline. Consider adding `focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2` (or similar) so keyboard users get a clear focus indicator. |
| **Gallery Instagram CTA** | `Gallery.tsx` | “Follow @beauty_by_raquel_nicole” link has `px-8 py-3` but no `min-height`. Add `min-h-[44px] flex items-center justify-center` for a reliable touch target. |

**Recommendations:**

- Reserve `text-small` (12px) for labels, captions, and non-essential text; keep body and CTA copy at 14px+ (e.g. `text-body-mobile` / `text-body`).
- In `tailwind.config.js` or design tokens, document that primary/cream are for decoration/backgrounds only; use `text` (#3D3632) or accent for readable text.
- Replace Header nav `<a>` with `<Link href={item.href}>` and add `focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded` to nav links.
- Add `min-h-[44px]` and flex centering to the Gallery Instagram CTA.

---

### Low

| Issue | Location | Detail |
|-------|----------|--------|
| **Montserrat not loaded** | `tailwind.config.js` / layout | `font-montserrat` and `text-button` reference Montserrat; layout only loads DM Serif Display, Lato, and Dancing Script. Buttons may fall back to system sans. |
| **Duplicate “After” label position** | `Hero.tsx` | “Before” and “After” overlays both use `left-4` with the second using `style={{ left: 'calc(50% + 1rem)' }}`; the first still has `left-4` in class. Works but is easy to break; consider a single wrapper with two positioned children. |
| **Mobile CTA padding** | `MobileCTA.tsx` | Floating bar has `left-4 right-4`; on very narrow viewports the inner content could be tight. Already uses flex and responsive text; optional to add `min-width: 0` on the text block to avoid overflow. |
| **No `theme-color`** | `layout.tsx` | No `<meta name="theme-color" content="...">`. Adding one (e.g. `#FBF6F2` or `#3D3632`) can improve browser chrome and PWA behavior. |

**Recommendations:**

- Either add Montserrat in `layout.tsx` (e.g. via `next/font/google`) and keep `font-montserrat`, or switch button font to Lato/body in `globals.css` and config.
- Refactor Hero “Before”/“After” into a small component with explicit left/right positions.
- Add `theme-color` meta in layout head (and to `manifest.json` if present).

---

## 4. Checklist Summary

| Check | Status | Notes |
|-------|--------|--------|
| Viewport | Pass | device-width, initialScale 1, viewportFit cover |
| Touch targets (primary) | Pass | Buttons 48/44px min; menu 44px; MobileCTA 48px |
| Touch targets (secondary) | Fail | TrustBadges 40px; Footer links; Gallery filters; Gallery Instagram CTA |
| Text size | Pass with caveat | Body 14/16px; H1 28/32/48px; 12px used for labels/captions only |
| Above-the-fold | Pass | Hero H1, tagline, CTAs, and trust cues visible |
| Responsive breakpoints | Pass | sm/md/lg used; container-custom; no horizontal scroll |
| Overflow | Pass | overflow-x: hidden on body; overflow-hidden for sections |
| Focus states | Pass | Global outline + btn ring; nav could add focus-visible |
| Color contrast | Pass with caveat | Text on cream OK; peach/cream decorative only |
| Alt text (Hero, About, Gallery) | Pass | Descriptive alts present |
| OG image | Fail | Referenced file not in public/; dimensions 1200×630 correct in metadata |

---

## 5. File-Level Quick Reference

| File | Changes |
|------|--------|
| `public/og-image.jpg` | **Add** 1200×630 image. |
| `src/app/layout.tsx` | Optional: add `theme-color` meta. |
| `src/components/TrustBadges.tsx` | `min-h-[40px]` → `min-h-[44px]`. |
| `src/components/Footer.tsx` | Footer links: use `py-3` or `min-h-[44px]` for tap targets. |
| `src/components/Gallery.tsx` | Filter buttons: add `min-h-[44px]`; Instagram CTA: add `min-h-[44px] flex items-center justify-center`. |
| `src/components/Header.tsx` | Prefer `<Link>` for nav items; add focus-visible ring to links. |
| `tailwind.config.js` / `layout.tsx` | Load Montserrat or stop using `font-montserrat`. |
| `src/components/Hero.tsx` | Optional: clarify “Before”/“After” overlay positioning. |

---

*Audit based on codebase only; live screenshots could not be captured due to 503. Re-run visual checks after the site is live.*
