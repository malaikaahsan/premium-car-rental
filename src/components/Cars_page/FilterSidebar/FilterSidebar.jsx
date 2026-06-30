import { FaCarSide } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getCars } from "../../../services/carService";

export default function FilterSidebar({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  const { data: cars = [] } = useQuery({
    queryKey: ["cars"],
    queryFn: getCars,
  });

  return (
    <div className="relative w-full">
      <FaCarSide className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D4AF37] text-lg pointer-events-none" />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="
          w-full
          pl-14
          pr-5
          py-4
          rounded-xl
          border
          border-gray-300
          bg-white
          text-[#111111]
          shadow-md
          outline-none
          transition-all
          duration-300
          focus:border-[#D4AF37]
          focus:ring-4
          focus:ring-[#D4AF37]/20
          focus:shadow-xl
          appearance-none
          cursor-pointer
        "
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#D4AF37]">
        ▼
      </div>
    </div>
  );
}
