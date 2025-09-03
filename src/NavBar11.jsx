// src/components/NavBar.js
import React, { useState } from "react";

const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "product", label: "Product" },
    { id: "service", label: "Service" },
    { id: "faq", label: "FAQ" },
    { id: "blog", label: "Blog" },
    { id: "about", label: "About Us" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="container mx-auto p-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-green tracking-wider">Biccas</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-black dark:text-green hover:text-green transition-colors duration-300 cursor-pointer"
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
            href="#login"
            className="px-4 py-2 rounded-md text-black dark:text-green hover:bg-green-light transition-colors duration-300 cursor-pointer"
          >
            Login
          </a>
          <a
            href="#sign-up"
            className="px-4 py-2 rounded-md bg-green text-white hover:bg-green/80 transition-colors duration-300 cursor-pointer"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black dark:text-green focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 px-6 overflow-hidden transition-max-height duration-300 ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block text-black dark:text-green hover:text-green transition-colors duration-300 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col space-y-2 mt-4">
          <a
            href="#login"
            className="px-4 py-2 rounded-md text-gray-900 dark:text-green hover:bg-green-light transition-colors duration-300 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Login
          </a>
          <a
            href="#sign-up"
            className="px-4 py-2 rounded-md bg-green text-white hover:bg-green/80 transition-colors duration-300 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
