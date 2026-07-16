import { Metadata } from 'next';
import Header from '@/components/Header';
import Map from '@/components/Map';
import TrustBadges from '@/components/TrustBadges';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import PageHero from '@/components/PageHero';
import { ReviewSectionAnchor } from '@/components/review/ReviewSectionAnchor';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { INSTAGRAM_URL, SITE_URL, BUSINESS_LOCATION, SEO_KEYWORDS, SEO_PHRASES } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${SEO_PHRASES.hairstylist} | Contact & Location`,
  description: `Visit ${SEO_PHRASES.hairstylist} Raquel Nicole at ${BUSINESS_LOCATION.salonLabel}, ${BUSINESS_LOCATION.street}, ${BUSINESS_LOCATION.city}, ${BUSINESS_LOCATION.state}. Hours, directions, and online booking.`,
  keywords: [...SEO_KEYWORDS, 'Beauty by Raquel Nicole contact', 'Milford hair salon location'],
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: `${SEO_PHRASES.hairstylist} | Contact | Raquel Nicole`,
    description: `Visit Beauty by Raquel Nicole at ${BUSINESS_LOCATION.salonLabel}, ${BUSINESS_LOCATION.street}, ${BUSINESS_LOCATION.city}, ${BUSINESS_LOCATION.state}. Book online.`,
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]} />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section for Contact */}
        <ReviewSectionAnchor flagIds={['contact-hero']} href="/contact">
        <PageHero title="Visit The Beauty Bar">
          <p className="text-body-lg text-on-surface-variant mb-4">
            {BUSINESS_LOCATION.salonLabel} at {BUSINESS_LOCATION.street} in {BUSINESS_LOCATION.area},{' '}
            {BUSINESS_LOCATION.city}, {BUSINESS_LOCATION.state}.
          </p>
          <p className="text-body text-on-surface-variant/80 mb-6">
            {BUSINESS_LOCATION.entryNote} {BUSINESS_LOCATION.parkingNote}
          </p>
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-surface-container-low border-2 border-primary/20">
            <p className="text-body font-medium text-on-surface-variant">
              All inquiries go to my DMs. Message me on Instagram!
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 shrink-0"
            >
              <span>DM me on Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
          <div className="mt-6">
            <TrustBadges variant="compact" />
          </div>
        </PageHero>
        </ReviewSectionAnchor>

        {/* Map & Contact Section */}
        <section aria-labelledby="location-heading">
          <h2 id="location-heading" className="sr-only">Location &amp; Hours</h2>
          <Map />
        </section>


      </main>
      <Footer />
      <MobileCTA variant="floating" />
    </>
  );
} 