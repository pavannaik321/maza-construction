import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="bg-gray-100 px-4 py-2 rounded-full font-semibold text-sm">
        maza Construction
      </div>

      {/* Navigation */}
      <nav className="bg-gray-100 px-4 py-2 rounded-full flex gap-6 text-s text-gray-500">
        <Link href="/" className="hover:text-black font-semibold text-black">Home</Link>
        <Link href="/about" className="hover:text-black">About Us</Link>
        <Link href="/services" className="hover:text-black">Services</Link>
        <Link href="/projects" className="hover:text-black">Projects</Link>
      </nav>

      {/* Contact Us Button */}
      <Link
        href="/contact"
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium text-sm px-5 py-2 rounded-md transition"
      >
        Contact Us
      </Link>
    </header>
  );
}
