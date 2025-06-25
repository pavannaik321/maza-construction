'use client';

import {
  FaCouch,
  FaTools,
  FaDraftingCompass,
  FaBuilding,
} from 'react-icons/fa';
import { ReactElement } from 'react';

type Service = {
  icon: ReactElement;
  title: string;
  desc: string;
};

export default function ServiceAddons() {
  const services: Service[] = [
    {
      icon: <FaCouch />,
      title: 'Furniture Supply',
      desc: 'High-quality furnishing delivered to site or fit-out ready.',
    },
    {
      icon: <FaTools />,
      title: 'Tile Fitting & Plumbing',
      desc: 'Expert tile work, waterproofing, and plumbing integration.',
    },
    {
      icon: <FaDraftingCompass />,
      title: 'Plan & Land Survey',
      desc: 'Accurate plotting, mapping, and municipal approvals.',
    },
    {
      icon: <FaBuilding />,
      title: 'Aluminum & Glass Works',
      desc: 'Doors, partitions, and glass façade installations.',
    },
    {
      icon: <FaTools />,
      title: 'Fabrication & Electrical',
      desc: 'Welding, fitting, and certified electrical installations.',
    },
    {
      icon: <FaTools />,
      title: 'Consultation & Joint Ventures',
      desc: 'Partner with us for strategic property development.',
    },
  ];

  return (
    <section className="relative bg-white pt-12 pb-10 md:pt-16 md:pb-12 px-4 md:px-6 font-lexend overflow-visible">
      <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 mb-3 md:mb-4">
          Extended Services
        </h2>
        <p className="text-sm md:text-base text-gray-600">
          Add-ons and specialized services for comprehensive coverage.
        </p>
      </div>

      <div className="flex md:grid md:grid-cols-3 sm:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto overflow-x-auto overflow-y-visible no-scrollbar px-1 md:px-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="min-w-[250px] md:min-w-0 bg-gray-50 rounded-2xl shadow-md p-4 md:p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300 flex-shrink-0 mb-2"
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
