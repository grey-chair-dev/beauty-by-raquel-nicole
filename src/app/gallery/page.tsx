import { Metadata } from 'next';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import PageHero from '@/components/PageHero';
import { ReviewSectionAnchor } from '@/components/review/ReviewSectionAnchor';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { SITE_URL, INSTAGRAM_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Hair Services Gallery | Beauty by Raquel Nicole Milford OH',
  description: 'Browse hair color, cuts, extensions, and styling from Beauty by Raquel Nicole in Milford, OH. Gallery curated with her hand-picked work by service.',
  keywords: [
    'hair transformations',
    'before after hair',
    'hair color results',
    'hair styling gallery',
    'Milford hair salon',
    'balayage before after',
    'highlights before after',
    'hair color transformations',
    'hair extensions before after'
  ],
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: {
    title: 'Hair Services Gallery | Beauty by Raquel Nicole Milford OH',
    description: 'Browse balayage, color, cuts, extensions, and styling from Beauty by Raquel Nicole at The Beauty Bar in Old Milford, OH.',
    url: `${SITE_URL}/gallery`,
  },
};

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Gallery', path: '/gallery' }]} />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section for Gallery */}
        <ReviewSectionAnchor flagIds={['gallery-hero']} href="/gallery">
        <PageHero title="Hair Services Gallery">
          <p className="text-body-lg text-on-surface-variant mb-4">
            Balayage, lived-in color, cuts, extensions, and styling at The Beauty Bar in Old Milford.
          </p>
          <p className="text-body text-on-surface-variant/80">
            For the latest transformations, follow{' '}
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
        </ReviewSectionAnchor>

        {/* Gallery Section */}
        <section aria-labelledby="gallery-results-heading">
          <h2 id="gallery-results-heading" className="font-heading text-2xl sm:text-3xl font-bold text-primary text-center mb-8 pt-8">
            Featured Work
          </h2>
          <Gallery />
        </section>


      </main>
      <Footer />
      <MobileCTA variant="floating" />
    </>
  );
} 