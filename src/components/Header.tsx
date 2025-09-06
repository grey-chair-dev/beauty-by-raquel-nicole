'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

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
    <header className="sticky top-0 z-50 seamless-card border-b border-white/20">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div>
              <h1 className="text-heading text-xl md:text-2xl font-bold text-text">
                Beauty by Raquel Nicole
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="tel:+15133302277" className="flex items-center space-x-2 text-accent hover:text-text transition-colors">
              <Phone size={16} />
              <span className="text-sm font-medium">(513) 330-2277</span>
            </Link>
            <a href="https://book.squareup.com/appointments/dliuybdwgxv87d/location/L81AYV9NYYW19/services?buttonTextColor=000000&color=e8b4b8&locale=en&referrer=so" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-text hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-primary/20">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-body text-text hover:text-accent transition-colors duration-200 font-medium cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-primary/20">
                <Link href="tel:+15133302277" className="flex items-center space-x-2 text-accent hover:text-text transition-colors mb-4">
                  <Phone size={16} />
                  <span className="text-sm font-medium">(513) 330-2277</span>
                </Link>
                <a href="https://book.squareup.com/appointments/dliuybdwgxv87d/location/L81AYV9NYYW19/services?buttonTextColor=000000&color=e8b4b8&locale=en&referrer=so" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 