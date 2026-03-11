import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WavyDivider from '@/components/WavyDivider';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';

import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Balayage & Highlights Milford OH | Best Hair Stylist Beauty by Raquel Nicole',
  description: 'Professional balayage, highlights, and hair color services in Milford, OH. Best hair stylist Raquel Nicole specializes in balayage, highlights, hand-tied extensions, and hair transformations. Book your appointment today!',
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
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Balayage & Highlights Milford OH | Best Hair Stylist Beauty by Raquel Nicole',
    description: 'Professional balayage, highlights, and hair color services in Milford, OH. Best hair stylist Raquel Nicole specializes in balayage, highlights, hand-tied extensions, and hair transformations.',
    url: SITE_URL,
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <WavyDivider variant="cream-peach" />
        <About />
        <Testimonials />
      </main>
      <Footer />
      <MobileCTA variant="floating" />
    </>
  );
} 