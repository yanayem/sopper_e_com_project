import React, { useState, useEffect } from "react";
import data_product from "../assets/all_product";
import { Link } from "react-router-dom";

const PopularWomen = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Decide how many items to show based on screen width
  let itemsToShow = 5; // default for large screens
  if (windowWidth < 768) itemsToShow = 6; // mobile
  if (windowWidth >= 768 && windowWidth < 1024) itemsToShow = 6; // tablet

  const popularWomen = data_product
    .filter(item => item.category === "women")
    .slice(0, itemsToShow);

  return (
    <section className="py-8">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold mb-2">Popular in Women</h1>
        <div className="bg-black h-1 w-24 mx-auto rounded"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
        {popularWomen.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            state={{ category: "women" }}
            className="flex flex-col hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <div className="w-full h-full">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2 text-center">
              <h3 className="text-sm font-semibold">{item.name}</h3>
              <p className="text-red-500 font-bold">${item.new_price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularWomen;
