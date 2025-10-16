import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, addToCart, decreaseCartItem, removeFromCart, clearCart } =
    useContext(CartContext);

  if (!cart.length) {
    return (
      <div className="pt-30 pb-10 text-center">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <Link
          to="/"
          className="mt-4 inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-700"
        >
          Go Shopping
        </Link>
      </div>
    );
  }

  // Total price
  const totalPrice = cart.reduce((acc, item) => acc + item.new_price * item.qty, 0);

  return (
    <section className="pt-20 px-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded shadow"
          >
            {/* Product Info */}
            <div className="flex items-center gap-4 w-full md:w-2/3">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-contain"
              />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-gray-500">
                  ${item.new_price.toFixed(2)} x {item.qty}
                </p>
              </div>
            </div>

            {/* Quantity Controls & Remove */}
            <div className="flex items-center gap-4 mt-2 md:mt-0">
              <button
                onClick={() => addToCart(item)} // increase quantity
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                +
              </button>
              <span className="font-semibold">{item.qty}</span>
              <button
                onClick={() => decreaseCartItem(item.id)} // decrease quantity
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                -
              </button>
              <button
                onClick={() => removeFromCart(item.id)} // remove completely
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-6 flex justify-between items-center flex-col md:flex-row gap-4">
        <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Clear Cart
          </button>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700">
            Checkout
          </button>
        </div>
      </div>

      {/* Back to Shop */}
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="bg-gray-200 text-gray-800 py-2 px-6 rounded-full hover:bg-gray-400 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  );
};

export default CartPage;
