"use client";
import { useEffect, useState } from "react";

const techTools = [
  {
    icon: "🛠️",
    title: "Smart Tools & Drones",
    desc: "Monitoring construction using aerial drone surveillance and sensor tech.",
    image: "/image4.jpg"
  },
  {
    icon: "🏗️",
    title: "Automated Machinery",
    desc: "Robotic and CNC-driven equipment ensures speed and safety on site.",
    image: "/image2.jpg"
  },
  {
    icon: "📐",
    title: "3D Modeling & BIM",
    desc: "We use advanced BIM to plan every inch before a brick is laid.",
    image: "/image3.jpg"
  }
];

export default function TechInConstruction() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-20 px-4 md:px-12 bg-white overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
        Technology in Construction
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {techTools.map((tool, idx) => (
          <div
            key={idx}
            className={`relative rounded-xl overflow-hidden shadow-xl transform transition-all duration-700 ${
              show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            {/* Background image */}
            <img
              src={tool.image}
              alt={tool.title}
              className="w-full h-64 object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-opacity-50" />

            {/* Floating icon + title box */}
            <div className="absolute -top-7 left-6 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2 z-20">
              <div className="text-2xl">{tool.icon}</div>
              <h3 className="text-base font-semibold text-gray-700">{tool.title}</h3>
            </div>

            {/* White description box inside image */}
            <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 text-gray-700 rounded-lg px-4 py-3 shadow-md z-10">
              <p className="text-sm">{tool.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
