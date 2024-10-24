import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <p className="text-gray-800 font-semibold">
                ${item.price * item.quantity}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
