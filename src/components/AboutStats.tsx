'use client';

import { useEffect, useState } from 'react';

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
    <section className="bg-white py-14 sm:py-18 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image Grid */}
        <div className="flex justify-center sm:justify-start">
          <div className="flex gap-1">
            {/* Left Column */}
            <div className="flex flex-col gap-1">
              <img
                src="/image5.jpg"
                alt="Image 1"
                className="rounded-xl w-28 h-28 sm:w-40 sm:h-38 object-cover shadow-md"
              />
              <img
                src="/image2.jpg"
                alt="Image 2"
                className="rounded-xl w-28 h-28 sm:w-40 sm:h-38 object-cover shadow-md"
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-1">
              <img
                src="/image3.jpg"
                alt="Image 3"
                className="rounded-xl w-28 h-28 sm:w-40 sm:h-38 object-cover shadow-md"
              />
              <img
                src="/image4.jpg"
                alt="Image 4"
                className="rounded-xl w-28 h-28 sm:w-40 sm:h-38 object-cover shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Text + Stats */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-800 mb-4">
            Take A Glimpse Into Our Construction Voyage
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            A Trailblazer in the Construction Industry. Our journey spans 25+ states,
            200+ cities, and countless successful structures.
          </p>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 justify-center sm:justify-start">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl sm:text-4xl font-extrabold text-yellow-500 mb-1">
                  {counts[index]}
                  {stat.suffix}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
