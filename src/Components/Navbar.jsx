import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-orange-500 border-b-2 border-orange-500 font-semibold"
      : "text-black hover:text-red-600 font-medium";

  return (
    <header className="bg-transparent z-50">
      <nav className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo / Brand */}
        <NavLink to="/">
          <img
            src="/assets/teenlogo.png"
            alt="Teens-Pray Logo"
            className="h-25 md:h-24 lg:h-30 transition-transform hover:scale-110 drop-shadow-lg"
          />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 pb-7 text-base">
          <li>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/programs" className={linkClass}>
              Programs
            </NavLink>
          </li>
          <li>
            <NavLink to="/past-events" className={linkClass}>
              Past Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl mb-7 text-black"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white backdrop-blur-md border-t border-orange-300">
          <ul className="flex flex-col text-center py-4 gap-4 font-medium">
            <li>
              <NavLink
                onClick={() => setOpen(false)}
                to="/"
                className={linkClass}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setOpen(false)}
                to="/about"
                className={linkClass}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setOpen(false)}
                to="/programs"
                className={linkClass}
              >
                Programs
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setOpen(false)}
                to="/past-events"
                className={linkClass}
              >
                Past Events
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setOpen(false)}
                to="/contact"
                className={linkClass}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
