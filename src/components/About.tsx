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
                Meet Raquel Nicole
              </h2>
              <p className="text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                I&apos;ve been doing hair for {YEARS_EXPERIENCE} years. I like clean color, lived-in
                blonding, and cuts that still look good a month out. In my chair it&apos;s a judgment-free
                zone: good hair and someone who will actually listen. I call it being your
                &ldquo;hairapist.&rdquo;
              </p>
              <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed italic bg-primary-fixed/50 rounded-2xl p-5 border-2 border-primary/15">
                &ldquo;I want every client to leave feeling like themselves, just with hair they&apos;re
                excited to live in.&rdquo;
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
            </div>
          </div>
        </div>
      </section>
    </ReviewSectionAnchor>
  );
};

export default About;
