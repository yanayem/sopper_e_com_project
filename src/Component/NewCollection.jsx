import React from 'react';
import new_collection from "../assets/new_collections"; 
import { Link } from "react-router-dom";

const NewCollection = () => {
  return (
    <section className="py-8">
      {/* Section header */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold mb-2">New Collection</h1>
        <div className="bg-black h-1 w-24 mx-auto rounded"></div>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {new_collection.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            state={{ category: item.category }} 
            className="bg-white overflow-hidden flex flex-col hover:shadow-lg transition duration-300"
          >
            <div className="w-full h-full">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <div className="flex items-center gap-2">
                <p className="text-red-500 font-bold">${item.new_price.toFixed(2)}</p>
                <p className="line-through text-gray-400">${item.old_price.toFixed(2)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NewCollection;
