// src/app/page.tsx
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SquareBooking from '@/components/SquareBooking';

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
  openGraph: {
    title: 'Book Hair Appointment Online | Balayage & Highlights Milford OH',
    description: 'Book your hair appointment online with Beauty by Raquel Nicole in Milford, OH. Schedule balayage, highlights, hand-tied extensions, and hair color services.',
  },
};

export default function BookPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-20 bg-seamless">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h1 className="text-heading text-h1-mobile md:text-h1 font-bold text-text mb-6">
                Book Your Hair Appointment Online
              </h1>
              <p className="text-body text-body-mobile md:text-body text-text/90 max-w-2xl mx-auto">
                Ready to transform your look? Book your appointment with professional hair colorist Raquel Nicole 
                for balayage, highlights, hand-tied extensions, and hair color services in Milford, OH.
              </p>
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