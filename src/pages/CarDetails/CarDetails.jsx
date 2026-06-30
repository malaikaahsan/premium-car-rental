import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

import CarFeatures from "../../components/Cardetail_page/CarFeatures/CarFeatures";
import CarGallery from "../../components/Cardetail_page/CarGallery/CarGallery";
import CarInfo from "../../components/Cardetail_page/CarInfo/CarInfo";
import PriceCard from "../../components/Cardetail_page/PriceCard/PriceCard";
import RelatedCars from "../../components/Cardetail_page/RelatedCars/RelatedCars";
import CarSpecs from "../../components/Cardetail_page/CarSpecs/CarSpecs";

import useCar from "../../hooks/useCar";
import useCars from "../../hooks/useCars";

export default function CarDetails() {
  const { id } = useParams();

  // Selected Car
  const { data: car, isLoading: carLoading, error: carError } = useCar(id);

  // All Cars (for related cars)
  const {
    data: cars = [],
    isLoading: carsLoading,
    error: carsError,
  } = useCars();

  const relatedCars = useMemo(() => {
    if (!car) return [];

    return cars
      .filter((item) => item.category === car.category && item.id !== car.id)
      .slice(0, 3);
  }, [cars, car]);

  if (carLoading || carsLoading) return <Loading />;

  if (carError || carsError) return <Error />;

  if (!car) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#111111]">Car Not Found</h2>

          <p className="mt-4 text-gray-500">
            The vehicle you're looking for doesn't exist.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F5F5F5] py-16 md:px-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Gallery */}
        <CarGallery car={car} />

        {/* Info + Price */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-3 gap-10 mt-14"
        >
          <div className="lg:col-span-2">
            <CarInfo car={car} />
          </div>

          <div>
            <PriceCard car={car} />
          </div>
        </motion.div>

        {/* Specifications */}
        <div className="mt-16">
          <CarSpecs car={car} />
        </div>

        {/* Features */}
        <div className="mt-16">
          <CarFeatures features={car.features || []} />
        </div>

        {/* Related Cars */}
        {relatedCars.length > 0 && (
          <div className="mt-20">
            <RelatedCars cars={relatedCars} />
          </div>
        )}
      </div>
    </section>
  );
}
