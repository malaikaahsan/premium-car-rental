import { createContext, useContext, useEffect, useMemo, useState } from "react";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    if (typeof window === "undefined") return [];

    try {
      const saved = window.localStorage.getItem("veloura-wishlist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("veloura-wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist]);

  const addToWishlist = (car) => {
    setWishlist((current) => {
      if (current.some((item) => String(item.id) === String(car.id))) {
        return current;
      }

      return [...current, car];
    });
  };

  const removeFromWishlist = (carId) => {
    setWishlist((current) =>
      current.filter((item) => String(item.id) !== String(carId)),
    );
  };

  const toggleWishlist = (car) => {
    if (wishlist.some((item) => String(item.id) === String(car.id))) {
      removeFromWishlist(car.id);
      return false;
    }

    addToWishlist(car);
    return true;
  };

  const value = useMemo(
    () => ({
      wishlist,
      addToWishlist,
      removeFromWishlist,
      toggleWishlist,
      isInWishlist: (carId) =>
        wishlist.some((item) => String(item.id) === String(carId)),
    }),
    [wishlist],
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }

  return context;
}
