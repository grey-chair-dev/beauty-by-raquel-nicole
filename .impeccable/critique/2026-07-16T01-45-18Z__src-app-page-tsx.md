---
target: homepage (src/app/page.tsx)
total_score: 26
p0_count: 0
p1_count: 3
p2_count: 2
timestamp: 2026-07-16T01-45-18Z
slug: src-app-page-tsx
---
# Critique: Homepage (`src/app/page.tsx`)

**Target:** Local Modern Retro homepage (Stitch Option 1). **Note:** Production preview at greychair.io still serves the pre-redesign Coral Glow build; this critique evaluates the uncommitted local implementation.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Booking CTAs are visible; carousel controls and dot indicators lack accessible names |
| 2 | Match System / Real World | 3 | Salon language and Milford context land; Stitch filler ("Join the beauty revolution") feels generic |
| 3 | User Control and Freedom | 3 | Clear nav, mobile menu, external Square booking opens in new tab |
| 4 | Consistency and Standards | 2 | Five CTA labels on one page; inner routes still Coral Glow; DESIGN.md stale |
| 5 | Error Prevention | 3 | n/a for static marketing; forms on other pages not evaluated |
| 6 | Recognition Rather Than Recall | 3 | Services and location visible; pricing requires a separate page visit |
| 7 | Flexibility and Efficiency | 2 | Phone only in footer/mobile bar; desktop header dropped direct call link |
| 8 | Aesthetic and Minimalist Design | 2 | Duplicate before/after, repeated Book CTAs, three-card service grid reads template-adjacent |
| 9 | Error Recovery | 3 | n/a |
| 10 | Help and Documentation | 2 | Hours in footer; Floor 2 / parking not scannable in hero |
| **Total** | | **26/40** | **Acceptable** |

## Anti-Patterns Verdict

**LLM assessment:** Borderline AI/template. The retro frame, groovy shadow, and maroon palette are distinctive and match Raquel's brief better than beige salon templates. But the homepage still carries Stitch scaffolding: three equal service cards (icon + heading + text), a marquee ticker, and marketing copy that could belong to any "groovy" brand. The biggest tell is **CTA label sprawl** and **duplicate hero imagery**, not purple gradients.

**Deterministic scan:** Unavailable (`detect.mjs` exited: bundled detector not found). Manual code scan flagged: `border-l-4` side-stripe on About quote (`About.tsx:52`), `backdrop-blur` on `.seamless-card` and TrustBadges, em dashes in user-facing copy (Impeccable copy ban).

**Browser visualization:** Overlay injection skipped (detector bundle missing; no reliable `detect.js`). Local inspection at `http://localhost:3001/` used instead of production.

## Overall Impression

The Modern Retro direction is the right call for Raquel: warm, committed color, photo-forward, bookable. The homepage communicates specialty faster than the old SEO-heavy hero. The single biggest opportunity is **tightening conversion discipline**: one booking label, fewer repeated CTAs, deploy the redesign, and restyle inner pages so the brand doesn't break on the first click to Services.

## What's Working

1. **Hero clarity ("Lived-In Color / Stay Groovy")** — Grunt Test passes in under 5 seconds. Specialty and location appear above the fold with a strong transformation photo in the retro frame.
2. **Committed palette** — Maroon + cream reads salon-professional, not generic spa beige. Groovy shadow gives memorable personality without gradient text or glass slop.
3. **Mobile booking bar** — Fixed bottom call + book buttons respect thumb reach and Grey Chair's conversion priority.

## Priority Issues

### [P1] CTA label chaos undermines "Book first"
- **Why:** PRODUCT.md mandates a single label: **Book Appointment**. The homepage uses Book Now, Schedule Appointment, Book Appointment, Book Your Spot, and Book Your Appointment. Mobile users hesitate when labels compete.
- **Fix:** Standardize every primary booking control to **Book Appointment**; reserve secondary labels only for Instagram DM or phone.
- **Suggested command:** `/impeccable clarify homepage CTAs`

### [P1] Brand fracture on navigation
- **Why:** Homepage is Modern Retro; `/services`, `/gallery`, `/contact` still use Coral Glow gradients, old typography tokens, and pre-redesign components. First click feels like a different business.
- **Fix:** Propagate tokens and header/footer globally; restyle Services and Gallery first (highest traffic after home).
- **Suggested command:** `/impeccable craft services gallery`

### [P1] Redesign not deployed to preview
- **Why:** Client and Raquel reviewing greychair.io still see the old homepage (verified in browser). Local work has zero user impact until pushed.
- **Fix:** Commit and deploy Modern Retro assets + component changes.
- **Suggested command:** (deploy ops, not Impeccable)

### [P2] Duplicate before/after and testimonial redundancy
- **Why:** Same hero image appears in Hero and Real Results; Sarah M. quote appears in featured block and carousel. Scroll fatigue before footer.
- **Fix:** Use Real Results for a different gallery image or merge sections; dedupe testimonial content.
- **Suggested command:** `/impeccable distill homepage`

### [P2] Impeccable absolute bans in source
- **Why:** `border-l-4` side-stripe on About pull quote; em dashes in hero/services/about copy; decorative `backdrop-blur` on legacy components still used on inner pages.
- **Fix:** Replace side-stripe with full border or background tint; rewrite em dashes; remove blur decoration.
- **Suggested command:** `/impeccable polish About.tsx`

## Persona Red Flags

**Jordan (First-Timer):** Cannot tell which button is "the" booking action. No pricing on homepage; must discover `/services`. Floor 2 entry note buried in paragraph, not a scannable badge.

**Casey (Mobile, distracted):** Marquee animates continuously (no reduced-motion guard on `.sparkle-float` / `.animate-marquee`). Long scroll before social proof if user skips past hero. Good: bottom floating CTA.

**Sam (Accessibility):** Review carousel prev/next buttons expose as unnamed `button` in accessibility tree. Featured testimonial avatar is a letter fallback without meaningful alt. Marquee is `aria-hidden` (good) but duplicate heading "What Our Clients Say" / "More Client Love" structure could confuse heading navigation.

**Instagram Browser (project-specific):** Primary audience compares portfolio quality. Bridal path is a secondary text button below three color cards; no bridal imagery above fold despite being a core specialty.

## Minor Observations

- DESIGN.md still documents Coral Glow; run `/impeccable document` to sync.
- Desktop header removed phone link present in old Header; power users may miss it.
- "hairapist" line is on-brand for Raquel but may need client sign-off for public homepage.
- TrustBlock removed; review count now only in hero subcopy and carousel header.

## Questions to Consider

- What if every primary booking control said exactly the same thing?
- Does Real Results earn its own section if the hero already shows the same transformation?
- What would Services look like if it inherited the retro frame and groovy shadow instead of gradient washes?
