import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaCarSide } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#111111] md:p-24">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl"></div>

      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#222222] border border-[#D4AF37]/20 rounded-3xl p-10 md:p-16 text-center shadow-2xl"
        >
          <span className="uppercase tracking-[4px] text-[#D4AF37] text-sm font-semibold">
            Luxury Awaits
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-bold text-white leading-tight">
            Ready to Drive
            <span className="text-[#D4AF37]"> Your Dream Car?</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg leading-8">
            Discover an exclusive fleet of luxury, sports, and wedding cars.
            Experience unmatched comfort, premium service, and unforgettable
            journeys with <span className="text-[#D4AF37]">Veloura Drive</span>.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] text-[#111111] px-8 py-4 rounded-xl font-semibold hover:bg-[#c59f2d] hover:scale-105 transition duration-300 shadow-lg"
            >
              Book Your Ride
              <FaArrowRight />
            </Link>

            <Link
              to="/cars"
              className="inline-flex items-center justify-center gap-3 border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-xl font-semibold hover:bg-[#D4AF37] hover:text-[#111111] hover:scale-105 transition duration-300"
            >
              Explore Cars
              <FaCarSide />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
