"use client";

import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        
        {/* Information Column */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul>
              <li className="mb-2 hover:text-red-600 transition-colors">
                <button>Back to Top</button>
              </li>
              <li className="mb-2 hover:text-red-600 transition-colors">
                <a href="#">Payment Policy</a>
              </li>
              <li className="mb-2 hover:text-red-600 transition-colors">
                <a href="#">Delivery Policy</a>
              </li>
              <li className="mb-2 hover:text-red-600 transition-colors">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="mb-2 hover:text-red-600 transition-colors">
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <button className="text-red-600 hover:text-red-400 transition-colors">Back to Top</button>
          </div>
        </div>

        {/* Ichiba Japan Column */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-lg font-semibold mb-4">Ichiba Japan</h3>
            <p className="mb-2">
              123 Tokyo Street, Shibuya, Tokyo, Japan
            </p>
            <p className="mb-2">
              Phone: +81 123 456 789
            </p>
            <p className="mb-2">
              Office Hours: Mon-Fri, 9:00 AM - 6:00 PM (JST)
            </p>
          </div>
        </div>

        {/* Follow Us Column */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-600 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                <FaPinterestP />
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Branding and Payment Methods */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-4 px-6">
        <p className="text-sm text-center md:text-left mb-4 md:mb-0">
          Ichiba Japan: Authentic Anime Merch & Japanese Products
        </p>
        <div className="flex space-x-4">
          <img src="/path/to/visa.png" alt="Visa" className="w-10" />
          <img src="/path/to/mastercard.png" alt="MasterCard" className="w-10" />
          <img src="/path/to/paypal.png" alt="PayPal" className="w-10" />
          <img src="/path/to/amex.png" alt="American Express" className="w-10" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;