import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaCarSide,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SuccessModal({
  open,
  bookingReference,
  onClose,
}) {
  return (
    <AnimatePresence>

      {open && (

        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          <motion.div
            initial={{
              scale: .8,
              opacity: 0,
              y: 30,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            exit={{
              scale: .8,
              opacity: 0,
            }}
            transition={{
              duration: .35,
            }}
            className="bg-white rounded-3xl max-w-lg w-full p-10 text-center shadow-2xl"
          >

            <div className="flex justify-center">

              <FaCheckCircle className="text-7xl text-green-500" />

            </div>

            <h2 className="mt-6 text-4xl font-bold text-[#111111]">
              Booking Confirmed
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Thank you for choosing
              <span className="font-semibold text-[#D4AF37]">
                {" "}Veloura Drive
              </span>.
              Your reservation has been successfully created.
            </p>

            <div className="mt-8 bg-[#F5F5F5] rounded-2xl p-6">

              <p className="text-gray-500 uppercase tracking-widest text-sm">
                Booking Reference
              </p>

              <h3 className="mt-3 text-3xl font-bold text-[#D4AF37]">
                {bookingReference}
              </h3>

            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <button
                onClick={onClose}
                className="flex-1 border-2 border-[#111111] py-3 rounded-xl font-semibold hover:bg-[#111111] hover:text-white transition"
              >
                Close
              </button>

              <Link
                to="/cars"
                className="flex-1 flex justify-center items-center gap-2 bg-[#D4AF37] py-3 rounded-xl font-semibold text-[#111111] hover:bg-[#c59f2d] transition"
              >

                <FaCarSide />

                Browse More Cars

              </Link>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}