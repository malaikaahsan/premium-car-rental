import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/veloura-logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition duration-300 ${
      isActive
        ? "text-[#D4AF37]"
        : "text-white hover:text-[#D4AF37]"
    }`;


return (
  <header className="bg-[#111111]">

    {/* ================= DESKTOP ================= */}
    <div className="hidden md:block pt-6 pb-4">

      {/* Logo */}
      <div className="flex justify-center">
        <Link to="/">
          <img
            src={logo}
            alt="Veloura Drive"
            className="w-44 lg:w-52 transition duration-300 hover:scale-105"
          />
        </Link>
      </div>

      {/* Floating Navbar */}
      <div className="mt-6 flex justify-center px-4">

        <nav className="w-full max-w-6xl bg-[#222222]/80 backdrop-blur-md border border-[#D4AF37]/20 rounded-full shadow-xl">

          <div className="flex justify-between items-center px-8 py-4">

            <div className="flex items-center gap-10 text-lg font-medium">

              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>

              <NavLink to="/cars" className={navLinkClass}>
                Cars
              </NavLink>

              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>

              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>

              <NavLink to="/booking" className={navLinkClass}>
                Booking
              </NavLink>

            </div>

            <Link
              to="/booking"
              className="bg-[#D4AF37] text-[#111111] px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
            >
              Book Now
            </Link>

          </div>

        </nav>

      </div>

    </div>

    {/* ================= MOBILE ================= */}
    <div className="md:hidden">

      {/* Top Bar */}
      <div className="flex justify-between items-center px-5 py-2">

        <Link to="/">
          <img
            src={logo}
            alt="Veloura Drive"
            className="w-20"
          />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl hover:text-[#D4AF37] transition"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >

        <div className="border-t border-[#D4AF37]/20 bg-[#111111]">

          <div className="flex flex-col gap-6 p-6 text-lg">

            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/cars"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Cars
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>

            <NavLink
              to="/booking"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Booking
            </NavLink>

            <Link
              to="/booking"
              onClick={() => setMenuOpen(false)}
              className="bg-[#D4AF37] text-[#111111] text-center py-3 rounded-full font-semibold hover:bg-[#c59f2d] transition"
            >
              Book Now
            </Link>

          </div>

        </div>

      </div>

    </div>

  </header>
);
}