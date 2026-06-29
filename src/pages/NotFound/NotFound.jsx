import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-8xl font-bold">404</h1>

      <p className="mt-4 text-xl">
        Page Not Found
      </p>

      <Link
        to="/"
        className="mt-6 bg-black text-white px-6 py-3 rounded"
      >
        Back Home
      </Link>
    </div>
  );
}