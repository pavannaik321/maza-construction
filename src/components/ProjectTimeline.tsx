"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="bg-white py-20 px-4 md:px-12 overflow-x-auto">
      <h3 className="text-2xl md:text-3xl font-bold text-center text-black mb-12 md:mb-16">
        Construction Execution Timeline
      </h3>

      <div className="relative max-w-full md:max-w-6xl mx-auto">
        {/* Desktop timeline line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-orange-200 z-0" />

        <div
          className={`relative z-10 flex ${
            isMobile
              ? "flex-row items-start gap-4 overflow-x-auto no-scrollbar px-1"
              : "flex-col md:flex-row items-center justify-between gap-10"
          }`}
        >
          {timeline.map((step, idx) => {
            const commonClasses = `${
              isMobile ? "min-w-[220px] flex-shrink-0" : "w-full md:w-1/5"
            } flex flex-col items-center relative ${
              !isMobile && (idx % 2 === 0 ? "mb-20" : "mt-20")
            }`;

            const card = (
              <div
                className={`relative bg-white border border-gray-200 p-4 md:p-5 rounded-xl w-full ${
                  !isMobile
                    ? "hover:shadow-xl transition-shadow duration-300 " +
                      (idx % 2 === 0 ? "mb-4" : "mt-4")
                    : ""
                }`}
              >
                {/* Badge only on desktop */}
                {!isMobile && (
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
                )}

                <h3 className="text-base md:text-lg font-semibold text-yellow-500 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{step.week}</p>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                  {step.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            );

            if (isMobile) {
              // Render plain div on mobile — no animation at all
              return (
                <div key={idx} className={commonClasses}>
                  {card}
                </div>
              );
            }

            // Animate only on desktop
            return (
              <motion.div
                key={idx}
                className={commonClasses}
                initial={{ opacity: 0, y: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
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
