export default function About() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="flex.flex-col md:flex-row max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* Left Column */}
        <div>
          <div className="inline-block bg-gray-100 text-xs px-4 py-1 rounded-full text-gray-600 mb-3">
            About Us
          </div>
          <h2 className="text-3xl font-bold text-black mb-4">What We Stand For</h2>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            Malasa Construction is a renowned name in the field of civil works, building renovation,
            construction, interior design, painting, plumbing, and waterproofing services. With a
            commitment to quality and customer satisfaction, we offer comprehensive solutions tailored
            to meet the diverse needs.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <img
              src="/download.jpeg"
              alt="Mandar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-black font-semibold text-sm">Mandar</p>
              <p className="text-gray-500 text-xs">Founder Malasa Construction</p>
            </div>
          </div>
        </div>

        {/* Center Column - Main Image */}
        <div className="flex justify-center">
          <img
            src="/download.jpeg"
            alt="Construction Team"
            className="rounded-2xl shadow-xl w-[3o0px] h-[400px] max-w-sm object-cover"
          />
        </div>

        {/* Right Column - Mission & Vision */}
        <div>
          <div className="flex justify-center mb-6">
            <img
              src="/logo.png"
              alt="Company Logo"
              className="w-20 h-20 object-contain"
            />
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-black">Our Mission</h4>
            <p className="text-gray-600 text-sm mt-2">
              Malasa Construction is a renowned name in the field of civil works, building renovation,
              construction, interior design, painting.
            </p>
          </div>
          <hr className="my-4" />
          <div>
            <h4 className="text-lg font-semibold text-black">Our Vision</h4>
            <p className="text-gray-600 text-sm mt-2">
              Malasa Construction is a renowned name in the field of civil works, building renovation,
              construction, interior design, painting.
            </p>
          </div>
        </div>
        
      </div>
      <hr className="my-4" />
    </section>
  );
}
