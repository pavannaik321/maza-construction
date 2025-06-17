'use client';

import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <section className="relative bg-white min-h-[700px] w-full flex items-center justify-center px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl w-full bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white">

        {/* Left Image / Info Section */}
        <motion.div
          className="relative hidden lg:flex flex-col justify-center items-center bg-[url('/contact4.jpg')] bg-cover bg-center min-h-[700px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0 "></div>
          <div className="relative bg-black rounded-4xl z-10  text-center px-10">

          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Let us<span className="text-yellow-400"> Connect </span>
            </h2>
            <p className="text-lg text-gray-200">We are ready to build with you. Let us turn your vision into reality.</p>
          </div>
        </motion.div>

        
        <motion.div
          className="p-10 lg:p-14 bg-white/80 backdrop-blur-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Send us a <span className="text-yellow-400">Message</span>
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                required
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-transparent"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-600"
              >
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                required
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-transparent"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-600"
              >
                Your Email
              </label>
            </div>

            {/* Message (Full width) */}
            <div className="relative md:col-span-2">
              <textarea
                id="message"
                rows={6}
                required
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-transparent resize-none"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-600"
              >
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center mt-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-600 transition text-white font-semibold px-10 py-4 rounded-full shadow-lg"
              >
                <h3>🚀 Send Message</h3>
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
