import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const team = [
  {
    name: "John Smith",
    role: "Chief Executive Officer",
    image: "https://ui-avatars.com/api/?name=John+Smith&background=111111&color=D4AF37&size=300",
  },
  {
    name: "Emma Watson",
    role: "Operations Manager",
    image: "https://ui-avatars.com/api/?name=Emma+Watson&background=111111&color=D4AF37&size=300",
  },
  {
    name: "David Lee",
    role: "Customer Relations",
    image: "https://ui-avatars.com/api/?name=David+Lee&background=111111&color=D4AF37&size=300",
  },
];

export default function Team() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">
            Our Professionals
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#111111]">
            Meet Our Team
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Behind every unforgettable journey is a passionate team dedicated
            to delivering exceptional luxury, reliability, and personalized
            customer service.
          </p>

        </div>

        {/* Team Members */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                bg-white
                rounded-3xl
                shadow-lg
                overflow-hidden
                border
                border-gray-200
                transition-all
                duration-300
                hover:border-[#D4AF37]/50
                hover:shadow-2xl
              "
            >
              {/* Top Accent */}

              <div className="h-2 bg-[#D4AF37]" />

              <div className="p-8 text-center">

                {/* Image */}

                <div className="relative inline-block">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="
                      w-36
                      h-36
                      rounded-full
                      object-cover
                      border-4
                      border-[#D4AF37]
                      shadow-lg
                    "
                  />

                  <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition" />

                </div>

                {/* Name */}

                <h3 className="mt-6 text-2xl font-bold text-[#111111]">
                  {member.name}
                </h3>

                {/* Role */}

                <p className="mt-2 text-[#D4AF37] font-semibold uppercase tracking-wide">
                  {member.role}
                </p>

                {/* Divider */}

                <div className="w-16 h-1 bg-[#D4AF37] rounded-full mx-auto mt-5" />

                {/* Description */}

                <p className="mt-5 text-gray-600 leading-7">
                  Dedicated to providing every client with a seamless luxury
                  rental experience from booking to delivery.
                </p>

                {/* Social Icons */}

                <div className="flex justify-center gap-4 mt-8">

                  <button
                    className="
                      w-11
                      h-11
                      rounded-full
                      bg-[#111111]
                      text-white
                      flex
                      items-center
                      justify-center
                      transition
                      hover:bg-[#D4AF37]
                      hover:text-[#111111]
                    "
                  >
                    <FaLinkedinIn />
                  </button>

                  <button
                    className="
                      w-11
                      h-11
                      rounded-full
                      bg-[#111111]
                      text-white
                      flex
                      items-center
                      justify-center
                      transition
                      hover:bg-[#D4AF37]
                      hover:text-[#111111]
                    "
                  >
                    <FaTwitter />
                  </button>

                  <button
                    className="
                      w-11
                      h-11
                      rounded-full
                      bg-[#111111]
                      text-white
                      flex
                      items-center
                      justify-center
                      transition
                      hover:bg-[#D4AF37]
                      hover:text-[#111111]
                    "
                  >
                    <FaEnvelope />
                  </button>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}