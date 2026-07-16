import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MarqueeStrip from '@/components/MarqueeStrip';
import HomepageServicesStrip from '@/components/HomepageServicesStrip';
import HomepageTransformations from '@/components/HomepageTransformations';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import ClosingCTA from '@/components/ClosingCTA';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';

import { SITE_URL, YEARS_EXPERIENCE, SEO_KEYWORDS, SEO_PHRASES } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${SEO_PHRASES.blonding} | Balayage & Extensions`,
  description: `${SEO_PHRASES.hairstylist} Raquel Nicole — ${YEARS_EXPERIENCE} years specializing in blonding, lived-in color, bridal hair, and hand-tied extensions at The Beauty Bar in Old Milford, OH.`,
  keywords: [...SEO_KEYWORDS],
  alternates: { canonical: '/' },
  openGraph: {
    title: `${SEO_PHRASES.hairstylist} | Blonding & Extensions | Raquel Nicole`,
    description: `${SEO_PHRASES.blonding} and ${SEO_PHRASES.extensions} at The Beauty Bar in Old Milford, OH. Lived-in color, bridal hair, and hand-tied extensions.`,
    url: SITE_URL,
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg">
        <Hero />
        <MarqueeStrip />
        <HomepageServicesStrip />
        <HomepageTransformations />
        <About />
        <Testimonials />
        <ClosingCTA />
      </main>
      <Footer />
      <MobileCTA variant="floating" />
    </>
  );
} 