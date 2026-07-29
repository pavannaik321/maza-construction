'use client';

import React, { useState } from 'react';
import { FaHome, FaTools, FaWater, FaThLarge, FaUtensils, FaExpand } from 'react-icons/fa';
import WorkImageModal from './WorkImageModal';
import { WorkImage } from '@/data/workImageData';

const projects = [
  {
    icon: <FaHome />,
    title: 'Structure & Slab Framing',
    desc: 'Wooden shuttering & prop staging for two-story residential building.',
    image: {
      id: 'recent-1',
      src: '/workimages/WhatsApp Image 2026-07-27 at 21.54.11.jpeg',
      title: 'Structure & Slab Framing',
      category: 'Structural' as const,
      description: 'Wooden shuttering & prop staging for two-story residential building.',
    },
  },
  {
    icon: <FaThLarge />,
    title: 'Laterite Stone Compound Wall',
    desc: 'Constructed secure, durable outer laterite wall with heavy mortar joints.',
    image: {
      id: 'recent-2',
      src: '/workimages/WhatsApp Image 2026-07-27 at 21.54.30.jpeg',
      title: 'Laterite Stone Compound Wall',
      category: 'Masonry' as const,
      description: 'Constructed secure, durable outer laterite wall with heavy mortar joints.',
    },
  },
  {
    icon: <FaTools />,
    title: 'Precision External Plastering',
    desc: 'Neat wall plastering using straight-edge screeding tools.',
    image: {
      id: 'recent-3',
      src: '/workimages/WhatsApp Image 2026-07-27 at 21.54.28.jpeg',
      title: 'Precision External Plastering',
      category: 'Plastering' as const,
      description: 'Neat wall plastering using straight-edge screeding tools.',
    },
  },
  {
    icon: <FaUtensils />,
    title: 'Kitchen Platform & Counter',
    desc: 'Concrete kitchen counter slab installation with undermount sink prep.',
    image: {
      id: 'recent-4',
      src: '/workimages/WhatsApp Image 2026-07-27 at 21.54.31 (1).jpeg',
      title: 'Kitchen Platform & Counter',
      category: 'Interiors' as const,
      description: 'Concrete kitchen counter slab installation with undermount sink prep.',
    },
  },
  {
    icon: <FaWater />,
    title: 'Wall Grooving & Piping',
    desc: 'Concealed channel cutting for electrical lines and plumbing pipes.',
    image: {
      id: 'recent-5',
      src: '/workimages/WhatsApp Image 2026-07-27 at 21.54.25.jpeg',
      title: 'Wall Grooving & Piping',
      category: 'Interiors' as const,
      description: 'Concealed channel cutting for electrical lines and plumbing pipes.',
    },
  },
  {
    icon: <FaTools />,
    title: 'Motorized Sand Processing',
    desc: 'On-site sifting machine filtering river sand for smooth plastering.',
    image: {
      id: 'recent-6',
      src: '/workimages/WhatsApp Image 2026-07-27 at 21.54.24.jpeg',
      title: 'Motorized Sand Processing',
      category: 'Materials & Equipment' as const,
      description: 'On-site sifting machine filtering river sand for smooth plastering.',
    },
  },
];

export default function RecentProjects() {
  const [activeImage, setActiveImage] = useState<WorkImage | null>(null);

  return (
    <section className="bg-gray-50 py-12 md:py-20 px-4 md:px-6 font-lexend">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">
          Recent Site Highlights
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
          Practical <span className="text-yellow-500">Execution & Milestones</span>
        </h2>
        <p className="text-xs md:text-sm text-gray-600">
          Real glimpses of craftsmanship and structural engineering delivered across active client sites.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100 flex flex-col justify-between group"
          >
            <div
              className="relative h-48 overflow-hidden cursor-pointer bg-gray-100"
              onClick={() => setActiveImage(project.image)}
            >
              <img
                src={project.image.src}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-yellow-400 text-black p-2.5 rounded-full shadow-md">
                  <FaExpand className="text-xs" />
                </span>
              </div>
              <div className="absolute top-3 left-3 bg-yellow-400 text-black p-2 rounded-full shadow-md">
                <span className="text-xs md:text-sm">{project.icon}</span>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {project.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center text-[11px] text-gray-400">
                <span className="font-medium text-gray-500">Maza Work Log</span>
                <button
                  onClick={() => setActiveImage(project.image)}
                  className="text-yellow-600 font-semibold hover:underline"
                >
                  View Full Image &rarr;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <WorkImageModal
        image={activeImage}
        onClose={() => setActiveImage(null)}
      />
    </section>
  );
}
