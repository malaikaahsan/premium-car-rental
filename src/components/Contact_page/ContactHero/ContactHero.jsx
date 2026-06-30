import { motion } from "framer-motion";
import { FaHeadset } from "react-icons/fa";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#111111] text-white py-28">
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#1a1a1a] to-[#111111]" />

      <div className="absolute -top-32 -right-24 w-80 h-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <div className="absolute -bottom-32 -left-24 w-80 h-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-2">
            <FaHeadset className="text-[#D4AF37]" />

            <span className="uppercase tracking-[0.3em] text-sm font-semibold text-[#D4AF37]">
              Contact & Support
            </span>
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight">
            Let's Start Your
            <span className="block text-[#D4AF37]">Luxury Journey</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-300">
            Whether you have questions, need a custom rental package, or are
            ready to reserve your dream vehicle, our team is always available to
            provide a seamless premium experience.
          </p>

          <div className="w-28 h-1 bg-[#D4AF37] rounded-full mx-auto mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
