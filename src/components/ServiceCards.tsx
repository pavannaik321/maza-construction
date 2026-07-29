'use client';

export default function ServiceCards() {
  const services = [
    {
      title: 'Civil Construction',
      image: '/workimages/WhatsApp Image 2026-07-27 at 21.54.20.jpeg',
      desc: 'RCC structural frame casting, columns, beams, and foundation work.',
    },
    {
      title: 'Masonry & Wall Work',
      image: '/workimages/WhatsApp Image 2026-07-27 at 21.54.30.jpeg',
      desc: 'Laterite stone & red brick wall construction with high-strength mortar.',
    },
    {
      title: 'Precision Plastering',
      image: '/workimages/WhatsApp Image 2026-07-27 at 21.54.28.jpeg',
      desc: 'Smooth internal and external wall cement plastering and screeding.',
    },
    {
      title: 'Kitchen & Counter Slabs',
      image: '/workimages/WhatsApp Image 2026-07-27 at 21.54.31 (1).jpeg',
      desc: 'Granite and concrete kitchen platforms with integrated sink fittings.',
    },
    {
      title: 'House Renovation',
      image: '/workimages/WhatsApp Image 2026-07-27 at 21.54.26 (1).jpeg',
      desc: 'Complete wall revamping, window enlargement, and structural modification.',
    },
    {
      title: 'Site Prep & Materials',
      image: '/workimages/WhatsApp Image 2026-07-27 at 21.54.24.jpeg',
      desc: 'Motorized sand screening, gravel delivery, and raw material batching.',
    },
  ];

  return (
    <section className="py-12  md:py-16 px-2 md:px-4 bg-white font-lexend">
      {/* Title Section */}
      <div className="max-w-7xl mx-auto text-center mb-8 md:mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 mb-2 p-2 md:p-4">
          Featured Services
        </h2>
        <p className="text-xs md:text-sm text-gray-600">
          Our most requested services for construction and interior excellence.
        </p>
      </div>

      {/* Mobile: Horizontal Slide | Desktop: Grid */}
      <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto overflow-x-auto no-scrollbar px-1 sm:px-0">
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
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/75 to-transparent text-white p-3 md:p-4 text-center transition-all duration-300">
              <h3 className="text-yellow-400 text-sm md:text-lg font-bold mb-1">
                {service.title}
              </h3>
              <p className="text-[11px] md:text-xs text-gray-300 opacity-90 line-clamp-2">
                {service.desc}
              </p>
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
