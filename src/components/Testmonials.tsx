export default function Testimonials() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Stories of Trust, Quality, and Commitment
      </h2>
      <div className="grid md:grid-cols-4 gap-6 text-sm text-center">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white shadow-md rounded-lg p-6">
            <p className="mb-4">We offer a comprehensive range of construction services designed to meet your needs. </p>
            <p className="font-semibold">Priya Naik</p>
            <div className="text-yellow-400 mt-1">★★★★★</div>
          </div>
        ))}
      </div>
    </section>
  );
}
