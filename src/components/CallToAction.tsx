import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-black text-yellow-400 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Bring Your Vision to Life?</h2>
      <p className="text-gray-300 mb-6">Partner with Maza Construction for reliable and aesthetic project delivery.</p>
      <Link
        href="/contact"
        className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition"
      >
        Contact Us
      </Link>
    </section>
  );
}
