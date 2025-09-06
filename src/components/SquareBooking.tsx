'use client';

import { useEffect } from 'react';

interface SquareBookingProps {
  className?: string;
  selectedService?: string;
}

declare global {
  interface Window {
    SquareAppointmentsWidget: {
      init: (config: {
        selector: string;
        locationId: string;
        buttonTextColor: string;
        color: string;
        locale: string;
        referrer: string;
        serviceId?: string;
      }) => void;
    };
  }
}

const SquareBooking = ({ className = '', selectedService }: SquareBookingProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://squareup.com/appointments/buyer/widget/standard.js';
    script.async = true;
    script.onload = () => {
      if (window.SquareAppointmentsWidget) {
        const config: any = {
          selector: '#square-booking-widget',
          locationId: 'L81AYV9NYYW19',
          buttonTextColor: '000000',
          color: 'e8b4b8',
          locale: 'en',
          referrer: 'so'
        };

        // If a service is selected, try to pass it to Square
        if (selectedService) {
          // You may need to map your service names to Square service IDs
          // This is a placeholder - you'll need to get the actual Square service IDs
          config.serviceId = selectedService;
        }

        window.SquareAppointmentsWidget.init(config);
      }
    };
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="squareup.com"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [selectedService]);

  return (
    <div className={`w-full ${className}`}>
      <div id="square-booking-widget" className="min-h-[600px]"></div>
    </div>
  );
};

export default SquareBooking;
