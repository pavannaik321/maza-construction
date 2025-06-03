const features = [
  {
    title: "Commitment to Excellence",
    desc: "We offer comprehensive services tailored to meet your needs."
  },
  {
    title: "Comprehensive Communication",
    desc: "You’ll always be updated and involved during every step."
  },
  {
    title: "Collaborative Approach",
    desc: "We work together with you to bring your vision to life."
  },
  {
    title: "Customer Success",
    desc: "Satisfaction is our highest priority and promise."
  }
];

export default function WhyChoose() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Why choose <span className="text-yellow-500">Maza Construction</span>?
      </h2>
      <div className="grid md:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">{f.title}</h4>
            <p className="text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
