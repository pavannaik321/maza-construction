'use client';


export default function AboutGallery() {
  return (
    <section
      className={`py-16 px-4 sm:px-6 ${
        // Background only for medium screens and above
        'sm:bg-[url("/shape3.jpeg")] sm:bg-contain sm:bg-center sm:bg-no-repeat'
      } bg-white`}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-xl sm:text-3xl md:text-4xl text-black sm:text-white font-bold mb-6 sm:mb-4 p-2 sm:p-6">
          Behind the <span className="text-yellow-400">build</span>
        </h2>

        {/* Mobile View: Horizontal Scroll */}
        <div className="sm:hidden flex gap-4 overflow-x-auto hide-scrollbar px-1">
          <style>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>

          {['/image2.jpg', '/image3.jpg', '/image4.jpg', '/image5.jpg'].map((src, index) => (
            <div
              key={index}
              className="min-w-[200px] h-[140px] flex-shrink-0 overflow-hidden rounded-xl shadow transform transition-transform duration-500 hover:scale-105"
            >
              <img src={src} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Desktop View: Grid Layout */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-4">
          {['/image2.jpg', '/image3.jpg', '/image4.jpg', '/image5.jpg'].map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow transform transition-transform duration-500 hover:scale-105"
            >
              <img src={src} alt={`Gallery ${index}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
