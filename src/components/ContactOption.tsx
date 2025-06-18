'use client';

import { FaPhoneAlt, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactOptions() {
  const cardVariants = {
    hover: {
      scale: 1.03,
      boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
    },
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 py-6 md:p-10 bg-gray-100 text-gray-800">
      {[
        {
          icon: <FaPhoneAlt className="text-lg md:text-2xl text-yellow-600 mt-1" />,
          title: "Talk to Sales",
          desc: "Interested in our services? Just pick up the phone to chat with a member of our team.",
          contact: "+91 98765 43210",
        },
        {
          icon: <FaHeadset className="text-lg md:text-2xl text-yellow-600 mt-1" />,
          title: "Customer Support",
          desc: "Need help or have a question? Our support team is here for you.",
          contact: "support@mazaconstruction.com",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="bg-white rounded-md md:rounded-lg p-4 md:p-6 shadow-md flex items-start gap-3 md:gap-4 cursor-pointer"
          whileHover="hover"
          variants={cardVariants}
        >
          {item.icon}
          <div>
            <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2">{item.title}</h3>
            <p className="text-sm md:text-base">{item.desc}</p>
            <p className="mt-1 md:mt-2 text-sm md:text-base font-medium text-yellow-700">{item.contact}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
