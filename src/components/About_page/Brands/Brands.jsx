import { motion } from "framer-motion";
import { FaCrown } from "react-icons/fa";

import Loading from "../../Loading/Loading";
import Error from "../../Error/Error";

import useCars from "../../../hooks/useCars";

export default function Brands() {
  const {
    data: cars = [],
    isLoading,
    error,
  } = useCars();

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  // Unique Brands
  const brands = [...new Set(cars.map((car) => car.brand))].slice(0, 4);

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">
            Luxury Manufacturers
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#111111]">
            Our Premium Brands
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600">
            Explore an exclusive collection from the world's most prestigious
            automotive brands, carefully selected for luxury, performance, and
            unforgettable driving experiences.
          </p>

        </div>

        {/* Brands */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">

          {brands.map((brand, index) => (

            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                group
                bg-white
                rounded-2xl
                border
                border-gray-200
                p-8
                text-center
                shadow-md
                hover:border-[#D4AF37]
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >

              {/* Icon */}

              <div className="mx-auto w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37] transition">

                <FaCrown className="text-2xl text-[#D4AF37] group-hover:text-[#111111]" />

              </div>

              {/* Brand */}

              <h3 className="mt-6 text-2xl font-bold text-[#111111]">
                {brand}
              </h3>

              <div className="w-12 h-1 bg-[#D4AF37] rounded-full mx-auto mt-5 group-hover:w-20 transition-all duration-300" />

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}