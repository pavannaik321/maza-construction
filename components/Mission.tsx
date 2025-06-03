export default function Mission() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <img
        src="/mission.jpg"
        alt="Our Mission"
        className="w-full h-64 object-cover rounded shadow"
      />
      <div>
        <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
        <p className="text-gray-700">
          Maza Construction is a renowned name in the field of civil works, building renovation,
          construction, interior design, and painting. We are committed to customer satisfaction,
          offering comprehensive solutions tailored to meet diverse needs.
        </p>
        <p className="mt-4 font-semibold">– Mandar, Founder</p>
      </div>
    </div>
  );
}
