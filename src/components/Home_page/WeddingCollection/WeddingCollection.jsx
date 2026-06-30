import useCars from "../../../hooks/useCars";
import { getCars } from "../../../services/carService";
import Error from "../../Error/Error"; 
import Loading from "../../Loading/Loading";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaHeart, FaStar } from "react-icons/fa";

export default function WeddingCollection() {
  const { data: cars = [], isLoading, error } = useCars();
   
     if (isLoading) return <Loading />;
   
     if (error) return <Error />;
  const weddingCars = cars
    .filter((car) => car.category === "Wedding Cars")
    .slice(0, 4);

  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">
            Wedding Collection
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#111111]">
            Arrive in Timeless Elegance
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600">
            Make your special day unforgettable with our luxurious wedding
            collection featuring iconic vehicles from the world's finest brands.
          </p>

        </div>

        {/* Cars */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {weddingCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
            >
              {/* Image */}

              <div className="relative h-64 overflow-hidden">

                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow">
                  <FaHeart className="text-[#D4AF37]" />
                </div>

              </div>

              {/* Content */}

              <div className="p-6">

                <div className="flex justify-between items-center">

                  <h3 className="text-xl font-bold text-[#111111]">
                    {car.brand}
                  </h3>

                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    <FaStar />
                    <span>{car.rating}</span>
                  </div>

                </div>

                <p className="mt-2 text-gray-600">
                  {car.name}
                </p>

                <div className="flex justify-between items-center mt-6">

                  <div>

                    <span className="text-2xl font-bold text-[#D4AF37]">
                      {car.pricePerDay} PKR
                    </span>

                    <span className="text-gray-500">
                      /day
                    </span>

                  </div>

                  <Link
                    to={`/cars/${car.id}`}
                    className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#111111] transition"
                  >
                    <FaArrowRight />
                  </Link>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* View All */}

        <div className="text-center mt-14">

          <Link
            to="/cars"
            className="inline-flex items-center gap-3 bg-[#D4AF37] text-[#111111] px-8 py-4 rounded-lg font-semibold hover:bg-[#c89f2f] transition duration-300 shadow-lg"
          >
            View Full Collection

            <FaArrowRight />
          </Link>

        </div>

      </div>
    </section>
  );
}