import { Metadata } from 'next';
import Header from '@/components/Header';
import Map from '@/components/Map';
import TrustBadges from '@/components/TrustBadges';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import { ReviewSectionAnchor } from '@/components/review/ReviewSectionAnchor';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { INSTAGRAM_URL, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Hair Salon Near Me Milford OH | Book Appointment Beauty by Raquel Nicole',
  description: 'Visit Beauty by Raquel Nicole hair salon in Milford, OH. Find our location at 212 Main St, contact information, hours, and book your hair appointment online today. Free parking available.',
  keywords: [
    'hair salon near me',
    'book appointment Milford',
    'Beauty by Raquel Nicole contact',
    'Milford hair salon location',
    'hair salon Milford OH',
    'book hair appointment',
    'hair salon with parking Milford',
    'appointment booking hair salon Milford'
  ],
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: 'Hair Salon Near Me Milford OH | Book Appointment Beauty by Raquel Nicole',
    description: 'Visit Beauty by Raquel Nicole hair salon in Milford, OH. 212 Main St, contact info, hours. Book online. Free parking.',
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
        <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-heading text-h1-mobile md:text-h1 font-bold text-text mb-6">
                Visit Our Hair Salon in Milford, OH
              </h1>
              <p className="text-body text-body-mobile md:text-body text-text/80 mb-4">
                Located in the heart of Milford, OH at 212 Main St with easy access and plenty of free parking.
                Book your hair appointment online for balayage, highlights, extensions, and professional hair services.
              </p>
              <p className="text-body text-body-mobile md:text-body text-text/70 max-w-2xl mx-auto mb-6">
                The Beauty Bar is on Main Street in Old Milford. Free parking is available nearby. First visit? Come a few minutes early so we can get you comfortable and discuss your look.
              </p>
              {/* All inquiries → DMs */}
              <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-primary/30">
                <p className="text-body font-medium text-text">
                  All inquiries go to my DMs — message me on Instagram!
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
              <TrustBadges variant="compact" />
            </div>
          </div>
        </section>
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