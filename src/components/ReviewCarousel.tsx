'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { REVIEW_COUNT } from '@/lib/constants';

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  verified: boolean;
  photo?: string;
}

interface ReviewCarouselProps {
  className?: string;
}

const ReviewCarousel = ({ className = '' }: ReviewCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Enhanced reviews with more social proof
  const reviews: Review[] = [
    {
      id: '1',
      name: 'Sarah M.',
      rating: 5,
      text: 'Raquel nailed my color and highlights. My hair had been flat for months and she got it looking alive again without making it high-maintenance.',
      service: 'Full Color & Highlights',
      date: '2 weeks ago',
      verified: true,
    },
    {
      id: '2',
      name: 'Jennifer L.',
      rating: 5,
      text: 'Best stylist I\'ve had. She listened to what I wanted for my extensions and they blend so well nobody asks if they\'re real. They just ask who does my hair.',
      service: 'Hand-tied Extensions',
      date: '1 month ago',
      verified: true,
    },
    {
      id: '3',
      name: 'Amanda K.',
      rating: 5,
      text: 'I was nervous about wedding hair and she walked me through everything. It stayed put through photos, dinner, and dancing.',
      service: 'Wedding Styling',
      date: '3 weeks ago',
      verified: true,
    },
    {
      id: '4',
      name: 'Michelle R.',
      rating: 5,
      text: 'My hair was in rough shape and she fixed the tone without chopping it all off. The highlights look natural, not stripey.',
      service: 'Color Correction',
      date: '1 week ago',
      verified: true,
    },
    {
      id: '5',
      name: 'Lisa T.',
      rating: 5,
      text: 'I\'ve been seeing her for over a year. She remembers how my hair behaves and my cuts grow out clean.',
      service: 'Women\'s Haircut',
      date: '2 weeks ago',
      verified: true,
    },
  ];

  useEffect(() => {
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

  return (
    <div className={`bg-surface-container-low rounded-2xl border-2 border-primary/15 p-8 ${className}`}>
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Star className="w-6 h-6 text-primary fill-current" />
          <span className="font-heading text-2xl font-bold text-primary">5.0</span>
          <span className="text-body text-on-surface-variant">({REVIEW_COUNT}+ reviews)</span>
        </div>
      </div>

      {/* Review Carousel */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={review.id} className="w-full flex-shrink-0 px-4">
                <div className="text-center">
                  {/* Stars */}
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-accent/30 mx-auto mb-4" />
                    <blockquote className="text-body text-on-surface-variant italic leading-relaxed">
                      &ldquo;{review.text}&rdquo;
                    </blockquote>
                  </div>

                  {/* Reviewer Info */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-heading font-semibold text-text">
                        {review.name}
                      </span>
                      {review.verified && (
                        <span
                          className="inline-flex w-4 h-4 bg-primary rounded-full items-center justify-center text-on-primary text-[10px] font-bold"
                          aria-label="Verified client"
                        >
                          ✓
                        </span>
                      )}
                    </div>
                    <p className="text-small text-accent font-medium">{review.service}</p>
                    <p className="text-small text-on-surface-variant/70">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevReview}
          aria-label="Previous review"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 min-w-[44px] min-h-[44px] bg-surface-container-lowest rounded-full border-2 border-primary/15 flex items-center justify-center hover:bg-surface-container-low transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-text" />
        </button>
        <button
          onClick={nextReview}
          aria-label="Next review"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 min-w-[44px] min-h-[44px] bg-surface-container-lowest rounded-full border-2 border-primary/15 flex items-center justify-center hover:bg-surface-container-low transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-text" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToReview(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-primary/20'
            }`}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-8">
        <a
          href="https://www.google.com/localservices/prolist?src=2&scp=CgASABoAKgA%3D&spp=QiUweDg4NDFhYjVlNzU2ZDhmZjk6MHhjYzgwZjhjZmVkZTU3OWRl&slp=QAFSLwgBEikSJwolMHg4ODQxYWI1ZTc1NmQ4ZmY5OjB4Y2M4MGY4Y2ZlZGU1NzlkZSAA&q=beauty%20bar%20milford%20212%20Main%20St&ved=0CAAQ0swJahcKEwioyaa1xe2OAxUAAAAAHQAAAAAQRA"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center"
        >
          <span>Read More Reviews</span>
          <ChevronRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default ReviewCarousel; 