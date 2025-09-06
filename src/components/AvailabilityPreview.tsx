'use client';

import { useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface AvailabilityPreviewProps {
  className?: string;
}

const AvailabilityPreview = ({ className = '' }: AvailabilityPreviewProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Mock availability data - in real implementation, this would come from Square API
  const nextAvailableSlots = [
    { date: 'Today', time: '2:00 PM', available: true },
    { date: 'Today', time: '4:30 PM', available: true },
    { date: 'Tomorrow', time: '10:00 AM', available: true },
    { date: 'Tomorrow', time: '1:00 PM', available: true },
    { date: 'Wednesday', time: '11:00 AM', available: true },
    { date: 'Wednesday', time: '3:00 PM', available: true },
  ];

  const handleBookNow = () => {
    window.open(
      'https://book.squareup.com/appointments/dliuybdwgxv87d/location/L81AYV9NYYW19/services?buttonTextColor=000000&color=e8b4b8&locale=en&referrer=so',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 ${className}`}>
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
          <Calendar className="w-5 h-5 text-accent" />
        </div>
        <div>
          <h3 className="text-heading font-semibold text-text">Next Available Appointments</h3>
          <p className="text-small text-text/60">Book your preferred time slot</p>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {nextAvailableSlots.slice(0, isExpanded ? 6 : 3).map((slot, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={handleBookNow}
          >
            <div className="flex items-center space-x-3">
              <Clock className="w-4 h-4 text-accent" />
              <div>
                <span className="text-body font-medium text-text">{slot.date}</span>
                <span className="text-small text-text/60 ml-2">at {slot.time}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-small text-green-600 font-medium">Available</span>
            </div>
          </div>
        ))}
      </div>

      {nextAvailableSlots.length > 3 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-accent hover:text-text transition-colors text-small font-medium mb-4"
        >
          {isExpanded ? 'Show Less' : `Show ${nextAvailableSlots.length - 3} More`}
        </button>
      )}

      <button
        onClick={handleBookNow}
        className="w-full btn-primary group flex items-center justify-center"
      >
        <span>Book Appointment</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>

      <div className="mt-4 text-center">
        <p className="text-small text-text/60">
          Can&apos;t find a time that works?{' '}
          <a
            href="tel:+15133302277"
            className="text-accent hover:text-text transition-colors font-medium"
          >
            Call us at (513) 330-2277
          </a>
        </p>
      </div>
    </div>
  );
};

export default AvailabilityPreview; 