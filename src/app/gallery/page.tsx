import { Metadata } from 'next';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import { ReviewSectionAnchor } from '@/components/review/ReviewSectionAnchor';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Hair Transformations Gallery | Before After Hair Color Results Milford OH',
  description: 'View stunning before and after hair transformations from Beauty by Raquel Nicole in Milford, OH. See real balayage, highlights, and hair color results from our professional hair services.',
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
    title: 'Hair Transformations Gallery | Before After Hair Color Results Milford OH',
    description: 'View stunning before and after hair transformations from Beauty by Raquel Nicole in Milford, OH. Real balayage, highlights, and hair color results.',
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
        <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-heading text-h1-mobile md:text-h1 font-bold text-text mb-6">
                Hair Services Gallery
              </h1>
              <p className="text-body text-body-mobile md:text-body text-text/80 mb-6">
                Explore our gallery of real client results from a variety of professional hair services in Milford, OH. 
                From balayage and highlights to haircuts and extensions, see the quality and artistry of our work.
              </p>
              <p className="text-body text-body-mobile md:text-body text-text/70 max-w-2xl mx-auto">
                Every photo is from real transformations done at The Beauty Bar in Old Milford. Whether you&apos;re looking for lived-in color, 
                a fresh cut, or bridal styling inspiration, this gallery shows what you can expect when you sit in Raquel&apos;s chair.
              </p>
            </div>
          </div>
        </section>
        </ReviewSectionAnchor>

        {/* Gallery Section */}
        <section aria-labelledby="gallery-results-heading">
          <h2 id="gallery-results-heading" className="text-heading text-2xl sm:text-3xl font-bold text-text text-center mb-8">
            Before &amp; After Results
          </h2>
          <Gallery />
        </section>


      </main>
      <Footer />
      <MobileCTA variant="floating" />
    </>
  );
} 