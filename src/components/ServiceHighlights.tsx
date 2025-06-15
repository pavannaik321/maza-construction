'use client';

import {
  FaHardHat,
  FaTools,
  FaDraftingCompass,
  FaBuilding,
  FaPaintRoller,
  FaSolarPanel,
} from 'react-icons/fa';

export default function ServiceHighlights() {
  const services = [
    {
      icon: <FaHardHat />,
      title: 'Structural Works',
      desc: 'Built from the ground up with unmatched precision.',
    },
    {
      icon: <FaTools />,
      title: 'Renovation',
      desc: 'Upgrade old spaces with fresh design and utility.',
    },
    {
      icon: <FaDraftingCompass />,
      title: 'Design & Build',
      desc: 'Complete project execution under one expert roof.',
    },
    {
      icon: <FaBuilding />,
      title: 'Commercial Projects',
      desc: 'Future-ready commercial construction solutions.',
    },
    {
      icon: <FaPaintRoller />,
      title: 'Interior Works',
      desc: 'Stunning interiors that fuse style and function.',
    },
    {
      icon: <FaSolarPanel />,
      title: 'Sustainable Solutions',
      desc: 'Eco-friendly construction with energy-saving tech.',
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 font-lexend">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 mb-4">Our Core Services</h2>
        <p className="text-gray-600">Smart solutions for modern construction—from concept to completion.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
          >
            <div className="text-4xl text-yellow-400 bg-yellow-100 p-4 rounded-full mb-4 shadow">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
