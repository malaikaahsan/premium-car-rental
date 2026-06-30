import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { FaStar, FaCheckCircle, FaArrowRight } from "react-icons/fa";

export default function CarInfo({ car }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <span
        className="
          inline-block
          px-4
          py-2
          rounded-full
          bg-[#D4AF37]/15
          text-[#D4AF37]
          text-sm
          font-semibold
        "
      >
        {car.category}
      </span>

      <h1 className="text-4xl lg:text-5xl font-bold text-[#111111] mt-5">
        {car.name}
      </h1>

      <div className="flex items-center gap-2 mt-5">
        <FaStar className="text-[#D4AF37]" />

        <span className="font-semibold text-lg">{car.rating}</span>

        <span className="text-gray-500">Premium Rated</span>
      </div>

      <div className="mt-7">
        <span className="text-5xl font-bold text-[#D4AF37]">
          PKR {car.pricePerDay.toLocaleString()}
        </span>

        <span className="text-xl text-gray-500"> / day</span>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <FaCheckCircle
          className={car.available ? "text-green-600" : "text-red-600"}
        />

        <span
          className={`font-semibold ${
            car.available ? "text-green-600" : "text-red-600"
          }`}
        >
          {car.available ? "Available Now" : "Currently Booked"}
        </span>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-[#111111]">Description</h2>

        <p className="text-gray-600 leading-8 mt-4">{car.description}</p>
      </div>

      <Link
        to={`/booking?car=${car.id}`}
        className="
          inline-flex
          items-center
          gap-3
          mt-10
          bg-[#111111]
          text-white
          px-8
          py-4
          rounded-xl
          font-semibold
          hover:bg-[#D4AF37]
          hover:text-[#111111]
          transition-all
          duration-300
          shadow-lg
        "
      >
        Book This Car
        <FaArrowRight />
      </Link>
    </motion.div>
  );
}
