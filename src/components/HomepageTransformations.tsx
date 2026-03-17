import Link from 'next/link';
import Image from 'next/image';

const HomepageTransformations = () => {
  return (
    <section id="transformations" className="py-16 sm:py-24 bg-seamless">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-heading text-3xl sm:text-4xl md:text-h2 font-bold text-text mb-4">
            Real Results
          </h2>
          <p className="text-body text-text/80 max-w-lg mx-auto">
            Lived-in color, dimensional blonding, and cuts that grow out beautifully.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-2 ring-primary/30">
            <Image
              src="/images/hero/before-after-optimized.jpg"
              alt="Before and after hair transformation — lived-in color and dimensional blonding"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1.5 rounded-lg bg-white/95 text-text text-sm font-semibold">Before</span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="inline-block px-3 py-1.5 rounded-lg bg-white/95 text-text text-sm font-semibold">After</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-semibold text-lg drop-shadow">Full Blonding Transformation · Lived-In Color</p>
              <p className="text-white/90 text-sm">Hand-painted highlights that grow out soft, not harsh.</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="btn-secondary inline-flex items-center justify-center min-h-[48px] px-8"
            >
              View More Transformations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageTransformations;
