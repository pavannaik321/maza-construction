import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 text-sm">
      {/* Logo and Socials - Always Centered */}
      <div className="text-center py-8 md:hidden">
        <img src="/workimages/WhatsApp Image 2026-07-27 at 21.54.28 (2).jpeg" alt="Maza Construction" className="w-16 h-16 mx-auto mb-2 rounded-full object-cover border-2 border-yellow-400" />
        <p className="text-xs mb-4 font-lexend"><span className="font-bold text-gray-900">Maza Construction</span><br /><span className="text-gray-500">Shaping Your Vision With Precision</span></p>
        <div className="flex justify-center gap-3">
          <div className="bg-gray-100 p-2 rounded-md">
            <FaFacebookF className="text-xl text-gray-700" />
          </div>
          <div className="bg-gray-100 p-2 rounded-md">
            <FaInstagram className="text-xl text-gray-700" />
          </div>
          <div className="bg-gray-100 p-2 rounded-md">
            <FaYoutube className="text-xl text-gray-700" />
          </div>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid max-w-7xl mx-auto px-4 py-10 grid-cols-4 gap-8 text-left">
        {/* Logo + Socials */}
        <div>
          <img src="/workimages/WhatsApp Image 2026-07-27 at 21.54.28 (2).jpeg" alt="Maza Construction" className="w-16 h-16 mb-3 rounded-full object-cover border-2 border-yellow-400" />
          <p className="text-xs mb-4 font-lexend"><span className="font-bold text-base text-gray-900 block">Maza Construction</span><span className="text-gray-500">Shaping Your Vision With Precision</span></p>
          <div className="flex gap-3">
            <div className="bg-gray-100 p-2 rounded-md hover:bg-yellow-400 transition cursor-pointer">
              <FaFacebookF className="text-lg" />
            </div>
            <div className="bg-gray-100 p-2 rounded-md hover:bg-yellow-400 transition cursor-pointer">
              <FaInstagram className="text-lg" />
            </div>
            <div className="bg-gray-100 p-2 rounded-md hover:bg-yellow-400 transition cursor-pointer">
              <FaYoutube className="text-lg" />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/about" className="hover:text-black transition">About Us</a></li>
            <li><a href="/services" className="hover:text-black transition">Services</a></li>
            <li><a href="/projects" className="hover:text-black transition">Projects</a></li>
            <li><a href="/contact" className="hover:text-black transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-gray-600">
            <li>New Builds</li>
            <li>Knockdown Rebuilds</li>
            <li>Custom Builds</li>
            <li>Project Management</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact us</h4>
          <ul className="space-y-2 text-gray-600">
            <li>+9113909285</li>
            <li>mconstruction@gmail.com</li>
            <li>Madgao, Goa</li>
          </ul>
        </div>
      </div>

      {/* Mobile View Grid (Quick Links, Services, Contact in 3 Columns) */}
      <div className="md:hidden grid grid-cols-3 gap-4 px-4 text-center pb-10">
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-gray-600 text-xs">
            <li><a href="/about" className="hover:text-black transition">About Us</a></li>
            <li><a href="/services" className="hover:text-black transition">Services</a></li>
            <li><a href="/projects" className="hover:text-black transition">Projects</a></li>
            <li><a href="/contact" className="hover:text-black transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="space-y-1 text-gray-600 text-xs">
            <li>New Builds</li>
            <li>Knockdown</li>
            <li>Custom Builds</li>
            <li>Management</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Contact us</h4>
          <ul className="space-y-1 text-gray-600 text-xs">
            <li>+9113909285</li>
            <li className="break-all">mconstruction@gmail.com</li>
            <li>Madgao, Goa</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 text-center py-3 text-gray-600 text-xs">
        Designed & Developed by <a href="https://nthbuild.com">Nthbuild</a>
      </div>
    </footer>
  );
}
