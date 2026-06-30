import { motion } from "framer-motion";
import { FaCrown } from "react-icons/fa";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#111111] text-white py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#1A1A1A] to-[#111111]" />

      <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <div className="absolute top-12 right-12 w-48 h-48 border border-[#D4AF37]/10 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">
            <FaCrown className="text-[#D4AF37]" />

            <span className="uppercase tracking-[0.35em] text-sm font-semibold text-[#D4AF37]">
              About Veloura Drive
            </span>
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight">
            Driving Luxury
            <span className="block text-[#D4AF37]">Beyond Expectations</span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-9 text-gray-300">
            At <span className="font-semibold text-white">Veloura Drive</span>,
            we redefine premium mobility by offering an exclusive fleet of
            luxury, sports, wedding, and executive vehicles. Every journey is
            crafted to deliver exceptional comfort, elegance, and unforgettable
            experiences.
          </p>

          <div className="flex justify-center mt-12">
            <div className="w-32 h-1 rounded-full bg-[#D4AF37]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
