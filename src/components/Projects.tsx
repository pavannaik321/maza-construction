const projectData = [
  "/living area1.jpeg",
  "/living area2.jpeg",
  "/living area3.jpeg",
  "/living area4.jpeg"
];

export default function Projects() {
  return (
    <section className="py-16 px-4 bg-white md:px-10 text-center">
      <h2 className="text-3xl font-bold mb-2">
        Expertly Completed <span className="text-yellow-500">Projects</span>
      </h2>
      <p className="text-gray-500 mb-12">
        We offer a comprehensive range of construction services designed to meet your needs
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
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
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-3 rounded-md transition duration-300">
        Get a free quote
      </button>
    </section>
  );
}
