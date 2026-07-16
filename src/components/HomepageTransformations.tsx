import Link from 'next/link';
import Image from 'next/image';

const PREVIEW_IMAGES = [
  {
    src: '/gallery/money-piece-foils/money-piece-foils.png',
    alt: 'Money piece face frame foils hair color result',
    label: 'Face frame foils',
  },
  {
    src: '/gallery/toner-gloss/toner-gloss.png',
    alt: 'Toner and gloss with fresh haircut',
    label: 'Toner & gloss',
  },
  {
    src: '/gallery/all-over-color/all-over-color.png',
    alt: 'All over color transformation with haircut',
    label: 'All-over color',
  },
];

const HomepageTransformations = () => {
  return (
    <section id="transformations" className="py-20 md:py-28 bg-primary-fixed/30 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-4">
            Real Results
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-lg mx-auto">
            Lived-in color, dimensional blonding, and cuts that grow out beautifully.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PREVIEW_IMAGES.map((item) => (
            <div key={item.src} className="retro-frame groovy-shadow">
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={500}
                className="w-full h-auto object-cover aspect-[4/5]"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <p className="text-center font-label text-sm font-semibold text-primary py-3 bg-bg">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="btn-secondary inline-flex items-center justify-center min-h-[48px] px-8"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageTransformations;
