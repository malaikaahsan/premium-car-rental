import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import useCreateContact from "../../../hooks/useCreateContact";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaRegCommentDots,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactForm() {
  const inputStyle =
    "w-full rounded-xl border border-gray-300 bg-white px-5 py-4 outline-none transition duration-300 focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { mutate, isPending } = useCreateContact();
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();

    mutate(
      {
        ...formData,
        createdAt: new Date().toISOString(),
        status: "Unread",
      },
      {
        onSuccess: () => {
          toast.success("Message sent successfully!");

          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },

        onError: () => {
          toast.error("Something went wrong!");
        },
      },
    );
  }
  return (
    <section className="bg-[#F5F5F5] py-0">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl"
        >
          <div className="bg-[#111111] px-6 py-6 sm:px-8 lg:px-10">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Contact Veloura Drive
            </h3>

            <p className="mt-2 text-gray-300">We'd love to hear from you.</p>
          </div>

          <form
            className="space-y-6 p-6 sm:p-8 lg:p-10"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative">
                <FaUser className="absolute left-5 top-5 text-[#D4AF37]" />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className={`${inputStyle} pl-12`}
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-5 top-5 text-[#D4AF37]" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className={`${inputStyle} pl-12`}
                />
              </div>
            </div>

            <div className="relative">
              <FaPhoneAlt className="absolute left-5 top-5 text-[#D4AF37]" />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className={`${inputStyle} pl-12`}
              />
            </div>

            <div className="relative">
              <FaRegCommentDots className="absolute left-5 top-5 text-[#D4AF37]" />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className={`${inputStyle} pl-12`}
              />
            </div>

            <div className="relative">
              <FaRegCommentDots className="absolute left-5 top-5 text-[#D4AF37]" />

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
                className={`${inputStyle} pl-12 resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="
                w-full
                flex
                justify-center
                items-center
                gap-3
                bg-[#D4AF37]
                text-[#111111]
                py-4
                rounded-xl
                font-bold
                text-lg
                transition-all
                duration-300
                hover:bg-[#c89f2f]
                hover:scale-[1.02]
                shadow-lg
              "
            >
              <FaPaperPlane />

              {isPending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
