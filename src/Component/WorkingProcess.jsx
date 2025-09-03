import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const WorkingProcess = () => {
  const services = [
    {
      num: 1,
      title: "Consultation",
      desc: "During the initial consultation, we discuss your business goals, target audience, and current marketing efforts to tailor the best strategy.",
    },
    {
      num: 2,
      title: "Strategy Planning",
      desc: "We create a comprehensive marketing plan that aligns with your business objectives and maximizes ROI.",
    },
    {
      num: 3,
      title: "Content Creation",
      desc: "Our team produces high-quality content for websites, social media, and campaigns that engage your audience effectively.",
    },
    {
      num: 4,
      title: "SEO Optimization",
      desc: "We optimize your website and content to improve search engine rankings and drive organic traffic.",
    },
    {
      num: 5,
      title: "Paid Campaigns",
      desc: "We manage paid advertising campaigns on Google, Facebook, and other platforms to reach your target audience quickly.",
    },
    {
      num: 6,
      title: "Performance Analysis",
      desc: "We monitor all campaigns, track key metrics, and provide detailed reports to continually improve results.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="service" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="mb-10 text-center md:text-left md:flex md:items-center md:gap-6">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-2 px-4 py-2 bg-green rounded-md inline-block text-black">
            Our Working Process
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2 max-w-xl mx-auto text-base sm:text-lg">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-md flex flex-col items-center text-center transition-colors duration-300 shadow-black-100 border-2 border-black
    ${
      openIndex === index
        ? "bg-green text-black"
        : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
    }
    w-full
  `}
            >
              <div
                className="flex items-center justify-between w-full mb-2 cursor-pointer"
                onClick={() => toggleOpen(index)}
              >
                <h3 className="text-xl lg:text-2xl font-semibold flex items-center gap-2">
                  <span className="text-black font-bold py-2">
                    {service.num.toString().padStart(2, "0")}.
                  </span>
                  {service.title}
                </h3>
                {openIndex === index ? <Minus /> : <Plus />}
              </div>

              {openIndex === index && (
                <p
                  className={`border-t py-6 ${
                    openIndex === index
                      ? "text-black"
                      : "text-gray-700 dark:text-gray-300"
                  } text-base lg:text-lg leading-relaxed break-words`}
                >
                  {service.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
