import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SquareBooking from '@/components/SquareBooking';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Book Hair Appointment Online | Balayage & Highlights Milford OH',
  description: 'Book your hair appointment online with Beauty by Raquel Nicole in Milford, OH. Schedule balayage, highlights, hand-tied extensions, and hair color services. Professional hair colorist available for consultations.',
  keywords: [
    'book hair appointment',
    'hair appointment booking',
    'online hair appointment',
    'book appointment Milford',
    'hair salon appointment online',
    'balayage appointment booking',
    'highlights appointment booking',
    'hair color consultation booking',
    'professional hair colorist appointment'
  ],
  alternates: { canonical: `${SITE_URL}/book` },
  openGraph: {
    title: 'Book Hair Appointment Online | Balayage & Highlights Milford OH',
    description: 'Book your hair appointment online with Beauty by Raquel Nicole in Milford, OH. Schedule balayage, highlights, extensions, and hair color.',
    url: `${SITE_URL}/book`,
  },
};

export default function BookPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Book', path: '/book' }]} />
      <Header />
      <main className="min-h-screen">
        <section className="py-20 bg-seamless">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h1 className="text-heading text-h1-mobile md:text-h1 font-bold text-text mb-6">
                Book Your Hair Appointment Online
              </h1>
              <p className="text-body text-body-mobile md:text-body text-text/90 max-w-2xl mx-auto mb-8">
                Ready to transform your look? Book your appointment with professional hair colorist Raquel Nicole 
                for balayage, highlights, hand-tied extensions, and hair color services in Milford, OH.
              </p>
              <div className="max-w-2xl mx-auto mb-10 p-6 rounded-2xl bg-white/80 border border-primary/20 text-left">
                <h2 className="text-heading text-xl font-semibold text-text mb-3">What to expect</h2>
                <p className="text-body text-text/80 mb-2">
                  Choose your service and preferred date and time below. You&apos;ll get a confirmation once your appointment is set. 
                  Need to reschedule? Message me on Instagram — I&apos;m happy to help. New clients: mention any allergies or sensitivities so we can plan your service.
                </p>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <SquareBooking />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}