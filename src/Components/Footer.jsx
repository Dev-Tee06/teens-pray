import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import logo from "../assets/teenslogo.webp";

const WHATSAPP_LINK = "https://chat.whatsapp.com/C5xbPYMDNbJ5IvP0zQgjOW";

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-300 pt-24 pb-10 overflow-hidden mt-20">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[20rem] bg-orange-600/10 rounded-full blur-[120px] -z-10 pointer-events-none translate-y-[-50%]" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-red-800/10 rounded-full blur-[100px] -z-10 pointer-events-none translate-y-[50%]" />

      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* BRAND COLUMN */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start space-y-8">
            <div className="relative group inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition duration-500"></div>
              <div className="relative p-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <img loading="lazy"
                  src={logo}
                  alt="Teens-Pray Logo"
                  className="h-24 w-24 md:h-28 md:w-28 object-cover rounded-full"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed max-w-sm text-center md:text-left font-medium">
              Teens-Pray is a faith-driven movement empowering exactly the generation of teenagers to deepen their relationship with God and shine as brilliant lights of Christ.
            </p>
          </div>

          {/* CONTACT LINKS */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-[15px] font-bold text-white tracking-widest uppercase mb-2">
              Get in Touch
            </h3>
            <div className="space-y-4 w-full flex flex-col items-center md:items-start text-sm md:text-[15px] font-medium">
              <a
                href="mailto:teenspray01@gmail.com"
                className="group flex items-center gap-4 hover:text-white transition-colors py-1"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-orange-500/20 text-orange-400">
                  <FaEnvelope />
                </div>
                teenspray01@gmail.com
              </a>

              <a
                href="tel:09036857626"
                className="group flex items-center gap-4 hover:text-white transition-colors py-1"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-orange-500/20 text-orange-400">
                  <FaWhatsapp />
                </div>
                09036857626
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 hover:text-white transition-colors py-1"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-orange-500/20 text-orange-400">
                  <FaWhatsapp />
                </div>
                Join WhatsApp Group
              </a>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-[15px] font-bold text-white tracking-widest uppercase mb-2">
              Follow Us
            </h3>
            <p className="text-gray-400 text-sm text-center md:text-left font-medium leading-relaxed">
              Stay updated with our latest events and inspiration.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/teenspray01"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-400 hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all duration-300 group"
              >
                <FaInstagram className="text-xl text-gray-400 group-hover:text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm font-medium">
          <p>© {new Date().getFullYear()} Teens-Pray. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
