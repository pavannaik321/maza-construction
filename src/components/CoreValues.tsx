'use client';

import { FaTools, FaShieldAlt, FaLightbulb, FaUsers, FaClock, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const values = [
  { icon: <FaTools />, title: 'Craftsmanship', desc: 'Every cut, weld, and polish reflects our dedication to mastery.' },
  { icon: <FaShieldAlt />, title: 'Integrity', desc: 'We lead with honesty, build with trust, and deliver with ethics.' },
  { icon: <FaLightbulb />, title: 'Innovation', desc: 'Harnessing smart tech and bold ideas to shape the future.' },
  { icon: <FaUsers />, title: 'Teamwork', desc: 'Together, we engineer greatness — side by side.' },
  { icon: <FaClock />, title: 'Punctuality', desc: 'Because every moment counts in building dreams.' },
  { icon: <FaCogs />, title: 'Adaptability', desc: 'We pivot with purpose to meet every new challenge.' },
];

export default function CoreValues() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-gray-800">🏗️ Built on Unshakable Values</h2>
        <p className="text-sm sm:text-lg text-gray-600 mb-14 max-w-2xl mx-auto">
          At our core lies a deep commitment to principles that elevate every project — and every person.
        </p>

        <div
          className={`${
            isMobile
              ? 'flex flex-col gap-6 items-center'
              : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4'
          }`}
        >
          {values.map((val, index) => {
            const card = (
              <div
                key={index}
                className="w-full max-w-xs bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all sm:hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-yellow-100 text-yellow-500 text-2xl sm:text-3xl mb-4 shadow-md">
                  {val.icon}
                </div>
                <h3 className="text-base sm:text-xl font-semibold text-gray-800 mb-2">{val.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{val.desc}</p>
              </div>
            );

            return isMobile ? card : (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {card}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
