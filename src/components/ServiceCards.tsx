'use client';

export default function ServiceCards() {
  const services = [
    { title: 'Civil Construction', image: '/image5.jpg' },
    { title: 'Interior Designing', image: '/image2.jpg' },
    { title: 'Commercial Projects', image: '/image3.jpg' },
    { title: 'Turnkey Projects', image: '/image4.jpg' },
  ];

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-white font-lexend">
      {/* Title Section */}
      <div className="max-w-7xl mx-auto text-center mb-8 md:mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 mb-2 p-2 md:p-4">
          Our Services
        </h2>
        <p className="text-xs md:text-sm text-gray-600">
          We deliver innovative and customized solutions for every construction need.
        </p>
      </div>

      {/* Mobile: Horizontal Slide | Desktop: Grid */}
      <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto overflow-x-auto no-scrollbar px-1 sm:px-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="min-w-[220px] sm:min-w-0 relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 group flex-shrink-0"
          >
            {/* Background Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-44 md:h-60 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-black/80 text-yellow-400 text-center py-2 md:py-3 text-sm md:text-lg font-semibold">
              {service.title}
            </div>
          </div>
        ))}
      </div>

      {/* Hide scrollbar styling */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
