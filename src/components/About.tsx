import Image from 'next/image';
import { Award, Heart, Shield, Users } from 'lucide-react';
import WavyDivider from './WavyDivider';

const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '7+', label: 'Years Experience' },
    { icon: Heart, value: '100%', label: 'Satisfaction Rate' },
    { icon: Shield, value: 'Licensed', label: 'Professional' },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 pb-24 sm:pb-28 md:pb-32 bg-seamless section-transition relative">
      <div className="section-divider" />
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div>
            {/* Personal intro - "Hey, I'm Raquel" */}
            <p className="text-display text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-1 sm:mb-2">
              Hey, I&apos;m Raquel.
            </p>
            <p className="text-script text-xl sm:text-2xl md:text-3xl text-accent mb-4 sm:mb-6">
              Here to help you look and feel your best.
            </p>

            <h2 className="text-heading text-h2 font-bold text-text mb-6 sr-only">
              About Beauty by Raquel Nicole
            </h2>

            <div className="space-y-4 sm:space-y-6 text-body text-[15px] sm:text-body-mobile md:text-body text-text/80 leading-relaxed">
              <p>
                When you sit in my chair, it&apos;s more than just a hair appointment — it&apos;s a relaxing, judgment-free space where you can unwind, chat, and feel cared for.
              </p>

              <p>
                As a strong advocate for mental health, I truly embrace being your &quot;hairapist,&quot; offering not just great hair, but a supportive space where you can talk about anything and leave feeling refreshed inside and out ❤️.
              </p>

              <p>
                Outside the salon you&apos;ll usually find me reading📖, practicing yoga🧘‍♀️, crocheting, thrifting, tending to my plant children🪴, or couch rotting with my fiancé📺.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
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

          <div className="relative floating-element">
            <div className="seamless-card rounded-2xl overflow-hidden">
              <div className="relative">
                <Image
                  src="/images/raquel/raquel-profile.jpg"
                  alt="Raquel Schmid - Licensed Hairstylist"
                  width={400}
                  height={384}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover object-top -translate-y-6 md:-translate-y-10"
                />
              </div>

              <div className="p-4 sm:p-6">
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-heading text-lg sm:text-xl font-semibold text-text mb-1 sm:mb-2">
                    Meet Raquel Schmid
                  </h3>
                  <p className="text-body text-text/70 text-sm sm:text-base">
                    Licensed Hairstylist
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4 text-body text-small text-text/80">
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text">Certified Professional</h4>
                      <p>Licensed and certified in hair styling and color services</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text">Personalized Care</h4>
                      <p>Every service is customized to your unique hair type and preferences</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text">Safety First</h4>
                      <p>Highest hygiene standards and quality products for your safety</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy stripe - horizontal bands peach/pink/orange (Sawdust & Stain style) */}
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
