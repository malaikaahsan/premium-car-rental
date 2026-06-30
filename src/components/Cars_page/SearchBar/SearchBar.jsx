import { FaSearch } from "react-icons/fa";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="relative w-full">
      {/* Search Icon */}
      <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D4AF37] text-lg" />

      {/* Input */}
      <input
        type="text"
        placeholder="Search by car name or brand..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
          placeholder:text-gray-400
          shadow-md
          transition-all
          duration-300
          outline-none
          focus:border-[#D4AF37]
          focus:ring-4
          focus:ring-[#D4AF37]/20
          focus:shadow-xl
        "
      />

      {/* Clear Button */}
      {search && (
        <button
          onClick={() => setSearch("")}
          className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition"
        >
          ✕
        </button>
      )}
    </div>
  );
}