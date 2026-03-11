import type { Metadata } from 'next';
import { DM_Serif_Display, Lato, Dancing_Script } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { SITE_URL } from '@/lib/constants';

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
  preload: true,
});
const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
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
  description: 'Professional hair stylist in Milford, OH. Balayage, highlights, lived-in color, bridal hair & hand-tied extensions at The Beauty Bar. Book with Raquel Nicole — 7+ years experience. DM for inquiries.',
  keywords: ['hair stylist Milford OH', 'balayage Milford', 'highlights Milford OH', 'hair color specialist', 'Old Milford hair', 'The Beauty Bar Milford', 'bridal hair', 'hand-tied extensions', 'lived-in color', 'hair colorist near me'],
  authors: [{ name: 'Raquel Schmid', url: SITE_URL }],
  creator: 'Beauty by Raquel Nicole',
  publisher: 'Beauty by Raquel Nicole',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Beauty by Raquel Nicole | Hair Stylist & Color Specialist Milford OH',
    description: 'Professional hair stylist in Milford, OH. Balayage, highlights, bridal hair & extensions at The Beauty Bar. Book with Raquel Nicole.',
    url: SITE_URL,
    siteName: 'Beauty by Raquel Nicole',
    images: [
      {
        url: '/og-image.jpg',
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
    title: 'Beauty by Raquel Nicole | Hair Stylist Milford OH',
    description: 'Professional hair stylist in Milford, OH. Balayage, highlights, bridal hair. Book today.',
    images: ['/og-image.jpg'],
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
    <html lang="en" className={`${dmSerif.variable} ${lato.variable} ${dancingScript.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://book.squareup.com/appointments/dliuybdwgxv87d/location/L81AYV9NYYW19/services",
                    "actionPlatform": "http://schema.org/DesktopWebPlatform"
                  }
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "BeautySalon",
                "@id": `${SITE_URL}/#beautysalon`,
                "name": "Beauty by Raquel Nicole",
                "description": "Professional hair styling, lived-in color, dimensional blonding, bridal hair, and hand-tied extensions in Old Milford, OH. Located at The Beauty Bar.",
                "url": SITE_URL,
                "telephone": "+1-513-330-2277",
                "email": "beautybyraquelnicole@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "212 Main St",
                  "addressLocality": "Milford",
                  "addressRegion": "OH",
                  "postalCode": "45150",
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 39.1756789,
                  "longitude": -84.2956789
                },
                "openingHoursSpecification": [
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "10:00", "closes": "18:00" },
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "16:00" }
                ],
                "priceRange": "$$",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "200",
                  "bestRating": "5"
                },
                "sameAs": [
                  "https://www.instagram.com/beauty_by_raquel_nicole/",
                  "https://www.facebook.com/profile.php?id=100028195435498"
                ],
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
                "description": "Professional hair stylist with 7+ years experience. Specializes in balayage, highlights, bridal hair, and hand-tied extensions in Milford, OH.",
                "sameAs": ["https://www.instagram.com/beauty_by_raquel_nicole/", "https://www.facebook.com/profile.php?id=100028195435498"]
              }
            ])
          }}
        />
      </head>
      <body className={`${lato.className} bg-bg text-text`}>
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#F4D1C7',
              color: '#3D3632',
            },
          }}
        />
      </body>
    </html>
  );
} 