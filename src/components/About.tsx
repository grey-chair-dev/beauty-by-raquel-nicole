import Image from 'next/image';
import { Award, Heart, Shield, Users } from 'lucide-react';
import WavyDivider from './WavyDivider';
import { CLIENT_COUNT } from '@/lib/constants';

const About = () => {
  const stats = [
    { icon: Users, value: `${CLIENT_COUNT}+`, label: 'Happy Clients' },
    { icon: Award, value: '7+', label: 'Years Experience' },
    { icon: Heart, value: '100%', label: 'Satisfaction Rate' },
    { icon: Shield, value: 'Licensed', label: 'Professional' },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 md:py-28 bg-seamless section-transition relative">
      <div className="section-divider" />
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            {/* Bold hook — not buried */}
            <h2 className="text-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-6">
              More than a hair appointment.
            </h2>

            <p className="text-body text-text/80 mb-6 max-w-prose leading-relaxed">
              When you sit in my chair, it&apos;s a judgment-free space to unwind and leave feeling like yourself again.
            </p>

            <p className="text-body text-text/80 mb-8 max-w-prose leading-relaxed">
              I call it being your <strong className="text-accent">&quot;hairapist&quot;</strong> — great hair plus a supportive ear. Mental health matters to me, and so does giving you a place to talk about anything and walk out refreshed.
            </p>

            {/* Scannable bullets */}
            <ul className="space-y-3 mb-10">
              <li className="flex items-start gap-3 text-body text-text/80">
                <span className="text-accent font-bold mt-0.5">·</span>
                <span>7+ years in the chair · licensed professional</span>
              </li>
              <li className="flex items-start gap-3 text-body text-text/80">
                <span className="text-accent font-bold mt-0.5">·</span>
                <span>Lived-in color, blonding, extensions, bridal</span>
              </li>
              <li className="flex items-start gap-3 text-body text-text/80">
                <span className="text-accent font-bold mt-0.5">·</span>
                <span>The Beauty Bar, Old Milford — one chair, full attention</span>
              </li>
            </ul>

            {/* Hobbies — one short line, lower */}
            <p className="text-body text-small text-text/60 max-w-prose">
              Off the clock: reading, yoga, crochet, thrifting, plant mom, couch time with my fiancé.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-heading text-2xl font-bold text-text">
                    {stat.value}
                  </div>
                  <div className="text-small text-text/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="seamless-card rounded-2xl overflow-hidden">
              <div className="relative">
                <Image
                  src="/images/raquel/raquel-profile.jpg"
                  alt="Raquel Schmid - Licensed Hairstylist"
                  width={400}
                  height={384}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover object-top -translate-y-6 md:-translate-y-10"
                />
              </div>
              <div className="p-6">
                <h3 className="text-heading text-xl font-semibold text-text mb-1">
                  Raquel Schmid
                </h3>
                <p className="text-body text-text/70 text-sm">
                  Licensed Hairstylist · The Beauty Bar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none" aria-hidden>
        <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path d="M0 40 Q300 20 600 40 T1200 40 L1200 80 L0 80 Z" fill="#F4D1C7" />
          <path d="M0 55 Q400 30 800 55 T1200 55 L1200 80 L0 80 Z" fill="#E8B4B8" />
          <path d="M0 68 Q350 45 1200 68 L1200 80 L0 80 Z" fill="#D96B3B" opacity="0.85" />
        </svg>
      </div>
    </section>
  );
};

export default About;
