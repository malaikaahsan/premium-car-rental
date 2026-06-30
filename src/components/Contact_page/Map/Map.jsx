import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Map() {
  return (
    <section className="bg-[#F5F5F5] py-0">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto"
        >
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
            <div className="flex items-center gap-3 bg-[#111111] px-6 py-5 text-white sm:px-8">
              <FaMapMarkerAlt className="text-[#D4AF37] text-xl" />

              <div>
                <h3 className="font-bold text-lg">Veloura Drive</h3>

                <p className="text-sm text-gray-300">
                  Blue Area, Islamabad, Pakistan
                </p>
              </div>
            </div>

            <iframe
              title="Veloura Drive Office"
              src="https://www.google.com/maps?q=Blue+Area,+Islamabad,+Pakistan&output=embed"
              className="h-[280px] w-full sm:h-[320px] lg:h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
