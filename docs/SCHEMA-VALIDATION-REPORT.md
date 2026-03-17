# Schema.org Structured Data Audit — Beauty by Raquel Nicole

**Method:** Codebase analysis (site returned 503).  
**Scope:** `src/app/layout.tsx` (WebSite, BeautySalon, Person JSON-LD), `src/components/BreadcrumbSchema.tsx`, inner pages.  
**Site URL:** `https://beautybyraquelnicole.com`

---

## 1. Validation results by type

| Schema        | Type        | Status | Notes |
|---------------|-------------|--------|--------|
| Block 1       | WebSite     | ✅     | Required props present; publisher @id; ReserveAction with name + https actionPlatform |
| Block 2       | BeautySalon | ✅     | @id, NAP, geo, openingHoursSpecification, numeric aggregateRating, logo, image, hasOfferCatalog |
| Block 3       | Person      | ✅     | name, jobTitle, worksFor @id, description, sameAs |
| Inner pages   | BreadcrumbList | ✅  | Used on about, book, bridal, contact, gallery, services; absolute URLs via SITE_URL |

---

## 2. Validation issues (by severity)

### Critical — none

No critical issues. Required properties and @id references are correct.

### High — none

- **aggregateRating:** Uses numeric types in code (`ratingValue: 5.0`, `reviewCount: REVIEW_COUNT` with `REVIEW_COUNT = 200` in `constants.ts`). JSON output is valid.
- **Policy reminder:** Keep `REVIEW_COUNT` aligned with verifiable reviews (e.g. Google/Facebook). Unverifiable counts can violate Google’s structured data policies.

### Medium

| Issue | Location | Fix |
|-------|----------|-----|
| **Logo/image URL is SVG** | `layout.tsx` BeautySalon `logo` / `image` | Schema.org allows SVG; some validators and rich result systems prefer a raster (PNG/JPG) for LocalBusiness. Optional: add a 1200×630 PNG/JPG and use it for `logo`/`image` if you want maximum compatibility. |

### Low

| Issue | Location | Fix |
|-------|----------|-----|
| **WebSite has no @id** | `layout.tsx` WebSite block | Optional. Add `"@id": "https://beautybyraquelnicole.com/#website"` if you want explicit graph identity. |
| **Person has no @id** | `layout.tsx` Person block | Optional. Add `"@id": "https://beautybyraquelnicole.com/#person"` if you plan to reference the person elsewhere. |

---

## 3. Required properties and @id references

### WebSite

- **Required:** `name`, `url` — ✅ present.
- **Recommended:** `description`, `publisher`, `potentialAction` — ✅ present.
- **publisher:** `{ "@id": "https://beautybyraquelnicole.com/#beautysalon" }` — ✅ correct reference to BeautySalon.

### BeautySalon (LocalBusiness)

- **Required:** `name`, `address` — ✅ present.
- **Recommended:** `telephone`, `url`, `geo`, `openingHoursSpecification`, `priceRange`, `image`/`logo`, `aggregateRating` — ✅ present.
- **@id:** `https://beautybyraquelnicole.com/#beautysalon` — ✅ unique and referenced by WebSite and Person.

### Person

- **Required:** `name` — ✅ present.
- **Recommended:** `jobTitle`, `worksFor`, `description`, `sameAs` — ✅ present.
- **worksFor:** `{ "@id": "https://beautybyraquelnicole.com/#beautysalon" }` — ✅ correct.

### ReserveAction (on WebSite)

- **target:** `EntryPoint` with `urlTemplate` — ✅ present.
- **name:** `"Book appointment"` — ✅ present.
- **actionPlatform:** `"https://schema.org/DesktopWebPlatform"` — ✅ https.

### openingHoursSpecification

- **Format:** `dayOfWeek`, `opens`, `closes` — ✅ valid.
- **Values:** Tue–Fri and Saturday; 24h times (`10:00`, `18:00`, `16:00`) from `BUSINESS_HOURS` — ✅ correct.
- **Closed days:** Sunday/Monday omitted (no spec) — ✅ correct.

### aggregateRating

- **Types:** `ratingValue: 5.0`, `reviewCount: REVIEW_COUNT` (200), `bestRating: 5` — ✅ numeric in source; JSON output valid.
- **Required:** `ratingValue`, `reviewCount` — ✅ present.

### Logo and image

- **BeautySalon:** `logo` and `image` set to `https://beautybyraquelnicole.com/og-image.svg` — ✅ present; optional improvement: use raster URL for broader rich-result support.

---

## 4. BreadcrumbSchema on inner pages

| Page     | BreadcrumbSchema usage | Absolute URLs |
|----------|------------------------|---------------|
| Home     | Not used (correct)     | —             |
| About    | ✅ Home → About        | ✅ `SITE_URL` + path |
| Book     | ✅ Home → Book         | ✅ |
| Bridal   | ✅ Home → Bridal Hair  | ✅ |
| Contact  | ✅ Home → Contact      | ✅ |
| Gallery  | ✅ Home → Gallery      | ✅ |
| Services | ✅ Home → Services     | ✅ |

**BreadcrumbSchema.tsx:** Uses `@context`, `@type: BreadcrumbList`, `itemListElement` with `ListItem` (`position`, `name`, `item`). `item` is `${SITE_URL}${item.path === '/' ? '' : item.path}` — absolute URLs, correct.

No validation issues found for BreadcrumbList.

---

## 5. Missing opportunities

| Opportunity | Priority | Notes |
|-------------|----------|--------|
| **Raster logo/image** | Low | Add PNG/JPG (e.g. 1200×630) for LocalBusiness and use in `logo`/`image` if targeting all validators/rich results. |
| **WebSite @id** | Low | Optional for clearer graph identity. |
| **Person @id** | Low | Optional if you later reference the person (e.g. author, owner). |
| **FAQPage** | Do not add | FAQ rich results are restricted (e.g. government/healthcare). |

---

## 6. Recommended fixes (snippets)

### 6.1 Optional: WebSite and Person @id (layout.tsx)

Add stable @ids if you want a more explicit graph:

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://beautybyraquelnicole.com/#website",
  "name": "Beauty by Raquel Nicole",
  ...
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://beautybyraquelnicole.com/#person",
  "name": "Raquel Schmid",
  ...
}
```

### 6.2 Optional: Raster logo/image for BeautySalon

If you add `og-image.png` (or similar) at 1200×630:

```json
"logo": "https://beautybyraquelnicole.com/og-image.png",
"image": "https://beautybyraquelnicole.com/og-image.png"
```

Keep SVG for OG/social if desired; use PNG/JPG only in schema if you want maximum compatibility.

---

## 7. Summary

| Category                    | Result |
|----------------------------|--------|
| Structure & required props | ✅ WebSite, BeautySalon, Person have required and key recommended properties. |
| @id / references           | ✅ BeautySalon @id consistent; WebSite publisher and Person worksFor reference it. |
| openingHoursSpecification  | ✅ Valid format and values. |
| aggregateRating            | ✅ Numeric values in code and output. |
| ReserveAction              | ✅ name, target.urlTemplate, actionPlatform (https). |
| logo / image               | ✅ Present (SVG); optional upgrade to raster. |
| BreadcrumbList             | ✅ All 6 inner pages; absolute URLs; valid ListItem structure. |
| Duplicates/conflicts       | ✅ None. |

---

## 8. Schema implementation score: **88 / 100**

| Criterion                | Points | Score | Notes |
|--------------------------|--------|--------|--------|
| Required properties      | 25     | 25    | All present for WebSite, BeautySalon, Person. |
| @id and graph consistency| 20     | 20    | BeautySalon @id; correct publisher and worksFor refs. |
| openingHoursSpecification| 10     | 10    | Valid structure and 24h times. |
| aggregateRating          | 10     | 10    | Numeric; verifiable count is a policy concern, not schema validity. |
| ReserveAction            | 10     | 10    | name, urlTemplate, https actionPlatform. |
| logo / image             | 10     | 8     | Present; SVG may be less ideal than raster for some systems. |
| BreadcrumbList           | 15     | 15    | Used on all inner pages with correct, absolute URLs. |
| **Total**                | **100**| **88** | |

**Verdict:** Implementation is strong and valid. Remaining points are optional (raster logo/image, optional @ids) and policy (keeping review count verifiable). No blocking validation issues; safe for production from a schema perspective.
