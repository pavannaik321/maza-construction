"use client";
import { useEffect, useState } from "react";

const techTools = [
  {
    icon: "🛠️",
    title: "Smart Tools & Drones",
    desc: "Monitoring construction using aerial drone surveillance and sensor tech.",
    image: "/image4.jpg",
  },
  {
    icon: "🏗️",
    title: "Automated Machinery",
    desc: "Robotic and CNC-driven equipment ensures speed and safety on site.",
    image: "/image2.jpg",
  },
  {
    icon: "📐",
    title: "3D Modeling & BIM",
    desc: "We use advanced BIM to plan every inch before a brick is laid.",
    image: "/image3.jpg",
  },
];

export default function TechInConstruction() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-16 px-4 md:px-12 bg-white overflow-hidden">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-10 md:mb-16">
        Technology in Construction
      </h2>

      {/* Mobile: horizontal scroll | Desktop: grid */}
      <div className="md:grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto flex overflow-x-auto no-scrollbar space-x-4 md:space-x-0 px-1 md:px-0">
        {techTools.map((tool, idx) => (
          <div
            key={idx}
            className={`relative rounded-xl overflow-hidden shadow-xl transform transition-all duration-700 ${
              show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } min-w-[270px] md:min-w-0 flex-shrink-0`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            {/* Background image */}
            <img
              src={tool.image}
              alt={tool.title}
              className="w-full h-48 md:h-64 object-cover"
            />

            {/* Gradient overlay (optional) */}
            <div className="absolute inset-0 bg-opacity-50" />

            {/* Floating icon + title */}
            <div className="absolute -top-1 left-3 bg-white rounded-full px-2 py-2 shadow-lg flex items-center gap-2">
              <div className="text-xl md:text-2xl">{tool.icon}</div>
              <h3 className="text-sm md:text-base font-semibold text-gray-700">
                {tool.title}
              </h3>
            </div>

            {/* Description box */}
            <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 text-gray-700 rounded-lg px-3 md:px-4 py-2 md:py-3 shadow-md z-10">
              <p className="text-xs md:text-sm">{tool.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Scoped scrollbar hiding */}
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
