/** Canonical site URL for SEO (canonical, Open Graph, schema) */
export const SITE_URL = 'https://beautybyraquelnicole.com';

/** Instagram profile — all inquiries go to her DMs */
export const INSTAGRAM_URL = 'https://www.instagram.com/beauty_by_raquel_nicole/';

export const BOOK_URL =
  'https://book.squareup.com/appointments/dliuybdwgxv87d/location/L81AYV9NYYW19/services?buttonTextColor=FFFFFF&color=D96B3B&locale=en&referrer=so';

/** Single source for schema, Map, Footer — update here only */
export const BUSINESS_HOURS = {
  weekdays: '10:00 AM - 6:00 PM',
  weekdaysLabel: 'Tuesday - Friday',
  saturday: '10:00 AM - 4:00 PM',
  saturdayLabel: 'Saturday',
  closed: 'Sunday - Monday: Closed',
  /** 24h for schema */
  weekdaysOpen: '10:00',
  weekdaysClose: '18:00',
  saturdayOpen: '10:00',
  saturdayClose: '16:00',
} as const;

/** Review count for schema and “X+ reviews” (use verifiable number) */
export const REVIEW_COUNT = 200;

/** Client count for “X+ happy clients” trust copy */
export const CLIENT_COUNT = 500;

/** Urgency CTA — set to null to hide "Only X spots left" messaging */
export const SPOTS_LEFT_THIS_WEEK: number | null = 2;
