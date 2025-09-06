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
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('square')}
          className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
            activeTab === 'square'
              ? 'text-primary border-b-2 border-primary bg-primary/5'
              : 'text-text/60 hover:text-text hover:bg-gray-50'
          }`}
        >
          <Calendar className="inline w-5 h-5 mr-2" />
          Book Online (Instant)
        </button>
        <button
          onClick={() => setActiveTab('custom')}
          className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
            activeTab === 'custom'
              ? 'text-primary border-b-2 border-primary bg-primary/5'
              : 'text-text/60 hover:text-text hover:bg-gray-50'
          }`}
        >
          <Clock className="inline w-5 h-5 mr-2" />
          Request Appointment
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-8">
        {activeTab === 'square' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-text mb-2">
                Book Your Appointment Online
              </h3>
              <p className="text-text/90">
                {selectedService 
                  ? `Booking: ${selectedService}`
                  : 'Choose your service, date, and time for instant confirmation.'
                }
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
              <h3 className="text-xl font-semibold text-text mb-2">
                Request an Appointment
              </h3>
              <p className="text-text/90">
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
