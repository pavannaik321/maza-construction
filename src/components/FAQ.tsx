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
    <section className="bg-white text-white py-20 px-4 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/bgimage2.png')",
    backgroundSize: "1500px 500px",
   }}>
      <h2 className="text-3xl font-bold mb-10 text-center p-4">Frequently Asked Questions</h2>
      <div className="space-y-4 max-w-2xl mx-auto">
        {questions.map((q, idx) => (
          <div key={idx} className="border border-gray-600 rounded overflow-hidden">
            <button
              className="w-full text-left px-4 py-3 font-medium"
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
    </section>
  );
}
