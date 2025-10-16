import React from "react";

const NewLetter = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto hero_bg px-4 py-17 md:px-16">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">
            Get Exclusive Offers On Your Email
          </h2>
          <p className="text-gray-600">
            Subscribe to our newsletter and stay updated
          </p>
        </div>

        {/* Form */}
        <div className="flex justify-center">
          <form className="flex flex-row items-center gap-2 w-auto md:w-full max-w-md bg-white border border-gray-900 rounded-full">
            <input
              type="email"
              placeholder="Your Email ID..."
              className="flex-grow px-4 py-2 rounded-full border-0 outline-none focus:ring-0"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewLetter;
