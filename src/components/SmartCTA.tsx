'use client';

import { useState, useEffect, useMemo } from 'react';
import { ArrowRight, Phone, Calendar, Star } from 'lucide-react';

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
        text: 'Book Your Appointment',
        icon: <ArrowRight className="w-4 h-4" />,
        url: 'https://book.squareup.com/appointments/dliuybdwgxv87d/location/L81AYV9NYYW19/services?buttonTextColor=000000&color=e8b4b8&locale=en&referrer=so'
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
            url: 'https://book.squareup.com/appointments/dliuybdwgxv87d/location/L81AYV9NYYW19/services?buttonTextColor=000000&color=e8b4b8&locale=en&referrer=so'
          };
        }
        return {
          text: 'Book Your Appointment',
          icon: <Calendar className="w-4 h-4" />,
          url: 'https://book.squareup.com/appointments/dliuybdwgxv87d/location/L81AYV9NYYW19/services?buttonTextColor=000000&color=e8b4b8&locale=en&referrer=so'
        };
      
      case 'services':
        return {
          text: 'Book This Service',
          icon: <ArrowRight className="w-4 h-4" />,
          url: 'https://book.squareup.com/appointments/dliuybdwgxv87d/location/L81AYV9NYYW19/services?buttonTextColor=000000&color=e8b4b8&locale=en&referrer=so'
        };
      
      case 'testimonials':
        return {
          text: 'Join 500+ Happy Clients',
          icon: <Star className="w-4 h-4" />,
          url: 'https://book.squareup.com/appointments/dliuybdwgxv87d/location/L81AYV9NYYW19/services?buttonTextColor=000000&color=e8b4b8&locale=en&referrer=so'
        };
      
      case 'contact':
        return {
          text: 'Call Now - Quick Booking',
          icon: <Phone className="w-4 h-4" />,
          url: 'tel:+15133302277'
        };
      
      default:
        return {
          text: 'Book Your Appointment',
          icon: <ArrowRight className="w-4 h-4" />,
          url: 'https://book.squareup.com/appointments/dliuybdwgxv87d/location/L81AYV9NYYW19/services?buttonTextColor=000000&color=e8b4b8&locale=en&referrer=so'
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