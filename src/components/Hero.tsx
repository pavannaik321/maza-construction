import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="text-center py-12 bg-white ">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold leading-tight font-lexend">
        <span className="text-yellow-500 ">Shaping</span> your vision <br />
        with <span className="text-yellow-500">precission</span>
      </h1>

      {/* Buttons */}
      <div className="mt-6 flex justify-center gap-4 mb-0">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded-md font-medium font-lexend">
          Free Quote
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-md font-medium font-lexend">
          Services
        </button>
      </div>
      {/* Image with custom clip path */}
      <div className="mt-0 px-4 ">
        <div
          className="relative w-full max-w-7xl mx-auto overflow-hidden"
          
        >
          <img
            src="/shaped image.png" // Place this image in your public/ folder
            alt="City Skyline"
            className="w-full object-cover"
            width={500}
            height={100}
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;
