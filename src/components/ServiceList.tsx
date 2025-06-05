import React from "react";

export default function ServicesList() {
  return (
    <section className="py-16 bg-white text-center p-0">
      
      {/* Heading */}
      <h3 className="text-3xl font-bold mb-4">
        <span className="text-yellow-500">Our </span>
        <span className="text-black">Services</span>
      </h3>

      {/* Subheading */}
      <p className="max-w-2xl mx-auto text-gray-500 mb-12 px-4">
        maza Construction is a renowned name in the field of civil works,
        building renovation, construction, interior design, painting.
      </p>

      {/* Service Cards - Zigzag layout */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
  {/* Card 1 - UP */}
  <div className="w-56 mt-0 relative">
    <div className="rounded-2xl overflow-hidden shadow-md relative">
      <img 
        src="/download.jpeg"
        alt="New Builds"
        className="w-full h-56 object-cover"
      />
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-white text-black w-40 py-1 rounded-md text-sm font-medium text-center shadow">
        New Builds
      </div>
    </div>
  </div>

  {/* Card 2 - DOWN */}
  <div className="w-56 mt-10 relative">
    <div className="rounded-2xl overflow-hidden shadow-md relative">
      <img 
        src="/image2.jpg"
        alt="New Builds"
        className="w-full h-56 object-cover"
      />
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-white text-black w-40 py-1 rounded-md text-sm font-medium text-center shadow">
        New Builds
      </div>
    </div>
  </div>

  {/* Card 3 - UP */}
  <div className="w-56 mt-0 relative">
    <div className="rounded-2xl overflow-hidden shadow-md relative">
      <img 
        src="/image3.jpg"
        alt="New Builds"
        className="w-full h-56 object-cover"
      />
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-white text-black w-40 py-1 rounded-md text-sm font-medium text-center shadow">
        New Builds
      </div>
    </div>
  </div>

  {/* Card 4 - DOWN */}
  <div className="w-56 mt-10 relative">
    <div className="rounded-2xl overflow-hidden shadow-md relative">
      <img 
        src="/image4.jpg"
        alt="New Builds"
        className="w-full h-56 object-cover"
      />
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-white text-black w-40 py-1 rounded-md text-sm font-medium text-center shadow">
        New Builds
      </div>
    </div>
  </div>

  {/* Card 5 - UP */}
  <div className="w-56 mt-0 relative">
    <div className="rounded-2xl overflow-hidden shadow-md relative">
      <img 
        src="/image5.jpg"
        alt="New Builds"
        className="w-full h-56 object-cover"
      />
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-white text-black w-40 py-1 rounded-md text-sm font-medium text-center shadow">
        New Builds
      </div>
    </div>
  </div>
</div>

      {/* CTA Button */}
      <div className="mt-12">
        <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-medium shadow-md hover:bg-yellow-600 transition">
          Get a free quote
        </button>
      </div>
    </section>
  );
}
