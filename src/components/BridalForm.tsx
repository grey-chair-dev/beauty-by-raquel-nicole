'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Heart } from 'lucide-react';

const bridalSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  weddingDate: z.string().min(1, 'Please select your wedding date'),
  weddingTime: z.string().min(1, 'Please select your wedding time'),
  venueLocation: z.string().min(1, 'Please provide your venue location'),
  bridalPartySize: z.string().min(1, 'Please select your bridal party size'),
  hairStyle: z.string().min(1, 'Please describe your desired hair style'),
  additionalServices: z.string().optional(),
  message: z.string().optional(),
});

type BridalFormData = z.infer<typeof bridalSchema>;

const BridalForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BridalFormData>({
    resolver: zodResolver(bridalSchema),
  });

  const onSubmit = async (data: BridalFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Bridal hair inquiry submitted successfully! I\'ll contact you within 24 hours to discuss your wedding hair needs.');
      reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get available dates (next 12 months)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 365; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
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
          <h3 className="text-heading text-xl font-semibold text-text mb-6 flex items-center">
            <Heart className="w-5 h-5 mr-2 text-accent" />
            Bride Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-body font-medium text-text mb-2">
                <User className="inline w-4 h-4 mr-2" />
                First Name *
              </label>
              <input
                type="text"
                {...register('firstName')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-small mt-1">{errors.firstName.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-body font-medium text-text mb-2">
                <User className="inline w-4 h-4 mr-2" />
                Last Name *
              </label>
              <input
                type="text"
                {...register('lastName')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-small mt-1">{errors.lastName.message}</p>
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

        {/* Wedding Details */}
        <div>
          <h3 className="text-heading text-xl font-semibold text-text mb-6 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-accent" />
            Wedding Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-body font-medium text-text mb-2">
                <Calendar className="inline w-4 h-4 mr-2" />
                Wedding Date *
              </label>
              <select
                {...register('weddingDate')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="">Select your wedding date</option>
                {availableDates.map((date) => (
                  <option key={date.toISOString()} value={date.toISOString().split('T')[0]}>
                    {date.toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </option>
                ))}
              </select>
              {errors.weddingDate && (
                <p className="text-red-500 text-small mt-1">{errors.weddingDate.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-body font-medium text-text mb-2">
                <Clock className="inline w-4 h-4 mr-2" />
                Wedding Time *
              </label>
              <select
                {...register('weddingTime')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="">Select your wedding time</option>
                <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                <option value="Night (8 PM - 12 AM)">Night (8 PM - 12 AM)</option>
              </select>
              {errors.weddingTime && (
                <p className="text-red-500 text-small mt-1">{errors.weddingTime.message}</p>
              )}
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-body font-medium text-text mb-2">
                Venue/Location *
              </label>
              <input
                type="text"
                {...register('venueLocation')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Enter your wedding venue or location"
              />
              {errors.venueLocation && (
                <p className="text-red-500 text-small mt-1">{errors.venueLocation.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Bridal Party */}
        <div>
          <h3 className="text-heading text-xl font-semibold text-text mb-6">
            Bridal Party Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-body font-medium text-text mb-2">
                Bridal Party Size *
              </label>
              <select
                {...register('bridalPartySize')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="">Select your bridal party size</option>
                <option value="Bride only">Bride only</option>
                <option value="Bride + 1-2 bridesmaids">Bride + 1-2 bridesmaids</option>
                <option value="Bride + 3-5 bridesmaids">Bride + 3-5 bridesmaids</option>
                <option value="Bride + 6+ bridesmaids">Bride + 6+ bridesmaids</option>
                <option value="Bride + bridesmaids + flower girl">Bride + bridesmaids + flower girl</option>
                <option value="Full bridal party (MOB, MOG, etc.)">Full bridal party (MOB, MOG, etc.)</option>
              </select>
              {errors.bridalPartySize && (
                <p className="text-red-500 text-small mt-1">{errors.bridalPartySize.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Hair Style */}
        <div>
          <h3 className="text-heading text-xl font-semibold text-text mb-6">
            Hair Style Preferences
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block text-body font-medium text-text mb-2">
                Desired Hair Style *
              </label>
              <textarea
                {...register('hairStyle')}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Describe your desired hair style (e.g., elegant updo, romantic curls, half-up half-down, etc.)"
              />
              {errors.hairStyle && (
                <p className="text-red-500 text-small mt-1">{errors.hairStyle.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-body font-medium text-text mb-2">
                Additional Services (Optional)
              </label>
              <textarea
                {...register('additionalServices')}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Any additional services you're interested in (hair extensions, hair accessories, etc.)"
              />
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
            placeholder="Any special requests, questions, or additional information..."
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary px-6 md:px-12 py-4 text-base md:text-lg disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Bridal Hair Inquiry'}
          </button>
          
          <p className="text-small text-text/60 mt-4">
            I&apos;ll contact you within 24 hours to discuss your wedding hair needs and schedule a consultation.
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default BridalForm; 