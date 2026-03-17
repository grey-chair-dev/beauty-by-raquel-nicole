# SEO Audit — Prioritized Action Plan

**Site:** Beauty by Raquel Nicole (https://beautybyraquelnicole.com)  
**Audit:** Full SEO audit (codebase, site 503); overall score **77/100**.

---

## Priority Definitions

- **Critical:** Blocks indexing or causes penalties — fix immediately.
- **High:** Significantly impacts rankings or trust — fix within 1 week.
- **Medium:** Optimization opportunity — fix within 1 month.
- **Low:** Nice to have — backlog.

---

## Critical

| # | Action | Where | Notes |
|---|--------|--------|------|
| 1 | Fix duplicate H1 | `src/components/Header.tsx` | Change site name from `<h1>` to `<span>` (or `<p>`). Keep one H1 per page (main content, e.g. Hero headline). |
| 2 | Add single definition sentence | `src/components/Hero.tsx` | In hero subcopy add: “Beauty by Raquel Nicole is a hair salon in Milford, OH, at The Beauty Bar, with 200+ five-star reviews and 500+ clients.” Optionally add “Professional balayage, highlights, and lived-in color” for keywords. |
| 3 | 404 noindex | `src/app/not-found.tsx` | Export metadata with `robots: { index: false, follow: true }` so 404 pages are not indexed. |
| 4 | OG image for social | `public/` + `src/app/layout.tsx` | Add 1200×630 PNG (or JPG) for Open Graph/Twitter; many platforms don’t use SVG. Point `og:image` and Twitter image to the PNG. Keep SVG if desired for schema or fallback. |
| 5 | Add body copy to thin pages | `gallery/page.tsx`, `book/page.tsx`, `contact/page.tsx` | 150–250 words each: Gallery (what’s in gallery, how to book); Book (after booking, reschedule, new-client tips); Contact (parking, first visit). |

---

## High

| # | Action | Where | Notes |
|---|--------|--------|------|
| 6 | TrustBlock wording | `src/components/TrustBlock.tsx` | Use “rating from {REVIEW_COUNT}+ reviews” (not “clients”) to align with schema and avoid confusion with CLIENT_COUNT. |
| 7 | Shorten meta titles | about, contact, gallery, services page metadata | Trim to ≤60 characters so SERP titles don’t truncate; keep brand and location. |
| 8 | Homepage first 100 words | `Hero.tsx` | Add primary keywords (e.g. “Professional balayage and highlights in Milford, OH”) in subline or first paragraph. |
| 9 | Preconnect book.squareup.com | `src/app/layout.tsx` | Add `<link rel="preconnect" href="https://book.squareup.com" />` (booking widget uses it). |
| 10 | 404 noindex (if not in Critical) | `not-found.tsx` | Same as Critical #3. |
| 11 | ReviewCarousel touch targets | `ReviewCarousel.tsx` | Prev/next and dots ≥44px; add aria-label / aria-current. |
| 12 | Gallery card accessibility | `Gallery.tsx` | Use `<button>` or link with keyboard support instead of `<div onClick>`. |
| 13 | HomepageServicesStrip link targets | `HomepageServicesStrip.tsx` | Add min-h-[44px] (and padding) to “View details” links. |
| 14 | Footer tel/email tap targets | `Footer.tsx` | Add min-h-[44px] to tel and email links. |

---

## Medium

| # | Action | Where | Notes |
|---|--------|--------|------|
| 15 | Content-Security-Policy | next.config.js | Add CSP (e.g. frame-ancestors 'none', default-src 'self', allow Square/Instagram if needed). |
| 16 | Canonical consistency | All page metadata | Use relative canonicals (e.g. `/book`, `/contact`) with metadataBase. |
| 17 | Sitemap lastModified | `src/app/sitemap.ts` | Use stable value (e.g. build time or fixed date) instead of `new Date()` on every request. |
| 18 | TrustBlock testimonial | `TrustBlock.tsx` | Replace with one real, specific quote (service + result) or rotate real quotes. |
| 19 | Contact H2 | `contact/page.tsx` or Map | Add H2 (e.g. “Location & Hours”) above Map/contact content. |
| 20 | Gallery H2 | `gallery/page.tsx` | Add H2 (e.g. “Before & After Results”) before gallery grid. |
| 21 | useCallback for forms | BookingForm.tsx, BridalForm.tsx | Wrap onSubmit in useCallback for INP. |
| 22 | useCallback carousel | ReviewCarousel.tsx | Wrap nextReview, prevReview, goToReview in useCallback. |
| 23 | Dynamic import BridalForm | `bridal/page.tsx` | next/dynamic for BridalForm to reduce /bridal bundle. |
| 24 | Dynamic import SquareBooking | `book/page.tsx` | next/dynamic with ssr: false and loading placeholder. |
| 25 | not-found CTA | `not-found.tsx` | Add min-h-[48px] to “Back to home” link. |
| 26 | Contrast | Body text on cream | Consider text-text/80 for body where text-text/60 or /70 may fail 4.5:1. |
| 27 | Montserrat | layout or tailwind | Load Montserrat if buttons use font-montserrat, or switch button font to Lato. |
| 28 | Schema logo/image | layout.tsx | Optional: add raster (PNG) for BeautySalon logo/image for rich results. |

---

## Low

| # | Action | Where | Notes |
|---|--------|--------|------|
| 29 | manifest.json icons | public/manifest.json | Add at least one icon (e.g. 192×192, 512×512). |
| 30 | WebSite / Person @id | layout schema | Optional: add @id for clearer graph. |
| 31 | FAQ block + FAQPage schema | Home or About | 3–5 Q&As (location, services, booking); optional FAQPage JSON-LD for AI. |
| 32 | ReviewCarousel aria | ReviewCarousel.tsx | aria-label on prev/next, aria-current on active dot. |

---

## Summary Counts

| Priority | Count |
|----------|--------|
| Critical | 5 |
| High | 9 |
| Medium | 14 |
| Low | 4 |

---

Tackle Critical first (H1, definition sentence, 404 noindex, OG PNG, thin-page copy), then High (TrustBlock wording, meta titles, preconnect, accessibility/touch targets). Medium and Low can follow in order.
