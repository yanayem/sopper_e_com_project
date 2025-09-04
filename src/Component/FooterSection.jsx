import React from "react";
import logo from "../assets/Logo2.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle"; // ✅ import your toggle component

const FooterSection = () => {
  return (
    <main className="bg-gray-900 text-white">
      {/* Top Section */}
      <section className="py-4 border-b border-gray-700">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-28 md:w-32 object-contain" />

          {/* Navigation Links */}
          <ul className="flex flex-col md:flex-row gap-2 md:gap-4 mt-4 md:mt-0 text-sm text-center md:text-left">
            <li>
              <a href="#" className="hover:text-eighth transition">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-eighth transition">Portfolio</a>
            </li>
            <li>
              <a href="#" className="hover:text-eighth transition">Blog</a>
            </li>
            <li>
              <a href="#" className="hover:text-eighth transition">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-eighth transition">Service</a>
            </li>
            <li>
              <a href="#" className="hover:text-eighth transition">Contact</a>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="hidden md:flex gap-3 mt-4 md:mt-0">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-900 hover:bg-eighth hover:text-white transition"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-900 hover:bg-eighth hover:text-white transition"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-900 hover:bg-eighth hover:text-white transition"
            >
              <FaTwitter size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Main Footer Section */}
      <section className="bg-fourth py-12 text-white">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 text-center md:text-left">
          {/* Contact Us */}
          <div className="md:w-2/5">
            <h5 className="inline-block text-lg font-semibold mb-4 bg-green text-black px-4 py-2 rounded-xl">
              Contact Us
            </h5>

            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center justify-center md:justify-start gap-2">
                Email: info@positivus.com
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                Phone: 555-567-8901
              </li>
              <li>
                <div className="flex flex-col items-center md:items-start gap-2 text-gray-300">
                  <span>Address: 1234 Main St,</span>
                  <span>Moonstone City, Stardust State 12345</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Subscribe Form */}
          <div className="md:w-3/5 flex flex-col gap-30 items-center md:items-start bg-gray-800 px-4 py-10 rounded-xl">
            <form className="flex flex-col sm:flex-row w-full gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-3 w-full sm:w-2/3 bg-gray-800 text-white rounded-lg border border-gray-200 focus:border-white focus:ring-1 focus:ring-white outline-none text-sm"
              />
              <button
                type="submit"
                className="w-full sm:w-1/3 bg-green text-black px-4 py-3 rounded hover:bg-primary/80 transition text-sm"
              >
                Subscribe to news
              </button>
            </form>
          </div>

          {/* Social Media Icons under email on mobile */}
          <div className="flex gap-5 mt-4 md:hidden justify-center">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-900 hover:bg-eighth hover:text-white transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-900 hover:bg-eighth hover:text-white transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-900 hover:bg-eighth hover:text-white transition"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <footer className="bg-gray-800 py-4 text-gray-50 text-sm">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <span>© {new Date().getFullYear()} Your Company. All Rights Reserved.</span>
            <a href="#" className="ml-4 hover:text-eighth transition">
              Privacy Policy
            </a>
          </div>

          {/* ✅ Theme Toggle added to right side */}
          <div className="w-auto flex justify-end">
  <ThemeToggle />
</div>

        </div>
      </footer>
    </main>
  );
};

export default FooterSection;
