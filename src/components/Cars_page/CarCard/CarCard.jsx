import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGasPump,
  FaUsers,
  FaStar,
  FaCogs,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";
import { useWishlist } from "../../../context/WishlistContext";

export default function CarCard({ car }) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isFavorite = isInWishlist(car.id);

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl hover:border-[#D4AF37]/40 transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <span
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold shadow-md ${
            car.available ? "bg-green-600 text-white" : "bg-red-600 text-white"
          }`}
        >
          {car.available ? "Available" : "Booked"}
        </span>

        <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-[#111111]">
          <FaStar className="text-[#D4AF37]" />
          {car.rating}
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(car);
          }}
          className={`absolute bottom-4 left-4 rounded-full p-3 shadow-lg transition ${
            isFavorite
              ? "bg-[#D4AF37] text-[#111111]"
              : "bg-white/90 text-[#111111] hover:bg-[#D4AF37] hover:text-[#111111]"
          }`}
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
        >
          <FaHeart className={isFavorite ? "fill-current" : ""} />
        </button>

        <div className="absolute bottom-4 right-4 bg-[#111111]/90 backdrop-blur-md text-[#D4AF37] px-4 py-2 rounded-lg shadow-lg">
          <span className="text-2xl font-bold">
            Rs. {car.pricePerDay.toLocaleString()}
          </span>
          <span className="text-sm text-white"> /day</span>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-[#111111] group-hover:text-[#D4AF37] transition">
          {car.name}
        </h2>

        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-500 font-medium">{car.brand}</p>

          <span className="bg-[#F5F5F5] text-[#111111] text-xs font-semibold px-3 py-1 rounded-full">
            {car.category}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FaGasPump className="text-[#D4AF37]" />
            {car.fuel}
          </div>

          <div className="flex items-center gap-2">
            <FaUsers className="text-[#D4AF37]" />
            {car.seats} Seats
          </div>

          <div className="flex items-center gap-2">
            <FaCogs className="text-[#D4AF37]" />
            {car.transmission}
          </div>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#D4AF37]" />
            {car.location}
          </div>
        </div>

        <Link
          to={`/cars/${car.id}`}
          className="mt-8 flex items-center justify-center gap-2 bg-[#111111] text-white py-3 rounded-xl font-semibold hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-300"
        >
          View Details
          <FaArrowRight className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
