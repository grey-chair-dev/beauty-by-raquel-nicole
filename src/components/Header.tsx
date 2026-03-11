'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { BOOK_URL } from '@/lib/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Bridal', href: '/bridal' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 seamless-card border-b border-secondary/30 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 gap-2">
          <Link href="/" className="flex items-center min-w-0 flex-1">
            <h1 className="text-display text-base sm:text-xl md:text-2xl font-bold text-text truncate">
              Beauty by Raquel Nicole
            </h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-body text-text hover:text-accent transition-colors duration-200 font-medium cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="tel:+15133302277" className="flex items-center space-x-2 text-accent hover:text-accentDark transition-colors">
              <Phone size={16} />
              <span className="text-sm font-medium">(513) 330-2277</span>
            </Link>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Now
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 -mr-2 text-text hover:text-accent transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-primary/30 bg-white/95">
            <nav className="py-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-3.5 px-1 text-body text-text hover:text-accent transition-colors duration-200 font-medium cursor-pointer touch-manipulation active:bg-primary/20 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 pb-2 border-t border-primary/30 mt-2 space-y-2">
                <Link href="tel:+15133302277" className="flex items-center space-x-2 text-accent hover:text-accentDark transition-colors py-3 px-1 rounded-lg active:bg-primary/20 touch-manipulation">
                  <Phone size={20} />
                  <span className="text-base font-medium">(513) 330-2277</span>
                </Link>
                <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center block">
                  Book Now
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
