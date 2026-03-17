import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBlock from '@/components/TrustBlock';
import HomepageTransformations from '@/components/HomepageTransformations';
import HomepageServicesStrip from '@/components/HomepageServicesStrip';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import ClosingCTA from '@/components/ClosingCTA';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';

import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Balayage & Highlights Milford OH | Hair Stylist',
  description: 'Professional balayage, highlights, and hair color in Milford, OH. Raquel Nicole — 7+ years, lived-in color, bridal hair, hand-tied extensions at The Beauty Bar. Book today.',
  keywords: [
    'balayage Milford OH',
    'highlights Milford OH',
    'best hair stylist Milford',
    'hair color specialist Milford OH',
    'hand-tied extensions Milford',
    'hair styling Milford OH',
    'hair color Milford OH',
    'beauty salon Milford OH',
    'hair extensions Milford OH',
    'professional hair colorist Milford'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Balayage & Highlights Milford OH | Hair Stylist',
    description: 'Professional balayage, highlights, and hair color in Milford, OH. Raquel Nicole — 7+ years, lived-in color, bridal hair, extensions at The Beauty Bar.',
    url: SITE_URL,
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <TrustBlock />
        <HomepageTransformations />
        <HomepageServicesStrip />
        <About />
        <Testimonials />
        <ClosingCTA />
      </main>
      <Footer />
      <MobileCTA variant="floating" />
    </>
  );
} 