import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';

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
  openGraph: {
    title: 'Balayage & Highlights Milford OH | Best Hair Stylist Beauty by Raquel Nicole',
    description: 'Professional balayage, highlights, and hair color services in Milford, OH. Best hair stylist Raquel Nicole specializes in balayage, highlights, hand-tied extensions, and hair transformations.',
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Testimonials />
      </main>
      <Footer />
      <MobileCTA variant="floating" />
    </>
  );
} 