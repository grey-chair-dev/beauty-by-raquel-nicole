'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

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
      text: 'Raquel is absolutely amazing! She transformed my hair from dull to vibrant. Her attention to detail and personalized approach made me feel so confident. I get compliments every day!',
      service: 'Full Color & Highlights',
      date: '2 weeks ago',
      verified: true,
    },
    {
      id: '2',
      name: 'Jennifer L.',
      rating: 5,
      text: 'Best hair stylist I\'ve ever been to! Raquel really listens to what you want and delivers beyond expectations. My extensions look so natural, no one can tell they\'re not my real hair.',
      service: 'Hand-tied Extensions',
      date: '1 month ago',
      verified: true,
    },
    {
      id: '3',
      name: 'Amanda K.',
      rating: 5,
      text: 'I was so nervous about getting my hair done for my wedding, but Raquel made me feel so comfortable. My hair looked absolutely perfect and lasted all day. Highly recommend!',
      service: 'Wedding Styling',
      date: '3 weeks ago',
      verified: true,
    },
    {
      id: '4',
      name: 'Michelle R.',
      rating: 5,
      text: 'Raquel is a true professional. She took my damaged hair and made it healthy and beautiful again. Her color work is incredible - my highlights look so natural!',
      service: 'Color Correction',
      date: '1 week ago',
      verified: true,
    },
    {
      id: '5',
      name: 'Lisa T.',
      rating: 5,
      text: 'I\'ve been going to Raquel for over a year now and she never disappoints. Her cuts are always perfect and she really knows how to work with my hair type. Love her!',
      service: 'Women\'s Haircut',
      date: '2 weeks ago',
      verified: true,
    },
  ];

  useEffect(() => {
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
    <div className={`bg-white rounded-2xl shadow-lg p-8 ${className}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Star className="w-6 h-6 text-accent fill-current" />
          <span className="text-heading text-2xl font-bold text-text">5.0</span>
          <span className="text-body text-text/60">(200+ reviews)</span>
        </div>
        <h3 className="text-heading text-xl font-semibold text-text mb-2">
          What Our Clients Say
        </h3>
        <p className="text-body text-text/70">
          Real transformations from real clients
        </p>
      </div>

      {/* Review Carousel */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
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
                    <blockquote className="text-body text-text/80 italic leading-relaxed">
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
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <p className="text-small text-accent font-medium">{review.service}</p>
                    <p className="text-small text-text/60">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevReview}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-text" />
        </button>
        <button
          onClick={nextReview}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
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
              index === currentIndex ? 'bg-accent' : 'bg-gray-300'
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