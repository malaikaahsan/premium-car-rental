import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaStickyNote,
  FaMoneyBillWave,
  FaCarSide,
} from "react-icons/fa";

export default function BookingForm({
  car,
  bookingData,
  setBookingData,
  setShowSuccess,
  setBookingReference,
  onBookingSubmit,
}) {
  function handleChange(e) {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  }

  const totalDays = useMemo(() => {
    if (!bookingData.pickupDate || !bookingData.returnDate) return 0;

    const start = new Date(bookingData.pickupDate);
    const end = new Date(bookingData.returnDate);

    const diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);

    return diff > 0 ? diff : 0;
  }, [bookingData.pickupDate, bookingData.returnDate]);

  const totalPrice = totalDays * car.pricePerDay;

  function generateReference() {
    return `PCR-${new Date().getFullYear()}-${Math.floor(
      1000 + Math.random() * 9000,
    )}`;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!car?.available) {
      return;
    }

    const reference = generateReference();
    const updatedBookingData = {
      ...bookingData,
      carId: car.id,
      carName: car.name,
      totalDays,
      totalPrice,
      reference,
      bookingDate: new Date().toISOString(),
      status: "Confirmed",
    };

    setBookingReference(reference);
    setBookingData((prev) => ({
      ...prev,
      ...updatedBookingData,
      totalDays,
      totalPrice,
    }));

    if (onBookingSubmit) {
      await onBookingSubmit(updatedBookingData);
    } else {
      setShowSuccess(true);
    }
  }

  const input =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20";

  if (!car?.available) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-[#111111]">
          Booking Unavailable
        </h2>
        <p className="mt-3 text-gray-600 leading-7">
          This car is already booked and cannot be reserved again.
        </p>
      </div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200"
    >
      <h2 className="text-3xl font-bold text-[#111111]">
        Complete Your Booking
      </h2>

      <p className="text-gray-500 mt-2">
        Fill in your reservation details below.
      </p>

      <div className="mt-10">
        <h3 className="font-bold text-xl mb-5">Customer Information</h3>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="relative">
            <FaUser className="absolute left-4 top-4 text-[#D4AF37]" />

            <input
              className={`${input} pl-11`}
              name="customerName"
              placeholder="Full Name"
              value={bookingData.customerName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-[#D4AF37]" />

            <input
              type="email"
              className={`${input} pl-11`}
              name="email"
              placeholder="Email Address"
              value={bookingData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <FaPhoneAlt className="absolute left-4 top-4 text-[#D4AF37]" />

            <input
              className={`${input} pl-11`}
              name="phone"
              placeholder="Phone Number"
              value={bookingData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-bold text-xl mb-5">Rental Details</h3>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="relative">
            <FaCalendarAlt className="absolute left-4 top-4 text-[#D4AF37]" />

            <input
              type="date"
              name="pickupDate"
              className={`${input} pl-11`}
              value={bookingData.pickupDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <FaCalendarAlt className="absolute left-4 top-4 text-[#D4AF37]" />

            <input
              type="date"
              name="returnDate"
              className={`${input} pl-11`}
              value={bookingData.returnDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <FaMapMarkerAlt className="absolute left-4 top-4 text-[#D4AF37]" />

            <input
              className={`${input} pl-11`}
              name="pickupLocation"
              placeholder="Pickup Location"
              value={bookingData.pickupLocation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <FaMapMarkerAlt className="absolute left-4 top-4 text-[#D4AF37]" />

            <input
              className={`${input} pl-11`}
              name="returnLocation"
              placeholder="Return Location"
              value={bookingData.returnLocation}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mt-10">
        <div className="relative">
          <FaCarSide className="absolute left-4 top-4 text-[#D4AF37]" />

          <select
            name="bookingType"
            className={`${input} pl-11`}
            value={bookingData.bookingType}
            onChange={handleChange}
          >
            <option>Self Drive</option>
            <option>With Driver</option>
          </select>
        </div>

        <div className="relative">
          <FaMoneyBillWave className="absolute left-4 top-4 text-[#D4AF37]" />

          <select
            name="paymentMethod"
            className={`${input} pl-11`}
            value={bookingData.paymentMethod}
            onChange={handleChange}
          >
            <option>Cash</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>Online Transfer</option>
          </select>
        </div>
      </div>

      <div className="relative mt-10">
        <FaStickyNote className="absolute left-4 top-4 text-[#D4AF37]" />

        <textarea
          rows={4}
          name="specialRequests"
          placeholder="Special Requests"
          value={bookingData.specialRequests}
          onChange={handleChange}
          className={`${input} pl-11 resize-none`}
        />
      </div>

      {totalDays > 0 && (
        <div className="mt-10 rounded-2xl bg-[#111111] p-6 text-white">
          <div className="flex justify-between">
            <span>Total Days</span>
            <span>{totalDays}</span>
          </div>

          <div className="flex justify-between mt-4">
            <span>Total Price</span>

            <span className="text-2xl font-bold text-[#D4AF37]">
              PKR {totalPrice.toLocaleString()}
            </span>
          </div>
        </div>
      )}

      <button
        type="submit"
        className="w-full mt-8 bg-[#D4AF37] text-[#111111] py-4 rounded-xl font-bold hover:bg-[#c89f2f] transition"
      >
        Confirm Booking
      </button>
    </motion.form>
  );
}
