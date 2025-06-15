'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function AboutStats() {
  const stats = [
    { target: 600, suffix: '+', label: 'Manpower With Key Expertise' },
    { target: 800, suffix: '+', label: 'Projects Successfully Completed' },
    { target: 99, suffix: '%', label: 'On-Time Delivery Assurance' },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];
          if (updated[index] < stat.target) {
            updated[index] += Math.ceil(stat.target / 50);
          } else {
            updated[index] = stat.target;
            clearInterval(intervals[index]);
          }
          return updated;
        });
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="bg-white py-18 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - 2x2 Image Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-y-1 gap-x-1">
        {/* Left Column */}
        <div className="flex flex-col gap-1">
          <Image
            src="/image5.jpg"
            alt="Image 1"
            className="rounded-xl w-42 h-38 object-cover shadow-md"
          />
          <Image
            src="/image2.jpg"
            alt="Image 2"
            className="rounded-xl w-42 h-38 object-cover shadow-md"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-1">
          <Image
            src="/image3.jpg"
            alt="Image 3"
            className="rounded-xl w-42 h-38 object-cover shadow-md"
          />
          <Image
            src="/image4.jpg"
            alt="Image 4"
            className="rounded-xl w-36 h-34 object-cover shadow-md"
            
          />
        </div>
      </div>


        {/* Right Side - Heading + Paragraph + Stats */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Take A Glimpse Into Our Construction Voyage</h2>
          <p className="text-gray-600 mb-6">
            A Trailblazer in the Construction Industry. Our journey spans 25+ states, 200+ cities, and countless successful structures.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-extrabold text-yellow-500 mb-1">
                  {counts[index]}
                  {stat.suffix}
                </h3>
                <p className="text-gray-700 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 