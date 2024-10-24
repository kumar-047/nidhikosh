import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Checkout from './Checkout'; 
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

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <div>
          <h1>Your Cart is Empty</h1>
          <p>Let's start shopping!</p>
          <button><Link to="./Login">Sign in to your account</Link></button>
          <button><Link to="./Signup">Sign up now</Link></button>
          <p>or</p>
          <Link to="./Home">Shop today's deals</Link>
        </div>
      ) : (
        <div>
          <div className="flex justify-between mb-4">
            <h1>Cart</h1>
            <div>
              <button
                className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 mr-4"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
              <button
                className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h2>{item.name}</h2>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                  <button
                    className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
                    onClick={() => handleRemoveItem(index)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;