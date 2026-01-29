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
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={teenlogo} alt="Logo" className="h-30 w-auto" />
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
