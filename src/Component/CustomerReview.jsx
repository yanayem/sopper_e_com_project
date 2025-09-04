import React, { useEffect, useRef, useState } from "react";

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

  // Duplicate first 3 slides at the end for smooth infinite loop
  const duplicates = 3;
  const extendedReviews = [...reviews, ...reviews.slice(0, duplicates)];

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const isManualScrolling = useRef(false);

  // Calculate width of a single slide including gap
  useEffect(() => {
    const updateCardWidth = () => {
      if (carouselRef.current && carouselRef.current.children.length > 0) {
        const firstSlide = carouselRef.current.children[0];
        const style = window.getComputedStyle(firstSlide);
        const marginRight = parseInt(style.marginRight) || 0;
        setCardWidth(firstSlide.offsetWidth + marginRight);
      }
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // Scroll to specific index smoothly
  const scrollToIndex = (index) => {
    if (carouselRef.current && cardWidth) {
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setCurrentIndex(index % reviews.length);
    }
  };

  // Infinite loop adjustment after scroll
  const handleScroll = () => {
    if (!carouselRef.current || !cardWidth) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const totalSlides = extendedReviews.length;

    // Smooth jump when reaching duplicated slides
    if (scrollLeft >= cardWidth * reviews.length) {
      carouselRef.current.scrollTo({
        left: 0,
        behavior: "auto",
      });
    } else if (scrollLeft <= -1) {
      carouselRef.current.scrollTo({
        left: cardWidth * reviews.length,
        behavior: "auto",
      });
    }

    const index = Math.round(scrollLeft / cardWidth);
    if (!isManualScrolling.current) {
      setCurrentIndex(index % reviews.length);
    }
  };

  // Next / Prev buttons
  const nextSlide = () => {
    isManualScrolling.current = true;
    let newIndex = currentIndex + 1;
    scrollToIndex(newIndex);
    setTimeout(() => (isManualScrolling.current = false), 300);
  };

  const prevSlide = () => {
    isManualScrolling.current = true;
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = reviews.length - 1;
    scrollToIndex(newIndex);
    setTimeout(() => (isManualScrolling.current = false), 300);
  };

  return (
    <section className="relative py-16 px-6 lg:px-20 bg-[#1a1a1a] text-white">
      <h1 className="text-3xl text-center mb-12">
        Customer <span className="text-green">Reviews</span>
      </h1>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="carousel flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
        onScroll={handleScroll}
        tabIndex={0}
        aria-label="Customer reviews carousel"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {extendedReviews.map((review, idx) => (
          <div
            key={idx}
            className="slide flex-none w-80 sm:w-90 lg:w-96 snap-start bg-[#1a1a1a] border border-green rounded-2xl p-6 shadow-md flex flex-col justify-between relative"
          >
            <p className="desc text-gray-300 text-sm sm:text-base min-h-[100px]">
              "{review.desc}"
            </p>
            <div className="tail absolute bottom-[-12px] left-10 w-6 h-6 bg-[#1a1a1a] border-l border-b border-green rotate-[-45deg]"></div>
            <div className="mt-6 text-left">
              <h4 className="name text-green font-bold text-lg">{review.name}</h4>
              <p className="pos text-gray-400 text-sm">{review.pos}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="controls flex justify-center items-center gap-10 mt-8">
        <button
          onClick={prevSlide}
          className="btn text-gray-400 hover:text-white text-2xl"
          aria-label="Previous slide"
        >
          &#10094;
        </button>

        <div className="dots flex gap-3">
          {reviews.map((_, idx) => (
            <div
              key={idx}
              className={`dot w-3 h-3 rounded-full cursor-pointer transition ${
                idx === currentIndex ? "bg-green" : "bg-gray-600"
              }`}
              onClick={() => scrollToIndex(idx)}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="btn text-gray-400 hover:text-white text-2xl"
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default CustomerReview;
