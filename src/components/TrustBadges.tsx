'use client';

import { Shield, Award, Clock, Star } from 'lucide-react';
import { CLIENT_COUNT, YEARS_EXPERIENCE } from '@/lib/constants';

interface TrustBadgesProps {
  variant?: 'compact' | 'detailed';
  className?: string;
}

const TrustBadges = ({ variant = 'detailed', className = '' }: TrustBadgesProps) => {
  const badges = [
    {
      icon: Shield,
      title: 'Licensed Professional',
      description: 'State-licensed cosmetologist',
      color: 'text-primary',
    },
    {
      icon: Award,
      title: `${YEARS_EXPERIENCE} Years Experience`,
      description: 'Expert hair transformations',
      color: 'text-secondary',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Easy booking and rescheduling',
      color: 'text-tertiary',
    },
    {
      icon: Star,
      title: '5.0 Star Rating',
      description: `${CLIENT_COUNT}+ happy clients`,
      color: 'text-primary',
    },
  ];

  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 ${className}`}>
        {badges.map((badge, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-surface-container-low rounded-full px-3 py-2 min-h-[44px] border border-primary/10"
          >
            <badge.icon className={`w-4 h-4 flex-shrink-0 ${badge.color}`} aria-hidden />
            <span className="text-sm font-medium text-on-surface whitespace-nowrap">{badge.title}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`bg-surface-container-lowest rounded-2xl p-6 border-2 border-primary/15 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="font-heading text-xl font-bold text-primary mb-2">Why clients book with Raquel</h3>
        <p className="text-body text-on-surface-variant">Licensed, experienced, and local to Old Milford</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {badges.map((badge, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary-fixed rounded-xl flex items-center justify-center flex-shrink-0">
              <badge.icon className={`w-5 h-5 ${badge.color}`} aria-hidden />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-on-surface mb-1">{badge.title}</h4>
              <p className="text-sm text-on-surface-variant">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadges;
