import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

import BookingHero from "../../components/Booking_page/BookingHero/BookingHero";
import SelectedCarCard from "../../components/Booking_page/SelectedCarCard/SelectedCarCard";
import BookingForm from "../../components/Booking_page/BookingForm/BookingForm";
import BookingSummary from "../../components/Booking_page/BookingSummary/BookingSummary";
import SuccessModal from "../../components/Booking_page/SuccessModal/SuccessModal";

import useCar from "../../hooks/useCar";
import useCreateBooking from "../../hooks/useCreateBooking";
import { getBookings } from "../../services/bookingService";

export default function Booking() {
  const [searchParams] = useSearchParams();
  const urlCarId = searchParams.get("car");

  const [selectedCarId, setSelectedCarId] = useState(() => {
    if (typeof window === "undefined") return "";
    return window.localStorage.getItem("lastBookingCarId") || "";
  });

  useEffect(() => {
    if (urlCarId) {
      window.localStorage.setItem("lastBookingCarId", urlCarId);
      setSelectedCarId(urlCarId);
    }
  }, [urlCarId]);

  const activeCarId = urlCarId || selectedCarId;

  const {
    data: car,
    isLoading,
    error,
  } = useCar(activeCarId);

  const { data: bookings = [], isLoading: bookingsLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
    staleTime: 1000 * 60 * 5,
  });

  const createBooking = useCreateBooking();

  // Shared booking state
  const [bookingData, setBookingData] = useState({
    customerName: "",
    email: "",
    phone: "",

    pickupDate: "",
    returnDate: "",

    pickupLocation: "",
    returnLocation: "",

    bookingType: "Self Drive",
    paymentMethod: "Cash",

    specialRequests: "",

    totalDays: 0,
    totalPrice: 0,
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [bookingReference, setBookingReference] = useState("");
  const [localBookings, setLocalBookings] = useState([]);

  if (isLoading || bookingsLoading) return <Loading />;

  if (error) return <Error />;

  const handleBookingSubmit = async (bookingPayload) => {
    try {
      const savedBooking = await createBooking.mutateAsync(bookingPayload);
      const bookingToShow = savedBooking || bookingPayload;
      setBookingReference(bookingToShow.reference || bookingPayload.reference);
      setBookingData((prev) => ({ ...prev, ...bookingPayload }));
      setLocalBookings((prev) => [bookingToShow, ...prev]);
      setShowSuccess(true);
    } catch (error) {
      console.error("Booking failed", error);
      setBookingReference(bookingPayload.reference);
      setBookingData((prev) => ({ ...prev, ...bookingPayload }));
      setLocalBookings((prev) => [bookingPayload, ...prev]);
      setShowSuccess(true);
    }
  };

  const confirmedBookings = [
    ...(Array.isArray(bookings) ? bookings : []),
    ...localBookings,
  ].filter((booking) => booking?.status === "Confirmed");

  return (
    <section className="bg-[#F5F5F5] min-h-screen">
      <BookingHero />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[0.95fr_1.45fr] gap-10"
        >
          <div className="space-y-8">
            {car ? (
              <SelectedCarCard car={car} />
            ) : (
              <div className="rounded-[28px] border border-dashed border-gray-300 bg-white p-8 text-center shadow-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                  Pick a Car
                </p>
                <h3 className="mt-3 text-2xl font-bold text-[#111111]">
                  Select a vehicle to continue
                </h3>
                <p className="mt-3 text-gray-500">
                  Choose a car from the cars page and return here to finish the reservation.
                </p>
              </div>
            )}

            {car && (
              <BookingSummary
                car={car}
                totalDays={bookingData.totalDays}
                totalPrice={bookingData.totalPrice}
              />
            )}

            <div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                    Confirmed Bookings
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-[#111111]">
                    Your Reservations
                  </h3>
                </div>
                <span className="rounded-full bg-[#F5F5F5] px-3 py-1 text-sm font-semibold text-[#111111]">
                  {confirmedBookings.length}
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {confirmedBookings.length > 0 ? (
                  confirmedBookings
                    .slice(0, 4)
                    .map((booking) => (
                      <div
                        key={booking.id}
                        className="rounded-2xl border border-gray-200 bg-[#FCFCFC] p-4"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-semibold text-[#111111]">
                              {booking.carName || `Car #${booking.carId}`}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {booking.reference} • {booking.pickupDate} to {booking.returnDate}
                            </p>
                          </div>
                          <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-700">
                            Confirmed
                          </span>
                        </div>
                        <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                          <span>{booking.customerName}</span>
                          <span className="font-semibold text-[#111111]">
                            PKR {Number(booking.totalPrice || 0).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ))
                ) : (
                  <p className="rounded-2xl border border-dashed border-gray-300 bg-[#FCFCFC] p-6 text-center text-gray-500">
                    No confirmed bookings yet.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div>
            <BookingForm
              car={car}
              bookingData={bookingData}
              setBookingData={setBookingData}
              setShowSuccess={setShowSuccess}
              setBookingReference={setBookingReference}
              onBookingSubmit={handleBookingSubmit}
            />
          </div>
        </motion.div>
      </div>

      <SuccessModal
        open={showSuccess}
        bookingReference={bookingReference}
        onClose={() => setShowSuccess(false)}
      />
    </section>
  );
}