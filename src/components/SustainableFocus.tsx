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

      {/* Mobile: vertical stack | Desktop: grid layout */}
      <div className="flex flex-col gap-4 md:grid md:grid-cols-4 md:gap-8">
        {sustainabilityPoints.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-4 md:p-6 rounded-xl shadow hover:shadow-md transition text-center"
          >
            <div className="text-4xl md:text-5xl mb-3 md:mb-4">{item.icon}</div>
            <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-green-700">
              {item.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
