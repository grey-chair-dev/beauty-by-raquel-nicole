import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SquareBooking from '@/components/SquareBooking';
import PageHero from '@/components/PageHero';
import { ReviewSectionAnchor } from '@/components/review/ReviewSectionAnchor';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import {
  SITE_URL,
  INSTAGRAM_URL,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
} from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Book Hair Appointment Online | Balayage & Highlights Milford OH',
  description:
    'Book your hair appointment online with Beauty by Raquel Nicole in Milford, OH. Schedule balayage, highlights, hand-tied extensions, and hair color services. Professional hair colorist available for consultations.',
  keywords: [
    'book hair appointment',
    'hair appointment booking',
    'online hair appointment',
    'book appointment Milford',
    'hair salon appointment online',
    'balayage appointment booking',
    'highlights appointment booking',
    'hair color consultation booking',
    'professional hair colorist appointment',
  ],
  alternates: { canonical: `${SITE_URL}/book` },
  openGraph: {
    title: 'Book Hair Appointment Online | Balayage & Highlights Milford OH',
    description:
      'Book your hair appointment online with Beauty by Raquel Nicole in Milford, OH. Schedule balayage, highlights, extensions, and hair color.',
    url: `${SITE_URL}/book`,
  },
};

export default function BookPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Book', path: '/book' }]} />
      <Header />
      <main className="min-h-screen">
        <ReviewSectionAnchor flagIds={['book-page', 'site-booking']} href="/book">
          <PageHero title="Book Your Appointment">
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
              Ready to transform your look? Book balayage, highlights, hand-tied extensions, and color with Raquel
              Nicole at The Beauty Bar in Milford, OH.
            </p>
            <div className="max-w-2xl mx-auto theme-card p-6 text-left bg-primary-fixed/30">
              <h2 className="theme-heading text-lg mb-3">What to expect</h2>
              <p className="text-body text-on-surface-variant mb-4">
                Choose your service and preferred date and time below. You&apos;ll get a confirmation once your
                appointment is set. Need to reschedule? Message me on Instagram. New clients: mention any allergies or
                sensitivities so we can plan your service.
              </p>
              <p className="text-body text-on-surface-variant">
                <strong className="text-on-surface">Questions before you book?</strong> Text or call{' '}
                <a href={`tel:${BUSINESS_PHONE_TEL}`} className="text-primary font-semibold hover:text-accentDark">
                  {BUSINESS_PHONE_DISPLAY}
                </a>
                , or{' '}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-accentDark"
                >
                  DM me on Instagram
                </a>
                . Online booking through Square is the fastest way to grab a spot.
              </p>
            </div>
          </PageHero>

          <section className="theme-section-alt pb-24">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto theme-card p-6 md:p-8">
                <SquareBooking />
              </div>
            </div>
          </section>
        </ReviewSectionAnchor>
      </main>
      <Footer />
    </>
  );
}
