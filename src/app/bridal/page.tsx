import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BridalForm from '@/components/BridalForm';
import MobileCTA from '@/components/MobileCTA';
import PageHero from '@/components/PageHero';
import { ReviewSectionAnchor } from '@/components/review/ReviewSectionAnchor';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import BridalStylesGallery from '@/components/BridalStylesGallery';
import { SITE_URL, INSTAGRAM_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Bridal Hair Services Milford OH | Wedding Hair Styling',
  description: 'On-site bridal hair in Milford, OH and Greater Cincinnati. Required trial, parties of 4+, updos and styling for brides and bridal parties. Inquire with Raquel Nicole.',
  keywords: [
    'bridal hair Milford OH',
    'wedding hair styling',
    'bride hair services',
    'bridesmaid hair',
    'flower girl hair',
    'wedding hair appointment',
    'bridal hair consultation',
    'wedding hair stylist Milford'
  ],
  alternates: { canonical: `${SITE_URL}/bridal` },
  openGraph: {
    title: 'Bridal Hair Services Milford OH | Wedding Hair Styling',
    description: 'On-site wedding hair in Milford, OH. Trial required, 4+ guest minimum. Brides, bridal party, and children\'s styling with Raquel Nicole.',
    url: `${SITE_URL}/bridal`,
  },
};

export default function BridalPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Bridal Hair', path: '/bridal' }]} />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <ReviewSectionAnchor flagIds={['bridal-intro']} href="/bridal">
        <PageHero title="Bridal Hair Services">
          <p className="text-body-lg text-on-surface-variant mb-4">
            On-site wedding hair for you and your party at your venue or getting-ready location
            across Greater Cincinnati and Northern Kentucky. Trial required at least one month
            before your wedding, with a 4-person minimum including the bride.
          </p>
          <p className="text-body text-on-surface-variant/80">
            Browse styles below or follow{' '}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              @beauty_by_raquel_nicole
            </a>{' '}
            on Instagram.
          </p>
        </PageHero>

        <BridalStylesGallery />
        </ReviewSectionAnchor>

        {/* Rates Section */}
        <ReviewSectionAnchor flagIds={['bridal-rates', 'bridal-policies']} href="/bridal">
        <section className="py-16 bg-surface">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-heading text-3xl font-bold text-text mb-6">
                  Bridal Hair Rates
                </h2>
                <p className="text-body text-text/80">
                  Professional wedding hair styling for your special day
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gradient-to-br from-primary/25 to-secondary/25 rounded-2xl p-8 text-center">
                  <h3 className="text-heading text-2xl font-bold text-text mb-4">Bride</h3>
                  <div className="text-3xl font-bold text-accent mb-4">$95</div>
                  <p className="text-body text-text/80">
                    Wedding day styling
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary/25 to-secondary/25 rounded-2xl p-8 text-center">
                  <h3 className="text-heading text-2xl font-bold text-text mb-4">Bridal Party &amp; Adults</h3>
                  <div className="text-3xl font-bold text-accent mb-4">$80</div>
                  <p className="text-body text-text/80">
                    Bridesmaids, family, and other adult guests
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary/25 to-secondary/25 rounded-2xl p-8 text-center">
                  <h3 className="text-heading text-2xl font-bold text-text mb-4">Children (8 &amp; under)</h3>
                  <div className="text-3xl font-bold text-accent mb-4">$45</div>
                  <p className="text-body text-text/80">
                    Flower girls and younger guests
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary/25 to-secondary/25 rounded-2xl p-8 text-center">
                  <h3 className="text-heading text-2xl font-bold text-text mb-4">Bridal Trial</h3>
                  <div className="text-3xl font-bold text-accent mb-4">$75</div>
                  <p className="text-body text-text/80">
                    Required at least 1 month before your wedding
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-accent/10 rounded-2xl p-8">
                <h3 className="text-heading text-xl font-bold text-text mb-4">Booking &amp; Policies</h3>
                <div className="space-y-4 text-body text-text/90">
                  <p>
                    <strong>Deposit &amp; contract:</strong> A deposit and signed contract are required to secure your wedding date — a professional, organized process from inquiry through day-of.
                  </p>
                  <p>
                    <strong>Minimum party size:</strong> 4 people minimum, including the bride.
                  </p>
                  <p>
                    <strong>Bridal trial:</strong> A trial is required at least 1 month before the wedding ($75). It makes day-of styling smoother for you and for me.
                  </p>
                  <p>
                    <strong>Travel fee:</strong> On-site services at your venue or location are available. Travel is $50 or $2 per mile, whichever is greater — for example, 30 miles is $60. Distances over 25 miles are billed at $2 per mile.
                  </p>
                  <p>
                    <strong>Consultation:</strong> We&apos;ll discuss your vision, timeline, and wedding details when you inquire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </ReviewSectionAnchor>

        {/* Contact Form Section */}
        <ReviewSectionAnchor flagIds={['bridal-form']} href="/bridal">
        <section className="py-20 bg-seamless">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-heading text-3xl font-bold text-text mb-6">
                  Inquire About Bridal Hair
                </h2>
                <p className="text-body text-text/90">
                  Please fill out this form to inquire about bridal hair services. 
                  Your responses will help me tailor the perfect look to your needs.
                </p>
              </div>
              
              <BridalForm />
            </div>
          </div>
        </section>
        </ReviewSectionAnchor>
      </main>
      <Footer />
      <MobileCTA variant="floating" />
    </>
  );
} 