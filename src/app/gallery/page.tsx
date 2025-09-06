import { Metadata } from 'next';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';

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
  openGraph: {
    title: 'Hair Transformations Gallery | Before After Hair Color Results Milford OH',
    description: 'View stunning before and after hair transformations from Beauty by Raquel Nicole in Milford, OH. See real balayage, highlights, and hair color results.',
  },
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section for Gallery */}
        <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-heading text-h1-mobile md:text-h1 font-bold text-text mb-6">
                Hair Services Gallery
              </h1>
              <p className="text-body text-body-mobile md:text-body text-text/80 mb-8">
                Explore our gallery of real client results from a variety of professional hair services in Milford, OH. 
                From balayage and highlights to haircuts and extensions, see the quality and artistry of our work.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <Gallery />


      </main>
      <Footer />
      <MobileCTA variant="floating" />
    </>
  );
} 