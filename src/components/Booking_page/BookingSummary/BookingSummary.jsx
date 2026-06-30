import { motion } from "framer-motion";
import {
  FaReceipt,
  FaCarSide,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function BookingSummary({
  car,
  totalDays,
  totalPrice,
}) {
  // Don't show until dates are selected
  if (!car || totalDays <= 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#111111] text-white rounded-3xl shadow-xl overflow-hidden"
    >
      {/* Header */}
      <div className="bg-[#D4AF37] text-[#111111] px-6 py-5 flex items-center gap-3">
        <FaReceipt className="text-xl" />

        <h2 className="text-xl font-bold">
          Booking Summary
        </h2>
      </div>

      <div className="p-6 space-y-6">

        {/* Car */}

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-3 text-gray-300">

            <FaCarSide className="text-[#D4AF37]" />

            <span>Vehicle</span>

          </div>

          <span className="font-semibold text-right">
            {car.name}
          </span>

        </div>

        {/* Price */}

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-3 text-gray-300">

            <FaMoneyBillWave className="text-[#D4AF37]" />

            <span>Price / Day</span>

          </div>

          <span className="font-semibold">
            PKR {car.pricePerDay.toLocaleString()}
          </span>

        </div>

        {/* Days */}

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-3 text-gray-300">

            <FaCalendarAlt className="text-[#D4AF37]" />

            <span>Total Days</span>

          </div>

          <span className="font-semibold">
            {totalDays}
          </span>

        </div>

        {/* Status */}

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-3 text-gray-300">

            <FaCheckCircle className="text-green-400" />

            <span>Status</span>

          </div>

          <span className="text-green-400 font-semibold">
            Ready to Book
          </span>

        </div>

        <div className="border-t border-gray-700 pt-6">

          <div className="flex justify-between items-center">

            <span className="text-xl font-bold">
              Total Amount
            </span>

            <span className="text-3xl font-bold text-[#D4AF37]">
              PKR {totalPrice.toLocaleString()}
            </span>

          </div>

        </div>

      </div>
    </motion.div>
  );
}