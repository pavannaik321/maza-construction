"use client"
import { useState } from "react";

const questions = [
  "How Long Does A Typical Project Take",
  "Do You Offer Custom Builds?",
  "Are Consultations Free?",
  "Do You Provide Interior Designing?",
  "Do You Manage Permissions and Permits?"
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className={`
        py-20 px-4 text-white bg-cover bg-center bg-no-repeat 
        sm:bg-[url('/bgimage2.png')] sm:bg-white
      `}
      style={{
        backgroundSize: '1500px 500px',
      }}
    >
      <div className="max-w-3xl mx-auto bg-black sm:bg-transparent rounded-3xl sm:rounded-none border-4 border-white sm:border-0 p-6 sm:p-0">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center p-2 sm:p-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 max-w-2xl mx-auto">
          {questions.map((q, idx) => (
            <div key={idx} className="border border-gray-600 rounded overflow-hidden">
              <button
                className="w-full text-left px-4 py-3 font-medium text-sm sm:text-base"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {q}
              </button>
              {openIndex === idx && (
                <div className="px-4 py-3 text-sm bg-gray-800">
                  Our typical projects take 3–6 months depending on scope and customization.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
