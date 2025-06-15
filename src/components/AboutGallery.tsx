import Image from 'next/image';
export default function AboutGallery() {
  return (
    <section className="bg-white py-16 px-6 bg-contain bg-center bg-no-repeat "
    style={{ backgroundImage: "url('/shape3.jpeg')" }}
        >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center animate-fade-in text-yellow-400 mt-6">Behind the Build</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mb-4">
          {['/image2.jpg', '/image3.jpg', '/image4.jpg', '/image5.jpg'].map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow transform transition-transform duration-500 hover:scale-105"
            >
              <Image src={src} alt={`Gallery ${index}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
