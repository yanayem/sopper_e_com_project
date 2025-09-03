import React, { useState, useRef, useEffect } from "react";

const CustomerReview = () => {
  const reviews = [
    {
      desc: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "John Smith",
      pos: "Marketing Director at XYZ Corp",
    },
    {
      desc: "Positivus helped us boost our sales dramatically with their creative campaigns. Amazing experience working with them.",
      name: "Emma Johnson",
      pos: "CEO at ABC Ltd",
    },
    {
      desc: "The dedication and support we received from Positivus were outstanding. They go above and beyond!",
      name: "Michael Brown",
      pos: "Founder at StartUp Pro",
    },
    {
      desc: "Great communication and professional service. We saw instant results after partnering with them.",
      name: "Sophia Williams",
      pos: "Head of Marketing at Brandify",
    },
    {
      desc: "Positivus delivered more than expected. Their strategies work wonders!",
      name: "David Miller",
      pos: "Operations Manager at TechX",
    },
  ];

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateCardWidth = () => {
      if (carouselRef.current && carouselRef.current.children.length > 0) {
        setCardWidth(carouselRef.current.children[0].offsetWidth + 24); // card width + gap
      }
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % reviews.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <section className="relative py-16 px-6 lg:px-20 bg-[#1a1a1a] text-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Customer <span className="text-green">Reviews</span>
      </h2>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>
          {`
      ::-webkit-scrollbar {
        display: none;
      }
    `}
        </style>
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex-none w-full sm:w-1/2 lg:w-1/3  flex flex-col"
          >
            <div className="relative bg-[#1a1a1a] border border-green p-6 rounded-2xl shadow-md w-full h-full flex flex-col justify-between">
              <p className="text-gray-300 text-sm sm:text-base min-h-[100px]">
                "{review.desc}"
              </p>
              <div className="absolute -bottom-3 left-10 w-6 h-6 bg-[#1a1a1a] border-l border-b border-green rotate-315"></div>
            </div>

            <div className="mt-6 text-left">
              <h4 className="text-lg font-bold text-green">{review.name}</h4>
              <p className="text-sm text-gray-400">{review.pos}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <div className="flex justify-center items-center gap-10 mt-8">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="text-gray-400 hover:text-white transition text-2xl"
        >
          &#10094;
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2 divide-none">
          {reviews.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full transition ${
                idx === currentIndex ? "bg-green" : "bg-gray-600"
              }`}
              onClick={() => {
                setCurrentIndex(idx);
                scrollToIndex(idx);
              }}
            ></div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="text-gray-400 hover:text-white transition text-2xl"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default CustomerReview;
