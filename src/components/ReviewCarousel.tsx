'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { BOOK_URL, REVIEW_COUNT } from '@/lib/constants';
import { CLIENT_REVIEWS } from '@/data/client-reviews';

interface ReviewCarouselProps {
  className?: string;
}

const ReviewCarousel = ({ className = '' }: ReviewCarouselProps) => {
  const reviews = CLIENT_REVIEWS;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (reviews.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setCurrentIndex(index);
  };

  const ratingHeader = (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Star className="w-6 h-6 text-primary fill-current" aria-hidden />
        <span className="font-heading text-2xl font-bold text-primary">5.0</span>
        <span className="text-body text-on-surface-variant">({REVIEW_COUNT}+ Square reviews)</span>
      </div>
    </div>
  );

  if (reviews.length === 0) {
    return (
      <div className={`bg-surface-container-low rounded-2xl border-2 border-primary/15 p-8 md:p-10 ${className}`}>
        {ratingHeader}
        <div className="text-center max-w-lg mx-auto">
          <p className="text-body-lg text-on-surface-variant mb-4 leading-relaxed">
            Client feedback comes from Square appointments after each visit. Only real reviews go
            here.
          </p>
          <p className="text-body text-on-surface-variant/80 mb-8">
            Raquel is reaching out to regular clients for quotes to feature. After your appointment,
            you can leave feedback through Square too.
          </p>
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
    );
  }

  return (
    <div className={`bg-surface-container-low rounded-2xl border-2 border-primary/15 p-8 ${className}`}>
      {ratingHeader}

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review) => (
              <div key={review.id} className="w-full flex-shrink-0 px-4">
                <div className="text-center">
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" aria-hidden />
                    ))}
                  </div>

                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-accent/30 mx-auto mb-4" aria-hidden />
                    <blockquote className="text-body text-on-surface-variant italic leading-relaxed">
                      &ldquo;{review.text}&rdquo;
                    </blockquote>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-heading font-semibold text-text">{review.name}</span>
                      <span className="text-xs font-label font-semibold uppercase tracking-wide text-primary/80">
                        Square
                      </span>
                    </div>
                    <p className="text-small text-accent font-medium">{review.service}</p>
                    <p className="text-small text-on-surface-variant/70">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {reviews.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevReview}
              aria-label="Previous review"
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 min-w-[44px] min-h-[44px] bg-surface-container-lowest rounded-full border-2 border-primary/15 flex items-center justify-center hover:bg-surface-container-low transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-text" />
            </button>
            <button
              type="button"
              onClick={nextReview}
              aria-label="Next review"
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 min-w-[44px] min-h-[44px] bg-surface-container-lowest rounded-full border-2 border-primary/15 flex items-center justify-center hover:bg-surface-container-low transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-text" />
            </button>
          </>
        )}
      </div>

      {reviews.length > 1 && (
        <div className="flex justify-center space-x-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToReview(index)}
              aria-label={`Go to review ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-primary/20'
              }`}
            />
          ))}
        </div>
      )}

      <div className="text-center mt-8">
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center min-h-[48px] px-6"
        >
          <span>Book on Square</span>
          <ChevronRight className="w-4 h-4 ml-2" aria-hidden />
        </a>
      </div>
    </div>
  );
};

export default ReviewCarousel;
