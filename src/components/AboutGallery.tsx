'use client';

import React, { useState } from 'react';
import WorkImageModal from './WorkImageModal';
import { WorkImage } from '@/data/workImageData';

const GALLERY_IMAGES: WorkImage[] = [
  {
    id: 'gallery-1',
    src: '/workimages/WhatsApp Image 2026-07-27 at 21.54.11.jpeg',
    title: 'Reinforced Wooden Formwork',
    category: 'Structural',
    description: 'Precision wooden shuttering and prop staging for concrete slab casting.',
  },
  {
    id: 'gallery-2',
    src: '/workimages/WhatsApp Image 2026-07-27 at 21.54.21.jpeg',
    title: 'Laterite Stone Masonry',
    category: 'Masonry',
    description: 'Traditional stone wall construction using natural red laterite blocks.',
  },
  {
    id: 'gallery-3',
    src: '/workimages/WhatsApp Image 2026-07-27 at 21.54.28.jpeg',
    title: 'Smooth Plaster Screeding',
    category: 'Plastering',
    description: 'Exterior wall plastering and straight-edge leveling by skilled craftsmen.',
  },
  {
    id: 'gallery-4',
    src: '/workimages/WhatsApp Image 2026-07-27 at 21.54.31 (1).jpeg',
    title: 'Custom Kitchen Counter Platform',
    category: 'Interiors',
    description: 'Cast concrete kitchen platform featuring integrated sink cutout and wall prep.',
  },
];

export default function AboutGallery() {
  const [activeImage, setActiveImage] = useState<WorkImage | null>(null);

  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-900 text-white font-lexend">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <span className="bg-yellow-400/20 text-yellow-400 text-xs font-semibold px-3.5 py-1 rounded-full mb-3 inline-block">
          On-Site Authenticity
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-8">
          Behind the <span className="text-yellow-400">Build</span>
        </h2>

        {/* Mobile View: Horizontal Scroll */}
        <div className="sm:hidden flex gap-4 overflow-x-auto hide-scrollbar px-1 mb-4">
          <style>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>

          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img)}
              className="min-w-[240px] h-[160px] flex-shrink-0 relative overflow-hidden rounded-xl shadow-lg border border-gray-800 cursor-pointer group"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3 text-left">
                <span className="text-yellow-400 text-xs font-bold">{img.title}</span>
                <span className="text-[10px] text-gray-300">{img.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Grid Layout */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-4">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img)}
              className="relative overflow-hidden rounded-xl shadow-lg border border-gray-800 cursor-pointer group h-64 bg-gray-800"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                <span className="bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded w-max mb-1">
                  {img.category}
                </span>
                <h4 className="text-sm font-bold text-white mb-1">{img.title}</h4>
                <p className="text-xs text-gray-300 line-clamp-2">{img.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WorkImageModal
        image={activeImage}
        onClose={() => setActiveImage(null)}
      />
    </section>
  );
}
