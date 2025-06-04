
'use client';

import React, { JSX } from 'react';

export default function Hero(): JSX.Element {
  return (
    <section className="relative py-24 px-4 sm:px-8 bg-gradient-to-r from-yellow-100 via-white to-yellow-100 shadow-inner overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-gray-800 mb-4">
          Shaping Your Vision with <span className="text-yellow-500">Precision</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10">
          We build structures that reflect your dreams — strong, elegant, and lasting.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 transition px-6 py-3 rounded-full text-white font-semibold shadow-md">
            Get a Free Quote
          </button>
          <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-100 transition px-6 py-3 rounded-full font-semibold shadow-md">
            View Our Services
          </button>
        </div>
      </div>

      {/* Decorative Background Circles */}
      <div className="absolute top-[-50px] left-[-50px] w-96 h-96 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-96 h-96 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
}
