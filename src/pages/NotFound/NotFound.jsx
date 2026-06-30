import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaCarCrash, FaHome, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <Helmet>
        <title>Page Not Found | Veloura Drive</title>
        <meta
          name="description"
          content="The page you requested could not be found."
        />
      </Helmet>

      <div className="text-center max-w-2xl">
        <div className="flex justify-center mb-8">
          <FaCarCrash className="text-8xl text-yellow-500" />
        </div>

        <h1 className="text-8xl font-extrabold text-black">404</h1>

        <h2 className="text-4xl font-bold mt-6">Oops! Your Ride Got Lost</h2>

        <p className="mt-6 text-gray-600 text-lg">
          The page you're looking for doesn't exist, has been moved, or the URL
          is incorrect. If you were trying to open a specific car, the vehicle
          may no longer be available.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-10">
          <Link
            to="/"
            className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-yellow-500 hover:text-black transition"
          >
            <FaHome />
            Home
          </Link>

          <Link
            to="/cars"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-yellow-600 transition"
          >
            <FaArrowLeft />
            Browse Cars
          </Link>
        </div>
      </div>
    </section>
  );
}
