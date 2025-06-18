'use client';

import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <section className="relative bg-white min-h-[500px] md:min-h-[700px] w-full flex items-center justify-center px-4 py-10 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 max-w-full md:max-w-6xl w-full bg-white/60 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl overflow-hidden border border-white">
        
        {/* Left Image / Info Section - Hidden on Mobile */}
        <motion.div
          className="relative hidden lg:flex flex-col justify-center items-center bg-[url('/contact4.jpg')] bg-cover bg-center min-h-[500px] md:min-h-[700px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0" />
          <div className="relative bg-black rounded-xl md:rounded-4xl z-10 text-center px-6 md:px-10 py-6">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6">
              Let us <span className="text-yellow-400">Connect</span>
            </h2>
            <p className="text-sm md:text-lg text-gray-200">
              We are ready to build with you. Let us turn your vision into reality.
            </p>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="p-6 md:p-14 bg-white/80 backdrop-blur-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
            Send us a <span className="text-yellow-400">Message</span>
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                required
                placeholder=" "
                className="peer w-full px-3 pt-5 pb-2 border border-gray-300 rounded-md md:rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-transparent"
              />
              <label
                htmlFor="name"
                className="absolute left-3 top-2 text-gray-500 text-xs md:text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-yellow-600"
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
                className="peer w-full px-3 pt-5 pb-2 border border-gray-300 rounded-md md:rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-transparent"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-2 text-gray-500 text-xs md:text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-yellow-600"
              >
                Your Email
              </label>
            </div>

            {/* Message */}
            <div className="relative md:col-span-2">
              <textarea
                id="message"
                rows={5}
                required
                placeholder=" "
                className="peer w-full px-3 pt-5 pb-2 border border-gray-300 rounded-md md:rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-transparent resize-none"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-3 top-2 text-gray-500 text-xs md:text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-yellow-600"
              >
                Your Message
              </label>
            </div>

            {/* Button */}
            <div className="md:col-span-2 text-center mt-2 md:mt-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-600 transition text-white font-semibold text-sm md:text-base px-6 md:px-10 py-3 md:py-4 rounded-full shadow"
              >
                🚀 Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
