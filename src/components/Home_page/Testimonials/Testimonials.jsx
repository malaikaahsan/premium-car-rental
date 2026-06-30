import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Ali Khan",
    role: "Business Executive",
    review:
      "Veloura Drive exceeded my expectations. The BMW was spotless, luxurious, and the booking process was incredibly smooth. Highly recommended!",
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    role: "Bride",
    review:
      "Our wedding became even more memorable thanks to the beautiful Rolls-Royce. Professional service, punctual driver, and an unforgettable experience.",
  },
  {
    id: 3,
    name: "John Smith",
    role: "Tourist",
    review:
      "Excellent customer service and an outstanding collection of premium vehicles. I'll definitely rent from Veloura Drive again.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="uppercase tracking-[4px] text-[#D4AF37] font-semibold text-sm">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#111111]">
            What Our Clients Say
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-8">
            Our customers trust Veloura Drive for luxury, comfort,
            and exceptional service. Here's what they have to say.
          </p>

          <div className="w-24 h-1 bg-[#D4AF37] rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-300"
            >
              {/* Quote */}
              <FaQuoteLeft className="text-4xl text-[#D4AF37] mb-6" />

              {/* Stars */}
              <div className="flex gap-1 text-[#D4AF37] mb-5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-8 italic">
                "{item.review}"
              </p>

              {/* Customer */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-200">
                <FaUserCircle className="text-5xl text-[#D4AF37]" />

                <div>
                  <h3 className="font-bold text-lg text-[#111111]">
                    {item.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}