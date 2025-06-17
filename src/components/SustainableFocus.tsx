const sustainabilityPoints = [
  {
    icon: "🌿",
    title: "Eco-Friendly Materials",
    desc: "Use of recycled, non-toxic materials that reduce environmental harm."
  },
  {
    icon: "☀️",
    title: "Solar Integration",
    desc: "Many of our builds include solar panels and energy-efficient designs."
  },
  {
    icon: "💧",
    title: "Water Conservation",
    desc: "Smart plumbing and rainwater harvesting systems integrated in key projects."
  },
  {
    icon: "🏢",
    title: "Green Building Standards",
    desc: "Following LEED & IGBC guidelines for all commercial projects."
  }
];

export default function SustainableFocus() {
  return (
    <section className="py-16 px-6 bg-green-50">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
        Building for a Greener Future
      </h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {sustainabilityPoints.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-green-700">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
