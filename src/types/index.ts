export interface Service {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  popular: boolean;
  category: 'lashes' | 'brows' | 'other';
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  service: string;
  text: string;
  date: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  category: 'lashes' | 'brows';
}

export interface ContactInfo {
  icon: any;
  title: string;
  value: string;
  href: string | null;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  closed: boolean;
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon: any;
}

export interface Stats {
  icon: any;
  value: string;
  label: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required: boolean;
  placeholder?: string;
  options?: string[];
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  };
}

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
}

export interface AnimationConfig {
  initial: any;
  animate: any;
  transition: any;
  exit?: any;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  bg: string;
}

export interface Typography {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
}

export interface Breakpoint {
  name: string;
  width: number;
}

export interface ImageOptimization {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  quality?: number;
}

export interface MetaTag {
  name: string;
  content: string;
}

export interface OpenGraph {
  title: string;
  description: string;
  url: string;
  siteName: string;
  images: Array<{
    url: string;
    width: number;
    height: number;
    alt: string;
  }>;
  locale: string;
  type: string;
}

export interface TwitterCard {
  card: string;
  title: string;
  description: string;
  images: string[];
}

export interface StructuredData {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    '@type': string;
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification: Array<{
    '@type': string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  sameAs: string[];
} 