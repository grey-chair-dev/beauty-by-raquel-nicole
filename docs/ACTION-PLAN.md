# SEO Audit — Prioritized Action Plan

**Site:** Beauty by Raquel Nicole (https://beautybyraquelnicole.com)  
**Audit:** Full SEO audit (codebase); overall score 76/100.

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
| 1 | Add OG image file | `public/og-image.jpg` | 1200×630, branded (logo + “Milford, OH”). Referenced in layout; currently 404. |
| 2 | Align trust numbers | `src/lib/constants.ts`, layout (schema), TrustBadges, ReviewCarousel | One source: e.g. `REVIEW_COUNT` and optionally `CLIENT_COUNT`. Use same numbers everywhere or clearly distinguish “reviews” vs “clients.” |
| 3 | Align business hours | `src/lib/constants.ts`, Map.tsx, Footer.tsx, layout (schema) | Single source (e.g. `BUSINESS_HOURS`). Map currently 9–6/9–4; schema/Footer 10–6/10–4. |
| 4 | AggregateRating | `src/app/layout.tsx` | Use verifiable review count or remove aggregateRating to avoid policy risk. |

---

## High

| # | Action | Where | Notes |
|---|--------|--------|------|
| 5 | Add body copy to thin pages | `gallery/page.tsx`, `book/page.tsx`, `contact/page.tsx` (or Map) | 80–150 words each: gallery (real transformations, Milford); book (what to expect, cancellation); contact (visiting, parking). |
| 6 | Fix About heading | `src/components/About.tsx` | Visible H2 (e.g. “About Raquel”); current H2 is sr-only. |
| 7 | Touch targets ≥ 44px | TrustBadges.tsx, Footer.tsx, Gallery (filters, Instagram CTA) | Use `min-h-[44px]` or `py-3` so tap areas meet accessibility. |
| 8 | Meta description length | Page metadata across app | Trim to 150–160 chars where long or repetitive. |

---

## Medium

| # | Action | Where | Notes |
|---|--------|--------|------|
| 9 | HSTS header | next.config.js or host | Add `Strict-Transport-Security` where possible. |
| 10 | Canonicals | Page metadata | Prefer relative (e.g. `canonical: '/book'`) for portability; metadataBase still resolves. |
| 11 | Homepage title | `src/app/page.tsx` | Shorten so template doesn’t double brand; keep under ~60 chars before “\| Beauty by Raquel Nicole.” |
| 12 | AI-quotable definition | Hero or About (homepage) | One sentence: “Beauty by Raquel Nicole is a hair salon in Milford, OH, at The Beauty Bar…” Optional: FAQ schema with 3–5 Q&As. |
| 13 | Bridal page depth | `bridal/page.tsx` | Add 100–150 words: trial, timeline, travel, why book with Raquel. |
| 14 | Memoize getAvailableDates | `src/components/BookingForm.tsx` | `const availableDates = useMemo(() => getAvailableDates(), []);` for INP. |
| 15 | Hero image size | `src/components/Hero.tsx` | Larger intrinsic size (e.g. 800×600); keep `sizes`. |
| 16 | Remove font preconnects | `src/app/layout.tsx` | Remove preconnect to fonts.googleapis.com / fonts.gstatic.com (next/font serves from origin). |
| 17 | Preconnect for Square | `src/app/layout.tsx` | `<link rel="preconnect" href="https://squareup.com" />` (when Book in tree or in layout). |
| 18 | next.config | next.config.js | Remove `generateEtags: false` and `onDemandEntries` if not needed. |
| 19 | Header nav | Header component | Prefer `<Link>` over `<a>` for client-side navigation; ensure focus-visible. |
| 20 | Format detection | `src/app/layout.tsx` | Enable (or remove) email/address/telephone so devices can tap-to-call/email. |

---

## Low

| # | Action | Where | Notes |
|---|--------|--------|------|
| 21 | Image `sizes` | About.tsx, Gallery.tsx | Add responsive `sizes` for next/image. |
| 22 | Gallery category | Gallery data | Fix “Womens Haircut” category (e.g. extensions → styling) for consistency. |
| 23 | Custom 404 | `src/app/not-found.tsx` | Add branded not-found page. |
| 24 | Google verification | layout metadata | Uncomment and add verification code when using Search Console. |
| 25 | BreadcrumbList | About, Bridal, Gallery, Contact, Book | Use `BreadcrumbSchema` (as on Services) with correct items. |
| 26 | Dynamic-import BridalForm | `src/app/bridal/page.tsx` | Reduce /bridal bundle (zod, react-hook-form only on that page). |
| 27 | Gallery filter / CTA | Gallery.tsx | Ensure filter buttons and Instagram CTA have min-h-[44px]. |
| 28 | theme-color | layout head | Optional; improve mobile browser chrome. |
| 29 | Montserrat | tailwind.config / layout | Load Montserrat if used in Tailwind or switch to Lato. |

---

## Summary Counts

| Priority | Count |
|----------|--------|
| Critical | 4 |
| High | 4 |
| Medium | 12 |
| Low | 9 |

Tackle Critical and High first; then Medium (hours/constants, copy, performance, schema/FAQ); Low as capacity allows.
