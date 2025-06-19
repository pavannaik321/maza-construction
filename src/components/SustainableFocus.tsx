'use client';
const sustainabilityPoints = [
  {
    icon: "🌿",
    title: "Eco-Friendly Materials",
    desc: "Use of recycled, non-toxic materials that reduce environmental harm.",
  },
  {
    icon: "☀️",
    title: "Solar Integration",
    desc: "Many of our builds include solar panels and energy-efficient designs.",
  },
  {
    icon: "💧",
    title: "Water Conservation",
    desc: "Smart plumbing and rainwater harvesting systems integrated in key projects.",
  },
  {
    icon: "🏢",
    title: "Green Building Standards",
    desc: "Following LEED & IGBC guidelines for all commercial projects.",
  },
];

export default function SustainableFocus() {
  return (
    <section className="py-12 px-4 md:px-6 bg-green-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-10 md:mb-12">
        Building for a Greener Future
      </h2>

      {/* Mobile: horizontal scroll | Desktop: grid layout */}
      <div className="md:grid md:grid-cols-4 gap-8 flex overflow-x-auto no-scrollbar space-x-4 md:space-x-0">
        {sustainabilityPoints.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-4 md:p-6 rounded-xl shadow hover:shadow-md transition text-center min-w-[240px] md:min-w-0 flex-shrink-0"
          >
            <div className="text-4xl md:text-5xl mb-3 md:mb-4">{item.icon}</div>
            <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-green-700">
              {item.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Scoped scrollbar hiding */}
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
