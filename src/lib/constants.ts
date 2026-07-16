/** Canonical site URL for SEO (canonical, Open Graph, schema) */
export const SITE_URL = 'https://beauty-by-raquel-nicole.greychair.io';

/** Instagram profile — all inquiries go to her DMs */
export const INSTAGRAM_URL = 'https://www.instagram.com/beauty_by_raquel_nicole/';

export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=100028195435498';

export const TIKTOK_URL = 'https://www.tiktok.com/@BeautyByRaquelNicole';

/** Schema.org sameAs — keep in sync with footer social links */
export const SOCIAL_SAME_AS = [INSTAGRAM_URL, FACEBOOK_URL, TIKTOK_URL] as const;

export const BOOK_URL =
  'https://book.squareup.com/appointments/dliuybdwgxv87d/location/L81AYV9NYYW19/services?buttonTextColor=FFFFFF&color=FF5C32&locale=en&referrer=so';

/** Single source for address, Map, Footer, schema — update here only */
export const BUSINESS_LOCATION = {
  salonName: 'The Beauty Bar',
  floor: 'Floor 2',
  salonLabel: 'The Beauty Bar, Floor 2',
  street: '212 Main St',
  city: 'Milford',
  state: 'OH',
  zip: '45150',
  area: 'Old Milford',
  compactLine: 'The Beauty Bar, Floor 2 · 212 Main St, Milford, OH 45150',
  entryNote: 'Enter through the middle door on the front of the building.',
  parkingNote: 'Street parking and a few public lots nearby — just a short walk to the salon.',
} as const;

/** Single source for schema, Map, Footer — update here only */
export const BUSINESS_HOURS = {
  schedule: [
    { day: 'Tuesday', hours: '10:00 AM - 6:00 PM', opens: '10:00', closes: '18:00' },
    { day: 'Wednesday', hours: '9:00 AM - 5:00 PM', opens: '09:00', closes: '17:00' },
    { day: 'Thursday', hours: '12:00 PM - 8:00 PM', opens: '12:00', closes: '20:00' },
    { day: 'Friday', hours: '10:00 AM - 6:00 PM', opens: '10:00', closes: '18:00' },
    { day: 'Saturday', hours: '9:00 AM - 3:00 PM', opens: '09:00', closes: '15:00' },
  ],
  closed: 'Sunday - Monday: Closed',
} as const;

/** Review count for schema and “X+ reviews” (use verifiable number) */
export const REVIEW_COUNT = 200;

/** Client count for “X+ happy clients” trust copy */
export const CLIENT_COUNT = 500;

/** Years in profession — single source for bio, about, trust badges */
export const YEARS_EXPERIENCE = 7;

/** Urgency CTA — set to null to hide "Only X spots left" messaging */
export const SPOTS_LEFT_THIS_WEEK: number | null = 2;

/** Preferred SEO phrases — softer than "best hair stylist" */
export const SEO_PHRASES = {
  hairstylist: 'Milford hairstylist',
  blonding: 'Milford blonding hairstylist',
  extensions: 'hair extension stylist Milford',
} as const;

/** Shared meta keywords — update here for site-wide SEO */
export const SEO_KEYWORDS = [
  SEO_PHRASES.hairstylist,
  SEO_PHRASES.blonding,
  SEO_PHRASES.extensions,
  'balayage Milford OH',
  'hand-tied extensions Milford',
  'lived-in color Milford',
  'The Beauty Bar Milford',
  'Old Milford hair salon',
  'bridal hair Milford',
] as const;
