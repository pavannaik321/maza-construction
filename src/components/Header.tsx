'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
  ];

  return (
    <header className="bg-white font-lexend px-4 py-3 md:px-6 md:py-4">
      {/* Desktop View */}
      <div className="hidden md:flex w-full items-center justify-between">
        {/* Logo */}
        <div className="bg-gray-100 px-4 py-2 rounded-full font-semibold text-sm">
          Maza Construction
        </div>

        {/* Nav Links */}
        <nav className="bg-gray-100 px-4 py-2 rounded-full flex gap-6 text-sm">
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

        {/* Contact Button */}
        <Link
          href="/contact"
          className={`${
            pathname === '/contact'
              ? 'bg-yellow-600'
              : 'bg-yellow-500 hover:bg-yellow-600'
          } text-white font-medium text-sm px-5 py-2 rounded-md transition`}
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile View Nav */}
      <nav className="md:hidden mx-auto mt-2 bg-gray-100 px-4 py-1 rounded-full flex justify-center gap-4 text-xs w-fit">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-medium transition-colors ${
              pathname === link.href
                ? 'text-black'
                : 'text-gray-400 hover:text-black'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
