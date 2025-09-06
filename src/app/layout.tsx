import type { Metadata } from 'next';
import { Inter, Playfair_Display, Lato } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
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

export const metadata: Metadata = {
  title: {
    default: 'Beauty by Raquel Nicole | Hair Styling & Color Services',
    template: '%s | Beauty by Raquel Nicole',
  },
  description: 'Professional hair styling, color services, and bridal hair in Milford, OH. Book your appointment today for beautiful hair transformations and wedding hair styling.',
  keywords: ['hair styling', 'hair color', 'beauty salon', 'Milford OH', 'hair extensions', 'blonding', 'bridal hair', 'wedding hair', 'bridal styling'],
  authors: [{ name: 'Raquel Schmid' }],
  creator: 'Beauty by Raquel Nicole',
  publisher: 'Beauty by Raquel Nicole',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://beautybyraquelnicole.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Beauty by Raquel Nicole | Hair Styling & Color Services',
    description: 'Professional hair styling, color services, and bridal hair in Milford, OH. Book your appointment today for beautiful hair transformations and wedding hair styling.',
    url: 'https://beautybyraquelnicole.com',
    siteName: 'Beauty by Raquel Nicole',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Beauty by Raquel Nicole - Professional Hair Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beauty by Raquel Nicole | Hair Styling & Color Services',
    description: 'Professional hair styling and color services in Milford, OH.',
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
    // Add your Google Search Console verification code here
    // To get this code:
    // 1. Go to https://search.google.com/search-console
    // 2. Add your property (beautybyraquelnicole.com)
    // 3. Choose "HTML tag" verification method
    // 4. Copy the content value from the meta tag
    // 5. Replace the line below with your actual code
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "name": "Beauty by Raquel Nicole",
              "description": "Professional hair styling, color services, and bridal hair in Milford, OH",
              "url": "https://beautybyraquelnicole.com",
              "telephone": "+1-513-330-2277",
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
              "openingHours": [
                "Tu-Fr 09:00-18:00",
                "Sa 09:00-16:00"
              ],
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "200"
              },
              "sameAs": [
                "https://www.google.com/localservices/prolist?src=2&scp=CgASABoAKgA%3D&spp=QiUweDg4NDFhYjVlNzU2ZDhmZjk6MHhjYzgwZjhjZmVkZTU3OWRl&slp=QAFSLwgBEikSJwolMHg4ODQxYWI1ZTc1NmQ4ZmY5OjB4Y2M4MGY4Y2ZlZGU1NzlkZSAA&q=beauty%20bar%20milford%20212%20Main%20St&ved=0CAAQ0swJahcKEwioyaa1xe2OAxUAAAAAHQAAAAAQRA"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Hair Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bridal Hair Styling",
                      "description": "Professional wedding hair styling for brides, bridesmaids, and flower girls"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hair Color Services",
                      "description": "Professional hair coloring, highlights, and balayage services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hair Extensions",
                      "description": "Hand-tied hair extensions and maintenance services"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-bg text-text`}>
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#F9E6E6',
              color: '#3C3C3C',
            },
          }}
        />
      </body>
    </html>
  );
} 