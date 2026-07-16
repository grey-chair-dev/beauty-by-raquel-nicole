import Image from 'next/image';
import { Instagram } from 'lucide-react';
import { INSTAGRAM_URL } from '@/lib/constants';
import { BRIDAL_GALLERY_ITEMS } from '@/data/bridal-gallery';

const BridalStylesGallery = () => {
  const hasPhotos = BRIDAL_GALLERY_ITEMS.length > 0;

  return (
    <section aria-labelledby="bridal-styles-heading" className="theme-section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 id="bridal-styles-heading" className="theme-heading text-2xl sm:text-3xl mb-4">
            Bridal Styles
          </h2>
          <p className="text-body text-on-surface-variant">
            {hasPhotos
              ? 'A look at wedding hair Raquel has styled for brides and bridal parties.'
              : 'Raquel is hand-picking her favorite bridal work to feature here. For the latest wedding styles and inspiration, follow her on Instagram.'}
          </p>
        </div>

        {hasPhotos ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {BRIDAL_GALLERY_ITEMS.map((item) => (
              <div key={item.id} className="relative aspect-[4/5] retro-frame groovy-shadow overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-heading font-bold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-xl mx-auto text-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 btn-primary min-h-[48px] px-8"
            >
              <Instagram className="w-5 h-5" aria-hidden />
              View bridal work on Instagram
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default BridalStylesGallery;
