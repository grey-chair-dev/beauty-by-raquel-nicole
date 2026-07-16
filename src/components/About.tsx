import Image from 'next/image';
import { Sparkles, Flower2 } from 'lucide-react';
import { ReviewSectionAnchor } from './review/ReviewSectionAnchor';
import { CLIENT_COUNT, YEARS_EXPERIENCE, BUSINESS_LOCATION } from '@/lib/constants';
import SparkleIcon from './SparkleIcon';

const About = () => {
  return (
    <ReviewSectionAnchor
      flagIds={['home-about-copy', 'home-about-stats', 'home-about-photo', 'about-page-intro', 'about-page-duplicate']}
      href="/#about"
    >
      <section id="about" className="py-20 md:py-28 bg-primary-fixed/30 relative overflow-hidden section-transition">
        <div className="absolute -top-10 -right-10 opacity-10 pointer-events-none" aria-hidden>
          <Flower2 className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] text-primary" />
        </div>

        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative inline-block">
                <div className="retro-frame groovy-shadow">
                  <Image
                    src="/images/raquel/raquel-profile.jpg"
                    alt="Raquel Schmid, licensed hairstylist at The Beauty Bar in Milford, OH"
                    width={400}
                    height={480}
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="w-full h-auto object-cover object-top min-h-[320px] md:min-h-[420px]"
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
                Meet Raquel Nicole
              </h2>
              <p className="text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                With {YEARS_EXPERIENCE} years in the chair, I combine technical precision with a
                retro-inspired eye. When you sit with me, it&apos;s a judgment-free space: great hair
                plus a supportive ear. I call it being your &ldquo;hairapist.&rdquo;
              </p>
              <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed italic bg-primary-fixed/50 rounded-3xl p-5 border border-primary/15">
                &ldquo;My mission is to help every client find their inner sparkle through hair that
                looks good today and even better tomorrow.&rdquo;
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-bg p-4 rounded-3xl border border-primary/10">
                  <h4 className="font-heading text-xl font-bold text-primary">{YEARS_EXPERIENCE}+ Years</h4>
                  <p className="font-label text-sm text-on-surface-variant">Expertise</p>
                </div>
                <div className="bg-bg p-4 rounded-3xl border border-primary/10">
                  <h4 className="font-heading text-xl font-bold text-primary">{CLIENT_COUNT}+</h4>
                  <p className="font-label text-sm text-on-surface-variant">Happy Clients</p>
                </div>
              </div>

              <p className="text-body text-on-surface-variant/80 text-sm">
                {BUSINESS_LOCATION.salonLabel} · {BUSINESS_LOCATION.area} · one chair, full attention
              </p>
            </div>
          </div>
        </div>
      </section>
    </ReviewSectionAnchor>
  );
};

export default About;
