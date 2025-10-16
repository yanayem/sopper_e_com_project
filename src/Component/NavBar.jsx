// src/components/NavBar.js
import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import cartIcon from "../assets/cart_icon.png";
import { CartContext } from "./CartContext";

const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  const navItems = [
    { path: "/", label: "Shop" },
    { path: "/men", label: "Men" },
    { path: "/women", label: "Women" },
    { path: "/kid", label: "Kids" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="container mx-auto p-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto block dark:hidden" />
          <span className="font-semibold text-lg tracking-wide text-black dark:text-gray-50">SHOPPER</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-black dark:text-gray-50 hover:text-red-500 transition-colors duration-300 cursor-pointer ${
                    isActive ? "border-b-2 border-red-500 pb-1" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Login & Cart - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded-full border border-black text-black dark:text-gray-50 dark:border-white hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300"
          >
            Login
          </Link>
          <Link to="/cart" className="relative">
            <img src={cartIcon} alt="Cart" className="h-10 w-auto block dark:hidden" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {totalItems}
              </span>
            )}
          </Link>
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
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 flex flex-col space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-black dark:text-gray-50 hover:text-red-500 transition-colors duration-300 cursor-pointer ${
                  isActive ? "border-b-2 border-red-500 pb-1" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/login"
            className="px-4 py-2 rounded-full border border-black text-black dark:text-gray-50 dark:border-white hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/cart"
            className="relative px-4 py-2 rounded-full border border-black text-black dark:text-gray-50 dark:border-white hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
