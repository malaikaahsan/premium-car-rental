import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaHeart, FaArrowRight, FaCarSide } from "react-icons/fa";
import { useWishlist } from "../../context/WishlistContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <section className="min-h-screen bg-[var(--page-bg)] px-6 py-16 text-[var(--text-primary)] transition-colors duration-300">
      <Helmet>
        <title>Wishlist | Veloura Drive</title>
        <meta
          name="description"
          content="View and manage your favorite cars on Veloura Drive."
        />
      </Helmet>

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Saved Cars
          </p>
          <h1 className="mt-4 text-4xl font-bold text-[#111111] sm:text-5xl">
            Your Wishlist
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Keep your favorite luxury cars saved for later and come back
            whenever you are ready to book.
          </p>
        </div>

        {wishlist.length === 0 ? (
          <div className="mx-auto max-w-2xl rounded-[32px] border border-dashed border-[var(--border)] bg-[var(--surface)] p-10 text-center shadow-xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#D4AF37]/10">
              <FaHeart className="text-4xl text-[#D4AF37]" />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-[#111111]">
              Your wishlist is empty
            </h2>
            <p className="mt-3 text-[var(--text-secondary)]">
              Tap the heart icon on any car to save it here for quick access.
            </p>
            <Link
              to="/cars"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#D4AF37] px-6 py-3 font-semibold text-[#111111] transition hover:bg-[#c89f2f]"
            >
              Browse Cars
              <FaArrowRight />
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {wishlist.map((car) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] shadow-xl"
              >
                <div className="relative h-56">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="h-full w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeFromWishlist(car.id)}
                    className="absolute right-4 top-4 rounded-full bg-white/90 p-3 text-[#111111] shadow-lg"
                    aria-label="Remove from wishlist"
                  >
                    <FaHeart className="fill-current text-[#D4AF37]" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-bold text-[#111111]">
                        {car.name}
                      </h3>
                      <p className="text-gray-500">{car.brand}</p>
                    </div>
                    <span className="rounded-full bg-[var(--surface-muted)] px-3 py-1 text-xs font-semibold text-[var(--text-primary)]">
                      {car.category}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <FaCarSide className="text-[#D4AF37]" />
                    {car.location}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-[#D4AF37]">
                        PKR {Number(car.pricePerDay || 0).toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-500">/day</p>
                    </div>
                    <Link
                      to={`/cars/${car.id}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#111111] px-4 py-3 font-semibold text-white transition hover:bg-[#D4AF37] hover:text-[#111111]"
                    >
                      View Details
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
