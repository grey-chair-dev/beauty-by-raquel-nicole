'use client';

import { Phone, Calendar } from 'lucide-react';
import { BOOK_URL } from '@/lib/constants';

interface MobileCTAProps {
  variant?: 'floating' | 'inline';
  className?: string;
}

const MobileCTA = ({ variant = 'floating', className = '' }: MobileCTAProps) => {
  const handleCall = () => {
    window.location.href = 'tel:+15133302277';
  };

  const handleBook = () => {
    window.open(BOOK_URL, '_blank', 'noopener,noreferrer');
  };

  if (variant === 'floating') {
    return (
      <div
        className={`fixed left-4 right-4 z-50 md:hidden ${className}`}
        style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
      >
        <div className="bg-bg rounded-2xl shadow-2xl border-2 border-primary/20 p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h3 className="font-heading font-bold text-primary text-sm truncate">Book Appointment</h3>
              <p className="text-xs text-on-surface-variant">Quick & easy booking</p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={handleCall}
                className="w-12 h-12 bg-secondary text-on-primary rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform touch-manipulation"
                aria-label="Call to book"
              >
                <Phone className="w-5 h-5" />
              </button>
              <button
                onClick={handleBook}
                className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center groovy-shadow active:scale-95 transition-transform touch-manipulation"
                aria-label="Book online"
              >
                <Calendar className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default MobileCTA;
