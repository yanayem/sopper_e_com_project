// src/components/NavBar.js
import React, { useState } from "react";
import logo from "../assets/Logo.png";
import logo2 from "../assets/Logo2.png";

const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "about", label: "About Us" },
    { id: "service", label: "Service" },
    { id: "usecases", label: "Use Cases" },
    { id: "pricing", label: "Pricing" },
    { id: "blog", label: "Blog" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="container mx-auto p-2 flex justify-between items-center">
        {/* Logo */}
        <div className="h-10 w-auto">
          {/* Light mode logo */}
          <img
            src={logo}
            alt="Logo Light"
            className="h-10 w-auto block dark:hidden"
          />
          {/* Dark mode logo */}
          <img
            src={logo2}
            alt="Logo Dark"
            className="h-10 w-auto hidden dark:block"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-black dark:text-gray-50 hover:text-green transition-colors duration-300 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex space-x-4">
          <a
            href="#"
            className="px-4 py-2 rounded-md border border-black text-black 
               dark:text-gray-50 dark:border-white 
               hover:bg-green hover:text-green hover:border-green 
               transition-colors duration-300 cursor-pointer 
               focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 
               dark:focus:ring-offset-gray-900"
          >
            Request a quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black dark:text-gray-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 px-6 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block text-black dark:text-gray-50 hover:text-green transition-colors duration-300 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Auth Buttons - Mobile */}
        <div className="flex flex-col space-y-2 mt-4">
          <a
            href="#getQuote"
           className="px-4 py-2 rounded-md border border-black text-black 
               dark:text-gray-50 dark:border-white 
               hover:bg-green hover:text-green hover:border-green 
               transition-colors duration-300 cursor-pointer 
               focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 
               dark:focus:ring-offset-gray-900"
          >
            Request a quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
