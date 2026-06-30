import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: FaPhoneAlt,
    title: "Phone",
    value: "+92 300 1234567",
    description: "Available 24/7 for bookings & support",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    value: "info@velouradrive.pk",
    description: "We'll respond within 24 hours",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Office",
    value: "Blue Area, Islamabad, Pakistan",
    description: "Visit our premium showroom",
  },
  {
    icon: FaClock,
    title: "Business Hours",
    value: "24 / 7",
    description: "Luxury service whenever you need it",
  },
];

export default function ContactInfo() {
  return (
    <section className="py-18 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">
            Get In Touch
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#111111]">
            Contact Information
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600">
            Have a question or need assistance with your reservation? Our team
            is available around the clock to help you enjoy a seamless luxury
            car rental experience across Pakistan.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
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
                  p-8
                  text-center
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]/50
                  hover:shadow-2xl
                "
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition" />

                <div
                  className="
                    mx-auto
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#D4AF37]/10
                    border
                    border-[#D4AF37]/20
                  "
                >
                  <Icon className="text-3xl text-[#D4AF37]" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#111111]">
                  {item.title}
                </h3>

                <p className="mt-3 text-lg font-semibold text-[#111111]">
                  {item.value}
                </p>

                <p className="mt-3 text-gray-500 leading-7">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
