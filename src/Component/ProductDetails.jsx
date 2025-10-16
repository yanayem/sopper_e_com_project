import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../assets/all_product";
import { CartContext } from "./CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === Number(id));

  const [mainImage, setMainImage] = useState(product?.image);

  useEffect(() => {
    const newProduct = products.find((p) => p.id === Number(id));
    setMainImage(newProduct?.image);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-20 text-center">
        <h2 className="text-2xl font-bold text-red-600">Product not found</h2>
        <Link
          to="/"
          className="inline-block mt-4 bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-600"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const sizeChart = product.sizeChart || [
    { size: "S", chest: "-", length: "-", sleeve: "-", collar: "-" },
    { size: "M", chest: "-", length: "-", sleeve: "-", collar: "-" },
    { size: "L", chest: "-", length: "-", sleeve: "-", collar: "-" },
  ];

  return (
    <section className="pt-20 pb-12 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Product Images */}
        <div className="flex flex-col gap-4">
          <img
            src={mainImage}
            alt={product.name}
            className="w-full h-auto object-contain rounded-lg shadow-lg"
          />
          <div className="flex gap-2 mt-2">
            {(product.image_thamb || []).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.name} ${idx}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                  mainImage === img ? "border-red-500" : "border-gray-200"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <div className="flex items-center gap-3">
            <p className="text-2xl text-red-500 font-bold">
              ${product.new_price.toFixed(2)}
            </p>
            {product.old_price && (
              <p className="text-gray-400 line-through text-lg">
                ${product.old_price.toFixed(2)}
              </p>
            )}
          </div>
          <p className="text-gray-600 leading-relaxed">
            {product.description || "No description available."}
          </p>

          {/* Size Chart */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Size Chart</h3>
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border px-3 py-2">Size</th>
                  <th className="border px-3 py-2">Chest</th>
                  <th className="border px-3 py-2">Length</th>
                  <th className="border px-3 py-2">Sleeve</th>
                  <th className="border px-3 py-2">Collar</th>
                </tr>
              </thead>
              <tbody>
                {sizeChart.map((s, idx) => (
                  <tr key={idx}>
                    <td className="border px-3 py-2">{s.size}</td>
                    <td className="border px-3 py-2">{s.chest}</td>
                    <td className="border px-3 py-2">{s.length}</td>
                    <td className="border px-3 py-2">{s.sleeve}</td>
                    <td className="border px-3 py-2">{s.collar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add to Cart */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => addToCart(product)}
              className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Related Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="group p-2 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-2">{p.name}</h3>
                <p className="text-red-500 font-bold mt-1">
                  ${p.new_price.toFixed(2)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;
