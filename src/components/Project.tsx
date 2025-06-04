const projectData = [
  "/proj1.jpg",
  "/proj2.jpg",
  "/proj3.jpg",
  "/proj4.jpg"
];

export default function Projects() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Expertly Completed Projects</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {projectData.map((src, i) => (
          <div key={i} className="shadow rounded overflow-hidden">
            <img src={src} alt={`Project ${i + 1}`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h5 className="font-semibold text-lg">Title {i + 1}</h5>
              <p className="text-sm text-gray-600">We offer a comprehensive range of construction services.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
