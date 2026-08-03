/**
 * Real client reviews only. Copy from Square appointment feedback or quotes Raquel collects.
 * Do not add placeholder or fabricated reviews.
 */
export type ClientReview = {
  id: string;
  name: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  source: 'square';
};

export const CLIENT_REVIEWS: ClientReview[] = [];
