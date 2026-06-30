import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaCheckCircle,
  FaCalendarAlt,
  FaShieldAlt,
  FaHeadset,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";
import { useWishlist } from "../../../context/WishlistContext";

export default function PriceCard({ car }) {
  const isBooked = !car?.available;
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isFavorite = isInWishlist(car.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-28"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        <div className="bg-[#111111] text-center py-8 px-6">
          <h2 className="text-[#D4AF37] text-lg font-semibold uppercase tracking-widest">
            Rental Price
          </h2>

          <h1 className="text-white text-5xl font-bold mt-2">
            PKR {car.pricePerDay.toLocaleString()}
          </h1>

          <p className="text-gray-300 mt-2">Per Day</p>
        </div>

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

          <div className="border-t pt-6 space-y-3">
            <button
              type="button"
              onClick={() => toggleWishlist(car)}
              className={`w-full flex justify-center items-center gap-3 rounded-xl border px-4 py-3 font-semibold transition ${
                isFavorite
                  ? "border-[#D4AF37] bg-[#D4AF37] text-[#111111]"
                  : "border-gray-300 bg-white text-[#111111] hover:border-[#D4AF37] hover:text-[#D4AF37]"
              }`}
            >
              <FaHeart className={isFavorite ? "fill-current" : ""} />
              {isFavorite ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>

            <Link
              to={isBooked ? "#" : `/booking?car=${car.id}`}
              onClick={(e) => {
                if (isBooked) e.preventDefault();
              }}
              className={`
                w-full
                flex
                justify-center
                items-center
                gap-3
                py-4
                rounded-xl
                font-semibold
                transition
                ${
                  isBooked
                    ? "cursor-not-allowed bg-gray-400 text-white"
                    : "bg-[#D4AF37] text-[#111111] hover:bg-[#c89f2f]"
                }
              `}
            >
              {isBooked ? "Booked" : "Book Now"}

              {!isBooked && <FaArrowRight />}
            </Link>

            {isBooked && (
              <p className="mt-3 text-center text-sm text-red-600">
                This vehicle is already reserved.
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
