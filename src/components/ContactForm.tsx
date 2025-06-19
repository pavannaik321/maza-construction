'use client';

import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function ContactForm() {
  return (
    <section className="w-full bg-white py-16 px-4 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl bg-white border border-gray-200 shadow-lg rounded-2xl p-8 md:p-10 text-center space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Let us <span className="text-yellow-500">Connect</span>
        </h2>

        <p className="text-sm md:text-base text-gray-600">
          We are ready to build with you. Reach out directly to start your project journey.
        </p>

        <div className="space-y-3 text-sm md:text-base text-gray-700">
          <div className="flex items-center justify-center gap-2">
            <FaPhoneAlt className="text-yellow-500" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-yellow-500" />
            <span>contact@mazaconstruction.com</span>
          </div>
        </div>

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition duration-300"
        >
          <FaWhatsapp /> Chat on WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
