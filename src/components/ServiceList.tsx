import React from "react";

export default function ServicesList() {
  return (
    <section className="py-16 bg-white text-center">
      <h3 className="text-3xl font-bold text-yellow-500 mb-10">Our Services</h3>

      <div className="flex flex-wrap justify-center gap-6 px-6">
        {/* Card 1 */}
        <div className="w-60 rounded-xl overflow-hidden shadow-md border">
          <img
            src="/services/service1.jpg"
            alt="New Builds"
            className="w-full h-40 object-cover"
          />
          <div className="p-4 bg-white">
            <h4 className="text-lg font-semibold">New Builds</h4>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-60 rounded-xl overflow-hidden shadow-md border">
          <img
            src="/services/service2.jpg"
            alt="New Builds"
            className="w-full h-40 object-cover"
          />
          <div className="p-4 bg-white">
            <h4 className="text-lg font-semibold">New Builds</h4>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-60 rounded-xl overflow-hidden shadow-md border">
          <img
            src="/services/service3.jpg"
            alt="New Builds"
            className="w-full h-40 object-cover"
          />
          <div className="p-4 bg-white">
            <h4 className="text-lg font-semibold">New Builds</h4>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-60 rounded-xl overflow-hidden shadow-md border">
          <img
            src="/services/service4.jpg"
            alt="New Builds"
            className="w-full h-40 object-cover"
          />
          <div className="p-4 bg-white">
            <h4 className="text-lg font-semibold">New Builds</h4>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <button className="bg-yellow-500 text-white px-6 py-2 rounded-full font-medium hover:bg-yellow-600 transition">
          Get a free quote
        </button>
      </div>
    </section>
  );
}
