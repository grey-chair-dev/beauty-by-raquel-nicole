'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { BOOK_URL } from '@/lib/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Gallery', href: '/gallery' },
    { name: 'Services', href: '/services' },
    { name: 'Bridal', href: '/bridal' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-bg shadow-[0_4px_0_0_#a43716]">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4 gap-2">
          <Link
            href="/"
            className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-primary tracking-tighter min-w-0 truncate"
            aria-label="Beauty by Raquel Nicole home"
          >
            Beauty by Raquel Nicole
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-label text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+15133302277"
              className="flex items-center gap-2 text-primary hover:text-accentDark transition-colors min-h-[44px] font-label text-sm font-semibold"
            >
              <Phone size={16} aria-hidden />
              (513) 330-2277
            </a>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-2 text-sm min-h-[44px]"
            >
              Book Appointment
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 -mr-2 text-primary min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t-2 border-primary/20 pb-4">
            <nav className="py-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3.5 font-label font-semibold text-on-surface-variant hover:text-primary transition-colors touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block mt-3 min-h-[48px] flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
