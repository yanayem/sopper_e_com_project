import React from "react";
import img from "../assets/Frame 54.png";
import img_2 from "../assets/Frame 53.png";
import img_3 from "../assets/Frame 247.png";

const FeaturesSection = () => {
  const features = [
    {
      title: "Collaboration Teams",
      description: "Here you can handle projects together with team virtually",
      image: img,
    },
    {
      title: "Cloud Storage",
      description: "No need to worry about storage because we provide storage up to 2 TB",
      image: img_2,
    },
    {
      title: "Daily Analytics",
      description: "We always provide useful information to make it easier for you every day",
      image: img_3,
    },
  ];

  return (
    <section id="product" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mb-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center text-center md:text-left">
          <h1 className="text-3xl font-bold text-black dark:text-white mb-4 md:mb-0 col-span-1">
            Our Features You Can Get
          </h1>

          <p className="text-gray-600 col-span-2">
            We offer a variety of interesting features that can help increase
            your productivity at work and make project management easier.
          </p>

          <div className="col-span-1 flex justify-center md:justify-end">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              {/* Image Container */}
              <div className="w-full mb-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full object-contain"
                />
              </div>

              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
