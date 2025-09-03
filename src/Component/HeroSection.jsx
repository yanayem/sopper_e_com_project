import React from "react";
import image from "../assets/Frame 19.png";

const HeroSection = () => {
  return (
    <section id="home" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto ">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between p-4 sm:p-6 md:p-10 bg-gray-200 dark:bg-gray-800 rounded-3xl md:rounded-4xl">
          {/* Left Column: Text */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
              Navigating the digital landscape for success
            </h1>
            <p className="text-base sm:text-lg md:text-lg text-gray-600 dark:text-gray-300">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <button className="w-full md:w-auto px-6 py-3 rounded-2xl bg-black text-white font-medium shadow-md hover:bg-blue-700 transition">
                Book a consultation
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
            <img
              src={image}
              alt="Dashboard preview"
              className="max-w-full h-auto hidden sm:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
