import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white relative z-10">
      {/* Background gradient and blur for glass effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-500/20 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Logo / Name */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-extrabold text-white">
            <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Teens-Pray
            </span>
          </h1>
          <p className="text-gray-200">
            Empowering teens to deepen their relationship with God and shine as
            lights of Christ.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg text-orange-400 mb-2">
            Quick Links
          </h3>
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:text-red-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-red-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="/programs" className="hover:text-red-500 transition">
                Programs
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-red-500 transition">
                Past Events
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-red-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg text-orange-400 mb-2">
            Connect With Us
          </h3>
          <div className="flex gap-4">
            <a
              href="https://www.youtube.com/@TeensPray01"
              className="p-2 rounded-full bg-red-600 hover:bg-red-500 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/teenspray01?igsh=MWo3NTdsOG9zZHRseg%3D%3D&utm_source=qr"
              className="p-2 rounded-full bg-orange-500 hover:bg-orange-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="text-gray-200 text-sm mt-4">
            📧 teenspray01@gmail.com <br />
            📞 09036857626
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Teens-Pray. All rights reserved.
      </div>
    </footer>
  );
}
