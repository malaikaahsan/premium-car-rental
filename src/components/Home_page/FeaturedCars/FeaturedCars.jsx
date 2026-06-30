import useCars from "../../../hooks/useCars";
import { getCars } from "../../../services/carService";
import Error from "../../Error/Error"; 
import Loading from "../../Loading/Loading";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGasPump,
  FaUsers,
  FaStar,
  FaCogs,
} from "react-icons/fa";

export default function FeaturedCars() {
  const { data: cars = [], isLoading, error } = useCars();
  
    if (isLoading) return <Loading />;
  
    if (error) return <Error />;
  // Show first 6 cars on Home page
  const featuredCars = cars.filter((car) => car.featured === true).slice(0, 6);

  return (
    <section className="py-6 md:py-14 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">
            Featured Collection
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#111111]">
            Our Featured Cars
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Experience luxury, comfort, and performance with our carefully
            selected premium vehicles.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {featuredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}

              <div className="relative overflow-hidden h-64">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {!car.available && (
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                    Unavailable
                  </span>
                )}

                {car.available && (
                  <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                    Available
                  </span>
                )}
              </div>

              {/* Content */}

              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-[#111111]">
                      {car.name}
                    </h3>

                    <p className="text-gray-500">{car.brand}</p>
                  </div>

                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    <FaStar />

                    <span className="font-semibold">{car.rating}</span>
                  </div>
                </div>

                {/* Car Specs */}

                <div className="grid grid-cols-3 gap-4 mt-6 text-gray-600 text-sm">
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

                {/* Price */}

                <div className="flex justify-between items-center mt-8">
                  <div>
                    <span className="text-3xl font-bold text-[#D4AF37]">
                      {car.pricePerDay} PKR
                    </span>

                    <span className="text-gray-500">/day</span>
                  </div>

                  <Link
                    to={`/cars/${car.id}`}
                    className="flex items-center gap-2 bg-[#111111] text-white px-5 py-3 rounded-lg hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-300"
                  >
                    Details
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}

        <div className="text-center mt-16">
          <Link
            to="/cars"
            className="inline-flex items-center gap-3 bg-[#D4AF37] text-[#111111] px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#c89f2f] hover:scale-105 transition-all duration-300"
          >
            View All Cars
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
