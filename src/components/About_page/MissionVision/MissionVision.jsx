import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVision() {
  const cards = [
    {
      title: "Our Mission",
      icon: <FaBullseye />,
      description:
        "To provide an exceptional luxury car rental experience by combining world-class vehicles, personalized service, and uncompromising quality. Every journey should reflect comfort, elegance, and complete peace of mind.",
    },
    {
      title: "Our Vision",
      icon: <FaEye />,
      description:
        "To become the most trusted premium car rental brand by setting new standards in luxury mobility, innovation, and customer satisfaction while delivering unforgettable driving experiences.",
    },
  ];

  return (
    <section className="py-20 bg-[#F5F5F5]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">
            Our Purpose
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#111111]">
            Mission & Vision
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600">
            Everything we do is driven by a commitment to excellence,
            premium service, and creating remarkable driving experiences
            for every customer.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          {cards.map((card, index) => (

            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                bg-white
                border
                border-gray-200
                shadow-lg
                hover:shadow-2xl
                hover:border-[#D4AF37]
                transition-all
                duration-300
                p-10
              "
            >

              {/* Gold Accent */}

              <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]" />

              {/* Icon */}

              <div className="
                w-16
                h-16
                rounded-2xl
                bg-[#D4AF37]/10
                flex
                items-center
                justify-center
                text-[#D4AF37]
                text-3xl
                group-hover:bg-[#D4AF37]
                group-hover:text-[#111111]
                transition-all
                duration-300
              ">
                {card.icon}
              </div>

              {/* Title */}

              <h3 className="mt-8 text-3xl font-bold text-[#111111]">
                {card.title}
              </h3>

              {/* Description */}

              <p className="mt-6 text-gray-600 leading-8">
                {card.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}