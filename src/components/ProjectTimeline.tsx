"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    week: "Week 1",
    title: "Client Briefing",
    points: ["Understand requirements", "Site analysis", "Client goals"]
  },
  {
    week: "Week 2",
    title: "Design Planning",
    points: ["Create mockups", "Get design approval", "Finalize layout"]
  },
  {
    week: "Week 3",
    title: "Development",
    points: ["Foundation work", "Installations", "Core structure"]
  },
  {
    week: "Week 4",
    title: "Finishing",
    points: ["Interior setup", "Painting", "Fixtures"]
  },
  {
    week: "Week 5",
    title: "Handover",
    points: ["Quality check", "Client walkthrough", "Support"]
  }
];

export default function ProjectTimeline() {
  return (
    <section className="bg-white py-20 px-4 md:px-12 overflow-hidden">
      <h3 className="text-3xl font-bold text-center text-black mb-16">
        Construction Execution Timeline
      </h3>

      <div className="relative max-w-6xl mx-auto">
        {/* Base horizontal line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-orange-200 z-0" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          {timeline.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`w-full md:w-1/5 flex flex-col items-center relative ${
                idx % 2 === 0 ? "mb-20" : "mt-20"
              }`}
            >
              <div
                className={`relative bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-5 rounded-xl w-full ${
                  idx % 2 === 0 ? "mb-4" : "mt-4"
                }`}
              >
                {/* Number badge with animation */}
                <motion.div
                  animate={{ rotate: [0, 12, -12, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatDelay: 4,
                    duration: 2,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-5 -right-5 w-10 h-10 bg-yellow-400 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg border-4 border-white z-20"
                >
                  {idx + 1}
                </motion.div>

                <h3 className="text-lg font-semibold text-yellow-500 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{step.week}</p>
                <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                  {step.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
