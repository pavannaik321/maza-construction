'use client';

import React from "react";

export default function ServicesList() {
  const images = [
    "/download.jpeg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg",
  ];

  return (
    <section className="py-16 bg-white text-center p-0">
      {/* Inject custom CSS to hide scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Heading */}
      <h3 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 px-4">
        <span className="text-yellow-500">Our </span>
        <span className="text-black">Services</span>
      </h3>

      {/* Subheading */}
      <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-gray-500 mb-12 px-4">
        maza Construction is a renowned name in the field of civil works,
        building renovation, construction, interior design, painting.
      </p>

      {/* Mobile View - Horizontal Scroll */}
      <div className="sm:hidden overflow-x-auto flex gap-4 px-4 hide-scrollbar scroll-smooth">
        {images.map((img, idx) => (
          <div key={idx} className="flex-shrink-0 w-40 relative">
            <div className="rounded-xl overflow-hidden shadow-md relative">
              <img
                src={img}
                alt={`Service ${idx + 1}`}
                className="w-full h-36 object-cover"
              />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-black w-28 py-1 rounded text-xs font-medium text-center shadow">
                New Builds
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View - Zigzag Layout */}
      <div className="hidden sm:flex flex-wrap justify-center gap-6 px-4">
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
        <button className="bg-yellow-500 text-black text-sm sm:text-base px-6 py-2 rounded-full font-medium shadow-md hover:bg-yellow-600 transition">
          Get a free quote
        </button>
      </div>
    </section>
  );
}
