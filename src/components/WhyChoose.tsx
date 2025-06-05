const features = [
  {
    title: "Commitment to Excellence",
    desc: "We offer a comprehensive range of construction services designed to meet hour needs.",
  },
  {
    title: "Comprehensive Communi...",
    desc: "We offer a comprehensive range of construction services designed to meet hour needs.",
  },
  {
    title: "Collaborative Approach",
    desc: "We offer a comprehensive range of construction services designed to meet hour needs.",
  },
  {
    title: "Customer Success",
    desc: "We offer a comprehensive range of construction services designed to meet hour needs.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative bg-white text-white py-20 px-4">
      <div
        className="max-w-7xl mx-auto px-4 pt-14 pb-20"
        style={{
          clipPath:
            "path('M0,20 Q0,0 20,0 H600 q30,0 40,-20 q10,20 40,20 H1000 Q1020,0 1020,20 V480 Q1020,500 1000,500 H600 q-20,0 -40,20 q-20,-20 -40,-20 H20 Q0,500 0,480 Z')",
          backgroundColor: "#0d0d0d",
        }}
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why choose <span className="text-yellow-400">Malasa Construction</span>?
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Malasa Construction is a renowned name in the field of civil works,
            building renovation, construction, interior design, painting.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#2a2a2a] rounded-xl px-6 py-6 text-left">
              <div className="text-gray-500 text-xl font-bold mb-2">
                0{index + 1}
              </div>
              <h4 className="text-white font-semibold text-base mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
