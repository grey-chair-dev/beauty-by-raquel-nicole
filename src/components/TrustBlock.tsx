import { Star } from 'lucide-react';
import { REVIEW_COUNT, BOOK_URL, BUSINESS_LOCATION } from '@/lib/constants';

const TrustBlock = () => {
  return (
    <section className="py-12 sm:py-16 bg-primary-fixed/25 border-y-2 border-primary/15">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-6">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-primary fill-current" aria-hidden />
              <span className="font-heading text-xl font-bold text-on-surface">5.0</span>
              <span className="text-body text-on-surface-variant">from {REVIEW_COUNT}+ Square reviews</span>
            </div>
            <span className="text-on-surface-variant/50 hidden sm:inline">·</span>
            <span className="text-body text-on-surface-variant">
              {BUSINESS_LOCATION.salonLabel} · {BUSINESS_LOCATION.area}
            </span>
          </div>

          <p className="text-body text-on-surface-variant max-w-xl mx-auto mb-8">
            Client feedback comes from Square after each appointment. Featured quotes are added as
            Raquel collects them from real clients.
          </p>

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
    </section>
  );
};

export default TrustBlock;
