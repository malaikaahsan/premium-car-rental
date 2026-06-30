import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaCheckCircle,
  FaCalendarAlt,
  FaShieldAlt,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

export default function PriceCard({ car }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-28"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">

        {/* Header */}

        <div className="bg-[#111111] text-center py-8 px-6">

          <h2 className="text-[#D4AF37] text-lg font-semibold uppercase tracking-widest">
            Rental Price
          </h2>

          <h1 className="text-white text-5xl font-bold mt-2">
            PKR {car.pricePerDay.toLocaleString()}
          </h1>

          <p className="text-gray-300 mt-2">
            Per Day
          </p>

        </div>

        {/* Features */}

        <div className="p-7 space-y-5">

          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-green-600 text-xl" />
            <span>Instant Booking Confirmation</span>
          </div>

          <div className="flex items-center gap-4">
            <FaCalendarAlt className="text-[#D4AF37] text-xl" />
            <span>Flexible Rental Duration</span>
          </div>

          <div className="flex items-center gap-4">
            <FaShieldAlt className="text-[#D4AF37] text-xl" />
            <span>Fully Insured Vehicle</span>
          </div>

          <div className="flex items-center gap-4">
            <FaHeadset className="text-[#D4AF37] text-xl" />
            <span>24/7 Customer Support</span>
          </div>

          <div className="border-t pt-6">

            <Link
              to={`/booking?car=${car.id}`}
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
                font-semibold
                hover:bg-[#c89f2f]
                transition
              "
            >
              Book Now

              <FaArrowRight />

            </Link>

          </div>

        </div>

      </div>
    </motion.div>
  );
}