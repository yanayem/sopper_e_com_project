import React from 'react';
import Allproduct from "../assets/all_product";

const Allproduct = () => {
  return (
    <section className="py-8">
      {/* Section header */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold mb-2">New Collection</h1>
        <div className="bg-black h-1 w-24 mx-auto rounded"></div>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {Allproduct.map((item) => (
          <div
            key={item.id}
            className="bg-white  overflow-hidden flex flex-col"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover mb-2  flex-grow"
            />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <div className="flex items-center gap-2">
                <p className="text-red-500 font-bold">${item.new_price.toFixed(2)}</p>
                <p className="line-through text-gray-400">${item.old_price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Allproduct;
