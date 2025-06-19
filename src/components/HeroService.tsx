'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroService() {
  return (
    <section className="relative">
      <div className="bg-white text-black py-16 md:py-20 px-4 md:px-20 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10">
          {/* Text Content */}
          <div>
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-5xl font-bold leading-snug md:leading-tight"
            >
              Shaping Landmarks with Quality & Expertise
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-sm md:text-lg text-black mt-4 md:mt-6"
            >
              Maza Construction delivers cutting-edge services in infrastructure, housing, and commercial projects with unmatched dedication and excellence.
            </motion.p>
            <motion.a
              href="/services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-block mt-6 md:mt-8 px-5 md:px-6 py-2.5 md:py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition text-sm md:text-base"
            >
              Explore Our Services
            </motion.a>
          </div>

          {/* Right: 2x2 Grid with Center Mini Image */}
          <div className="relative flex flex-col items-center gap-3 md:gap-6">
            {/* Top Image */}
            <div className="w-28 h-28 md:w-48 md:h-48 rounded-[20%] overflow-hidden shadow-lg">
              <Image
                src="/image5.jpg"
                alt="Top Image"
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Bottom Image */}
            <div className="w-28 h-28 md:w-48 md:h-48 rounded-[20%] overflow-hidden shadow-lg">
              <Image
                src="/image2.jpg"
                alt="Bottom Image"
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Center Overlay Image */}
            <div className="absolute top-1/2 left-[30%] md:left-30 w-28 h-28 md:w-48 md:h-48 -translate-y-1/2 -translate-x-1/3 z-10 rounded-[20%] overflow-hidden border-4 border-white shadow-xl bg-white">
              <Image
                src="/image3.jpg"
                alt="Center Overlay"
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hex-clip {
          clip-path: polygon(
            25% 5%, 75% 5%,
            100% 50%, 75% 95%,
            25% 95%, 0% 50%
          );
        }
      `}</style>
    </section>
  );
}
