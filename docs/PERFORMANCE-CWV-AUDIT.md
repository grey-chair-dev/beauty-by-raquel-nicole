# Performance & Core Web Vitals Audit — Beauty by Raquel Nicole

**Scope:** Codebase-only (site 503). Next.js 14, Tailwind, next/image, next/font.  
**Audit date:** March 2025.

---

## Overall score: **74 / 100**

| Area        | Status | Notes |
|------------|--------|--------|
| LCP        | Good   | Hero priority/sizes/fonts in place; minor tweaks possible. |
| INP        | Medium | Forms lack `useCallback`; carousel handlers not memoized. |
| CLS        | Good   | Images have dimensions; reserved space used. |
| Third-party| Medium | Square preconnect present; add `book.squareup.com`. |
| Bundle     | Medium | `optimizePackageImports` used; /bridal and /book not code-split. |
| next.config| Medium | Missing `generateEtags: false`; images/headers OK. |

---

## 1. LCP (Largest Contentful Paint)

**Goal:** ≤2.5s (75th percentile).

### What’s good

- **Hero image** (`src/components/Hero.tsx`): `priority`, `width={800}` `height={600}`, `sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"`, `placeholder="blur"` with `blurDataURL` — strong LCP setup.
- **Fonts** (`src/app/layout.tsx`): All three Google fonts use `display: 'swap'` and `preload: true` — avoids FOIT and helps LCP.

### Risks / recommendations

| Priority | Issue | File | Recommendation |
|----------|--------|------|----------------|
| Low | Hero could preload the LCP image | `src/components/Hero.tsx` | Optional: add `<link rel="preload" as="image" href="/images/hero/before-after-optimized.jpg" />` in layout or page for the route that shows Hero. |
| Low | Same image reused on homepage | `src/components/HomepageTransformations.tsx` (lines 19–26) | Image has `width`/`height` and `sizes`; ensure file is cached (same path as Hero). No change required for LCP. |

---

## 2. INP (Interaction to Next Paint)

**Goal:** ≤200ms (75th percentile).

### What’s good

- **BookingForm** (`src/components/BookingForm.tsx`): `availableDates` computed in `useMemo(() => getAvailableDates(), [])` — avoids recalculating on every render.

### Risks / recommendations

| Priority | Issue | File | Recommendation |
|----------|--------|------|----------------|
| High | `onSubmit` recreated every render | `src/components/BookingForm.tsx` (lines 64–84) | Wrap in `useCallback`: `const onSubmit = useCallback(async (data: BookingFormData) => { ... }, [reset]);` and pass to `handleSubmit(onSubmit)`. |
| High | `onSubmit` recreated every render | `src/components/BridalForm.tsx` (lines 38–68) | Same: wrap `onSubmit` in `useCallback` with `[reset]` dependency. |
| Medium | Carousel handlers recreated every render | `src/components/ReviewCarousel.tsx` (lines 82–92) | Wrap `nextReview`, `prevReview`, and `goToReview` in `useCallback` (deps: `[]` for next/prev, `[currentIndex]` not needed if using functional updates). |
| Low | `BridalForm` has no memoized values | `src/components/BridalForm.tsx` | `today` (line 70) could be `useMemo(() => new Date().toISOString().split('T')[0], [])` to avoid new string each render. |

---

## 3. CLS (Cumulative Layout Shift)

**Goal:** ≤0.1.

### What’s good

- **Hero** (`src/components/Hero.tsx`): `width={800}` `height={600}` — intrinsic dimensions; `className="w-full h-auto object-cover"` keeps aspect ratio.
- **Gallery** (`src/components/Gallery.tsx`): `width={400}` `height={400}` with `aspect-square` container — reserved space.
- **About** (`src/components/About.tsx`): `width={400}` `height={384}` plus fixed-height container (`h-64 sm:h-80 md:h-96`) — space reserved.
- **HomepageTransformations** (`src/components/HomepageTransformations.tsx`): `width={800}` `height={600}` — dimensions set.

### Risks / recommendations

| Priority | Issue | File | Recommendation |
|----------|--------|------|----------------|
| Low | Square widget container | `src/components/SquareBooking.tsx` (line 62) | `min-h-[600px]` reserves space; if widget renders different height, consider a fixed `height` or skeleton to avoid late shift. |

---

## 4. Third-party (Square)

### What’s good

- **Preconnect** (`src/app/layout.tsx` line 99): `<link rel="preconnect" href="https://squareup.com" />` — script is from `squareup.com`.

### Risks / recommendations

| Priority | Issue | File | Recommendation |
|----------|--------|------|----------------|
| High | Booking and widget use `book.squareup.com` | `src/lib/constants.ts` (BOOK_URL), `src/components/SquareBooking.tsx` | Add second preconnect in `src/app/layout.tsx`: `<link rel="preconnect" href="https://book.squareup.com" />` so the booking domain is warmed when user clicks Book or loads /book. |

---

## 5. Bundle and route weight

### What’s good

- **next.config.js** (lines 21–22): `optimizePackageImports: ['lucide-react', 'framer-motion']` — tree-shakes icons and motion.

### Risks / recommendations

| Priority | Issue | File | Recommendation |
|----------|--------|------|----------------|
| High | /bridal loads full form + deps immediately | `src/app/bridal/page.tsx` (line 4), `BridalForm.tsx` | Dynamic-import `BridalForm`: `const BridalForm = dynamic(() => import('@/components/BridalForm'), { ssr: true, loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100 rounded-2xl" /> });` so initial JS is smaller. |
| Medium | /book loads Square widget script and UI together | `src/app/book/page.tsx` (line 4), `SquareBooking.tsx` | Dynamic-import `SquareBooking` with `ssr: false` and a loading placeholder (e.g. `min-h-[600px]` skeleton) so Square script and UI load after route is interactive. |
| Low | Many `'use client'` components on homepage | Various | Acceptable for a small site; if LCP/INP regress, consider lazy-loading below-the-fold sections (e.g. Testimonials, ReviewCarousel) with `next/dynamic`. |

---

## 6. next.config

### What’s good

- **Images:** `formats: ['image/webp', 'image/avif']`, `deviceSizes` / `imageSizes` set, `remotePatterns` for Unsplash/placeholder.
- **Headers:** Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, HSTS).
- **Compression and minification:** `compress: true`, `swcMinify: true`, production `removeConsole`.

### Risks / recommendations

| Priority | Issue | File | Recommendation |
|----------|--------|------|----------------|
| Medium | ETags add header overhead and conditional requests | `next.config.js` | Add `generateEtags: false` to reduce response headers and avoid 304 round-trips; cache via CDN or Cache-Control instead. |
| Low | `optimizePackageImports` in `experimental` | `next.config.js` | In Next 15+ this may move to top-level; keep an eye on release notes. |

---

## 7. Priority summary

| Priority | Action |
|----------|--------|
| **High** | Add `useCallback` for `onSubmit` in `BookingForm` and `BridalForm`. Add `preconnect` for `https://book.squareup.com` in layout. Dynamic-import `BridalForm` on `/bridal`. |
| **Medium** | Add `useCallback` for `nextReview` / `prevReview` / `goToReview` in `ReviewCarousel`. Set `generateEtags: false` in next.config. Dynamic-import `SquareBooking` on `/book`. |
| **Low** | Optional hero image preload; memoize `today` in BridalForm; consider lazy-loading below-fold sections if metrics require it. |

---

## 8. File reference quick list

| File | Relevance |
|------|------------|
| `next.config.js` | Images, headers, `optimizePackageImports`, `generateEtags` |
| `src/app/layout.tsx` | Fonts (display swap), preconnect (Square, book.squareup.com) |
| `src/components/Hero.tsx` | LCP hero image (priority, sizes, dimensions, blur) |
| `src/components/BookingForm.tsx` | INP (useMemo present; useCallback for onSubmit) |
| `src/components/BridalForm.tsx` | INP (useCallback for onSubmit; optional useMemo for today) |
| `src/components/ReviewCarousel.tsx` | INP (useCallback for click handlers) |
| `src/components/Gallery.tsx` | CLS (image dimensions, aspect container) |
| `src/components/About.tsx` | CLS (image dimensions) |
| `src/components/HomepageTransformations.tsx` | CLS (image dimensions) |
| `src/components/SquareBooking.tsx` | Third-party script; CLS (min-height); dynamic import candidate |
| `src/app/bridal/page.tsx` | Bundle (dynamic import BridalForm) |
| `src/app/book/page.tsx` | Bundle (dynamic import SquareBooking) |
| `src/lib/constants.ts` | BOOK_URL (book.squareup.com) |

---

*Audit based on codebase review only. Re-run Lighthouse or PageSpeed Insights once the site is live to validate LCP, INP, and CLS with field data.*
