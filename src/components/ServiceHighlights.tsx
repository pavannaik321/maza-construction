'use client';

import {
  FaHardHat,
  FaTools,
  FaDraftingCompass,
  FaBuilding,
  FaPaintRoller,
  FaSolarPanel,
} from 'react-icons/fa';
import { ReactElement } from 'react';

type Service = {
  icon: ReactElement;
  title: string;
  desc: string;
};

export default function ServiceHighlights() {
  const services: Service[] = [
    {
      icon: <FaHardHat />,
      title: 'Structural Works',
      desc: 'Built from the ground up with unmatched precision.',
    },
    {
      icon: <FaTools />,
      title: 'Renovation',
      desc: 'Transform and update existing spaces with expert craftsmanship.',
    },
    {
      icon: <FaDraftingCompass />,
      title: 'Design & Build',
      desc: 'Full lifecycle support, from planning to delivery.',
    },
    {
      icon: <FaBuilding />,
      title: 'Material Supply',
      desc: 'Supplying essentials including AAC blocks and more.',
    },
    {
      icon: <FaPaintRoller />,
      title: 'Painting & Finishing',
      desc: 'Interior and exterior painting for every surface type.',
    },
    {
      icon: <FaSolarPanel />,
      title: 'Sustainable Solutions',
      desc: 'Green energy tech and environment-friendly designs.',
    },
  ];

  return (
    <section className="bg-gray-100 py-12 md:py-16 px-4 md:px-6 font-lexend">
      <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 mb-3 md:mb-4">
          Featured Services
        </h2>
        <p className="text-sm md:text-base text-gray-600">
          Specializing in structural to sustainable innovations.
        </p>
      </div>

      <div className="flex md:grid md:grid-cols-3 sm:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto overflow-x-auto no-scrollbar px-1 md:px-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="min-w-[250px] md:min-w-0 bg-white rounded-2xl shadow-md p-4 md:p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300 flex-shrink-0"
          >
            <div className="text-2xl md:text-4xl text-yellow-400 bg-yellow-100 p-3 md:p-4 rounded-full mb-3 md:mb-4 shadow">
              {service.icon}
            </div>
            <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">
              {service.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
