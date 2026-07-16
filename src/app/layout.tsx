import type { Metadata } from 'next';
import { Bricolage_Grotesque, DM_Sans, Space_Grotesk, Dancing_Script } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { SiteShell } from '@/components/SiteShell';
import { SITE_URL, BUSINESS_HOURS, REVIEW_COUNT, YEARS_EXPERIENCE, BUSINESS_LOCATION, SOCIAL_SAME_AS, SEO_KEYWORDS, SEO_PHRASES } from '@/lib/constants';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
  preload: true,
});
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  preload: true,
});
const spaceGrotesk = Space_Grotesk({
  weight: ['600'],
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  preload: true,
});
const dancingScript = Dancing_Script({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
  preload: true,
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: {
    default: 'Beauty by Raquel Nicole | Hair Stylist & Color Specialist Milford OH',
    template: '%s | Beauty by Raquel Nicole',
  },
  description: `${SEO_PHRASES.hairstylist} specializing in blonding, balayage, and hand-tied extensions at The Beauty Bar in Old Milford, OH. Book with Raquel Nicole — ${YEARS_EXPERIENCE} years experience. DM for inquiries.`,
  keywords: [...SEO_KEYWORDS],
  authors: [{ name: 'Raquel Schmid', url: SITE_URL }],
  creator: 'Beauty by Raquel Nicole',
  publisher: 'Beauty by Raquel Nicole',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `Beauty by Raquel Nicole | ${SEO_PHRASES.hairstylist}`,
    description: `${SEO_PHRASES.blonding} and ${SEO_PHRASES.extensions} at The Beauty Bar in Old Milford, OH. Balayage, highlights, bridal hair & extensions. Book with Raquel Nicole.`,
    url: SITE_URL,
    siteName: 'Beauty by Raquel Nicole',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Beauty by Raquel Nicole - Hair Stylist & Color Specialist in Milford, OH',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Beauty by Raquel Nicole | ${SEO_PHRASES.hairstylist}`,
    description: `${SEO_PHRASES.hairstylist} in Milford, OH. Blonding, balayage, highlights, and hand-tied extensions at The Beauty Bar.`,
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable} ${spaceGrotesk.variable} ${dancingScript.variable}`}>
      <head>
        <link rel="preconnect" href="https://squareup.com" />
        <link rel="preconnect" href="https://book.squareup.com" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Schema: WebSite + BeautySalon + Person (E-E-A-T) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Beauty by Raquel Nicole",
                "url": SITE_URL,
                "description": "Professional hair stylist in Milford, OH. Balayage, highlights, bridal hair, hand-tied extensions.",
                "publisher": { "@id": `${SITE_URL}/#beautysalon` },
                "potentialAction": {
                  "@type": "ReserveAction",
                  "name": "Book appointment",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://book.squareup.com/appointments/dliuybdwgxv87d/location/L81AYV9NYYW19/services",
                    "actionPlatform": "https://schema.org/DesktopWebPlatform"
                  }
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "BeautySalon",
                "@id": `${SITE_URL}/#beautysalon`,
                "name": "Beauty by Raquel Nicole",
                "description": `Professional hair styling, lived-in color, dimensional blonding, bridal hair, and hand-tied extensions in ${BUSINESS_LOCATION.area}, OH. Located at ${BUSINESS_LOCATION.salonLabel}. ${BUSINESS_LOCATION.entryNote}`,
                "url": SITE_URL,
                "telephone": "+1-513-330-2277",
                "email": "beautybyraquelnicole@gmail.com",
                "floorLevel": "2",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": BUSINESS_LOCATION.street,
                  "addressLocality": BUSINESS_LOCATION.city,
                  "addressRegion": BUSINESS_LOCATION.state,
                  "postalCode": BUSINESS_LOCATION.zip,
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 39.1756789,
                  "longitude": -84.2956789
                },
                "openingHoursSpecification": BUSINESS_HOURS.schedule.map(({ day, opens, closes }) => ({
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": day,
                  "opens": opens,
                  "closes": closes,
                })),
                "priceRange": "$$",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": 5.0,
                  "reviewCount": REVIEW_COUNT,
                  "bestRating": 5
                },
                "logo": `${SITE_URL}/og-image.svg`,
                "image": `${SITE_URL}/og-image.svg`,
                "sameAs": [...SOCIAL_SAME_AS],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Hair Services",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Balayage & Highlights", "description": "Lived-in color, dimensional blonding, money piece" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bridal Hair", "description": "Wedding hair styling for brides, bridesmaids, flower girls" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hand-Tied Extensions", "description": "Hair extensions and move-ups" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Haircuts & Styling", "description": "Chic bobs, long layers, blowouts" } }
                  ]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Raquel Schmid",
                "jobTitle": "Hair Stylist & Color Specialist",
                "worksFor": { "@id": `${SITE_URL}/#beautysalon` },
                "description": `Professional hair stylist with ${YEARS_EXPERIENCE} years experience. Specializes in balayage, highlights, bridal hair, and hand-tied extensions in Milford, OH.`,
                "sameAs": [...SOCIAL_SAME_AS]
              }
            ])
          }}
        />
      </head>
      <body className={`${dmSans.className} bg-bg text-text selection:bg-secondary-container selection:text-on-secondary-container`}>
        <SiteShell>{children}</SiteShell>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#ffdbd1',
              color: '#1d1c15',
            },
          }}
        />
      </body>
    </html>
  );
} 