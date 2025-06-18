'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
  ];

  return (
    <header className="bg-white font-lexend px-6 py-4 flex items-center justify-between md:px-6 md:py-4">
      {/* Logo */}
      <div className="bg-gray-100 px-4 py-2 rounded-full font-semibold text-sm">
        Maza Construction
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex bg-gray-100 px-4 py-2 rounded-full gap-6 text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-semibold transition-colors ${
              pathname === link.href
                ? 'text-black'
                : 'text-gray-400 hover:text-black'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Desktop Contact Button */}
      <Link
        href="/contact"
        className={`hidden md:inline-block ${
          pathname === '/contact'
            ? 'bg-yellow-600'
            : 'bg-yellow-500 hover:bg-yellow-600'
        } text-white font-medium text-sm px-5 py-2 rounded-md transition`}
      >
        Contact Us
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden text-2xl text-gray-700"
      >
        {isMobileOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu Panel */}
      {isMobileOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md border-t md:hidden z-50">
          <div className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium text-base ${
                  pathname === link.href
                    ? 'text-black'
                    : 'text-gray-400 hover:text-black'
                }`}
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`${
                pathname === '/contact'
                  ? 'bg-yellow-600'
                  : 'bg-yellow-500 hover:bg-yellow-600'
              } text-white font-medium text-base px-5 py-2 rounded-md transition text-center`}
              onClick={() => setIsMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
