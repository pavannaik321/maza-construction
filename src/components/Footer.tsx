import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Socials */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src="/logo.png" alt="Logo" className="w-20 h-20 mb-4 rounded-full" />
          <p className="text-xs mb-4">YourCompany<br />Great Slogan Here</p>
          <div className="flex gap-3">
            <div className="bg-gray-100 p-2 rounded-md">
              <FaFacebookF className="text-xl" />
            </div>
            <div className="bg-gray-100 p-2 rounded-md">
              <FaInstagram className="text-xl" />
            </div>
            <div className="bg-gray-100 p-2 rounded-md">
              <FaYoutube className="text-xl" />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-600">
            
        <li><a href="#" className="hover:text-white transition">About Us</a></li>
        <li><a href="#" className="hover:text-white transition">services</a></li>
        <li><a href="#" className="hover:text-white transition">projects</a></li>
        <li><a href="#" className="hover:text-white transition">contact</a></li>
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

      {/* Bottom Bar */}
      <div className="bg-gray-100 text-center py-3 text-gray-600 text-xs mt-0">
        Designed & Developed by Techbite
      </div>
    </footer>
  );
}
