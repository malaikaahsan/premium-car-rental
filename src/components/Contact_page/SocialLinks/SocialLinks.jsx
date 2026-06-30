import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: "https://facebook.com",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com",
  },
  {
    name: "X (Twitter)",
    icon: FaXTwitter,
    url: "https://x.com",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://linkedin.com",
  },
];

export default function SocialLinks() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#111111]">
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">
            Stay Connected
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Follow Veloura Drive
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-8">
            Join our community to discover the latest luxury vehicles, exclusive
            offers, and premium driving experiences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-16">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.08,
                }}
                className="
                  group
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D4AF37]/30
                  bg-white/5
                  text-3xl
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-[#D4AF37]
                  hover:text-[#111111]
                  hover:border-[#D4AF37]
                  hover:shadow-[0_10px_35px_rgba(212,175,55,0.35)]
                "
              >
                <Icon />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
