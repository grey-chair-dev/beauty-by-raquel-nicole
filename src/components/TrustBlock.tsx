import { Star } from 'lucide-react';
import { REVIEW_COUNT, BOOK_URL } from '@/lib/constants';

const heroTestimonial = {
  text: 'Raquel is absolutely amazing! She transformed my hair from dull to vibrant. Her attention to detail and personalized approach made me feel so confident. I get compliments every day!',
  name: 'Sarah M.',
  service: 'Full Color & Highlights',
};

const TrustBlock = () => {
  return (
    <section className="py-12 sm:py-16 bg-white border-y border-primary/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Hard trust line */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-accent fill-current" aria-hidden />
              <span className="text-heading text-xl font-bold text-text">5.0</span>
              <span className="text-body text-text/80">rating from</span>
              <span className="text-heading font-bold text-accent">{REVIEW_COUNT}+ reviews</span>
            </div>
            <span className="text-text/50 hidden sm:inline">·</span>
            <span className="text-body text-text/70">The Beauty Bar, Old Milford</span>
          </div>

          {/* One killer testimonial — big */}
          <blockquote className="text-center">
            <p className="text-heading text-xl sm:text-2xl md:text-3xl font-medium text-text leading-snug max-w-2xl mx-auto mb-6">
              &ldquo;{heroTestimonial.text}&rdquo;
            </p>
            <footer className="text-body text-text/80">
              — {heroTestimonial.name}, <span className="text-accent font-medium">{heroTestimonial.service}</span>
            </footer>
          </blockquote>

          <div className="text-center mt-8">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center min-h-[48px] px-6"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBlock;
