import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CarGallery({ car }) {
  const [selectedImage, setSelectedImage] = useState(car.image);

  useEffect(() => {
    setSelectedImage(car.image);
  }, [car]);

  const images = [car.image, ...(car.gallery || [])];

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="space-y-5"
    >
      <div className="overflow-hidden rounded-3xl shadow-2xl border border-[#D4AF37]/20 bg-white">
        <img
          src={selectedImage}
          alt={car.name}
          className="w-full h-[350px] md:h-[500px] object-cover transition duration-700 hover:scale-105"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 ">
        {images.map((image, index) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-xl border-2 transition-all duration-300
            ${
              selectedImage === image
                ? "border-[#D4AF37]"
                : "border-transparent hover:border-[#D4AF37]/50"
            }`}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="md:h-44 w-full object-cover"
            />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
