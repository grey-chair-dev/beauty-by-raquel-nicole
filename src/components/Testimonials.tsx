import ReviewCarousel from './ReviewCarousel';
import { ReviewSectionAnchor } from './review/ReviewSectionAnchor';
import { BOOK_URL } from '@/lib/constants';

const Testimonials = () => {
  return (
    <ReviewSectionAnchor flagIds={['home-testimonials']} href="/#testimonials">
      <section id="testimonials" className="py-20 md:py-28 bg-surface-bright section-transition">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-3">
              What Clients Say
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-lg mx-auto">
              Real results, real reviews. See why clients keep coming back.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <ReviewCarousel />
          </div>

          <div className="text-center">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center min-h-[48px] px-8"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>
    </ReviewSectionAnchor>
  );
};

export default Testimonials;
