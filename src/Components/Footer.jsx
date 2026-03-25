import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import logo from "../assets/teenslogo.png";

const WHATSAPP_LINK = "https://chat.whatsapp.com/C5xbPYMDNbJ5IvP0zQgjOW";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-white pt-24 pb-12 overflow-hidden mt-20 border-t border-white/5">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[20rem] bg-orange-600/20 rounded-full blur-[120px] -z-10 pointer-events-none translate-y-[-50%]" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-red-800/20 rounded-full blur-[100px] -z-10 pointer-events-none translate-y-[50%]" />

      {/* Top Divider with Gradient Pulse */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* BRAND COLUMN */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start space-y-6">
            <div className="relative group inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full opacity-40 group-hover:opacity-75 blur-xl transition duration-500"></div>
              <div className="relative p-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <img
                  src={logo}
                  alt="Teens-Pray Logo"
                  className="h-28 w-28 md:h-32 md:w-32 object-cover rounded-full"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm text-center md:text-left">
              Teens-Pray is a faith-driven movement empowering exactly the generation of teenagers to deepen their relationship with God and shine as brilliant lights of Christ.
            </p>
          </div>

          {/* CONTACT LINKS */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 tracking-wide uppercase">
              Get in Touch
            </h3>
            <div className="space-y-4 text-gray-300 w-full flex flex-col items-center md:items-start text-sm md:text-base">
              <a
                href="mailto:teenspray01@gmail.com"
                className="group flex items-center gap-3 hover:text-white transition-colors p-2 -ml-2 rounded-lg hover:bg-white/5"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-orange-500/20">
                  <FaEnvelope className="text-orange-400" />
                </div>
                teenspray01@gmail.com
              </a>

              <a
                href="tel:09036857626"
                className="group flex items-center gap-3 hover:text-white transition-colors p-2 -ml-2 rounded-lg hover:bg-white/5"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-orange-500/20">
                  <FaWhatsapp className="text-orange-400" />
                </div>
                09036857626
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 hover:text-white transition-colors p-2 -ml-2 rounded-lg hover:bg-white/5"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-orange-500/20">
                  <FaWhatsapp className="text-orange-400" />
                </div>
                Join WhatsApp Group
              </a>
            </div>
          </div>

          {/* SOCIALS & NEWSLETTER */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 tracking-wide uppercase">
              Follow Us
            </h3>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Stay updated with our latest events and inspiration.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/teenspray01"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-orange-500 hover:to-red-500 hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all duration-300 group"
              >
                <FaInstagram className="text-2xl text-gray-300 group-hover:text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm font-medium">
          <p>© {new Date().getFullYear()} Teens-Pray. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
