'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Heart, ImagePlus, X } from 'lucide-react';
import { INSTAGRAM_URL } from '@/lib/constants';

const MAX_INSPO_PHOTOS = 5;
const MAX_PHOTO_SIZE_MB = 5;

const bridalSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  weddingDate: z.string().min(1, 'Please enter your wedding date'),
  weddingTime: z.string().min(1, 'Please select your wedding time'),
  readyByTime: z.string().min(1, 'Please enter what time you need to be ready by'),
  venueLocation: z.string().min(1, 'Please provide your venue location'),
  bridalPartySize: z.string().min(1, 'Please select your bridal party size'),
  hairStyle: z.string().min(1, 'Please describe your desired hair style'),
  additionalServices: z.string().optional(),
  message: z.string().optional(),
});

type BridalFormData = z.infer<typeof bridalSchema>;

const BridalForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inspoPhotos, setInspoPhotos] = useState<File[]>([]);
  const [inspoPreviews, setInspoPreviews] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BridalFormData>({
    resolver: zodResolver(bridalSchema),
  });

  const clearInspoPhotos = () => {
    inspoPreviews.forEach((url) => URL.revokeObjectURL(url));
    setInspoPhotos([]);
    setInspoPreviews([]);
  };

  const handleInspoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(event.target.files ?? []);
    const maxBytes = MAX_PHOTO_SIZE_MB * 1024 * 1024;
    const valid = selected.filter((file) => file.type.startsWith('image/') && file.size <= maxBytes);
    const combined = [...inspoPhotos, ...valid].slice(0, MAX_INSPO_PHOTOS);

    if (valid.length < selected.length || inspoPhotos.length + valid.length > MAX_INSPO_PHOTOS) {
      toast.error(`Use up to ${MAX_INSPO_PHOTOS} images under ${MAX_PHOTO_SIZE_MB}MB each.`);
    }

    inspoPreviews.forEach((url) => URL.revokeObjectURL(url));
    setInspoPhotos(combined);
    setInspoPreviews(combined.map((file) => URL.createObjectURL(file)));
    event.target.value = '';
  };

  const removeInspoPhoto = (index: number) => {
    URL.revokeObjectURL(inspoPreviews[index]);
    setInspoPhotos((current) => current.filter((_, i) => i !== index));
    setInspoPreviews((current) => current.filter((_, i) => i !== index));
  };

  const formatReadyByTime = (value: string) => {
    const [hours, minutes] = value.split(':').map(Number);
    if (Number.isNaN(hours) || Number.isNaN(minutes)) return value;
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  const onSubmit = async (data: BridalFormData) => {
    setIsSubmitting(true);
    try {
      const weddingDateFormatted = data.weddingDate
        ? new Date(data.weddingDate + 'T12:00:00').toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })
        : data.weddingDate;
      const readyByFormatted = formatReadyByTime(data.readyByTime);
      const summary = [
        `Bridal hair inquiry from ${data.firstName} ${data.lastName}`,
        `Email: ${data.email} | Phone: ${data.phone}`,
        `Wedding: ${weddingDateFormatted} at ${data.weddingTime}`,
        `Need to be ready by: ${readyByFormatted}`,
        `Venue: ${data.venueLocation}`,
        `Bridal party: ${data.bridalPartySize}`,
        `Hair style: ${data.hairStyle}`,
        data.additionalServices ? `Additional: ${data.additionalServices}` : '',
        data.message ? `Message: ${data.message}` : '',
        inspoPhotos.length > 0
          ? `Inspo photos: ${inspoPhotos.length} attached with this inquiry`
          : '',
      ].filter(Boolean).join('\n');

      const canShareFiles =
        inspoPhotos.length > 0 &&
        typeof navigator.share === 'function' &&
        typeof navigator.canShare === 'function' &&
        navigator.canShare({ files: inspoPhotos, text: summary });

      if (canShareFiles) {
        await navigator.share({ text: summary, files: inspoPhotos });
        toast.success('Shared your inquiry — choose Instagram to send it to Raquel!');
      } else {
        await navigator.clipboard.writeText(summary);
        window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
        toast.success(
          inspoPhotos.length > 0
            ? `Message copied — paste in Instagram and attach your ${inspoPhotos.length} inspo photo${inspoPhotos.length === 1 ? '' : 's'}!`
            : "Your message was copied — paste it in a DM to me on Instagram and I'll reply soon!"
        );
      }

      reset();
      clearInspoPhotos();
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') return;
      toast.error("Couldn't send your inquiry. Please DM me on Instagram with your details.");
      window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
    } finally {
      setIsSubmitting(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
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
              <input
                type="date"
                {...register('weddingDate')}
                min={today}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              />
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
            
            <div>
              <label className="block text-body font-medium text-text mb-2">
                <Clock className="inline w-4 h-4 mr-2" />
                What time do you need to be ready by? *
              </label>
              <input
                type="time"
                {...register('readyByTime')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              {errors.readyByTime && (
                <p className="text-red-500 text-small mt-1">{errors.readyByTime.message}</p>
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
                <ImagePlus className="inline w-4 h-4 mr-2" />
                Inspiration Photos (Optional)
              </label>
              <p className="text-small text-text/60 mb-3">
                Attach photos of styles you love — up to {MAX_INSPO_PHOTOS} images, {MAX_PHOTO_SIZE_MB}MB each.
              </p>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleInspoChange}
                disabled={inspoPhotos.length >= MAX_INSPO_PHOTOS}
                className="w-full text-body text-text/80 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-accent file:text-white file:font-medium hover:file:bg-accentDark"
              />
              {inspoPreviews.length > 0 && (
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {inspoPreviews.map((preview, index) => (
                    <div key={preview} className="relative aspect-square rounded-lg overflow-hidden border border-gray-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={preview}
                        alt={`Inspiration photo ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeInspoPhoto(index)}
                        className="absolute top-2 right-2 p-1 rounded-full bg-black/60 text-white hover:bg-black/80"
                        aria-label={`Remove inspiration photo ${index + 1}`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
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
            Your details will be copied and Instagram will open — paste into a DM and attach any inspiration photos you selected.
          </p>
        </div>
      </form>
    </div>
  );
};

export default BridalForm; 