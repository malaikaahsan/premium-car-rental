import { FaSortAmountDown } from "react-icons/fa";

export default function SortDropdown({ sortOrder, setSortOrder }) {
  return (
    <div className="relative w-full">
      <FaSortAmountDown className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D4AF37] text-lg pointer-events-none" />

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="
          w-full
          pl-14
          pr-12
          py-4
          rounded-xl
          border
          border-gray-300
          bg-white
          text-[#111111]
          shadow-md
          outline-none
          appearance-none
          cursor-pointer
          transition-all
          duration-300
          focus:border-[#D4AF37]
          focus:ring-4
          focus:ring-[#D4AF37]/20
          focus:shadow-xl
        "
      >
        <option value="">Sort by Price</option>
        <option value="low-high">Price: Low → High</option>
        <option value="high-low">Price: High → Low</option>
      </select>

      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#D4AF37]">
        ▼
      </div>
    </div>
  );
}
