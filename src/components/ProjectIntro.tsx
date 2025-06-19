"use client";

import { motion } from "framer-motion";

export default function ProjectIntro() {
  return (
    <section className="relative h-[50vh] md:h-[75vh] flex items-center justify-center bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/prjt3.jpg")' }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-3 md:px-4"
      >
        <h1 className="text-white text-2xl md:text-6xl font-bold mb-2 md:mb-4 drop-shadow-md">
          Building Landmarks That Last
        </h1>
        <p className="text-white/90 text-sm md:text-xl max-w-sm md:max-w-2xl mx-auto drop-shadow-sm">
          Our project portfolio reflects quality, innovation, and long-term trust.
        </p>
      </motion.div>
    </section>
  );
}
