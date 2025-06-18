'use client';

const projectData = [
  "/living area1.jpeg",
  "/living area2.jpeg",
  "/living area3.jpeg",
  "/living area4.jpeg"
];

export default function Projects() {
  return (
    <section className="py-16 px-4 bg-white md:px-10 text-center">
      {/* Inject custom scrollbar-hide style */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">
        Expertly Completed <span className="text-yellow-500">Projects</span>
      </h2>
      <p className="text-sm sm:text-base text-gray-500 mb-12">
        We offer a comprehensive range of construction services designed to meet your needs
      </p>

      {/* Mobile view - Horizontal Scroll */}
      <div className="sm:hidden flex overflow-x-auto gap-4 hide-scrollbar px-1 mb-12 scroll-smooth">
        {projectData.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-64 relative rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={src}
              alt={`Project ${i + 1}`}
              className="w-full h-48 object-cover transform transition-transform duration-500"
            />
            {/* Overlay Text Box */}
            <div className="absolute bottom-3 left-3 bg-white rounded-lg px-3 py-2 shadow-md">
              <h5 className="font-semibold text-xs text-black mb-1">Title {i + 1}</h5>
              <p className="text-[10px] text-gray-600">
                We offer a comprehensive range of construction
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Grid View */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {projectData.map((src, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={src}
              alt={`Project ${i + 1}`}
              className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay Text Box */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg px-4 py-3 shadow-md opacity-0 group-hover:opacity-100 transition duration-300">
              <h5 className="font-semibold text-sm text-black mb-1">Title {i + 1}</h5>
              <p className="text-xs text-gray-600">
                We offer a comprehensive range of construction
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-3 rounded-md transition duration-300 text-sm sm:text-base">
        Get a free quote
      </button>
    </section>
  );
}
