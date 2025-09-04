import React from "react";
import image from "../assets/Illustration.png";

const HomeSection = () => {
  return (
    <section id="home" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Title */}
        <h1 className="text-5xl font-bold leading-tight text-gray-900 dark:text-white text-center md:text-left order-1 md:order-1">
          Navigating the digital landscape for success
        </h1>

        {/* Image */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center order-2 md:order-2">
          <img
            src={image}
            alt="Dashboard preview"
            className="max-w-full h-auto"
          />
        </div>

        {/* Text + Button */}
        <div className="w-full md:w-1/2 space-y-6 order-3 md:order-1 mt-6 md:mt-0">
          <p className="text-gray-600 dark:text-gray-300 text-lg text-center md:text-left">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <div className="flex justify-center md:justify-start gap-4 w-full">
            <button className="w-full md:w-auto px-6 py-3 rounded-lg bg-black dark:bg-gray-700 text-white font-medium shadow-md hover:bg-gray-500 transition">
              Book a consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
