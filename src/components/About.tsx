'use client';

export default function About() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* Left Column */}
        <div>
          {/* Hide "About Us" in mobile */}
          <div className="hidden md:inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-4 py-1.5 rounded-md mb-3">
            About Us
          </div>

          <h2 className="text-xl md:text-3xl font-bold text-black mb-4 text-center md:text-left">
            What We Stand For
          </h2>

          <p className="text-xs md:text-sm text-gray-600 mb-6 leading-relaxed text-center md:text-left">
            Maza Construction is a renowned name in civil works, building renovation,
            structural construction, interior design, plastering, plumbing, and waterproofing services. With a
            commitment to hands-on craftsmanship and customer satisfaction, we deliver real solutions tailored
            to your site requirements.
          </p>

          {/* Mandar – only desktop */}
          <div className="hidden md:flex items-center gap-4 mt-6 p-3 bg-gray-50 rounded-xl border border-gray-100">
            <img
              src="/workimages/WhatsApp Image 2026-07-27 at 21.54.28 (2).jpeg"
              alt="Mandar - Maza Construction"
              className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
            />
            <div>
              <p className="text-black font-bold text-sm">Mandar</p>
              <p className="text-gray-500 text-xs">Founder, Maza Construction</p>
            </div>
          </div>
        </div>

        {/* Center Column – only desktop */}
        <div className="hidden md:flex flex-col items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white group">
            <img
              src="/workimages/WhatsApp Image 2026-07-27 at 21.54.27.jpeg"
              alt="On-Site Construction Work"
              className="w-[300px] h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white text-center">
              <p className="text-xs font-semibold text-yellow-400">Hands-on Quality Control</p>
              <p className="text-[11px] text-gray-200">On-site precision & plaster finishing</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Mobile View */}
          <div className="md:hidden flex flex-col items-center mb-6">
            <img
              src="/workimages/WhatsApp Image 2026-07-27 at 21.54.28 (2).jpeg"
              alt="Mandar - Founder"
              className="w-16 h-16 rounded-full object-cover mb-2 border-2 border-yellow-400"
            />
            <p className="text-black font-semibold text-sm">Mandar</p>
            <p className="text-gray-500 text-xs mb-4">Founder, Maza Construction</p>

            {/* Mission + Vision with Vertical Line */}
            <div className="flex w-full justify-between items-start gap-4 relative bg-gray-50 p-4 rounded-xl">
              {/* Mission */}
              <div className="flex-1 text-center text-xs px-2">
                <h4 className="text-sm font-semibold text-black mb-1">Our Mission</h4>
                <p className="text-gray-600">
                  Delivering top-tier civil construction and renovation with authentic materials and uncompromised structural integrity.
                </p>
              </div>

              {/* Vertical Divider */}
              <div className="w-px bg-gray-300 h-auto self-stretch" />

              {/* Vision */}
              <div className="flex-1 text-center text-xs px-2">
                <h4 className="text-sm font-semibold text-black mb-1">Our Vision</h4>
                <p className="text-gray-600">
                  To be the most trusted name for durable, modern, and transparent building construction across the region.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <h4 className="text-base font-bold text-black flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                Our Mission
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed">
                To build long-lasting structures with superior craftsmanship, utilizing real grade aggregates, precise brickwork, and clean finishing to make every client&apos;s dream space a reality.
              </p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <h4 className="text-base font-bold text-black flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                Our Vision
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed">
                To set standard-setting benchmarks in residential and commercial construction by combining traditional masonry skill with modern engineering precision.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal divider - only for desktop */}
      <hr className="hidden md:block my-8 border-gray-200" />
    </section>
  );
}
