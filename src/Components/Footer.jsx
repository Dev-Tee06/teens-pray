import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import logo from "../assets/teenslogo.png"; // Teens-Pray logo

const WHATSAPP_LINK = "https://chat.whatsapp.com/C5xbPYMDNbJ5IvP0zQgjOW";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-black via-slate-900 to-red-900 text-white pt-20 pb-10 overflow-hidden">
      {/* Top Glow Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content */}
        <div className="grid gap-12 md:grid-cols-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 relative z-10">
          {/* BRANDING */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="relative">
              {/* Bright inner background circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400 via-red-500 to-yellow-400 z-0"></div>
              {/* Glow behind logo */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-orange-400 via-red-500 to-orange-500 opacity-50 blur-3xl z-10"></div>
              <img
                src={logo}
                alt="Teens-Pray"
                className="relative h-40 w-40 object-cover rounded-full border-4 border-yellow-400 shadow-[0_0_25px_rgba(255,165,0,0.7)] z-20"
              />
            </div>
            <p className="mt-2 text-white/70 text-sm leading-relaxed max-w-sm text-center md:text-left">
              Empowering teens to deepen their relationship with God and shine
              as lights of Christ in their generation.
            </p>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4">
              Get in Touch
            </h3>

            <div className="space-y-3 text-white/70 text-sm">
              <a
                href="mailto:teenspray01@gmail.com"
                className="flex items-center gap-3 hover:text-orange-400 transition"
              >
                <FaEnvelope className="text-orange-400" />
                teenspray01@gmail.com
              </a>

              <a
                href="tel:09036857626"
                className="flex items-center gap-3 hover:text-orange-400 transition"
              >
                <FaWhatsapp className="text-orange-400" />
                09036857626
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-orange-400 transition"
              >
                <FaWhatsapp className="text-orange-400" />
                Join WhatsApp
              </a>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect With Us
            </h3>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/teenspray01"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-orange-400 hover:text-black transition"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>

            <p className="mt-4 text-white/50 text-xs max-w-xs text-center md:text-left">
              Follow for updates, inspiration, and Teens-Pray community events.
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Teens-Pray. All rights reserved.
        </div>
      </div>

      {/* Optional Background Glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-red-900/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
    </footer>
  );
}
