'use client';

import { FaHome, FaTools, FaWater, FaThLarge, FaBath } from 'react-icons/fa';

const projects = [
  {
    icon: <FaHome />,
    title: 'Home Renovation',
    desc: 'Modern redesign with updated layout and finish.',
  },
  {
    icon: <FaThLarge />,
    title: 'Compound Wall',
    desc: 'Constructed secure and durable outer wall.',
  },
  {
    icon: <FaTools />,
    title: 'Tile Fitting',
    desc: 'Neat wall and floor tile installation.',
  },
  {
    icon: <FaWater />,
    title: 'Waterproofing',
    desc: 'Leak protection with coating & sealing.',
  },
  {
    icon: <FaBath />,
    title: 'Bathroom & Bedroom',
    desc: 'Full revamp with plumbing and interiors.',
  },
];

export default function RecentProjects() {
  return (
    <section className="bg-gray-50 py-10 md:py-20 px-4 md:px-6 font-lexend">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
        <h2 className="text-xl md:text-4xl font-bold text-yellow-400 mb-2 md:mb-4">
          Recent Projects
        </h2>
        <p className="text-xs md:text-base text-gray-600">
          Glimpses of practical, quality work we’ve delivered.
        </p>
      </div>

      {/* Timeline / Grid */}
      <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 md:p-6 relative border-l-4 border-yellow-400 hover:shadow-xl transition duration-300"
          >
            <div className="absolute -left-4 top-4 bg-yellow-400 text-white p-2 rounded-full shadow-sm">
              <span className="text-sm md:text-lg">{project.icon}</span>
            </div>
            <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-1 md:mb-2 pl-2">
              {project.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-600 pl-2">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
