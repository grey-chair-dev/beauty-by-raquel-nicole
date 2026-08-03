import { Metadata } from 'next';
import Header from '@/components/Header';
import About from '@/components/About';
import TrustBadges from '@/components/TrustBadges';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import PageHero from '@/components/PageHero';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

import { SITE_URL, YEARS_EXPERIENCE, SEO_KEYWORDS, SEO_PHRASES, BUSINESS_LOCATION } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${SEO_PHRASES.hairstylist} | Blonding & Extensions | Raquel Nicole`,
  description: `Meet Raquel Nicole, a ${SEO_PHRASES.hairstylist} and ${SEO_PHRASES.blonding} at The Beauty Bar in Old Milford. Hand-tied extensions, balayage, highlights, and ${YEARS_EXPERIENCE} years of experience.`,
  keywords: [...SEO_KEYWORDS, 'Raquel Nicole hair stylist', 'highlights Milford OH'],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: `${SEO_PHRASES.hairstylist} | Raquel Nicole`,
    description: `${SEO_PHRASES.hairstylist} specializing in blonding, balayage, and hand-tied extensions in Old Milford, OH. ${YEARS_EXPERIENCE} years experience.`,
    url: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]} />
      <Header />
      <main className="min-h-screen">
        <PageHero title="Meet Raquel Nicole">
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Licensed hair colorist at {BUSINESS_LOCATION.salonLabel} in {BUSINESS_LOCATION.area}. Balayage,
            blonding, extensions, and cuts with one chair and full attention.
          </p>
        </PageHero>

        <About variant="page" />

        <section className="theme-section-alt pb-24">
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
