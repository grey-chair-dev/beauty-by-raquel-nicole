'use client';

import { useState, useEffect, useMemo } from 'react';
import { ArrowRight, Phone, Calendar, Star } from 'lucide-react';
import { BOOK_URL, CLIENT_COUNT } from '@/lib/constants';

interface SmartCTAProps {
  variant?: 'primary' | 'secondary' | 'urgent';
  context?: 'hero' | 'services' | 'testimonials' | 'contact';
  className?: string;
}

const SmartCTA = ({ variant = 'primary', context = 'hero', className = '' }: SmartCTAProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ctaConfig = useMemo(() => {
    if (!isClient) {
      return {
        text: 'Book Appointment',
        icon: <ArrowRight className="w-4 h-4" />,
        url: BOOK_URL
      };
    }

    const now = new Date();
    const hour = now.getHours();
    const isWeekend = now.getDay() === 0 || now.getDay() === 6;
    
    switch (context) {
      case 'hero':
        if (hour >= 9 && hour <= 17 && !isWeekend) {
          return {
            text: 'Book Today - Only 2 Spots Left!',
            icon: <Calendar className="w-4 h-4" />,
            url: BOOK_URL
          };
        }
        return {
          text: 'Book Appointment',
          icon: <Calendar className="w-4 h-4" />,
          url: BOOK_URL
        };
      
      case 'services':
        return {
          text: 'Book This Service',
          icon: <ArrowRight className="w-4 h-4" />,
          url: BOOK_URL
        };
      
      case 'testimonials':
        return {
          text: `Join ${CLIENT_COUNT}+ Happy Clients`,
          icon: <Star className="w-4 h-4" />,
          url: BOOK_URL
        };
      
      case 'contact':
        return {
          text: 'Call Now - Quick Booking',
          icon: <Phone className="w-4 h-4" />,
          url: 'tel:+15133302277'
        };
      
      default:
        return {
          text: 'Book Appointment',
          icon: <ArrowRight className="w-4 h-4" />,
          url: BOOK_URL
        };
    }
  }, [context, isClient]);

  const baseClasses = "group flex items-center justify-center whitespace-nowrap transition-all duration-300 font-medium";
  
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary", 
    urgent: "bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
  };

  const handleClick = () => {
    if (context === 'contact') {
      window.location.href = ctaConfig.url;
    } else {
      window.open(ctaConfig.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <span>{ctaConfig.text}</span>
      <span className="ml-2 group-hover:translate-x-1 transition-transform">
        {ctaConfig.icon}
      </span>
    </button>
  );
};

export default SmartCTA; 