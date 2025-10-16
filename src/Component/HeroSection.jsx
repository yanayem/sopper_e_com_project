import React from "react";
import { ArrowRight } from "lucide-react";
import image from "../assets/hero_image.png";
import hand from "../assets/hand_icon.png";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section id="home" className="hero_bg py-8 sm:py-20 flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Column: Text */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left order-1 md:order-1">
          <p className="text-sm sm:text-base md:text-lg text-black">
            NEW ARRIVALS ONLY
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-snug text-black dark:text-white flex flex-col gap-2">
            <span className="flex items-center justify-center md:justify-start gap-2">
              New{" "}
              <img src={hand} alt="hand" className="inline-block h-[1em] w-auto" />
            </span>
            <span>collections</span>
            <span>for everyone</span>
          </h1>

          <div className="flex justify-center md:justify-start mt-4">
            <button
              className="w-full md:w-auto px-6 py-3 rounded-2xl bg-black text-white font-medium shadow-md 
                         hover:bg-gray-700 hover:scale-105 transition-transform flex items-center justify-center gap-2"
              aria-label="Go to latest collection"
            >
              Latest Collection
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center order-2 md:order-2 hidden md:flex">
          <img src={image} alt="Dashboard preview" className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
