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
        <section className="theme-section-alt">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="theme-heading text-3xl mb-4">Bridal Hair Rates</h2>
                <p className="text-body text-on-surface-variant">
                  Professional wedding hair styling for your special day
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Bride', price: '$95', note: 'Wedding day styling' },
                  { title: 'Bridal Party & Adults', price: '$80', note: 'Bridesmaids, family, and other adult guests' },
                  { title: 'Children (8 & under)', price: '$45', note: 'Flower girls and younger guests' },
                  { title: 'Bridal Trial', price: '$75', note: 'Required at least 1 month before your wedding' },
                ].map((rate) => (
                  <div key={rate.title} className="theme-card p-6 text-center bg-primary-fixed/35">
                    <h3 className="font-heading font-bold text-on-surface text-lg mb-3">{rate.title}</h3>
                    <div className="text-3xl font-bold text-primary mb-3">{rate.price}</div>
                    <p className="text-body text-on-surface-variant text-sm">{rate.note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 theme-card p-6 md:p-8 bg-primary-fixed/25">
                <h3 className="theme-heading text-xl mb-4">Booking & Policies</h3>
                <div className="space-y-4 text-body text-on-surface-variant">
                  <p>
                    <strong className="text-on-surface">Deposit & contract:</strong> A deposit and signed contract are
                    required to secure your wedding date. Organized from inquiry through day-of.
                  </p>
                  <p>
                    <strong className="text-on-surface">Minimum party size:</strong> 4 people minimum, including the
                    bride.
                  </p>
                  <p>
                    <strong className="text-on-surface">Bridal trial:</strong> Required at least 1 month before the
                    wedding ($75). It makes day-of styling smoother for you and for me.
                  </p>
                  <p>
                    <strong className="text-on-surface">Travel fee:</strong> On-site services at your venue or location
                    are available. Travel is $50 or $2 per mile, whichever is greater. For example, 30 miles is $60.
                    Distances over 25 miles are billed at $2 per mile.
                  </p>
                  <p>
                    <strong className="text-on-surface">Consultation:</strong> We&apos;ll discuss your vision,
                    timeline, and wedding details when you inquire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </ReviewSectionAnchor>

        {/* Contact Form Section */}
        <ReviewSectionAnchor flagIds={['bridal-form']} href="/bridal">
        <section className="theme-section pb-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="theme-heading text-3xl mb-4">Inquire About Bridal Hair</h2>
                <p className="text-body text-on-surface-variant max-w-2xl mx-auto">
                  Fill out this form to inquire about bridal hair services. Your responses help me tailor the perfect
                  look to your needs.
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