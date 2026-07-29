'use client';

import React from "react";

export default function ServicesList() {
  const serviceItems = [
    {
      title: "Civil Construction",
      image: "/workimages/WhatsApp Image 2026-07-27 at 21.54.20.jpeg",
      desc: "Full structural RCC work",
    },
    {
      title: "Stone & Brick Masonry",
      image: "/workimages/WhatsApp Image 2026-07-27 at 21.54.30.jpeg",
      desc: "Laterite & brick walling",
    },
    {
      title: "Precision Plastering",
      image: "/workimages/WhatsApp Image 2026-07-27 at 21.54.28.jpeg",
      desc: "Internal & external screed",
    },
    {
      title: "Kitchen & Counter Fitting",
      image: "/workimages/WhatsApp Image 2026-07-27 at 21.54.31 (1).jpeg",
      desc: "Granite platforms & sink",
    },
    {
      title: "Site Prep & Material Processing",
      image: "/workimages/WhatsApp Image 2026-07-27 at 21.54.24.jpeg",
      desc: "Sand screening & aggregates",
    },
  ];

  return (
    <section className="py-16 bg-white text-center font-lexend">
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
      <h3 className="text-xl sm:text-3xl md:text-4xl font-bold mb-3 px-4">
        <span className="text-yellow-500">Our Core </span>
        <span className="text-black">Services</span>
      </h3>

      {/* Subheading */}
      <p className="text-xs sm:text-base max-w-2xl mx-auto text-gray-600 mb-12 px-4">
        Maza Construction delivers turnkey civil solutions, building renovations, masonry, structural RCC work, plastering, plumbing, and site preparation.
      </p>

      {/* Mobile View - Horizontal Scroll */}
      <div className="sm:hidden overflow-x-auto flex gap-4 px-4 hide-scrollbar scroll-smooth">
        {serviceItems.map((item, idx) => (
          <div key={idx} className="flex-shrink-0 w-48 relative">
            <div className="rounded-xl overflow-hidden shadow-md relative group border border-gray-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/80 text-white p-2 text-[11px] font-bold text-center">
                <span className="text-yellow-400 block">{item.title}</span>
                <span className="text-[9px] text-gray-300 font-normal">{item.desc}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View - Staggered Card Grid */}
      <div className="hidden sm:flex flex-wrap justify-center gap-6 px-4 max-w-7xl mx-auto">
        {serviceItems.map((item, idx) => (
          <div
            key={idx}
            className={`w-56 relative ${idx % 2 === 1 ? 'mt-8' : 'mt-0'}`}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg relative group border border-gray-200 bg-white">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-3 text-center">
                <h4 className="text-sm font-bold text-yellow-400 mb-0.5">
                  {item.title}
                </h4>
                <p className="text-[11px] text-gray-200">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12">
        <a
          href="/contact"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black text-xs sm:text-sm px-7 py-3 rounded-full font-bold shadow-md transition duration-300"
        >
          Get a Free Site Estimate
        </a>
      </div>
    </section>
  );
}
