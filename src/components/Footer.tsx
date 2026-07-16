'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, Calendar, MessageCircle } from 'lucide-react';
import { BOOK_URL, INSTAGRAM_URL, FACEBOOK_URL, TIKTOK_URL, BUSINESS_HOURS, BUSINESS_LOCATION, BUSINESS_EMAIL } from '@/lib/constants';
import { ReviewSectionAnchor } from './review/ReviewSectionAnchor';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <ReviewSectionAnchor flagIds={['footer-info', 'site-social', 'site-hours', 'site-location']}>
      <footer id="contact" className="mt-8 rounded-t-[3rem] md:rounded-t-full bg-primary text-on-primary section-transition">
        <div className="container-custom py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">Get in Touch</h3>
              <p className="text-primary-fixed mb-4 text-body">
                All inquiries go to my DMs. Message me on Instagram!
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-on-primary font-label font-semibold px-4 py-3 rounded-full mb-6 transition-colors touch-manipulation"
              >
                <MessageCircle className="w-5 h-5" />
                DM me on Instagram
              </a>
              <div className="space-y-3">
                <a href="tel:+15133302277" className="flex items-center gap-3 min-h-[44px] text-primary-fixed hover:text-white transition-colors touch-manipulation">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>(513) 330-2277</span>
                </a>
                <a href={`mailto:${BUSINESS_EMAIL}`} className="flex items-center gap-3 min-h-[44px] text-primary-fixed hover:text-white transition-colors touch-manipulation break-all">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>{BUSINESS_EMAIL}</span>
                </a>
                <div className="flex items-start gap-3 py-2 text-primary-fixed">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{BUSINESS_LOCATION.compactLine}</span>
                </div>
              </div>

              <div className="bg-white/10 rounded-3xl p-4 mt-6">
                <h4 className="font-heading font-semibold mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Business Hours
                </h4>
                <div className="space-y-1 text-sm text-primary-fixed">
                  {BUSINESS_HOURS.schedule.map(({ day, hours }) => (
                    <div key={day} className="flex justify-between gap-4">
                      <span>{day}</span>
                      <span>{hours}</span>
                    </div>
                  ))}
                  <div className="flex justify-between">
                    <span>Sunday - Monday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-[2rem] p-6 md:p-8 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full mb-4 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-on-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Book Online Now</h3>
              <p className="text-primary-fixed text-body mb-6 max-w-sm">
                Schedule your appointment today and experience professional lived-in color and styling.
              </p>
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg text-primary font-label font-bold px-8 py-4 rounded-full inline-block w-full sm:w-auto text-center hover:bg-primary-fixed transition-all min-h-[48px] flex items-center justify-center touch-manipulation groovy-shadow"
              >
                Book Appointment
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/20 pt-8">
            <div className="lg:col-span-2">
              <h3 className="font-heading text-xl font-bold mb-3">Beauty by Raquel Nicole</h3>
              <p className="text-primary-fixed text-body mb-5 max-w-md">
                Professional hair styling and color in Milford, OH. Stay groovy.
              </p>
              <div className="flex items-center gap-4">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-primary-fixed hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-primary-fixed hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="text-primary-fixed hover:text-white transition-colors" aria-label="TikTok">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-3">Services</h4>
              <ul className="space-y-1 text-primary-fixed/90 text-sm">
                <li><Link href="/services#haircuts" className="block py-2 hover:text-white transition-colors">Haircuts</Link></li>
                <li><Link href="/services#color" className="block py-2 hover:text-white transition-colors">Color</Link></li>
                <li><Link href="/services#extensions" className="block py-2 hover:text-white transition-colors">Extensions</Link></li>
                <li><Link href="/bridal" className="block py-2 hover:text-white transition-colors">Bridal</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-1 text-primary-fixed/90 text-sm">
                <li><Link href="/" className="block py-2 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="block py-2 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/gallery" className="block py-2 hover:text-white transition-colors">Gallery</Link></li>
                <li><Link href="/contact" className="block py-2 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-6 text-center md:text-left">
            <p className="text-primary-fixed/70 text-sm">
              © {currentYear} Beauty by Raquel Nicole. Stay Groovy.
            </p>
          </div>
        </div>
      </footer>
    </ReviewSectionAnchor>
  );
};

export default Footer;
