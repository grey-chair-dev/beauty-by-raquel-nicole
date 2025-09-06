import { Metadata } from 'next';
import Header from '@/components/Header';
import Map from '@/components/Map';
import TrustBadges from '@/components/TrustBadges';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';

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
  openGraph: {
    title: 'Hair Salon Near Me Milford OH | Book Appointment Beauty by Raquel Nicole',
    description: 'Visit Beauty by Raquel Nicole hair salon in Milford, OH. Find our location at 212 Main St, contact information, hours, and book your hair appointment online today.',
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section for Contact */}
        <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-heading text-h1-mobile md:text-h1 font-bold text-text mb-6">
                Visit Our Hair Salon in Milford, OH
              </h1>
              <p className="text-body text-body-mobile md:text-body text-text/80 mb-8">
                Located in the heart of Milford, OH at 212 Main St with easy access and plenty of free parking. 
                Book your hair appointment online for balayage, highlights, extensions, and professional hair services.
              </p>
              
              {/* Trust Badges */}
              <TrustBadges variant="compact" className="mb-8" />
            </div>
          </div>
        </section>

        {/* Map & Contact Section */}
        <Map />


      </main>
      <Footer />
      <MobileCTA variant="floating" />
    </>
  );
} 