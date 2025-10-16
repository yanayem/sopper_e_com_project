import React, { useState, useMemo } from "react";
import products from "../assets/all_product";
import kidsbanner from "../assets/banner_kids.png";
import { Link } from "react-router-dom";


const KidsPage = () => {
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter by category
  const filteredProducts = useMemo(
    () => products.filter((item) => item.category === "kid"),
    []
  );

  // Sort products
  const sortedProducts = useMemo(() => {
    let sorted = [...filteredProducts];
    if (sortOption === "lowToHigh") {
      sorted.sort((a, b) => a.new_price - b.new_price);
    } else if (sortOption === "highToLow") {
      sorted.sort((a, b) => b.new_price - a.new_price);
    } else if (sortOption === "newest") {
      sorted.sort((a, b) => b.id - a.id);
    }
    return sorted;
  }, [filteredProducts, sortOption]);

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, sortedProducts.length);
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  // If no products
  if (!filteredProducts.length) {
    return (
      <section className="py-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Kids Collection</h1>
        <p>No products available in this category.</p>
      </section>
    );
  }

  return (
    <section className="pt-20 pb-8">
      {/* Banner */}
      <div className="w-full">
        <img
          src={kidsbanner}
          alt="Kids Banner"
          className="w-auto h-auto max-w-full mx-auto rounded-lg shadow-md object-contain"
        />
      </div>

      {/* Title */}
      <div className="mb-6 text-center mt-8">
        <h1 className="text-3xl font-bold mb-2">Kids Collection</h1>
        <div className="bg-black h-1 w-24 mx-auto rounded"></div>
      </div>

      {/* Filter + Count */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 mb-6">
        <p className="text-gray-600 mb-2 sm:mb-0">
          Showing{" "}
          <span className="font-semibold">
            {startIndex + 1}–{endIndex}
          </span>{" "}
          of {filteredProducts.length} products
        </p>
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-gray-700 font-medium">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => {
              setSortOption(e.target.value);
              setCurrentPage(1);
            }}
            className="border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="default">Default</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-8">
  {currentProducts.map((item) => (
    <Link to={`/product/${item.id}`} key={item.id}>
      <div className="bg-white overflow-hidden hover:shadow-lg transition duration-300 flex flex-col">
        <div className="w-full h-56 bg-gray-50 flex items-center justify-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-auto h-full object-contain"
          />
        </div>
        <div className="p-4 flex flex-col gap-2 flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 text-center truncate">
            {item.name}
          </h3>
          <div className="flex justify-center items-center gap-2">
            <p className="text-red-500 font-bold">${item.new_price.toFixed(2)}</p>
            <p className="line-through text-gray-400">${item.old_price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>


      {/* Pagination */}
      <div className="mt-8 flex justify-center items-center gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default KidsPage;
