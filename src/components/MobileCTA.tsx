'use client';

import { Phone, Calendar, MessageCircle } from 'lucide-react';

interface MobileCTAProps {
  variant?: 'floating' | 'inline';
  className?: string;
}

const MobileCTA = ({ variant = 'floating', className = '' }: MobileCTAProps) => {
  const handleCall = () => {
    window.location.href = 'tel:+15133302277';
  };

  const handleBook = () => {
    window.open(
      'https://book.squareup.com/appointments/dliuybdwgxv87d/location/L81AYV9NYYW19/services?buttonTextColor=000000&color=e8b4b8&locale=en&referrer=so',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleMessage = () => {
    window.open('sms:+15133302277', '_blank');
  };

  if (variant === 'floating') {
    return (
      <div className={`fixed bottom-4 left-4 right-4 z-50 md:hidden ${className}`}>
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
                className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
                aria-label="Call to book"
              >
                <Phone className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={handleBook}
                className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg hover:bg-accent/80 transition-colors"
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
            className="w-full bg-accent hover:bg-accent/80 text-white rounded-xl p-4 flex items-center justify-center space-x-3 transition-colors shadow-lg"
          >
            <Calendar className="w-5 h-5" />
            <span className="font-medium">📅 Book Online</span>
          </button>

          <button
            onClick={handleMessage}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl p-4 flex items-center justify-center space-x-3 transition-colors shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">💬 Text Message</span>
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