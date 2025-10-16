import React from "react";
import img from "../assets/exclusive_image.png";
import "../styles/HeroSection.css";

const Offers = () => {
  return (
    <section className="py-16 hero_bg flex flex-col md:flex-row items-center justify-between px-6 md:px-16 gap-8">
      {/* Text Content */}
      <div className="flex flex-col gap-4 md:w-1/2 items-center md:items-start text-center md:text-left">

        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
          Exclusive Offers For You
        </h1>
        <p className="text-gray-900 text-lg md:text-xl">
          ONLY ON BEST SELLERS PRODUCTS
        </p>

        {/* Button with onClick navigation */}
       <button
    onClick={() => window.location.href = "#"} // Replace '#' with your target URL
    className="w-40 mt-4 btn text-white py-3 px-6 rounded-2xl font-semibold hover:bg-gray-800 transition"
  >
    Check Now
  </button>
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex justify-center hidden md:block">
        <img
          src={img}
          alt="Exclusive Offer"
          className="w-full max-w-md object-cover"
        />
      </div>
    </section>
  );
};

export default Offers;
