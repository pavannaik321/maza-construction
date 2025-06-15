'use client';

export default function ServiceCards() {
  const services = [
    { title: 'Civil Construction', image: '/image5.jpg' },
    { title: 'Interior Designing', image: '/image2.jpg' },
    { title: 'Commercial Projects', image: '/image3.jpg' },
    { title: 'Turnkey Projects', image: '/image4.jpg' },
  ];

  return (
    <section className="py-16 px-6 bg-white font-lexend">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-yellow-400 mb-2 p-4">Our Services</h2>
        <p className="text-gray-600 text-sm">We deliver innovative and customized solutions for every construction need.</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 group"
          >
            {/* Background Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Static title overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-black/80 text-yellow-400 text-center py-3 text-lg font-semibold">
              {service.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
