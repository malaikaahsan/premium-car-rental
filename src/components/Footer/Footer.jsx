import { NavLink } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const linkClass = "hover:text-[#D4AF37] transition duration-300";

  return (
    <footer className="bg-[#111111] text-gray-300 mt-20 border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Company */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#D4AF37]">Veloura Drive</h2>

            <p className="mt-5 leading-7 text-gray-400 text-sm md:text-lg">
              Experience luxury, elegance, and comfort with our premium fleet of
              world-class vehicles. Whether it's business, weddings, or leisure,
              Veloura Drive delivers an unforgettable driving experience.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#222222] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#222222] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#222222] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-white">Quick Links</h3>

            <ul className="mt-5 space-y-3 text-sm md:text-lg">
              <li>
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/cars" className={linkClass}>
                  Cars
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={linkClass}>
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink to="/booking" className={linkClass}>
                  Booking
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className={linkClass}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white">Contact Us</h3>

            <div className="space-y-5 mt-5 text-sm md:text-lg">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#D4AF37] text-lg" />
                <span>Blue Area, Islamabad, Pakistan</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#D4AF37] text-lg" />
                <span>+92 300 1234567</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#D4AF37] text-lg" />
                <span>info@velouradrive.pk</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}

      <div className="border-t border-[#222222]">
        <div className="text-xs md:text-lg max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Veloura Drive. All Rights Reserved.
          </p>

          <p className="mt-2 md:mt-0">
            Luxury Car Rental • Islamabad, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
