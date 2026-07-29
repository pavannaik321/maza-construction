import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="text-center py-10 md:py-16 bg-white">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
        <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
        100% Authentic Work Site Photos
      </div>

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight font-lexend px-4">
        <span className="text-yellow-500">Shaping</span> your vision <br />
        with <span className="text-yellow-500">precision</span>
      </h1>

      {/* Buttons side by side */}
      <div className="mt-6 flex justify-center gap-3 px-4 sm:gap-4">
        <a
          href="/contact"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-5 py-2.5 rounded-md font-medium font-lexend text-xs sm:text-sm transition duration-200"
        >
          Free Quote
        </a>
        <a
          href="/services"
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2.5 rounded-md font-medium font-lexend text-xs sm:text-sm transition duration-200"
        >
          Explore Services
        </a>
      </div>

      {/* Featured Real Site Image Banner */}
      <div className="mt-8 px-4">
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-xl group">
          <img
            src="/workimages/WhatsApp Image 2026-07-27 at 21.54.20.jpeg"
            alt="Maza Construction Active Site Progress"
            className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10 text-left text-white">
            <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full w-max mb-2">
              Featured Project Site
            </span>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-1 font-lexend">
              Real Craftsmanship, On-Site Excellence
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 max-w-2xl">
              From structural RCC frames and laterite stone masonry to smooth interior plastering and kitchen fitting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
