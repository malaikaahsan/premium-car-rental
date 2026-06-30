import { motion } from "framer-motion";
import {
  FaCarSide,
  FaShieldAlt,
  FaHeadset,
  FaMoneyCheckAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCarSide />,
    title: "Premium Fleet",
    description:
      "Choose from an exclusive collection of luxury, sports, wedding, and executive vehicles.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Transparent Pricing",
    description:
      "Competitive rates with absolutely no hidden charges. Pay only for what you book.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe & Reliable",
    description:
      "Every vehicle is professionally maintained, fully insured, and sanitized before every trip.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Customer Support",
    description:
      "Our dedicated team is available around the clock to assist you anytime, anywhere.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="uppercase tracking-[4px] text-[#D4AF37] text-sm font-semibold">
            Why Choose Veloura Drive
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Experience Luxury Without Compromise
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-400 leading-8">
            At Veloura Drive, we provide more than just premium vehicles.
            We deliver exceptional service, transparent pricing, and a
            luxurious driving experience designed to exceed your expectations.
          </p>

          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group bg-[#222222] rounded-2xl p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.18)]"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] text-3xl group-hover:bg-[#D4AF37] group-hover:text-[#111111] transition duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-bold text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-400 leading-7">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}