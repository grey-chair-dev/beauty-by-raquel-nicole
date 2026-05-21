'use client';

import { Phone, Calendar, MessageCircle } from 'lucide-react';
import { BOOK_URL, INSTAGRAM_URL } from '@/lib/constants';

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

  const handleMessage = () => {
    window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };

  if (variant === 'floating') {
    return (
      <div
        className={`fixed left-4 right-4 z-50 md:hidden ${className}`}
        style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-heading font-semibold text-text mb-1">
                Book Your Appointment
              </h3>
              <p className="text-small text-text/80">
                Quick & easy booking
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleCall}
                className="w-12 h-12 min-w-[48px] min-h-[48px] bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 active:scale-95 transition-transform touch-manipulation"
                aria-label="Call to book"
              >
                <Phone className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={handleBook}
                className="w-12 h-12 min-w-[48px] min-h-[48px] bg-accent rounded-full flex items-center justify-center shadow-lg hover:bg-accentDark active:scale-95 transition-transform touch-manipulation"
                aria-label="Book online"
              >
                <Calendar className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`md:hidden ${className}`}>
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="text-center mb-6">
          <h3 className="text-heading text-xl font-semibold text-text mb-2">
            Book Your Appointment
          </h3>
          <p className="text-body text-text/90">
            Choose your preferred way to book
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleCall}
            className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl p-4 flex items-center justify-center space-x-3 transition-colors shadow-lg"
          >
            <Phone className="w-5 h-5" />
            <span className="font-medium">📞 Call to Book (Faster)</span>
          </button>

          <button
            onClick={handleBook}
            className="w-full bg-accent hover:bg-accentDark text-white rounded-xl p-4 flex items-center justify-center space-x-3 transition-colors shadow-lg"
          >
            <Calendar className="w-5 h-5" />
            <span className="font-medium">📅 Book Online</span>
          </button>

          <button
            onClick={handleMessage}
            className="w-full bg-accent hover:bg-accentDark text-white rounded-xl p-4 flex items-center justify-center space-x-3 transition-colors shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">💬 DM me on Instagram</span>
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-small text-text/80">
            📍 Located in Milford, OH • Free parking available
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileCTA; 