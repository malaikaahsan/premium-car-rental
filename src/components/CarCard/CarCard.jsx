import { Link } from "react-router-dom";

export default function CarCard({ car }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">

      <img
        src={car.image}
        alt={car.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-bold">
          {car.name}
        </h2>

        <p className="text-gray-500">
          {car.category}
        </p>

        <div className="flex justify-between mt-4">

          <span>
            {car.seats} Seats
          </span>

          <span>
            {car.transmission}
          </span>

        </div>

        <div className="flex justify-between mt-4">

          <span className="text-yellow-600 font-bold">
            ${car.pricePerDay}/day
          </span>

          <span>
            ⭐ {car.rating}
          </span>

        </div>

        <Link
          to={`/cars/${car.id}`}
          className="block mt-6 text-center bg-black text-white py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}