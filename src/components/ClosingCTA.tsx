import { BOOK_URL, SPOTS_LEFT_THIS_WEEK } from '@/lib/constants';

const ClosingCTA = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-primary to-secondary">
      <div className="container-custom text-center">
        <h2 className="text-heading text-3xl sm:text-4xl md:text-h2 font-bold text-text mb-4">
          Ready to love your hair again?
        </h2>
        <p className="text-body text-text/90 max-w-md mx-auto mb-8">
          Book your spot at The Beauty Bar. One chair, full attention, real results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center min-h-[52px] px-10 text-lg font-bold shadow-lg"
          >
            Book Appointment
          </a>
          {SPOTS_LEFT_THIS_WEEK != null && (
            <span className="text-body font-semibold text-text/90">
              Only {SPOTS_LEFT_THIS_WEEK} spots left this week
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
