import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="text-center py-10 md:py-16 bg-white">
      {/* Heading */}
      <h1 className="text-xl sm:text-2xl md:text-5xl font-bold leading-tight font-lexend px-4">
        <span className="text-yellow-500">Shaping</span> your vision <br />
        with <span className="text-yellow-500">precission</span>
      </h1>

      {/* Buttons side by side and close together */}
      <div className="mt-6 flex justify-center gap-3 px-4 sm:gap-4">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-5 py-2 rounded-md font-medium font-lexend text-xs sm:text-sm">
          Free Quote
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2 rounded-md font-medium font-lexend text-xs sm:text-sm">
          Services
        </button>
      </div>

      {/* Image */}
      <div className="mt-8 px-4">
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
          <img
            src="/shaped image.png"
            alt="City Skyline"
            className="w-full object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
