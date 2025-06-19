'use client';

export default function About() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* Left Column */}
        <div>
          {/* Hide "About Us" in mobile */}
          <div className="hidden md:inline-block bg-gray-100 text-s px-4 py-1 rounded-md text-gray-600 mb-3">
            About Us
          </div>

          <h2 className="text-xl md:text-3xl font-bold text-black mb-4 text-center md:text-left">
            What We Stand For
          </h2>

          <p className="text-xs md:text-sm text-gray-500 mb-6 leading-relaxed text-center md:text-left">
            maza Construction is a renowned name in the field of civil works, building renovation,
            construction, interior design, painting, plumbing, and waterproofing services. With a
            commitment to quality and customer satisfaction, we offer comprehensive solutions tailored
            to meet the diverse needs.
          </p>

          {/* Mandar – only desktop */}
          <div className="hidden md:flex items-center gap-4 mt-6">
            <img
              src="/download.jpeg"
              alt="Mandar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-black font-semibold text-sm">Mandar</p>
              <p className="text-gray-500 text-xs">Founder maza Construction</p>
            </div>
          </div>
        </div>

        {/* Center Column – only desktop */}
        <div className="hidden md:flex justify-center">
          <img
            src="/download.jpeg"
            alt="Construction Team"
            className="rounded-2xl shadow-xl w-[300px] h-[400px] max-w-sm object-cover"
          />
        </div>

        {/* Right Column */}
        <div>
          {/* Mobile View */}
          <div className="md:hidden flex flex-col items-center mb-6">
            <img
              src="/download.jpeg"
              alt="Company Logo"
              className="w-14 h-14 rounded-full object-cover mb-2"
            />
            <p className="text-black font-semibold text-sm">Mandar</p>
            <p className="text-gray-500 text-xs mb-4">Founder maza Construction</p>

            {/* Mission + Vision with Vertical Line */}
            <div className="flex w-full justify-between items-start gap-4 relative">
              {/* Mission */}
              <div className="flex-1 text-center text-xs px-2">
                <h4 className="text-sm font-semibold text-black mb-1">Our Mission</h4>
                <p className="text-gray-600">
                  maza Construction is a renowned name in the field of civil works, building renovation,
                  construction, interior design, painting.
                </p>
              </div>

              {/* Vertical Divider */}
              <div className="w-px bg-gray-400 h-auto" />

              {/* Vision */}
              <div className="flex-1 text-center text-xs px-2">
                <h4 className="text-sm font-semibold text-black mb-1">Our Vision</h4>
                <p className="text-gray-600">
                  maza Construction is a renowned name in the field of civil works, building renovation,
                  construction, interior design, painting.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="flex justify-center mb-6">
              <img
                src="/download.jpeg"
                alt="Company Logo"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-black">Our Mission</h4>
              <p className="text-gray-600 text-sm mt-2">
                maza Construction is a renowned name in the field of civil works, building renovation,
                construction, interior design, painting.
              </p>
            </div>
            <hr className="my-4" />
            <div>
              <h4 className="text-lg font-semibold text-black">Our Vision</h4>
              <p className="text-gray-600 text-sm mt-2">
                maza Construction is a renowned name in the field of civil works, building renovation,
                construction, interior design, painting.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal divider - only for desktop */}
      <hr className="hidden md:block my-4 mb-9" />
    </section>
  );
}
