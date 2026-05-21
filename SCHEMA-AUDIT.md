# Schema.org Structured Data Audit — Beauty by Raquel Nicole

**Scope:** `src/app/layout.tsx` (JSON-LD array: WebSite, BeautySalon, Person)  
**Site URL:** `https://beautybyraquelnicole.com`

---

## 1. Validation results by type

| Schema       | Type        | Status | Notes |
|-------------|-------------|--------|--------|
| Block 1     | WebSite     | ⚠️     | actionPlatform uses `http://`; add optional `name` for ReserveAction |
| Block 2     | BeautySalon | ⚠️     | aggregateRating uses string values; add `logo`/`image` for rich results |
| Block 3     | Person      | ✅     | Valid; @id ref to BeautySalon correct |

---

## 2. Validation issues (with severity)

### High

- **aggregateRating — wrong value types**  
  Google expects **numbers** for `ratingValue` and `reviewCount`. Using strings (`"5.0"`, `"200"`, `"5"`) can cause validation warnings or ignored markup.  
  **Fix:** Use numeric types: `"ratingValue": 5.0`, `"reviewCount": 200`, `"bestRating": 5`.

### Medium

- **ReserveAction — actionPlatform URL**  
  `"actionPlatform": "http://schema.org/DesktopWebPlatform"` uses `http://`. Prefer `https://schema.org/DesktopWebPlatform` for consistency and future-proofing.

- **BeautySalon — missing image/logo**  
  LocalBusiness/BeautySalon can show with image in knowledge panels and rich results. No `image` or `logo` is present. Adding at least one improves eligibility for enhanced SERP features.

### Low

- **ReserveAction — optional name**  
  Adding `"name": "Book appointment"` (or similar) makes the action clearer for parsers and users.

- **OfferCatalog — itemListElement order**  
  Schema.org allows `position` on list items for order. Optional; not required for validity.

---

## 3. @id and references

- **WebSite** `publisher`: `{ "@id": "https://beautybyraquelnicole.com/#beautysalon" }` → correctly points to the BeautySalon.
- **BeautySalon** `@id`: `"https://beautybyraquelnicole.com/#beautysalon"` → matches.
- **Person** `worksFor`: `{ "@id": "https://beautybyraquelnicole.com/#beautysalon" }` → correct.

No duplicate @ids; graph is consistent. ✅

---

## 4. openingHoursSpecification

- **Format:** `dayOfWeek`, `opens`, `closes` are present and valid.
- **Values:** `dayOfWeek` uses valid schema.org day names (e.g. `"Tuesday"`, `"Saturday"`); array for Tue–Fri and single value for Saturday are correct.
- **Times:** 24-hour format (`"10:00"`, `"18:00"`, `"16:00"`) is correct.

No changes needed for opening hours. ✅

---

## 5. aggregateRating

- **Required:** `ratingValue`, `reviewCount` — present.
- **Issue:** All values are strings; should be numbers.
- **Recommended:** `bestRating` (and optionally `worstRating`) — you have `bestRating`; ensure it is numeric.
- **Policy:** Ensure `reviewCount` and `ratingValue` reflect real, verifiable reviews (e.g. Google, Facebook). Fabricated ratings can violate Google’s structured data policies.

---

## 6. Missing types / opportunities

| Type            | Recommendation |
|-----------------|----------------|
| **LocalBusiness** | Not needed as a separate block; BeautySalon already inherits from LocalBusiness. |
| **FAQPage**      | Do **not** add; FAQ rich results are restricted (e.g. government/healthcare). |
| **BreadcrumbList** | **Add on inner pages** (about, services, bridal, gallery, contact, book) so each page has a breadcrumb chain (e.g. Home > Services). Omit or keep minimal on the homepage. |
| **logo / image** | **Add** to BeautySalon (and/or WebSite) for better rich result and knowledge panel support. |

---

## 7. Duplicate or conflicting schema

- Single JSON-LD array with three separate objects; no duplicate `@type` or conflicting @ids.
- No other `application/ld+json` blocks found in the codebase. ✅

---

## 8. Fix snippets

### Snippet 1 — Fixes in `layout.tsx` (WebSite + BeautySalon + Person)

Apply these edits inside the existing JSON-LD array:

**1) WebSite potentialAction (ReserveAction):** use `https` and add `name`:

```json
"potentialAction": {
  "@type": "ReserveAction",
  "name": "Book appointment",
  "target": {
    "@type": "EntryPoint",
    "urlTemplate": "https://book.squareup.com/appointments/dliuybdwgxv87d/location/L81AYV9NYYW19/services",
    "actionPlatform": "https://schema.org/DesktopWebPlatform"
  }
}
```

**2) BeautySalon aggregateRating:** use numbers and optional logo:

```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": 5.0,
  "reviewCount": 200,
  "bestRating": 5
},
"logo": "https://beautybyraquelnicole.com/og-image.jpg",
"image": "https://beautybyraquelnicole.com/og-image.jpg"
```

Use your real logo URL if different from the OG image.

---

### Snippet 2 — BreadcrumbList for inner pages (e.g. `src/app/services/page.tsx`)

Add a second `<script type="application/ld+json">` on each inner page (or in a shared layout for those routes) with a BreadcrumbList. Example for `/services`:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beautybyraquelnicole.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://beautybyraquelnicole.com/services" }
  ]
}
```

Repeat the pattern for `/about`, `/bridal`, `/gallery`, `/contact`, `/book` with the appropriate path and name.

---

## Summary

| Category              | Result |
|-----------------------|--------|
| Structure & requireds | ✅ All required properties present for WebSite, BeautySalon, Person. |
| @id / references      | ✅ Correct and consistent. |
| openingHoursSpecification | ✅ Valid format and values. |
| aggregateRating      | ⚠️ Fix: use numeric `ratingValue`, `reviewCount`, `bestRating`. |
| Missing types         | Add **logo**/image to BeautySalon; add **BreadcrumbList** on inner pages only. |
| Duplicates/conflicts  | ✅ None. |

Implementing Snippet 1 in `layout.tsx` and Snippet 2 on inner pages will resolve the issues and add the recommended opportunities.
