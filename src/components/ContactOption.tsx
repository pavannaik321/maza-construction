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
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10 bg-gray-100 text-gray-800">
      {[{
        icon: <FaPhoneAlt className="text-2xl text-yellow-600 mt-1" />,
        title: "Talk to Sales",
        desc: "Interested in our services? Just pick up the phone to chat with a member of our team.",
        contact: "+91 98765 43210"
      }, {
        icon: <FaHeadset className="text-2xl text-yellow-600 mt-1" />,
        title: "Customer Support",
        desc: "Need help or have a question? Our support team is here for you.",
        contact: "support@mazaconstruction.com"
      }].map((item, i) => (
        <motion.div
          key={i}
          className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4 cursor-pointer"
          whileHover="hover"
          variants={cardVariants}
        >
          {item.icon}
          <div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p>{item.desc}</p>
            <p className="mt-2 font-medium text-yellow-700">{item.contact}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
