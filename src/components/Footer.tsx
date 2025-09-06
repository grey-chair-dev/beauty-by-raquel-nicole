// src/components/Footer.tsx
'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, Calendar } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-text text-white section-transition">
      <div className="section-divider"></div>
      <div className="container-custom py-12">
        {/* Contact & Booking Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-heading text-xl font-bold mb-6">
              Get in Touch
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+15133302277" className="text-white hover:text-white transition-colors">
                  (513) 330-2277
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:beautybyraquelnicole@gmail.com" className="text-white hover:text-white transition-colors">
                  beautybyraquelnicole@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-white">212 Main St, Milford, OH 45150</span>
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
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-center">
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
              href="https://book.squareup.com/appointments/dliuybdwgxv87d/location/L81AYV9NYYW19/services?buttonTextColor=000000&color=e8b4b8&locale=en&referrer=so"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-accent font-bold px-8 py-4 rounded-lg inline-block hover:bg-accent hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              Book Your Appointment
            </a>
          </div>
        </div>

        {/* Navigation & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <ul className="space-y-2 text-body text-white/80">
              <li>
                <Link href="/services#haircuts" className="hover:text-white transition-colors">
                  Haircuts
                </Link>
              </li>
              <li>
                <Link href="/services#color" className="hover:text-white transition-colors">
                  Color
                </Link>
              </li>
              <li>
                <Link href="/services#extensions" className="hover:text-white transition-colors">
                  Extensions
                </Link>
              </li>
              <li>
                <Link href="/services#styling" className="hover:text-white transition-colors">
                  Styling
                </Link>
              </li>
              <li>
                <Link href="/services#treatments" className="hover:text-white transition-colors">
                  Treatments
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-body text-white/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/bridal" className="hover:text-white transition-colors">
                  Bridal Hair
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://book.squareup.com/appointments/dliuybdwgxv87d/location/L81AYV9NYYW19/services?buttonTextColor=000000&color=e8b4b8&locale=en&referrer=so" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Book Appointment
                </a>
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