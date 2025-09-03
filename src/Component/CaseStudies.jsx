import React, { useState, useRef } from "react";
import { MoveUpRight } from "lucide-react";

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const services = [
    {
      desc: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
      desc: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
      desc: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    },
  ];

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const cardWidth = e.target.firstChild.offsetWidth + 16; // min-w + gap
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.firstChild.offsetWidth + 16;
      carouselRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-10 text-center md:text-left md:flex md:items-center md:gap-6">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-2 px-4 py-2 bg-green rounded-md inline-block text-black">
            Case Studies
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2 max-w-xl mx-auto text-base sm:text-lg">
            Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
          </p>
        </div>

        {/* Desktop Row */}
        <div className="hidden md:flex justify-between items-start bg-gray-900 rounded-2xl px-6 py-10">
          {services.map((service, index) => (
            <div key={index} className="flex-1 text-center px-4 last:border-0 border-r border-gray-50">
              <p className="text-white">{service.desc}</p>
              <a className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-green hover:bg-gray-200 transition" href="#">
                Learn More <MoveUpRight className="w-4 h-4 text-green" />
              </a>
            </div>
          ))}
        </div>

        {/* Mobile + Responsive Carousel */}
<div className="relative w-full overflow-hidden md:hidden">
  <div
    ref={carouselRef}
    className="flex transition-transform duration-500 gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
    onScroll={handleScroll}
  >
    {services.map((service, index) => (
      <div
        key={index}
        className={`flex-shrink-0 snap-center rounded-3xl p-6 shadow-md text-white transition-transform ${
          // responsive width
          "w-full sm:w-1/2 md:w-1/3 bg-gray-800"
        }`}
      >
        <p className="mb-4">{service.desc}</p>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-green hover:bg-gray-700 transition"
        >
          Learn more <MoveUpRight className="w-5 h-5" />
        </a>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default CaseStudies;
