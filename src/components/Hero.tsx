import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import SmartCTA from './SmartCTA';
import TrustBadges from './TrustBadges';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-seamless section-transition">
      <div className="gradient-overlay absolute inset-0"></div>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Professional Badge */}
            <div className="inline-flex items-center space-x-2 seamless-card rounded-full px-4 py-2 mb-8">
              <Star className="w-4 h-4 text-accent fill-current" />
              <span className="text-small font-medium text-text">
                Hair Stylist in Milford, OH
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-heading text-h1-mobile md:text-h1 font-bold text-text mb-6">
              Beautiful Hair
              <span className="block text-accent text-seamless">Transformations</span>
            </h1>

            <p className="text-body text-body-mobile md:text-body text-text/80 mb-8 max-w-lg mx-auto lg:mx-0">
              Professional hair styling and color services in Milford, OH. 
              Experience personalized care and stunning hair transformations 
              that boost your confidence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <SmartCTA context="hero" variant="primary" />
              <Link href="/services" className="btn-secondary btn-seamless flex items-center justify-center whitespace-nowrap">
                <span>View Services</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <TrustBadges variant="compact" />
          </div>

          {/* Right Column - Visual Elements */}
          <div className="flex flex-col items-center lg:items-end">
            {/* Before & After Transformation */}
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
                
                {/* Overlay with transformation labels */}
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

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero; 