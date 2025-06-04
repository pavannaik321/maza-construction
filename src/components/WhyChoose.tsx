const features = [
  {
    title: "Commitment to Excellence",
    desc: "We offer a comprehensive range of construction services designed to meet your needs."
  },
  {
    title: "Comprehensive Communication",
    desc: "We offer a comprehensive range of construction services designed to meet your needs."
  },
  {
    title: "Collaborative Approach",
    desc: "We offer a comprehensive range of construction services designed to meet your needs."
  },
  {
    title: "Customer Success",
    desc: "We offer a comprehensive range of construction services designed to meet your needs."
  }
];

export default function WhyChoose() {
  return (
    <section className="relative bg-black text-white pt-24 pb-16 px-6">
      {/* Top SVG cut (same as in image) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Why choose <span className="text-yellow-400">Maza Construction</span>?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl px-6 py-10 border border-gray-700"
            >
              <div className="text-3xl font-bold text-white mb-3">
                0{index + 1}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
