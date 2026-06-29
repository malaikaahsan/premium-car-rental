// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "../../assets/images/veloura-logo.png";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinkClass = ({ isActive }) =>
//     `transition-all duration-300 hover:text-[#D4AF37] hover:-translate-y-0.5 ${
//       isActive
//         ? "text-[#D4AF37] font-semibold border-b-2 border-[#D4AF37] pb-1"
//         : "text-white"
//     }`;

//   return (
//     <nav className="sticky top-0 z-50 bg-[#111111]/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
//       <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-4 group">

//           <img
//             src={logo}
//             alt="Veloura Drive Logo"
//             className="w-20 h-20 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
//           />

//           <div className="leading-tight">
//             <h1 className="text-3xl lg:text-4xl font-bold tracking-wide text-[#D4AF37]">
//               Veloura
//             </h1>

//             <p className="text-sm uppercase tracking-[0.4em] text-gray-300">
//               Drive
//             </p>
//           </div>

//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-10">

//           <NavLink to="/" className={navLinkClass}>
//             Home
//           </NavLink>

//           <NavLink to="/cars" className={navLinkClass}>
//             Cars
//           </NavLink>

//           <NavLink to="/about" className={navLinkClass}>
//             About
//           </NavLink>

//           <NavLink to="/contact" className={navLinkClass}>
//             Contact
//           </NavLink>

//           <NavLink to="/booking" className={navLinkClass}>
//             Booking
//           </NavLink>

//           <Link
//             to="/booking"
//             className="bg-[#D4AF37] text-[#111111] px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#c59f2d] hover:shadow-[#D4AF37]/40 hover:scale-105 transition-all duration-300"
//           >
//             Book Now
//           </Link>

//         </div>

//         {/* Hamburger Button */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden text-4xl text-white hover:text-[#D4AF37] transition-all duration-300"
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>

//       </div>

//       {/* Gold Accent Line */}
//       <div className="h-[2px] bg-[#D4AF37]"></div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-500 ${
//           menuOpen ? "max-h-[500px]" : "max-h-0"
//         }`}
//       >
//         <div className="bg-[#111111] border-t border-[#D4AF37]/20">

//           <div className="flex flex-col gap-7 px-6 py-6">

//             <NavLink
//               to="/"
//               className={`${navLinkClass({ isActive: false })} text-lg`}
//               onClick={() => setMenuOpen(false)}
//             >
//               Home
//             </NavLink>

//             <NavLink
//               to="/cars"
//               className={`${navLinkClass({ isActive: false })} text-lg`}
//               onClick={() => setMenuOpen(false)}
//             >
//               Cars
//             </NavLink>

//             <NavLink
//               to="/about"
//               className={`${navLinkClass({ isActive: false })} text-lg`}
//               onClick={() => setMenuOpen(false)}
//             >
//               About
//             </NavLink>

//             <NavLink
//               to="/contact"
//               className={`${navLinkClass({ isActive: false })} text-lg`}
//               onClick={() => setMenuOpen(false)}
//             >
//               Contact
//             </NavLink>

//             <NavLink
//               to="/booking"
//               className={`${navLinkClass({ isActive: false })} text-lg`}
//               onClick={() => setMenuOpen(false)}
//             >
//               Booking
//             </NavLink>

//             <Link
//               to="/booking"
//               onClick={() => setMenuOpen(false)}
//               className="bg-[#D4AF37] text-[#111111] text-center py-3 rounded-lg font-semibold shadow-lg hover:bg-[#c59f2d] transition-all duration-300"
//             >
//               Book Now
//             </Link>

//           </div>

//         </div>
//       </div>

//     </nav>
//   );
// }







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
      <div className="flex justify-between items-center px-5 py-4">

        <Link to="/">
          <img
            src={logo}
            alt="Veloura Drive"
            className="w-28"
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