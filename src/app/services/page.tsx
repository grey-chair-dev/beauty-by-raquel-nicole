import { Metadata } from 'next';
import Header from '@/components/Header';
import Services from '@/components/Services';
import TrustBadges from '@/components/TrustBadges';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import PageHero from '@/components/PageHero';
import { ReviewSectionAnchor } from '@/components/review/ReviewSectionAnchor';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { SITE_URL, SEO_KEYWORDS, SEO_PHRASES } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${SEO_PHRASES.blonding} | Extensions & Color Services`,
  description: `${SEO_PHRASES.hairstylist} Raquel Nicole offers balayage, blonding, hand-tied extensions, bridal updos, formal occasion styling, and hair color at The Beauty Bar in Milford, OH. View pricing and book online.`,
  keywords: [...SEO_KEYWORDS, 'highlights Milford OH', 'money piece highlights Milford'],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: `${SEO_PHRASES.extensions} | Balayage & Blonding`,
    description: `${SEO_PHRASES.blonding} and ${SEO_PHRASES.extensions} at The Beauty Bar in Milford, OH. Balayage, highlights, and hand-tied extensions.`,
    url: `${SITE_URL}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]} />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section for Services */}
        <ReviewSectionAnchor flagIds={['services-intro']} href="/services">
        <PageHero title="Our Groovy Services">
          <p className="text-body-lg text-on-surface-variant mb-6">
            Balayage, lived-in color, hand-tied extensions, cuts, bridal updos, and formal occasion
            styling at The Beauty Bar in Old Milford. View pricing and book online.
          </p>
          <TrustBadges variant="compact" />
        </PageHero>
        </ReviewSectionAnchor>

        {/* Services Section */}
        <Services />

        {/* Trust Section */}
        <section className="theme-section-alt">
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