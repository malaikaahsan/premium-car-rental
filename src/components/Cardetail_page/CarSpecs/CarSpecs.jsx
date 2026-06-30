import {
  FaCarSide,
  FaGasPump,
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCogs,
  FaPalette,
} from "react-icons/fa";

export default function CarSpecs({ car }) {
  const specs = [
    {
      icon: <FaCarSide />,
      label: "Brand",
      value: car.brand,
    },
    {
      icon: <FaGasPump />,
      label: "Fuel",
      value: car.fuel,
    },
    {
      icon: <FaUsers />,
      label: "Seats",
      value: `${car.seats} Seats`,
    },
    {
      icon: <FaCogs />,
      label: "Transmission",
      value: car.transmission,
    },
    {
      icon: <FaPalette />,
      label: "Color",
      value: car.color,
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: car.location,
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-[#111111] mb-6">
        Car Specifications
      </h2>

      <div className="grid sm:grid-cols-2 gap-5">
        {specs.map((item) => (
          <div
            key={item.label}
            className="
              flex
              items-center
              gap-4
              bg-white
              rounded-xl
              p-5
              shadow-md
              border
              border-gray-100
              hover:border-[#D4AF37]
              hover:shadow-xl
              transition-all
              duration-300
            "
          >
            <div
              className="
                w-12
                h-12
                rounded-full
                flex
                items-center
                justify-center
                bg-[#111111]
                text-[#D4AF37]
                text-lg
              "
            >
              {item.icon}
            </div>

            <div>
              <p className="text-gray-500 text-sm">
                {item.label}
              </p>

              <h3 className="font-semibold text-[#111111]">
                {item.value}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}