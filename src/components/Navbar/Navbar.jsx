import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaHeart, FaMoon, FaSun } from "react-icons/fa";
import logo from "../../assets/images/veloura-logo.png";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinkClass = ({ isActive }) =>
    `transition duration-300 ${
      isActive ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"
    }`;

  return (
    <header className="bg-[#111111]">
      <div className="hidden md:block pt-6 pb-4">
        <div className="flex justify-center">
          <Link to="/">
            <img
              src={logo}
              alt="Veloura Drive"
              className="w-44 lg:w-52 transition duration-300 hover:scale-105"
            />
          </Link>
        </div>

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

                <NavLink to="/wishlist" className={navLinkClass}>
                  <span className="flex items-center gap-2">
                    {/* <FaHeart /> */}
                    Wishlist
                  </span>
                </NavLink>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="rounded-full border border-[#D4AF37]/40 bg-[#222222]/80 p-3 text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#111111]"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <FaSun /> : <FaMoon />}
                </button>

                <Link
                  to="/booking"
                  className="bg-[#D4AF37] text-[#111111] px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex justify-between items-center px-5 py-2">
          <Link to="/">
            <img src={logo} alt="Veloura Drive" className="w-20" />
          </Link>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-[#D4AF37]/40 p-2 text-white transition hover:text-[#D4AF37]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-3xl hover:text-[#D4AF37] transition"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

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

              <NavLink
                to="/wishlist"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  {/* <FaHeart /> */}
                  Wishlist
                </span>
              </NavLink>

              <button
                type="button"
                onClick={() => {
                  toggleTheme();
                  setMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 rounded-full border border-[#D4AF37]/40 px-4 py-3 text-white transition hover:text-[#D4AF37]"
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>

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
