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
    <section className="bg-gray-900 text-white py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
        {/* Left Side Content */}
        <div className="animate-fade-in-left space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-4xl font-bold leading-snug sm:leading-tight">
            We Build More Than Structures —{" "}
            <span className="text-yellow-400">We Build Trust</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300">
            Our journey in construction is defined by excellence, innovation,
            and reliability.
          </p>
          <div className="flex gap-3 sm:gap-4 flex-wrap">
            <button className="bg-yellow-400 text-black px-4 sm:px-6 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-semibold hover:bg-yellow-300 transition">
              Explore Projects
            </button>
            <button className="border border-yellow-400 px-4 sm:px-6 py-1.5 sm:py-2 rounded-md text-yellow-400 text-sm sm:text-base hover:bg-yellow-500 hover:text-black transition">
              Get a Quote
            </button>
          </div>
        </div>

        {/* Right Side - Image Slideshow */}
        <div className="relative w-full h-52 sm:h-72 rounded-xl overflow-hidden shadow-lg">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Slide ${i + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out rounded-xl ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-yellow-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-black text-xs sm:text-sm">
            200+ Projects Delivered
          </div>
        </div>
      </div>
    </section>
  );
}
