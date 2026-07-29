'use client';


import { useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Rajesh Naik',
    role: 'Homeowner, Residential Villa Project',
    feedback: 'Maza Construction transformed our plot into a sturdy, beautifully finished home. Mandar and his team were hands-on from excavation to roof plastering!',
    image: '/workimages/WhatsApp Image 2026-07-27 at 21.54.28 (2).jpeg',
  },
  {
    name: 'Suresh Patil',
    role: 'Property Developer',
    feedback: 'Their laterite masonry work and concrete slab pouring were completed on schedule. Transparent aggregate sourcing and clean site management!',
    image: '/workimages/WhatsApp Image 2026-07-27 at 21.54.29 (1).jpeg',
  },
  {
    name: 'Anjali Shenoy',
    role: 'Home Renovation Client',
    feedback: 'The kitchen counter slab construction and wall tiling were done with extreme precision. Highly recommend Maza Construction for any civil work!',
    image: '/workimages/WhatsApp Image 2026-07-27 at 21.54.31 (1).jpeg',
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
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10">
          What Our Clients Say
        </h2>

        {/* Testimonial Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg relative">
          {/* Quote Icons - hidden on small screens */}
          <FaQuoteLeft className="text-4xl text-yellow-400 absolute left-6 top-6 hidden sm:block" />
          <FaQuoteRight className="text-4xl text-yellow-400 absolute right-6 bottom-6 hidden sm:block" />

          {/* Feedback Text */}
          <p className="text-base sm:text-lg italic text-gray-700 mb-6">{feedback}</p>

          {/* Client Info */}
          <div className="flex items-center justify-center gap-4">
            <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400" />
            <div>
              <h4 className="text-sm sm:text-md font-semibold text-gray-900">{name}</h4>
              <p className="text-xs sm:text-sm text-gray-600">{role}</p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button onClick={prev} className="px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-black rounded-lg">
            Prev
          </button>
          <button onClick={next} className="px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-black rounded-lg">
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
