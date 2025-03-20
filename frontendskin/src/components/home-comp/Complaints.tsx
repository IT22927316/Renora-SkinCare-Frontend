import React from "react";
import { Link } from "react-router-dom";
import complaintpic from "../../assets/complaints.jpg";
import { motion } from "framer-motion";

const Complaints: React.FC = () => {
  return (
    <div className="relative w-full  py-16 px-6 lg:px-24 bg-gray-100 mb-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={complaintpic}
          alt="Complaint Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="relative z-10 bg-black bg-opacity-60 p-8 md:p-14 lg:p-16 text-white rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Content Section */}
          <div className="md:w-3/5">
            <h2 className="text-4xl font-bold leading-snug">
              Encountering Any Issues?
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              If you face any difficulties while browsing our website or have
              questions about our services, we're here to help! Our support team
              is dedicated to assisting you with any technical issues, order
              concerns, or general inquiries.
            </p>
            <p className="mt-2 text-lg">
              Your satisfaction is our top priority, and we strive to resolve
              any issues swiftly. Thank you for choosing <span className="font-semibold">Renora</span>!
            </p>

            {/* FAQ Button */}
            <Link to="/faqs" className="inline-block mt-6">
                <motion.button
                            className="relative overflow-hidden px-5 py-2 font-semibold rounded bg-gray-800 text-white border-2 border-gray-800 transition-all duration-300 group mb-8"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="absolute inset-0 bg-white transition-transform transform translate-y-full group-hover:translate-y-0 duration-300"></span>
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-800">
                            Visit F A Q
                            </span>
                </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
