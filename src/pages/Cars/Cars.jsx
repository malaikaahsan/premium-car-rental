import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../../services/api";

import { FaCarSide } from "react-icons/fa";
import { motion } from "framer-motion";

import CarCard from "../../components/CarCard/CarCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import SortDropdown from "../../components/SortDropdown/SortDropdown";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

export default function Cars() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");

  const {
    data: cars = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      const response = await api.get("/cars");
      return response.data;
    },
  });

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  const categories = ["All", ...new Set(cars.map((car) => car.category))];

  const filteredCars = cars
    .filter((car) => {
      const matchesSearch =
        car.name.toLowerCase().includes(search.toLowerCase()) ||
        car.brand.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || car.category === selectedCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOrder === "low-high") return a.pricePerDay - b.pricePerDay;

      if (sortOrder === "high-low") return b.pricePerDay - a.pricePerDay;

      return 0;
    });

  return (
    <div className="bg-[#F5F5F5] min-h-screen py-14">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#D4AF37]/30 bg-white shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="uppercase tracking-[0.35em] text-[#D4AF37] text-xs md:text-sm font-semibold">
              Premium Fleet
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] leading-tight">
            Explore Our
            <span className="block text-[#D4AF37]">Luxury Collection</span>
          </h1>

          {/* Decorative Line */}
          <div className="flex justify-center mt-6">
            <div className="w-28 h-1 rounded-full bg-[#D4AF37]" />
          </div>

          {/* Description */}
          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-8">
            Discover an exclusive selection of luxury sedans, exotic sports
            cars, premium SUVs, and elegant wedding vehicles. Every ride is
            carefully maintained to deliver comfort, style, and an unforgettable
            driving experience.
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="bg-white rounded-3xl shadow-xl border border-[#D4AF37]/20 p-6">
            {/* Top Row */}
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex-1">
                <SearchBar search={search} setSearch={setSearch} />
              </div>

              <div className="lg:w-72">
                <FilterSidebar
                  categories={categories}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              </div>

              <div className="lg:w-72">
                <SortDropdown
                  sortOrder={sortOrder}
                  setSortOrder={setSortOrder}
                />
              </div>
            </div>

            {/* Bottom Row */}

            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-5">
              <p className="text-gray-600">
                Showing{" "}
                <span className="font-bold text-[#D4AF37]">
                  {filteredCars.length}
                </span>{" "}
                cars
              </p>

              {(search || selectedCategory !== "All" || sortOrder) && (
                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                    setSortOrder("");
                  }}
                  className="mt-4 sm:mt-0 px-5 py-2 rounded-lg border border-[#D4AF37] text-[#111111] hover:bg-[#D4AF37] transition font-medium"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => <CarCard key={car.id} car={car} />)
          ) : (
            <div className="col-span-full flex justify-center py-20">
              <div className="max-w-lg w-full bg-white rounded-3xl border border-[#D4AF37]/20 shadow-xl p-10 text-center">
                {/* Icon */}
                <div className="w-20 h-20 mx-auto rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <FaCarSide className="text-4xl text-[#D4AF37]" />
                </div>

                {/* Heading */}
                <h2 className="mt-6 text-3xl font-bold text-[#111111]">
                  No Cars Found
                </h2>

                {/* Description */}
                <p className="mt-3 text-gray-600 leading-7">
                  We couldn't find any vehicles matching your search or selected
                  filters. Try adjusting your criteria to discover more luxury
                  cars.
                </p>

                {/* Button */}
                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                    setSortOrder("");
                  }}
                  className="mt-8 inline-flex items-center justify-center px-8 py-3 rounded-xl bg-[#D4AF37] text-[#111111] font-semibold shadow-lg hover:bg-[#c89f2f] hover:scale-105 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
