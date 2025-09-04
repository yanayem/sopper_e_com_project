import React from "react";
import { MoveUpRight } from "lucide-react";
import img_1 from "../assets/elements 2.png";
import img_2 from "../assets/Illustration(8).png";
import img_3 from "../assets/Illustration(7).png";
import img_4 from "../assets/element_2.png";
import img_5 from "../assets/Illustration(2).png";
import img_6 from "../assets/Illustration(3).png";

const services = [
  {
    title: "Search engine optimization",
    titlebg: "bg-green",
    img: img_1,
    cardBg: "bg-gray-200 text-black",
    movebg: "bg-black text-green",
    likBg: "text-black",
  },
  {
    title: "Pay-per-click advertising",
    titlebg: "bg-white",
    img: img_2,
    cardBg: "bg-green text-gray-900",
    movebg: "bg-black text-green",
    likBg: "text-black",
  },
  {
    title: "Social Media marketing",
    titlebg: "bg-white",
    img: img_3,
    cardBg: "bg-black text-gray-900",
    movebg: "bg-white text-black",
    likBg: "text-white",
  },
  {
    title: "Email Marketing",
    titlebg: "bg-green",
    img: img_4,
    cardBg: "bg-gray-200 text-black",
    movebg: "bg-black text-green",
    likBg: "text-black",
  },
  {
    title: "Content Campaigns",
    titlebg: "bg-white",
    img: img_5,
    cardBg: "bg-green text-gray-900",
    movebg: "bg-black text-green",
    likBg: "text-black",
  },
  {
    title: "Analytics & Tracking",
    titlebg: "bg-green",
    img: img_6,
    cardBg: "bg-black text-gray-900",
    movebg: "bg-white text-black",
    likBg: "text-white",
  },
];

const ServiceArea = () => {
  return (
    <section id="service" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
<div className="mb-10 text-center md:text-left md:flex md:items-center md:gap-6">
  <h2 className="inline-block text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-4 py-2 bg-green rounded-md">
    Our Services
  </h2>
  <p className="mt-4 md:mt-0 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
    At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.
  </p>
</div>


        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-md flex flex-row items-center text-left transition border-2 border-black dark:border-0 ${service.cardBg}`}
            >
              {/* Left Column: Text */}
              <div className="flex-1 pr-4 flex flex-col">
                <h3
                  className={`text-2xl md:text-3xl font-bold mb-4 ${service.titlebg}`}
                >
                  {service.title}
                </h3>
                <div className="flex items-center mt-2">
                  <MoveUpRight
                    className={`w-7 h-7 p-1 rounded-full border-2 border-black ${service.movebg}`}
                  />
                  <a
                    href="#"
                    className={`ml-2 text-lg md:text-xl font-semibold inline-flex items-center px-4 py-2 rounded-xl transition ${service.likBg}`}
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="flex-1 flex justify-end">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-28 h-28 md:w-36 md:h-36"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
