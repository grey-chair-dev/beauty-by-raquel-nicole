import { Metadata } from 'next';
import Header from '@/components/Header';
import Services from '@/components/Services';
import TrustBadges from '@/components/TrustBadges';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';

export const metadata: Metadata = {
  title: 'Balayage, Highlights & Hair Extensions Milford OH | Professional Hair Colorist',
  description: 'Professional balayage, highlights, hand-tied extensions, and hair color services in Milford, OH. Expert hair colorist Raquel Nicole specializes in balayage, highlights, money piece highlights, and hair transformations. View pricing and book today.',
  keywords: [
    'balayage Milford OH',
    'highlights Milford OH',
    'hand-tied extensions Milford',
    'hair color specialist Milford OH',
    'money piece highlights Milford',
    'professional hair colorist Milford',
    'hair services Milford OH',
    'hair color services',
    'hair extensions',
    'balayage',
    'highlights',
    'haircuts',
    'styling'
  ],
  openGraph: {
    title: 'Balayage, Highlights & Hair Extensions Milford OH | Professional Hair Colorist',
    description: 'Professional balayage, highlights, hand-tied extensions, and hair color services in Milford, OH. Expert hair colorist Raquel Nicole specializes in balayage, highlights, money piece highlights, and hair transformations.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section for Services */}
        <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-heading text-h1-mobile md:text-h1 font-bold text-text mb-6">
                Professional Balayage, Highlights & Hair Extensions
              </h1>
              <p className="text-body text-body-mobile md:text-body text-text/80 mb-8">
                From stunning balayage and highlights to precision cuts and hand-tied extensions, 
                expert hair colorist Raquel Nicole offers a complete range of professional hair services 
                tailored to enhance your natural beauty in Milford, OH.
              </p>
              
              {/* Trust Badges */}
              <TrustBadges variant="compact" className="mb-8" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <Services />

        {/* Trust Section */}
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