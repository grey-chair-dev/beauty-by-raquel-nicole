'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import SquareBooking from '@/components/SquareBooking';

interface BookingTabsProps {
  selectedService?: string;
}

const BookingTabs = ({ selectedService }: BookingTabsProps) => {
  const [activeTab, setActiveTab] = useState<'square' | 'custom'>('square');

  return (
    <div className="form-card overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex border-b-2 border-primary/15 -mx-6 md:-mx-8 px-6 md:px-8">
        <button
          onClick={() => setActiveTab('square')}
          className={`flex-1 px-4 py-4 text-center font-semibold text-sm transition-colors ${
            activeTab === 'square'
              ? 'text-primary border-b-2 border-primary bg-primary-fixed/20 -mb-0.5'
              : 'text-on-surface-variant hover:text-on-surface hover:bg-primary-fixed/10'
          }`}
        >
          <Calendar className="inline w-5 h-5 mr-2" aria-hidden />
          Book Online (Instant)
        </button>
        <button
          onClick={() => setActiveTab('custom')}
          className={`flex-1 px-4 py-4 text-center font-semibold text-sm transition-colors ${
            activeTab === 'custom'
              ? 'text-primary border-b-2 border-primary bg-primary-fixed/20 -mb-0.5'
              : 'text-on-surface-variant hover:text-on-surface hover:bg-primary-fixed/10'
          }`}
        >
          <Clock className="inline w-5 h-5 mr-2" aria-hidden />
          Request Appointment
        </button>
      </div>

      {/* Tab Content */}
      <div className="pt-8">
        {activeTab === 'square' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <h3 className="theme-heading text-xl mb-2">Book Appointment Online</h3>
              <p className="text-on-surface-variant">
                {selectedService
                  ? `Booking: ${selectedService}. `
                  : 'Choose your service, date, and time for instant confirmation. '}
                This connects directly to our Square booking system.
              </p>
            </div>
            <SquareBooking selectedService={selectedService} />
          </motion.div>
        )}

        {activeTab === 'custom' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <h3 className="theme-heading text-xl mb-2">Request an Appointment</h3>
              <p className="text-on-surface-variant">
                Fill out our form and we&apos;ll contact you within 24 hours to confirm your appointment.
              </p>
            </div>
            <BookingForm />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BookingTabs;
