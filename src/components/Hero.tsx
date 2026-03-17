import Link from 'next/link';
import Image from 'next/image';
import { BOOK_URL, REVIEW_COUNT, CLIENT_COUNT, SPOTS_LEFT_THIS_WEEK } from '@/lib/constants';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] min-h-[100vh] flex items-center justify-center overflow-hidden section-transition py-16 sm:py-20 md:py-0">
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden />
      <div className="gradient-overlay absolute inset-0" aria-hidden />
      <div className="absolute top-0 right-0 w-[60%] md:w-[50%] h-[70%] rounded-full bg-secondary/20 blur-3xl -translate-y-1/4 translate-x-1/4" aria-hidden />
      <div className="absolute bottom-0 left-0 w-[50%] md:w-[40%] h-[50%] rounded-full bg-primary/25 blur-3xl translate-y-1/4 -translate-x-1/4" aria-hidden />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            {/* Outcome-led headline */}
            <h1 className="text-display text-[28px] leading-tight sm:text-[36px] md:text-[42px] lg:text-h1 font-bold text-text mb-5">
              Lived-In Color &amp; Dimensional Blonding That Actually Grows Out Well
            </h1>

            {/* Definition + keywords for SEO/AI + social proof */}
            <p className="text-body text-lg md:text-xl text-text/90 mb-4">
              Professional balayage and highlights in Milford, OH — lived-in color and dimensional blonding that grow out well.
            </p>
            <p className="text-body text-text/80 mb-8">
              Beauty by Raquel Nicole is a hair salon in Milford, OH at The Beauty Bar, with {REVIEW_COUNT}+ five-star reviews and {CLIENT_COUNT}+ clients. 7+ years · Old Milford.
            </p>

            {/* CTAs: primary + urgency */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center min-h-[52px] px-8 text-lg font-bold shadow-lg hover:shadow-xl transition-shadow"
              >
                Book Appointment
              </a>
              {SPOTS_LEFT_THIS_WEEK != null && (
                <span className="inline-flex items-center justify-center min-h-[52px] px-5 rounded-lg bg-accent/15 text-accent font-semibold border-2 border-accent/40">
                  Only {SPOTS_LEFT_THIS_WEEK} spots left this week
                </span>
              )}
            </div>

            <p className="text-body text-text/70 mt-6 max-w-md mx-auto lg:mx-0">
              The Beauty Bar, 212 Main St. Balayage, extensions, bridal — book your spot.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-lg">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/50">
                <Image
                  src="/images/hero/before-after-optimized.jpg"
                  alt="Hair transformation — before and after lived-in color and dimensional blonding"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxAAPwCdABmX/9k="
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  quality={85}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white font-semibold text-sm">Full blonding transformation · Lived-in color</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
