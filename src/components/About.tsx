import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Flower2 } from 'lucide-react';
import { ReviewSectionAnchor } from './review/ReviewSectionAnchor';
import { CLIENT_COUNT, YEARS_EXPERIENCE, BUSINESS_LOCATION, BOOK_URL } from '@/lib/constants';
import SparkleIcon from './SparkleIcon';

type AboutProps = {
  variant?: 'home' | 'page';
};

const About = ({ variant = 'home' }: AboutProps) => {
  const isPage = variant === 'page';

  return (
    <ReviewSectionAnchor
      flagIds={['home-about-copy', 'home-about-stats', 'home-about-photo', 'about-page-intro']}
      href={isPage ? '/about' : '/#about'}
    >
      <section id="about" className="py-20 md:py-28 bg-primary-fixed/30 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 opacity-10 pointer-events-none" aria-hidden>
          <Flower2 className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] text-primary" />
        </div>

        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px]">
                <div className="retro-frame groovy-shadow">
                  <Image
                    src="/images/raquel/raquel-profile.jpg"
                    alt="Raquel Nicole, licensed hairstylist at The Beauty Bar in Milford, OH"
                    width={800}
                    height={959}
                    sizes="(max-width: 640px) 320px, (max-width: 768px) 360px, 400px"
                    className="w-full h-auto block"
                  />
                </div>
                <SparkleIcon
                  className="absolute -top-4 -right-4 sparkle-float hidden sm:block"
                  size={36}
                />
                <Sparkles
                  className="absolute -bottom-4 -left-4 w-9 h-9 text-secondary-container sparkle-float"
                  aria-hidden
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">
                {isPage ? 'My story' : 'Meet Raquel Nicole'}
              </h2>
              <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                With {YEARS_EXPERIENCE} years behind the chair, I&apos;ve developed a keen eye for detail
                and a passion for creating hair you will love. My chair is a judgement-free space where
                you can hopefully relax, be yourself, and always have my supportive ear :)
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-bg p-4 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-heading text-xl font-bold text-primary">{YEARS_EXPERIENCE}+ Years</h4>
                  <p className="font-label text-sm text-on-surface-variant">Expertise</p>
                </div>
                <div className="bg-bg p-4 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-heading text-xl font-bold text-primary">{CLIENT_COUNT}+</h4>
                  <p className="font-label text-sm text-on-surface-variant">Happy Clients</p>
                </div>
              </div>

              <p className="text-body text-on-surface-variant/80 text-sm">
                {BUSINESS_LOCATION.salonLabel} · {BUSINESS_LOCATION.area} · one chair, full attention
              </p>

              {isPage && (
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={BOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center min-h-[48px] px-8"
                  >
                    Book Appointment
                  </a>
                  <Link
                    href="/#testimonials"
                    className="btn-secondary inline-flex items-center justify-center min-h-[48px] px-8"
                  >
                    Client reviews
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </ReviewSectionAnchor>
  );
};

export default About;
