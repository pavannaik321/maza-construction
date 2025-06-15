'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'client name',
    role: 'CEO, Skyline Ventures',
    feedback: 'Maza Construction exceeded our expectations. Their attention to detail and timely delivery is unmatched!',
    image: '/test.jpeg',
  },
  {
    name: 'client name',
    role: 'Architect, DesignStudio',
    feedback: 'Collaborating with them was seamless. They brought our designs to life with perfection.',
    image: '/test.jpeg',
  },
  {
    name: 'client name',
    role: 'Site Supervisor, BuildIt Ltd.',
    feedback: 'Their professionalism and commitment to quality truly set them apart.',
    image: '/test.jpeg',
  },
];

export default function ClientTestimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const { name, role, feedback, image } = testimonials[current];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">What Our Clients Say</h2>

        <div className="bg-white p-8 rounded-xl shadow-lg relative">
          <FaQuoteLeft className="text-4xl text-yellow-400 absolute left-6 top-6" />
          <FaQuoteRight className="text-4xl text-yellow-400 absolute right-6 bottom-6" />

          <p className="text-lg italic text-gray-700 mb-6">{feedback}</p>

          <div className="flex items-center justify-center gap-4">
            <Image src={image} alt={name} className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400" />
            <div>
              <h4 className="text-md font-semibold text-gray-900">{name}</h4>
              <p className="text-sm text-gray-600">{role}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button onClick={prev} className="px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-black rounded-lg">Prev</button>
          <button onClick={next} className="px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-black rounded-lg">Next</button>
        </div>
      </div>
    </section>
  );
}
