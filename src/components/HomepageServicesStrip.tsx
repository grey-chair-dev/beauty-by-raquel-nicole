import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOK_URL } from '@/lib/constants';

const services = [
  {
    name: 'Lived-In Color',
    description: 'Hand-painted color that grows out soft. No harsh lines.',
    href: '/services#color',
    cta: 'View details',
  },
  {
    name: 'Dimensional Blonding',
    description: 'Blonding that looks natural and stays healthy.',
    href: '/services#color',
    cta: 'View details',
  },
  {
    name: 'Hand-Tied Extensions',
    description: 'Natural movement, seamless blend. Move-ups available.',
    href: '/services#extensions',
    cta: 'View details',
  },
  {
    name: 'Bridal Hair',
    description: 'Updos, trials, and day-of styling for brides & parties.',
    href: '/bridal',
    cta: 'Bridal info',
  },
];

const HomepageServicesStrip = () => {
  return (
    <section id="services-strip" className="py-16 sm:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-heading text-3xl sm:text-4xl md:text-h2 font-bold text-text mb-4">
            Services I Specialize In
          </h2>
          <p className="text-body text-text/80 max-w-lg mx-auto">
            One specialist. No revolving chairs. You get my full attention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl border-2 border-primary/30 bg-bg/50 p-6 flex flex-col"
            >
              <h3 className="text-heading text-xl font-bold text-text mb-2">
                {s.name}
              </h3>
              <p className="text-body text-text/80 text-sm flex-1 mb-4">
                {s.description}
              </p>
              <Link
                href={s.href}
                className="min-h-[44px] inline-flex items-center gap-1 hover:gap-2 transition-all text-accent font-semibold text-sm py-2"
              >
                {s.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center min-h-[48px] px-8"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomepageServicesStrip;
