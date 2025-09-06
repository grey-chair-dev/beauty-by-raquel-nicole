'use client';

import { Shield, Award, Clock, Star } from 'lucide-react';

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
      color: 'text-blue-600'
    },
    {
      icon: Award,
      title: '6+ Years Experience',
      description: 'Expert hair transformations',
      color: 'text-accent'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Easy booking & rescheduling',
      color: 'text-green-600'
    },
    {
      icon: Star,
      title: '5.0 Star Rating',
      description: '500+ happy clients',
      color: 'text-yellow-500'
    }
  ];

  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-2">
            <badge.icon className={`w-4 h-4 ${badge.color}`} />
            <span className="text-small font-medium text-text">{badge.title}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-heading text-xl font-semibold text-text mb-2">
          Why Choose Beauty by Raquel Nicole?
        </h3>
        <p className="text-body text-text/70">
          Professional expertise you can trust
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {badges.map((badge, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0`}>
              <badge.icon className={`w-5 h-5 ${badge.color}`} />
            </div>
            <div>
              <h4 className="text-heading font-semibold text-text mb-1">
                {badge.title}
              </h4>
              <p className="text-small text-text/70">
                {badge.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadges; 