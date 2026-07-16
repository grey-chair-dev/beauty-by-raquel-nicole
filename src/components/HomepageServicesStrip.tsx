import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOK_URL } from '@/lib/constants';

const services = [
  {
    name: 'Lived-In Color',
    description:
      'Hand-painted highlights and low-maintenance color that grows out soft, not harsh.',
    href: '/services#color',
    kicker: 'Signature',
    bg: 'bg-surface-container-low',
    border: 'border-primary/25 hover:border-primary',
    titleColor: 'text-primary',
    span: 'lg:col-span-7 lg:row-span-2',
  },
  {
    name: 'Dimensional Blonding',
    description: 'Sun-kissed depth and shine without the brass.',
    href: '/services#color',
    kicker: 'Blonding',
    bg: 'bg-secondary-container/60',
    border: 'border-secondary/25 hover:border-secondary',
    titleColor: 'text-secondary',
    span: 'lg:col-span-5',
  },
  {
    name: 'Hand-Tied Extensions',
    description: 'Seamless volume with natural movement. Move-ups available.',
    href: '/services#extensions',
    kicker: 'Extensions',
    bg: 'bg-tertiary-fixed/80',
    border: 'border-tertiary/25 hover:border-tertiary',
    titleColor: 'text-tertiary',
    span: 'lg:col-span-5',
  },
  {
    name: 'Bridal Hair',
    description: 'On-site wedding styling across Greater Cincinnati. Trial required.',
    href: '/bridal',
    kicker: 'Events',
    bg: 'bg-surface-container-high',
    border: 'border-primary/20 hover:border-primary',
    titleColor: 'text-primary',
    span: 'lg:col-span-12',
  },
];

const HomepageServicesStrip = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-surface">
      <div className="container-custom">
        <div className="max-w-2xl mb-12 md:mb-14">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            What I specialize in
          </h2>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            Lived-in color, blonding, extensions, and bridal at The Beauty Bar. One chair, full
            attention.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 auto-rows-fr">
          {services.map((s) => (
            <article
              key={s.name}
              className={`service-card flex flex-col ${s.bg} ${s.border} ${s.span}`}
            >
              <p className="text-xs font-heading font-bold uppercase tracking-[0.14em] text-on-surface-variant mb-3">
                {s.kicker}
              </p>
              <h3 className={`font-heading text-2xl md:text-3xl font-bold mb-3 ${s.titleColor}`}>
                {s.name}
              </h3>
              <p className="text-body text-on-surface-variant mb-6 leading-relaxed flex-1 max-w-prose">
                {s.description}
              </p>
              <Link
                href={s.href}
                className={`font-heading font-semibold inline-flex items-center gap-2 min-h-[44px] ${s.titleColor}`}
              >
                See services
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-start">
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
