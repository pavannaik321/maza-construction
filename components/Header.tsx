"use client"
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 shadow-md bg-white sticky top-0 z-50">
      <h1 className="font-bold text-xl text-gray-800">Maza Construction</h1>
      <nav className="space-x-6 text-sm font-semibold">
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <button className="bg-yellow-500 px-4 py-2 rounded text-white">Contact Us</button>
      </nav>
    </header>
  );
}
