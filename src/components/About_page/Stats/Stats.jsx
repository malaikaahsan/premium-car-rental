import { motion } from "framer-motion";
import { FaUsers, FaCarSide, FaAward, FaHeadset } from "react-icons/fa";

const stats = [
  {
    number: "10K+",
    title: "Happy Customers",
    icon: FaUsers,
  },
  {
    number: "250+",
    title: "Luxury Vehicles",
    icon: FaCarSide,
  },
  {
    number: "15+",
    title: "Years Experience",
    icon: FaAward,
  },
  {
    number: "24/7",
    title: "Premium Support",
    icon: FaHeadset,
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Trusted by Thousands
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Our commitment to luxury, quality service, and customer satisfaction
            has made us one of the most trusted premium car rental companies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  bg-white/5
                  border
                  border-white/10
                  backdrop-blur-sm
                  p-8
                  text-center
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]/60
                  hover:shadow-[0_15px_45px_rgba(212,175,55,0.18)]
                "
              >
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[#D4AF37]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/30">
                  <Icon className="text-3xl text-[#D4AF37]" />
                </div>

                <h3 className="mt-6 text-5xl font-extrabold text-white">
                  {item.number}
                </h3>

                <p className="mt-3 text-gray-400 text-lg">{item.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
