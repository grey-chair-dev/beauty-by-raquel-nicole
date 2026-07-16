import { Star } from 'lucide-react';
import SparkleIcon from './SparkleIcon';
import { BOOK_URL, SPOTS_LEFT_THIS_WEEK } from '@/lib/constants';

const ClosingCTA = () => {
  return (
    <section className="py-20 md:py-28 text-center relative overflow-hidden">
      <div className="container-custom">
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-6 tracking-tighter">
          Ready to Sparkle?
        </h2>
        <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-10 leading-relaxed">
          Book your consultation at The Beauty Bar. One chair, full attention, real results.
        </p>
        <div className="inline-block relative">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center min-h-[56px] px-12 md:px-16 text-lg md:text-xl groovy-shadow hover:-translate-y-1"
          >
            Book Appointment
          </a>
          <Star
            className="absolute -top-6 -left-8 md:-top-8 md:-left-12 w-8 h-8 md:w-10 md:h-10 text-primary sparkle-float fill-primary/20"
            aria-hidden
          />
          <SparkleIcon
            className="absolute -bottom-6 -right-8 md:-bottom-8 md:-right-12 sparkle-float hidden sm:block"
            size={40}
          />
        </div>
        {SPOTS_LEFT_THIS_WEEK != null && (
          <p className="mt-6 font-label text-sm text-on-surface-variant">
            Only {SPOTS_LEFT_THIS_WEEK} spots left this week
          </p>
        )}
      </div>
    </section>
  );
};

export default ClosingCTA;
