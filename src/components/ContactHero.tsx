'use client';

import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section
      className="relative bg-[url('/contact5.jpg')] bg-cover bg-center bg-no-repeat text-white min-h-[400px] md:min-h-[600px] flex items-center justify-center px-4 md:px-6"
    >
      {/* Overlay */}
      <div className="absolute inset-0 -z-0 bg-black/50" />

      {/* Content */}
      <div className="bg-black bg-opacity-80 rounded-2xl md:rounded-4xl px-4 py-6 md:px-10 md:py-10 relative z-10 max-w-full md:max-w-4xl text-center">
        <motion.h2
          className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          Let’s <span className="text-yellow-400">Build</span> Together
        </motion.h2>

        <motion.p
          className="text-sm md:text-lg text-gray-200 mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Got a project in mind? Reach out to Maza Construction — we are here to turn your ideas into reality.
        </motion.p>

        <motion.a
          href="#contact-form"
          whileHover={{ scale: 1.05 }}
          className="inline-block text-sm md:text-base bg-yellow-400 hover:bg-yellow-500 transition px-4 md:px-6 py-2 md:py-3 rounded-md md:rounded-lg text-black font-semibold shadow-md md:shadow-lg"
        >
          Send a Message
        </motion.a>
      </div>
    </section>
  );
}
