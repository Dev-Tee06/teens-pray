import { NavLink } from "react-router-dom";
import { useState } from "react";
import teenlogo from "../assets/teenlogo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-orange-500 border-b-2 border-orange-500 font-semibold"
      : "text-black hover:text-orange-500";

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between relative z-50">
      {/* Logo with glow */}
      <div className="flex items-center gap-2 relative">
        {/* Glow behind logo */}
        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-orange-500 via-red-600 to-yellow-400 opacity-40 blur-3xl z-0"></div>
        {/* Inner bright circle */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400 via-red-500 to-yellow-300 z-10"></div>
        <img
          src={teenlogo}
          alt="Logo"
          className="relative h-34 w-34 object-cover rounded-full border-2 border-red-500 shadow-[0_0_20px_rgba(255,99,71,0.8)] z-20"
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/programs" className={linkClass}>
          Programs
        </NavLink>
        <NavLink to="/past-events" className={linkClass}>
          Past Events
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${
          open ? "max-h-screen py-4" : "max-h-0 py-0"
        } flex flex-col items-center gap-4`}
      >
        <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={linkClass}
          onClick={() => setOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/programs"
          className={linkClass}
          onClick={() => setOpen(false)}
        >
          Programs
        </NavLink>
        <NavLink
          to="/past-events"
          className={linkClass}
          onClick={() => setOpen(false)}
        >
          Past Events
        </NavLink>
        <NavLink
          to="/contact"
          className={linkClass}
          onClick={() => setOpen(false)}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
