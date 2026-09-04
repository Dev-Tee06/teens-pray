import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import teenlogo from "../assets/teenlogo.webp";

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
    return () => {
      document.body.style.overflow = "unset";
    };
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm py-2 border-b border-gray-100"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20 md:h-22">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 z-50 relative shrink-0"
          onClick={() => setOpen(false)}
        >
          <img loading="lazy"
            src={teenlogo}
            alt="Teens Pray Logo"
            className="h-16 md:h-20 w-auto object-contain drop-shadow-sm transition-transform hover:scale-105"
          />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-6 bg-white/70 backdrop-blur-md px-6 py-2.5 rounded-full border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-bold tracking-wide px-4 py-2 transition-colors duration-200 ${
                  isActive
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-orange-500 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center z-50">
          <a
            href="https://chat.whatsapp.com/C5xbPYMDNbJ5IvP0zQgjOW"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-orange-500 text-white font-bold text-sm shadow-[0_4px_12px_rgba(249,115,22,0.2)] hover:shadow-[0_6px_16px_rgba(249,115,22,0.3)] hover:-translate-y-0.5 transition duration-200"
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
            <motion.span
              animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-full bg-current rounded"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="h-0.5 w-full bg-current rounded"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-full bg-current rounded"
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
              animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
              exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 bg-[#fdfaf6] flex flex-col items-center justify-center gap-10 z-40 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-3xl font-black tracking-wide transition-all duration-300 ${
                        isActive
                          ? "text-orange-500"
                          : "text-gray-800 hover:text-orange-400"
                      }`
                    }
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.a
                href="https://chat.whatsapp.com/C5xbPYMDNbJ5IvP0zQgjOW"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-10 py-4 rounded-full bg-orange-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Join the Movement
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
