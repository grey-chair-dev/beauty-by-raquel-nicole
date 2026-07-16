import Image from 'next/image';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { BOOK_URL, REVIEW_COUNT, BUSINESS_LOCATION } from '@/lib/constants';
import { ReviewSectionAnchor } from './review/ReviewSectionAnchor';
import SparkleIcon from './SparkleIcon';

const Hero = () => {
  return (
    <ReviewSectionAnchor
      flagIds={['home-hero-headline', 'home-hero-intro', 'home-hero-image']}
      href="/#home"
    >
      <section id="home" className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden section-transition">
        <div
          className="absolute top-0 right-0 -z-10 opacity-20 transform translate-x-1/4 -translate-y-1/4 pointer-events-none"
          aria-hidden
        >
          <Sparkles className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] text-secondary-container sparkle-float" />
        </div>

        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm font-semibold text-on-surface-variant mb-6 max-w-md mx-auto md:mx-0">
                {BUSINESS_LOCATION.salonLabel} · {BUSINESS_LOCATION.area} ·{' '}
                {REVIEW_COUNT}+ five-star reviews
              </p>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold text-primary leading-[1.08] mb-6 tracking-tighter">
                Lived-In Color
                <br />
                <span className="text-secondary">Stay Groovy.</span>
              </h1>

              <p className="text-body-lg text-on-surface-variant max-w-xl mb-8 mx-auto md:mx-0 leading-relaxed">
                Expert balayage, dimensional blonding, and hand-tied extensions at{' '}
                {BUSINESS_LOCATION.salonLabel} in {BUSINESS_LOCATION.area}. Color that grows out
                gracefully, with {REVIEW_COUNT}+ five-star reviews.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center min-h-[52px] px-10 text-lg"
                >
                  Book Appointment
                </a>
                <Link
                  href="/gallery"
                  className="btn-secondary inline-flex items-center justify-center min-h-[52px] px-10 text-lg"
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            <div className="flex-1 relative w-full max-w-xl">
              <div className="retro-frame groovy-shadow">
                <Image
                  src="/images/hero/before-after-optimized.jpg"
                  alt="Before and after hair transformation, lived-in color and dimensional blonding"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 600px"
                  quality={85}
                />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-tertiary-fixed text-on-tertiary-fixed-variant p-5 md:p-6 rounded-full shadow-xl hidden sm:block">
                <p className="font-heading text-lg md:text-xl font-bold leading-tight">
                  Tonal
                  <br />
                  Refresh
                </p>
              </div>
              <SparkleIcon
                className="absolute -top-3 -right-3 text-secondary-container sparkle-float hidden md:block"
                size={32}
              />
            </div>
          </div>
        </div>
      </section>
    </ReviewSectionAnchor>
  );
};

export default Hero;
