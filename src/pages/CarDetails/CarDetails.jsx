import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();

  const { data: car, isLoading: carLoading, error: carError } = useCar(id);

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
      <section className="min-h-[70vh] bg-[#F5F5F5] flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl rounded-[32px] border border-gray-200 bg-white p-10 text-center shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Vehicle Not Available
          </p>
          <h2 className="mt-4 text-4xl font-bold text-[#111111]">
            This car isn’t available right now
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            The vehicle you requested could not be found, may have been removed,
            or the link you used is invalid.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="rounded-xl border border-[#111111] px-6 py-3 font-semibold text-[#111111] transition hover:bg-[#111111] hover:text-white"
            >
              Go Back
            </button>
            <button
              onClick={() => navigate("/cars")}
              className="rounded-xl bg-[#D4AF37] px-6 py-3 font-semibold text-[#111111] transition hover:bg-[#c59f2d]"
            >
              Browse Cars
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F5F5F5] py-16 md:px-8">
      <Helmet>
        <title>{car.name} | Veloura Drive</title>
        <meta
          name="description"
          content={`Book ${car.name} with Veloura Drive.`}
        />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6">
        <CarGallery car={car} />

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

        <div className="mt-16">
          <CarSpecs car={car} />
        </div>

        <div className="mt-16">
          <CarFeatures features={car.features || []} />
        </div>

        {relatedCars.length > 0 && (
          <div className="mt-20">
            <RelatedCars cars={relatedCars} />
          </div>
        )}
      </div>
    </section>
  );
}
