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

      <div className="flex flex-col md:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto no-scrollbar px-1 md:px-0">
        {techTools.map((tool, idx) => (
          <div
            key={idx}
            className={`relative rounded-xl overflow-hidden shadow-xl transform transition-all duration-700 ${
              show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } w-full`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            {/* Background image */}
            <img
              src={tool.image}
              alt={tool.title}
              className="w-full h-48 md:h-64 object-cover"
            />

            {/* Merged title + description box */}
            <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 text-gray-700 rounded-lg px-3 md:px-4 py-3 shadow-md z-10">
              <h3 className="text-sm md:text-base font-semibold mb-1 flex items-center gap-2">
                <span className="text-lg md:text-xl">{tool.icon}</span>
                {tool.title}
              </h3>
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
