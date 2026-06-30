import { motion } from "framer-motion";
import { FaCalendarCheck } from "react-icons/fa";

export default function BookingHero() {
  return (
    <section className="relative overflow-hidden bg-[#111111] text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#1A1A1A] to-[#111111]" />

      <div className="absolute -top-28 -right-24 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl" />

      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-6 py-3 rounded-full">
            <FaCalendarCheck className="text-[#D4AF37]" />

            <span className="uppercase tracking-[0.3em] text-sm text-[#D4AF37] font-semibold">
              Premium Reservation
            </span>
          </div>

          <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-tight">
            Reserve Your
            <span className="block text-[#D4AF37]">Dream Car</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-300 leading-8 text-lg">
            Choose your preferred dates, complete your booking details, and
            enjoy a seamless luxury rental experience with Veloura Drive.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
