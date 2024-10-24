import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems');
    setCartItems(JSON.parse(cartItems));
  }, []);

  useEffect(() => {
    const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalCost);
  }, [cartItems]);

  const handleRemoveItem = (index) => {
    const newCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(newCartItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  const handleQuantityChange = (index, quantity) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = quantity;
    setCartItems(newCartItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  return (
    <div className="container mx-auto p-4">
      {cartItems.length === 0 ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
          <p className="text-lg">Let's start shopping!</p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Sign in to your account
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            Sign up now
          </button>
          <p className="text-lg">or</p>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Shop today's deals
          </a>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold">Cart</h1>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="mb-4">
                <div className="bg-white shadow-md rounded p-4 flex justify-between">
                  <img src={item.image} alt={item.name} className="w-40 h-40 object-cover" />
                  <div className="ml-4">
                    <h2 className="text-lg font-bold">{item.name}</h2>
                    <p className="text-gray-600">Price: ${item.price}</p>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleQuantityChange(index, item.quantity - 1)}
                        className="w-6 h-6 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full"
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(index, item.quantity + 1)}
                        className="w-6 h-6 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(index)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-lg font-bold">Total: ${total}</p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Proceed to checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;