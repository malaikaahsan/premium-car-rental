import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function CarFeatures({ features = [] }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-14"
    >
      {/* Heading */}

      <h2 className="text-3xl font-bold text-[#111111]">
        Premium Features
      </h2>

      <div className="w-24 h-1 bg-[#D4AF37] rounded-full mt-3 mb-8"></div>

      {/* Features */}

      <div className="flex flex-wrap gap-4 flex-col md:flex-row">
        {features.map((feature, index) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.08,
              duration: 0.3,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            className="flex items-center gap-3 bg-white border border-[#D4AF37]/20 rounded-xl px-5 py-3 shadow-md hover:shadow-xl transition"
          >
            <FaCheckCircle className="text-[#D4AF37] text-lg" />

            <span className="font-medium text-[#111111]">
              {feature}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}