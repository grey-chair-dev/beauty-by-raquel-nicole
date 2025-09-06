'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const services = [
  { id: 'money-piece', name: 'Money piece/face frame foils', duration: '1 hr 30 min', price: '$100.00' },
  { id: 'bang-trim', name: 'Bang trim', duration: '10 min', price: '$7.00' },
  { id: 'all-over-color', name: 'All over color and haircut', duration: '2 hr', price: '$130.00' },
  { id: 'extension-consult', name: 'Extension Consultation', duration: '30 min', price: 'Free' },
  { id: 'blowout', name: 'Blowout', duration: '45 min', price: '$40.00' },
  { id: 'kids-cut', name: 'Kids cut', duration: '30 min', price: '$30.00' },
  { id: 'half-haircut', name: 'The Half and Haircut', duration: '2 hr 30 min', price: '$180.00' },
  { id: 'extension-install', name: 'Hand tied extension install', duration: '3 hr', price: '$300.00' },
  { id: 'womens-cut', name: 'Women\'s haircut', duration: '1 hr', price: '$50.00' },
  { id: 'formal-style', name: 'Formal Event style/Updo', duration: '1 hr', price: '$75.00' },
  { id: 'root-retouch', name: 'Root Retouch and Haircut', duration: '2 hr 20 min', price: '$120.00' },
  { id: 'hair-tinsel', name: 'Hair Tinsel', duration: '30 min', price: '$20.00' },
  { id: 'mens-cut', name: 'Men\'s cut', duration: '30 min', price: '$30.00' },
  { id: 'full-haircut', name: 'The Full and Haircut', duration: '3 hr', price: '$220.00' },
  { id: 'pixie-cut', name: 'Womens short pixie', duration: '30 min', price: '$30.00' },
  { id: 'teen-cut', name: 'Teen girls cut', duration: '1 hr', price: '$40.00' },
  { id: 'extension-moveup', name: 'Hand tied extension move-up', duration: '2 hr 30 min', price: '$250.00' },
  { id: 'toner-gloss', name: 'Toner/Gloss and Haircut', duration: '1 hr 30 min', price: '$80.00' },
  { id: 'toner-blowout', name: 'Toner/Gloss & Blowout (No Haircut)', duration: '1 hr 15 min', price: '$60.00' },
];

const timeSlots = [
  '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

const BookingForm = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Booking request submitted successfully! We\'ll contact you to confirm your appointment.');
      reset();
      setSelectedService('');
    } catch (error) {
      toast.error('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get available dates (next 30 days, excluding Sundays and Mondays)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const dayOfWeek = date.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 1) { // Not Sunday (0) or Monday (1)
        dates.push(date);
      }
    }
    
    return dates;
  };

  const availableDates = getAvailableDates();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl shadow-xl p-8"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Personal Information */}
        <div>
          <h3 className="text-heading text-xl font-semibold text-text mb-6">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-body font-medium text-text mb-2">
                <User className="inline w-4 h-4 mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                {...register('name')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-small mt-1">{errors.name.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-body font-medium text-text mb-2">
                <Mail className="inline w-4 h-4 mr-2" />
                Email Address *
              </label>
              <input
                type="email"
                {...register('email')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-small mt-1">{errors.email.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-body font-medium text-text mb-2">
                <Phone className="inline w-4 h-4 mr-2" />
                Phone Number *
              </label>
              <input
                type="tel"
                {...register('phone')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-small mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Service Selection */}
        <div>
          <h3 className="text-heading text-xl font-semibold text-text mb-6">
            Select Your Service
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedService === service.id
                    ? 'border-accent bg-accent/10'
                    : 'border-gray-200 hover:border-accent/50'
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <input
                  type="radio"
                  {...register('service')}
                  value={service.id}
                  className="sr-only"
                  checked={selectedService === service.id}
                  onChange={() => setSelectedService(service.id)}
                />
                <div>
                  <h4 className="text-heading font-semibold text-text mb-2">
                    {service.name}
                  </h4>
                  <div className="flex justify-between items-center text-small text-text/70">
                    <span>{service.duration}</span>
                    <span className="text-accent font-semibold">{service.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {errors.service && (
            <p className="text-red-500 text-small mt-2">{errors.service.message}</p>
          )}
        </div>

        {/* Appointment Details */}
        <div>
          <h3 className="text-heading text-xl font-semibold text-text mb-6">
            Appointment Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-body font-medium text-text mb-2">
                <Calendar className="inline w-4 h-4 mr-2" />
                Preferred Date *
              </label>
              <select
                {...register('date')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="">Select a date</option>
                {availableDates.map((date) => (
                  <option key={date.toISOString()} value={date.toISOString().split('T')[0]}>
                    {date.toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </option>
                ))}
              </select>
              {errors.date && (
                <p className="text-red-500 text-small mt-1">{errors.date.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-body font-medium text-text mb-2">
                <Clock className="inline w-4 h-4 mr-2" />
                Preferred Time *
              </label>
              <select
                {...register('time')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="">Select a time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {errors.time && (
                <p className="text-red-500 text-small mt-1">{errors.time.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Additional Message */}
        <div>
          <label className="block text-body font-medium text-text mb-2">
            <MessageSquare className="inline w-4 h-4 mr-2" />
            Additional Message (Optional)
          </label>
          <textarea
            {...register('message')}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="Any special requests or questions..."
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary px-12 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Book Appointment'}
          </button>
          
          <p className="text-small text-text/60 mt-4">
            We&apos;ll contact you within 24 hours to confirm your appointment.
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default BookingForm; 