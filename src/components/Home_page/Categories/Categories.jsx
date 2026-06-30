import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useCars from "../../../hooks/useCars";
import { getCars } from "../../../services/carService";
import Error from "../../Error/Error"; 
import Loading from "../../Loading/Loading";
import {
  FaCarSide,
  FaGem,
  FaBolt,
  FaCrown,
  FaCar,
  FaShuttleVan,
  FaLeaf,
  FaRing,
} from "react-icons/fa";

const iconMap = {
  "Luxury Cars": <FaGem />,
  "Sports Cars": <FaBolt />,
  "SUVs": <FaCarSide />,
  "Sedans": <FaCar />,
  "Economy Cars": <FaLeaf />,
  "Electric Vehicles": <FaCrown />,
  "Vans & Minibuses": <FaShuttleVan />,
  "Wedding Cars": <FaRing />,
  "Vintage": <FaCrown />,
};

export default function Categories() {
  const { data: cars = [], isLoading, error } = useCars();
    
      if (isLoading) return <Loading />;
    
      if (error) return <Error />;
  const categories = [...new Set(cars.map((car) => car.category))];

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111]">
            Browse by Category
          </h2>

          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Choose from our premium collection of luxury, sports,
            wedding and family vehicles.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-14">

          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <Link
                to={`/cars?category=${encodeURIComponent(category)}`}
                className="group bg-white rounded-2xl border border-gray-200 hover:border-[#D4AF37] shadow-md hover:shadow-2xl transition-all duration-300 p-6 md:p-8 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-3xl text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition duration-300">
                  {iconMap[category] || <FaCarSide />}
                </div>

                <h3 className="mt-6 text-sm md:text-lg font-semibold text-[#111111] text-center group-hover:text-[#D4AF37] transition">
                  {category}
                </h3>
              </Link>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}