'use client';

import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section
      className="relative bg-[url('/contact5.jpg')] bg-cover bg-center bg-no-repeat text-white min-h-[600px] flex items-center justify-center px-6"
    >
      {/* Overlay */}
      <div className="absolute inset-0 -6 z-0" />

      {/* Content */}
      <div className=" bg-black rounded-4xl px-10 py-5 relative z-10 max-w-4xl text-center">
        <motion.h2
          className="text-5xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Lets <span className="text-yellow-400">Build</span> Together
        </motion.h2>

        <motion.p
          className="text-lg text-gray-200 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Got a project in mind? Reach out to Maza Construction — we are here to turn your ideas into reality.
        </motion.p>

        <motion.a
          href="#contact-form"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-yellow-400 hover:bg-yellow-500 transition px-6 py-3 rounded-lg text-black font-semibold shadow-lg"
        >
          Send a Message
        </motion.a>
      </div>
    </section>
  );
}
