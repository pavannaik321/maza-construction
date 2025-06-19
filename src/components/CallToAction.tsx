import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-black text-yellow-400 py-12 md:py-16 px-4 md:px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
        Ready to Bring Your Vision to Life?
      </h2>
      <p className="text-sm md:text-base text-gray-300 mb-5 md:mb-6">
        Partner with Maza Construction for reliable and aesthetic project delivery.
      </p>
      <Link
        href="/contact"
        className="inline-block bg-yellow-400 text-black font-semibold px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-md hover:bg-yellow-300 transition"
      >
        Contact Us
      </Link>
    </section>
  );
}
