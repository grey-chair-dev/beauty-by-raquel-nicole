'use client';

import { useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BOOK_URL } from '@/lib/constants';

interface AvailabilityPreviewProps {
  className?: string;
}

const AvailabilityPreview = ({ className = '' }: AvailabilityPreviewProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const nextAvailableSlots = [
    { date: 'Today', time: '2:00 PM', available: true },
    { date: 'Today', time: '4:30 PM', available: true },
    { date: 'Tomorrow', time: '10:00 AM', available: true },
    { date: 'Tomorrow', time: '1:00 PM', available: true },
    { date: 'Wednesday', time: '11:00 AM', available: true },
    { date: 'Wednesday', time: '3:00 PM', available: true },
  ];

  const handleBookNow = () => {
    window.open(BOOK_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`theme-card p-6 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-primary-fixed/40 rounded-full flex items-center justify-center">
          <Calendar className="w-5 h-5 text-primary" aria-hidden />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-on-surface">Next Available Appointments</h3>
          <p className="text-small text-on-surface-variant">Book your preferred time slot</p>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {nextAvailableSlots.slice(0, isExpanded ? 6 : 3).map((slot, index) => (
          <button
            type="button"
            key={index}
            className="w-full flex items-center justify-between p-3 bg-primary-fixed/20 rounded-xl hover:bg-primary-fixed/35 transition-colors text-left"
            onClick={handleBookNow}
          >
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-primary" aria-hidden />
              <div>
                <span className="text-body font-medium text-on-surface">{slot.date}</span>
                <span className="text-small text-on-surface-variant ml-2">at {slot.time}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" aria-hidden />
              <span className="text-small text-primary font-semibold">Available</span>
            </div>
          </button>
        ))}
      </div>

      {nextAvailableSlots.length > 3 && (
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary hover:text-accentDark transition-colors text-small font-semibold mb-4"
        >
          {isExpanded ? 'Show Less' : `Show ${nextAvailableSlots.length - 3} More`}
        </button>
      )}

      <button
        type="button"
        onClick={handleBookNow}
        className="w-full btn-primary group flex items-center justify-center"
      >
        <span>Book Appointment</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden />
      </button>

      <div className="mt-4 text-center">
        <p className="text-small text-on-surface-variant">
          Can&apos;t find a time that works?{' '}
          <a href="tel:+15133302277" className="text-primary hover:text-accentDark font-semibold">
            Call (513) 330-2277
          </a>
        </p>
      </div>
    </div>
  );
};

export default AvailabilityPreview;
