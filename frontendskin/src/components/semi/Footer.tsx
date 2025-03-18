import React from "react";
import logoicon from "../../assets/logo.png";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 border-t py-10">
      <div className="container mx-auto flex flex-col sm:grid grid-cols-1 md:grid-cols-3 gap-14 my-10 text-sm px-6 md:px-12">
        {/* Logo and Description */}
        <div>
          <img src={logoicon} className="mb-5 w-32" alt="Spring Bing Logo" />
          <p className="w-full md:w-4/5 text-gray-600 leading-relaxed">
          Renora is your trusted destination for luxurious and effective skincare.
           We blend science and nature to create high-quality products designed to nourish,
            protect, and enhance your skin. Whether you're looking for deep hydration, brightening 
            solutions, or daily essentials, our carefully curated collections cater to all skin types. 
            Visit our Nugegoda store or shop online to experience radiant, healthy skin every day!
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-semibold mb-5 text-gray-800">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <a
                href="/"
                className="hover:text-blue-600 hover:underline transition-all duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-600 hover:underline transition-all duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/faqs"
                className="hover:text-blue-600 hover:underline transition-all duration-200"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="/contactus"
                className="hover:text-blue-600 hover:underline transition-all duration-200"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-xl font-semibold mb-5 text-gray-800">
            Get In Touch
          </p>
          <ul className="flex flex-col gap-3 text-gray-600">
            <li className="flex items-center space-x-2">
              <FaPhone className="text-blue-600" />
              <span className="hover:text-blue-600 transition duration-200">
                +94-423-987-83
              </span>
            </li>

            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-blue-600" />
              <span className="hover:text-blue-600 transition duration-200">
                contact@renoraskincare@ren.com
              </span>
            </li>

            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-blue-600" />
              <span className="hover:text-blue-600 transition duration-200">
                No. 45, High Level Road, Nugegoda, Colombo 10250, Sri Lanka
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-8 mb-4 border-t border-gray-200 pt-5 text-center text-gray-700 text-sm">
        <p>Copyright © 2025 <b>RENORA</b> - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
