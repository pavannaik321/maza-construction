export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <p>About Us</p>
          <p>Services</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Contact</h4>
          <p>+91 81990 4285</p>
          <p>mconstruction@gmail.com</p>
          <p>Madgao, Goa</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Follow Us</h4>
          <p>Facebook | Instagram | YouTube</p>
        </div>
      </div>
      <p className="text-center text-xs mt-6">Designed & Developed by Techbite</p>
    </footer>
  );
}
