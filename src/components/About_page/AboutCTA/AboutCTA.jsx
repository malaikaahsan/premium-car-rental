import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaCarSide } from "react-icons/fa";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#1A1A1A] to-[#111111]" />

      <div className="absolute -top-32 -left-20 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl" />

      <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />

      {/* Decorative Circle */}
      <div className="absolute top-12 right-12 w-40 h-40 border border-[#D4AF37]/10 rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Badge */}

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">

            <FaCarSide className="text-[#D4AF37]" />

            <span className="uppercase tracking-[0.3em] text-sm font-semibold text-[#D4AF37]">
              Premium Experience
            </span>

          </div>

          {/* Heading */}

          <h2 className="mt-8 text-5xl md:text-6xl font-extrabold text-white leading-tight">

            Ready to Experience

            <span className="block text-[#D4AF37]">
              Luxury on Every Journey?
            </span>

          </h2>

          {/* Description */}

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-300">
            Discover our exclusive collection of luxury sedans, sports cars,
            SUVs, wedding vehicles, and exotic supercars. Reserve your perfect
            ride today and travel with elegance, comfort, and confidence.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

            <Link
              to="/cars"
              className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] text-[#111111] px-9 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:bg-[#c89f2f] transition-all duration-300"
            >
              Explore Cars

              <FaArrowRight />
            </Link>

            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-3 border border-[#D4AF37] text-[#D4AF37] px-9 py-4 rounded-xl font-semibold hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-300"
            >
              Book Now
            </Link>

          </div>

          {/* Bottom Accent */}

          <div className="flex justify-center mt-14">
            <div className="w-28 h-1 rounded-full bg-[#D4AF37]" />
          </div>

        </motion.div>

      </div>
    </section>
  );
}