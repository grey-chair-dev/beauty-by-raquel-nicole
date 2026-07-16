import Link from 'next/link';
import { ArrowRight, Palette, Scissors, Sparkles } from 'lucide-react';
import { BOOK_URL } from '@/lib/constants';

const services = [
  {
    name: 'Lived-In Color',
    description:
      'Signature low-maintenance coloring. Hand-painted highlights that grow out seamlessly.',
    href: '/services#color',
    icon: Palette,
    bg: 'bg-surface-container-low',
    border: 'border-primary/20 hover:border-primary',
    iconBg: 'bg-primary-container text-on-primary-container',
    titleColor: 'text-primary',
    linkColor: 'text-primary',
  },
  {
    name: 'Dimensional Blonding',
    description: 'Premium blonding that creates depth, shine, and a perfect sun-kissed finish.',
    href: '/services#color',
    icon: Sparkles,
    bg: 'bg-secondary-container',
    border: 'border-secondary/20 hover:border-secondary',
    iconBg: 'bg-secondary-fixed-dim text-on-secondary-fixed',
    titleColor: 'text-secondary',
    linkColor: 'text-secondary',
  },
  {
    name: 'Hand-Tied Extensions',
    description: 'Natural movement, seamless blend. Move-ups available for long-lasting volume.',
    href: '/services#extensions',
    icon: Scissors,
    bg: 'bg-tertiary-fixed',
    border: 'border-tertiary/20 hover:border-tertiary',
    iconBg: 'bg-tertiary-container text-on-tertiary-container',
    titleColor: 'text-tertiary',
    linkColor: 'text-tertiary',
  },
];

const HomepageServicesStrip = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-surface">
      <div className="container-custom">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-4">
            Our Groovy Services
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Premium beauty rituals designed to elevate your unique style: high-end techniques with
            nostalgic charm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.name}
              className={`service-card group ${s.bg} ${s.border}`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${s.iconBg}`}
              >
                <s.icon className="w-8 h-8" aria-hidden />
              </div>
              <h3 className={`font-heading text-2xl font-bold mb-4 ${s.titleColor}`}>{s.name}</h3>
              <p className="text-body text-on-surface-variant mb-6 leading-relaxed">{s.description}</p>
              <Link
                href={s.href}
                className={`font-label font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all min-h-[44px] ${s.linkColor}`}
              >
                Learn More
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/bridal" className="btn-secondary min-h-[48px] inline-flex items-center px-8">
            Bridal Hair
          </Link>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary min-h-[48px] inline-flex items-center px-8"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomepageServicesStrip;
