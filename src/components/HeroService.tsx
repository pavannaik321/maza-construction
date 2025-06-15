'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroService() {
  return (
    <section className="relative">
      {/* Top half: Dark background */}
      <div className="bg-white text-black py-20 px-6 md:px-20 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Text Content */}
          <div>
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Shaping Landmarks with Quality & Expertise
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-black mt-6"
            >
              Maza Construction delivers cutting-edge services in infrastructure, housing, and commercial projects with unmatched dedication and excellence.
            </motion.p>
            <motion.a
              href="/services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-block mt-8 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition"
            >
              Explore Our Services
            </motion.a>
          </div>

          {/* Right: 2x2 Grid with Center Mini Image */}
<div className="relative flex flex-col items-center gap-4 md:gap-6">
  {/* Top Image */}
  <div className="w-40 h-40 md:w-48 md:h-48 rounded-[20%] overflow-hidden shadow-lg">
    <Image src="/image5.jpg" alt="Top Image" width={192} height={192} className="object-cover w-full h-full" />
  </div>

  {/* Bottom Image */}
  <div className="w-40 h-40 md:w-48 md:h-48 rounded-[20%] overflow-hidden shadow-lg">
    <Image src="/image2.jpg" alt="Bottom Image" width={192} height={192} className="object-cover w-full h-full" />
  </div>

  {/* Center Overlay Image - shifted to the left */}
  <div className="absolute top-1/2 left-30 w-40 h-40 md:w-48 md:h-48 -translate-y-1/2 -translate-x-1/3 z-10 rounded-[20%] overflow-hidden border-4 border-white shadow-xl bg-white">
    <Image src="/image3.jpg" alt="Center Overlay" width={192} height={192} className="object-cover w-full h-full" />
  </div>
</div>



</div>
      </div>

      {/* Bottom white background extension */}

      {/* ✅ Embedded CSS for Hexagon Shape */}
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
