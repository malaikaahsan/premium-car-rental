import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaGasPump,
  FaUsers,
  FaCogs,
  FaStar,
} from "react-icons/fa";

export default function RelatedCars({ cars }) {
  return (
    <section className="mt-24">

      {/* Heading */}

      <div className="text-center">

        <span className="uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">
          You May Also Like
        </span>

        <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#111111]">
          Related Cars
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore more premium vehicles similar to your selected car.
        </p>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

        {cars.map((car, index) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className="
              group
              bg-white
              rounded-2xl
              overflow-hidden
              shadow-lg
              hover:shadow-2xl
              transition-all
            "
          >

            {/* Image */}

            <div className="relative h-60 overflow-hidden">

              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute top-4 left-4">

                <span className="bg-[#111111] text-white px-3 py-1 rounded-full text-xs">
                  {car.category}
                </span>

              </div>

            </div>

            {/* Content */}

            <div className="p-6">

              <div className="flex justify-between">

                <div>

                  <h3 className="text-2xl font-bold text-[#111111]">
                    {car.name}
                  </h3>

                  <p className="text-gray-500">
                    {car.brand}
                  </p>

                </div>

                <div className="flex items-center gap-1 text-[#D4AF37]">

                  <FaStar />

                  {car.rating}

                </div>

              </div>

              {/* Specs */}

              <div className="grid grid-cols-3 gap-3 mt-6 text-sm">

                <div className="flex items-center gap-2">
                  <FaGasPump className="text-[#D4AF37]" />
                  {car.fuel}
                </div>

                <div className="flex items-center gap-2">
                  <FaCogs className="text-[#D4AF37]" />
                  {car.transmission}
                </div>

                <div className="flex items-center gap-2">
                  <FaUsers className="text-[#D4AF37]" />
                  {car.seats}
                </div>

              </div>

              {/* Footer */}

              <div className="flex justify-between items-center mt-8">

                <div>

                  <span className="text-3xl font-bold text-[#D4AF37]">
                    PKR {car.pricePerDay.toLocaleString()}
                  </span>

                  <span className="text-gray-500 text-sm">
                    /day
                  </span>

                </div>

                <Link
                  to={`/cars/${car.id}`}
                  className="
                    flex
                    items-center
                    gap-2
                    bg-[#111111]
                    text-white
                    px-5
                    py-3
                    rounded-lg
                    hover:bg-[#D4AF37]
                    hover:text-[#111111]
                    transition
                  "
                >
                  Details

                  <FaArrowRight />

                </Link>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}