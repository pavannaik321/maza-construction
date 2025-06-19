'use client';

export default function Testimonials() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-100">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-8 md:mb-10 leading-snug">
        Stories of Trust, Quality, and Commitment
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-xs md:text-sm text-center">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white p-4 md:p-6 shadow-md rounded-lg">
            <p className="mb-3">
              We offer a comprehensive range of construction services designed to meet your needs.
            </p>
            <p className="font-semibold">Priya Naik</p>
            <div className="text-yellow-400 mt-1 text-sm">★★★★★</div>
          </div>
        ))}
      </div>
    </section>
  );
}
