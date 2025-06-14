'use client';
import { useEffect, useState } from "react";

const images = [
  "/image5.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
];

export default function HeroAbout() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Content */}
        <div className="animate-fade-in-left space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            We Build More Than Structures —{" "}
            <span className="text-yellow-400">We Build Trust</span>
          </h1>
          <p className="text-gray-300">
            Our journey in construction is defined by excellence, innovation,
            and reliability.
          </p>
          <div className="flex gap-4">
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-300 transition">
              Explore Projects
            </button>
            <button className="border border-yellow-400 px-6 py-2 rounded-md text-yellow-400 hover:bg-yellow-500 hover:text-black transition">
              Get a Quote
            </button>
          </div>
        </div>

        {/* Right Side - Image Slideshow */}
        <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Slide ${i + 1}`}
              className={`absolute w-200 h-full object-cover transition-opacity duration-0.6s ease-in-out rounded-xl ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute bottom-4 right-4 bg-yellow-400 px-4 py-2 rounded-lg font-semibold text-black text-sm">
            200+ Projects Delivered
          </div>
        </div>
      </div>
    </section>
  );
}
