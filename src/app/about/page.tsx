import { Metadata } from 'next';
import Header from '@/components/Header';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import TrustBadges from '@/components/TrustBadges';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';

export const metadata: Metadata = {
  title: 'Best Hair Stylist Milford OH | Professional Hair Colorist Raquel Nicole',
  description: 'Meet Raquel Nicole, the best hair stylist in Milford, OH. Professional hair colorist specializing in balayage, highlights, hand-tied extensions, and hair transformations. 10+ years of experience creating beautiful hair.',
  keywords: [
    'best hair stylist Milford',
    'professional hair colorist Milford OH',
    'hair color specialist Milford',
    'Raquel Nicole hair stylist',
    'Milford hair stylist',
    'professional hair colorist',
    'hair extensions specialist',
    'balayage specialist Milford',
    'highlights specialist Milford'
  ],
  openGraph: {
    title: 'Best Hair Stylist Milford OH | Professional Hair Colorist Raquel Nicole',
    description: 'Meet Raquel Nicole, the best hair stylist in Milford, OH. Professional hair colorist specializing in balayage, highlights, hand-tied extensions, and hair transformations.',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section for About */}
        <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-heading text-h1-mobile md:text-h1 font-bold text-text mb-6">
                Hair Stylist in Milford, OH
              </h1>
              <p className="text-body text-body-mobile md:text-body text-text/80 mb-8">
                Professional hair colorist Raquel Nicole is your trusted hair stylist in Milford, OH with over 6 years of experience 
                creating beautiful balayage, highlights, hand-tied extensions, and hair transformations. 
                Building lasting relationships with clients through personalized care and expert techniques.
              </p>
              
              {/* Trust Badges */}
              <TrustBadges variant="compact" className="mb-8" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <About />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Additional Trust Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <TrustBadges variant="detailed" />
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA variant="floating" />
    </>
  );
} 