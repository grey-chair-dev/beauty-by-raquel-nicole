// src/components/Footer.tsx
'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, Calendar, MessageCircle } from 'lucide-react';
import WavyDivider from './WavyDivider';
import { BOOK_URL, INSTAGRAM_URL } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-text text-white section-transition">
      <WavyDivider variant="cream-dark" flip />
      <div className="section-divider" />
      <div className="container-custom py-8 sm:py-10 md:py-12">
        {/* Contact & Booking Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-heading text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              Get in Touch
            </h3>
            <p className="text-body text-white/90 mb-4">
              All inquiries go to my DMs — message me on Instagram!
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-medium px-4 py-3 rounded-lg mb-6 transition-colors touch-manipulation"
            >
              <MessageCircle className="w-5 h-5" />
              DM me on Instagram
            </a>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <a href="tel:+15133302277" className="flex items-center space-x-3 py-2 -mx-1 rounded-lg active:bg-white/10 touch-manipulation">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-white">(513) 330-2277</span>
              </a>
              <a href="mailto:beautybyraquelnicole@gmail.com" className="flex items-center space-x-3 py-2 -mx-1 rounded-lg active:bg-white/10 touch-manipulation break-all">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-white">beautybyraquelnicole@gmail.com</span>
              </a>
              <div className="flex items-start space-x-3 py-2">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white text-sm sm:text-base">212 Main St, Milford, OH 45150</span>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="text-heading font-semibold mb-3 flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Business Hours
              </h4>
              <div className="space-y-1 text-body text-white">
                <div className="flex justify-between">
                  <span>Tuesday - Friday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday - Monday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking CTA */}
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 sm:p-8 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-text" />
            </div>
            
            <h3 className="text-heading text-xl font-bold text-text mb-4">
              Book Online Now
            </h3>
            
            <p className="text-body text-text mb-6">
              Schedule your appointment today and experience the difference 
              professional hair styling services can make.
            </p>
            
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white font-bold px-6 py-4 rounded-lg inline-block w-full sm:w-auto text-center hover:bg-accentDark transition-all duration-300 min-h-[48px] flex items-center justify-center touch-manipulation"
            >
              Book Your Appointment
            </a>
          </div>
        </div>

        {/* Navigation & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Business Info */}
          <div className="lg:col-span-2">
            <h3 className="text-heading text-xl font-bold mb-4">
              Beauty by Raquel Nicole
            </h3>
            <p className="text-body text-white mb-6">
              Professional hair styling and color services in Milford, OH. 
              Enhancing your natural beauty with personalized care and 
              outstanding results.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/beauty_by_raquel_nicole/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100028195435498"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-1 sm:space-y-2 text-body text-white/80">
              <li>
                <Link href="/services#haircuts" className="block py-2 sm:py-1 hover:text-white transition-colors touch-manipulation">
                  Haircuts
                </Link>
              </li>
              <li>
                <Link href="/services#color" className="block py-2 sm:py-1 hover:text-white transition-colors touch-manipulation">Color</Link>
              </li>
              <li>
                <Link href="/services#extensions" className="block py-2 sm:py-1 hover:text-white transition-colors touch-manipulation">Extensions</Link>
              </li>
              <li>
                <Link href="/services#styling" className="block py-2 sm:py-1 hover:text-white transition-colors touch-manipulation">Styling</Link>
              </li>
              <li>
                <Link href="/services#treatments" className="block py-2 sm:py-1 hover:text-white transition-colors touch-manipulation">Treatments</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2 text-body text-white/80">
              <li>
                <Link href="/" className="block py-2 sm:py-1 hover:text-white transition-colors touch-manipulation">Home</Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 sm:py-1 hover:text-white transition-colors touch-manipulation">About</Link>
              </li>
              <li>
                <Link href="/gallery" className="block py-2 sm:py-1 hover:text-white transition-colors touch-manipulation">Gallery</Link>
              </li>
              <li>
                <Link href="/bridal" className="block py-2 sm:py-1 hover:text-white transition-colors touch-manipulation">Bridal Hair</Link>
              </li>
              <li>
                <Link href="/contact" className="block py-2 sm:py-1 hover:text-white transition-colors touch-manipulation">Contact</Link>
              </li>
              <li>
                <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="block py-2 sm:py-1 hover:text-white transition-colors touch-manipulation">Book Appointment</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-body text-white/60 mb-4 md:mb-0">
              © {currentYear} Beauty by Raquel Nicole. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;