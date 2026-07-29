'use client';

import React, { useState } from 'react';
import { WORK_IMAGES, WorkImage } from '@/data/workImageData';
import WorkImageModal from './WorkImageModal';
import { FaExpand, FaTag } from 'react-icons/fa';

const CATEGORIES = [
  'All',
  'Structural',
  'Masonry',
  'Plastering',
  'Interiors',
  'Materials & Equipment',
] as const;

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<WorkImage | null>(null);

  const filteredImages =
    selectedCategory === 'All'
      ? WORK_IMAGES
      : WORK_IMAGES.filter((img) => img.category === selectedCategory);

  return (
    <section className="py-16 px-4 bg-gray-50 md:px-10 text-center font-lexend">
      {/* Inject custom scrollbar-hide style */}
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
      <div className="max-w-3xl mx-auto mb-8">
        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">
          Authentic Site Portfolio
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold mb-3 text-gray-900">
          Real Construction <span className="text-yellow-500">Site Work</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-600">
          Explore actual photos from our active construction sites, featuring hands-on bricklaying, structural framing, plastering, and interior installations.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto px-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-yellow-400 text-gray-900 shadow-md scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-200 border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Mobile view - Horizontal Scroll */}
      <div className="sm:hidden flex overflow-x-auto gap-4 hide-scrollbar px-1 mb-10 scroll-smooth">
        {filteredImages.slice(0, 10).map((img) => (
          <div
            key={img.id}
            onClick={() => setActiveImage(img)}
            className="flex-shrink-0 w-72 relative rounded-xl shadow-md overflow-hidden bg-white cursor-pointer group border border-gray-100"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2 left-2 bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded">
                {img.category}
              </span>
            </div>
            <div className="p-3 text-left">
              <h5 className="font-bold text-xs text-gray-900 line-clamp-1 mb-1">
                {img.title}
              </h5>
              <p className="text-[11px] text-gray-500 line-clamp-2">
                {img.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Grid View */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            onClick={() => setActiveImage(img)}
            className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white cursor-pointer border border-gray-200 flex flex-col"
          >
            <div className="relative h-56 overflow-hidden bg-gray-100">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-yellow-400 text-black p-3 rounded-full shadow-lg">
                  <FaExpand className="text-sm" />
                </span>
              </div>
              <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-yellow-400 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                <FaTag className="text-[10px]" />
                {img.category}
              </span>
            </div>

            <div className="p-4 text-left flex-1 flex flex-col justify-between">
              <div>
                <h5 className="font-bold text-sm text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">
                  {img.title}
                </h5>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                  {img.description}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-gray-100 flex justify-between items-center text-[11px] text-gray-400">
                <span>Maza Construction Site</span>
                <span className="text-yellow-600 font-semibold group-hover:underline">View Photo &rarr;</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href="/contact"
        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3.5 rounded-xl shadow-md transition duration-300 text-sm sm:text-base"
      >
        Request a Free Site Quote
      </a>

      {/* Image Modal Lightbox */}
      <WorkImageModal
        image={activeImage}
        onClose={() => setActiveImage(null)}
      />
    </section>
  );
}
