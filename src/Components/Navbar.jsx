import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import teenlogo from "../assets/teenlogo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Past Events", path: "/past-events" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/80 backdrop-blur-xl shadow-sm py-2 border-b border-gray-100/50"
        : "bg-transparent py-3"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 z-50 relative shrink-0" onClick={() => setOpen(false)}>
          <img src={teenlogo} alt="Teens Pray Logo" className="h-19 md:h-17 w-auto object-contain drop-shadow-sm transition-transform hover:scale-105" />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-8 bg-white/40 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/60 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)]">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-semibold px-3 py-1.5 transition-colors duration-200 ${isActive ? "text-orange-600" : "text-gray-600 hover:text-gray-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Right side CTA */}
        <div className="hidden md:flex items-center z-50">
          <a
            href="https://chat.whatsapp.com/C5xbPYMDNbJ5IvP0zQgjOW"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium text-sm shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.23)] hover:-translate-y-0.5 transition duration-200"
          >
            Join Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 pb-4 text-gray-800 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <motion.span animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="h-0.5 w-full bg-current rounded" />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="h-0.5 w-full bg-current rounded" />
            <motion.span animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="h-0.5 w-full bg-current rounded" />
          </div>
        </button>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
              animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
              exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 bg-white/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 z-40"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-3xl font-extrabold transition-colors ${isActive ? "bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600" : "text-gray-800 hover:text-orange-400"
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <a
                href="https://chat.whatsapp.com/C5xbPYMDNbJ5IvP0zQgjOW"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg shadow-xl hover:scale-105 transition-transform"
                onClick={() => setOpen(false)}
              >
                Join the Movement
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
