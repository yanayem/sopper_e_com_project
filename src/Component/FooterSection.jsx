import React from "react";
import logo from "../assets/logo_big.png";
import { FaInstagram, FaPinterest, FaWhatsapp } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle"; 

const FooterSection = () => {
  return (
    <main className="bg-gray-50 text-black">
      {/* Top Section */}
      <section className="pb-10 pt-16 border-b border-gray-700">
        <div className="container mx-auto flex flex-col items-center gap-4">
          {/* Logo */}
          <div className="h-10 w-auto flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="h-auto w-auto block dark:hidden"
            />
            <span className="font-semibold text-xl tracking-wide text-black dark:text-gray-50">
              SHOPPER
            </span>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center gap-4 text-md mt-4 pt-7">
            <li><a href="#" className="hover:text-eighth transition">Company</a></li>
            <li><a href="#" className="hover:text-eighth transition">Products</a></li>
            <li><a href="#" className="hover:text-eighth transition">Offices</a></li>
            <li><a href="#" className="hover:text-eighth transition">About</a></li>
            <li><a href="#" className="hover:text-eighth transition">Contact</a></li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex gap-3 mt-4">
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-200 border text-gray-900 hover:bg-gray-100 hover:text-pink-600 transition rounded-lg">
              <FaInstagram size={23} />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-200 border text-gray-900 hover:bg-gray-100 hover:text-red-700 transition rounded-lg">
              <FaPinterest size={23} />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-200 border text-gray-900 hover:bg-gray-100 hover:text-green-600 transition rounded-lg">
              <FaWhatsapp size={23} />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <footer className="bg-gray-50 py-4 text-gray-900 text-sm">
        <div className="container mx-auto flex flex-col items-center gap-2">
          <span>© {new Date().getFullYear()} Your Company. All Rights Reserved.</span>
          {/* Theme Toggle
          <ThemeToggle /> */}
        </div>
      </footer>
    </main>
  );
};

export default FooterSection;
