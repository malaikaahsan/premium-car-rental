import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import heroimage from "../../../assets/images/home.jpg";

export default function Hero() {
  return (
    <section className="relative md:h-[140vh] h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroimage})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/35" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <div className="inline-block my-2 p-4 py-2 rounded-full border border-[#D4AF37] bg-[#111111]/50 backdrop-blur-sm">
              <span className="text-[#D4AF37] text-sm tracking-widest uppercase">
                Premium Luxury Car Rental
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-[#D4AF37]">
              Drive Luxury
              <br />
              Experience Excellence
            </h1>


            {/* Paragraph */}
            <p className="mt-8 text-md sm:text-sm md:text-xl text-gray-300 leading-8 max-w-xl">
              Discover the perfect blend of luxury, comfort, and performance.
              Whether it's a wedding, business trip, or weekend getaway, Veloura
              Drive has the perfect vehicle waiting for you.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/cars"
                  className="inline-flex items-center gap-3 bg-[#D4AF37] text-[#111111] md:px-8 px-4 py-4 rounded-lg font-semibold shadow-xl hover:bg-[#c59f2d] transition"
                >
                  Explore Cars
                  <FaArrowRight />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/booking"
                  className="text-[#D4AF37] inline-flex items-center justify-center border-2 border-white md:px-8 px-9 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Premium Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-10 grid grid-cols-3 gap-6 max-w-xl"
          >
            <div>
              <h3 className="text-xl md:text-4xl font-bold text-[#D4AF37]">
                100+
              </h3>
              <p className="text-gray-300 mt-2 text-sm md:text-base">
                Luxury Cars
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-4xl font-bold text-[#D4AF37]">
                10,000+
              </h3>
              <p className="text-gray-300 mt-2 text-sm md:text-base">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-4xl font-bold text-[#D4AF37]">
                24/7
              </h3>
              <p className="text-gray-300 mt-2 text-sm md:text-base">
                Customer Support
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-22 bg-linear-to-t from-[#F5F5F5] to-transparent" />
    </section>
  );
}
