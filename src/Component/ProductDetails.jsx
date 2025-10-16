import React, { useContext } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import products from "../assets/all_product";
import { CartContext } from "./CartContext"; // make sure the path is correct

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = products.find((p) => p.id === Number(id));

  const { addToCart } = useContext(CartContext); // ✅ useContext inside component

  // Get the category from state or fallback to product.category
  const category = location.state?.category || product?.category || "kids";

  if (!product) {
    return (
      <div className="pt-20 text-center">
        <h2 className="text-2xl font-bold text-red-600">Product not found</h2>
        <Link
          to={`/${category}`}
          className="inline-block mt-4 bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-600"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <section className="pt-20 pb-12 px-8 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Product Image */}
        <div className="w-full flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <div className="flex items-center gap-3">
            <p className="text-2xl text-red-500 font-bold">
              ${product.new_price.toFixed(2)}
            </p>
            <p className="text-gray-400 line-through text-lg">
              ${product.old_price.toFixed(2)}
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed">
            This is a premium product from our {product.category} collection,
            crafted with high-quality materials for comfort and style.
          </p>

          <div className="flex gap-4 mt-4">
            {/* Add to Cart button */}
            <button
              onClick={() => addToCart(product)}
              className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-700 transition"
            >
              Add to Cart
            </button>
            <Link
              to={`/${category}`}
              className="bg-gray-200 text-gray-800 py-2 px-6 rounded-full hover:bg-gray-400 transition"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
