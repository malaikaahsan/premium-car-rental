import { motion } from "framer-motion";
import {
  FaStar,
  FaGasPump,
  FaUsers,
  FaCogs,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

export default function SelectedCarCard({ car }) {
  if (!car) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200"
    >
      <div className="relative h-72 overflow-hidden group">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <span
          className={`absolute top-5 left-5 px-4 py-2 rounded-full text-sm font-semibold ${
            car.available ? "bg-green-600 text-white" : "bg-red-600 text-white"
          }`}
        >
          {car.available ? "Available" : "Booked"}
        </span>

        <div className="absolute bottom-5 left-5">
          <h2 className="text-3xl font-bold text-white">{car.name}</h2>

          <p className="text-gray-200 mt-1">{car.brand}</p>
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#D4AF37]">
            <FaStar />

            <span className="font-semibold text-lg">{car.rating}</span>
          </div>

          <div>
            <span className="text-3xl font-bold text-[#D4AF37]">
              ${car.pricePerDay}
            </span>

            <span className="text-gray-500">/day</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-8">
          <div className="flex items-center gap-3">
            <FaGasPump className="text-[#D4AF37]" />

            <span>{car.fuel}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaUsers className="text-[#D4AF37]" />

            <span>{car.seats} Seats</span>
          </div>

          <div className="flex items-center gap-3">
            <FaCogs className="text-[#D4AF37]" />

            <span>{car.transmission}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-[#D4AF37]" />

            <span>{car.year}</span>
          </div>

          <div className="flex items-center gap-3 col-span-2">
            <FaMapMarkerAlt className="text-[#D4AF37]" />

            <span>{car.location}</span>
          </div>
        </div>

        <div className="my-8 border-t border-gray-200" />

        <div>
          <h3 className="text-xl font-bold text-[#111111] mb-3">
            About This Car
          </h3>

          <p className="text-gray-600 leading-7">{car.description}</p>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-[#111111] mb-4">
            Included Features
          </h3>

          <div className="grid grid-cols-2 gap-3">
            {car.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 bg-[#F5F5F5] rounded-xl px-4 py-3"
              >
                <FaCheckCircle className="text-[#D4AF37]" />

                <span className="text-sm font-medium text-gray-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-8 rounded-xl p-4 flex items-center gap-3 ${
            car.available
              ? "bg-green-50 border border-green-200"
              : "bg-red-50 border border-red-200"
          }`}
        >
          {car.available ? (
            <>
              <FaCheckCircle className="text-green-600 text-xl" />

              <div>
                <p className="font-semibold text-green-700">
                  Available for Booking
                </p>

                <p className="text-sm text-green-600">
                  You can reserve this vehicle today.
                </p>
              </div>
            </>
          ) : (
            <>
              <FaTimesCircle className="text-red-600 text-xl" />

              <div>
                <p className="font-semibold text-red-700">
                  Currently Unavailable
                </p>

                <p className="text-sm text-red-600">
                  This vehicle is already reserved.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
