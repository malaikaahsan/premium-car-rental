import { motion } from "framer-motion";
import { FaSearch, FaMapMarkerAlt, FaCar } from "react-icons/fa";

export default function SearchSection() {
  return (
    <section className="bg-[#F5F5F5] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111]">
            Find Your Perfect Ride
          </h2>

          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>

          <p className="mt-5 text-[#555] max-w-2xl mx-auto">
            Browse our premium fleet and discover the perfect luxury car
            for your next journey.
          </p>
        </motion.div>

        {/* Search Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 border border-[#D4AF37]/20"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />

              <input
                type="text"
                placeholder="Search car..."
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>

            {/* Category */}
            <div className="relative">
              <FaCar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />

              <select className="w-full appearance-none pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
                <option>All Categories</option>
                <option>Luxury</option>
                <option>Sports</option>
                <option>SUV</option>
                <option>Wedding</option>
                <option>Electric</option>
              </select>
            </div>

            {/* Location */}
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />

              <select className="w-full appearance-none pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
                <option>Islamabad</option>
                <option>Lahore</option>
                <option>Karachi</option>
                <option>Rawalpindi</option>
              </select>
            </div>

            {/* Button */}
            <button className="bg-[#111111] text-white rounded-lg font-semibold text-lg hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-300 shadow-lg">
              Search Cars
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}