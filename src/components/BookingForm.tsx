'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { INSTAGRAM_URL } from '@/lib/constants';

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
      const summary = [
        `Booking request from ${data.name}`,
        `Email: ${data.email} | Phone: ${data.phone}`,
        `Service: ${data.service}`,
        `Preferred: ${data.date} at ${data.time}`,
        data.message ? `Message: ${data.message}` : '',
      ].filter(Boolean).join('\n');
      await navigator.clipboard.writeText(summary);
      window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
      toast.success("Your message was copied — paste it in a DM to me on Instagram and I'll confirm your appointment!");
      reset();
      setSelectedService('');
    } catch (error) {
      toast.error("Couldn't copy to clipboard. Please DM me on Instagram with your booking details.");
      window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
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

  const availableDates = useMemo(() => getAvailableDates(), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="form-card"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Personal Information */}
        <div>
          <h3 className="theme-heading text-xl mb-6">
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
                className="form-input"
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
                className="form-input"
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
                className="form-input"
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
          <h3 className="theme-heading text-xl mb-6">
            Select Your Service
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                className={`p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                  selectedService === service.id
                    ? 'border-primary bg-primary-fixed/30'
                    : 'border-primary/15 hover:border-primary/40 bg-surface-container-low'
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
          <h3 className="theme-heading text-xl mb-6">
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
                className="form-input"
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
                className="form-input"
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
            className="form-input"
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
            Your request will be copied and Instagram will open — paste into a DM to me and I&apos;ll confirm your appointment!
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default BookingForm; 