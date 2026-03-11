import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import SmartCTA from './SmartCTA';
import TrustBadges from './TrustBadges';
import SparkleIcon from './SparkleIcon';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] min-h-[100vh] flex items-center justify-center overflow-hidden section-transition py-12 sm:py-16 md:py-0">
      {/* Background: gradient + organic blobs */}
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden />
      <div className="gradient-overlay absolute inset-0" aria-hidden />
      {/* Organic blob shapes - low opacity */}
      <div className="absolute top-0 right-0 w-[60%] md:w-[50%] h-[70%] rounded-full bg-secondary/20 blur-3xl -translate-y-1/4 translate-x-1/4" aria-hidden />
      <div className="absolute bottom-0 left-0 w-[50%] md:w-[40%] h-[50%] rounded-full bg-primary/25 blur-3xl translate-y-1/4 -translate-x-1/4" aria-hidden />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Professional Badge */}
            <div className="inline-flex items-center space-x-2 seamless-card rounded-full px-4 py-2 mb-5 sm:mb-8">
              <Star className="w-4 h-4 text-accent fill-current" />
              <span className="text-small font-medium text-text">
                Hair Stylist in Milford, OH
              </span>
            </div>

            {/* Main Headline - display font, optional retro shadow */}
            <div className="relative mb-3 sm:mb-4">
              <SparkleIcon size={18} className="absolute -top-1 -right-1 sm:right-2 md:right-4 opacity-80" />
              <SparkleIcon size={12} className="absolute top-5 -left-1 sm:left-0 opacity-60" />
              <h1 className="text-display text-[28px] leading-tight sm:text-h1-mobile md:text-h1 font-bold text-text text-hero-display">
                My passion is making you feel like <span className="text-accent">YOU</span> again
              </h1>
            </div>

            {/* Tagline - script font */}
            <p className="text-script text-xl sm:text-2xl md:text-3xl text-accent mb-4 sm:mb-6">
              Walk in. Leave glowing.
            </p>

            <p className="text-body text-[15px] sm:text-body-mobile md:text-body text-text/80 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Hi! I&apos;m Raquel — owner of RS C&C LLC ✨ — a passionate hairstylist with 7 years of experience, currently renting my chair at The Beauty Bar in the heart of Old Milford. I specialize in effortless lived-in color, dimensional blonding, chic bobs, and soft long layered cuts, extension transformations, and I absolutely love creating bridal updos 👰‍♀️ for your most special moments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
              <SmartCTA context="hero" variant="primary" />
              <Link href="/services" className="btn-secondary btn-seamless flex items-center justify-center whitespace-nowrap">
                <span>View Services</span>
              </Link>
            </div>

            <TrustBadges variant="compact" />
          </div>

          {/* Right Column - Visual */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="relative floating-element w-full max-w-lg">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero/before-after-optimized.jpg"
                  alt="Dramatic hair transformation - Before and After"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxAAPwCdABmX/9k="
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                  quality={85}
                />
                <div className="absolute inset-0">
                  <div className="absolute top-4 left-4">
                    <div className="seamless-card rounded-lg px-3 py-1">
                      <span className="text-small font-semibold text-text">Before</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4" style={{ left: 'calc(50% + 1rem)' }}>
                    <div className="seamless-card rounded-lg px-3 py-1">
                      <span className="text-small font-semibold text-text">After</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle corner accents */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl pointer-events-none" aria-hidden />
    </section>
  );
};

export default Hero;
