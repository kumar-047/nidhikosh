import React, { useState, useEffect, useContext } from "react";
import { getProducts } from "../activity/api";
import { CartContext } from "../context/CartContext";
import womanImage from "../assets/hero/women.png";
import saleImage from "../assets/hero/sale.png";
import Phone from "../assets/electronics/Phone.webp";
import Laptop from "../assets/electronics/Laptop.webp";
import Headphones from "../assets/electronics/Headphones.webp";
import TV from "../assets/electronics/TV.webp";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, notification } = useContext(CartContext);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="font-sans">
      {/* Toast Notification */}
      {notification && (
        <div
          className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-out z-50"
          style={{
            background: "linear-gradient(135deg, #66bb6a, #43a047)",
          }}
        >
          {notification}
        </div>
      )}

      {/* Hero Banner */}
      <section className="relative p-10 text-center bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Up to 50% Off on All Men’s Wear
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover our exclusive collection of men's fashion.
          </p>
        </div>
        <img
          src={womanImage}
          alt="Woman Shopping"
          className="mt-10 mx-auto opacity-90"
        />
      </section>

      {/* Product Showcase Section */}
      <section className="py-12 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Top Selling Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl flex flex-col"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="mt-4 flex-1">
                <h3 className="text-lg font-bold text-gray-800">
                  {product.title}
                </h3>
                <p className="text-gray-600 mt-2">Price: ${product.price}</p>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-full shadow-md hover:bg-orange-600 transition duration-300 w-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition duration-300">
            View All Products
          </button>
        </div>
      </section>

      {/* Mid-Page Banner */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">
            Winter Sale - Up to 50% Off
          </h2>
          <p className="mt-4 text-gray-600">
            Get your winter essentials at the best prices.
          </p>
          <ul className="list-none mt-6 space-y-4 text-gray-700">
            {[
              "Quality Products",
              "Fast Delivery",
              "Easy Payment",
              "Exclusive Offers",
            ].map((perk, idx) => (
              <li key={idx} className="text-lg">
                {perk}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={saleImage}
          alt="Winter Sale"
          className="mt-10 mx-auto opacity-90"
        />
      </section>

      {/* Electronics Section */}
      <section className="py-12 flex flex-col content-center items-center">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 ">
          Top Electronics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 ">
          <div
            className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl flex flex-col
          items-center"
          >
            <div className="overflow-hidden rounded-lg">
              <img src={Phone} alt="Phone" className="h-48 object-cover" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">Phone</h3>
              <p className="text-yellow-500 mt-2">⭐ 4.5</p>
              <button className="bg-gray-800 text-white px-4 py-2 mt-4 rounded-full hover:bg-gray-900 transition duration-300 w-full">
                Buy Now
              </button>
            </div>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl flex flex-col
          items-center"
          >
            <div className="overflow-hidden rounded-lg">
              <img src={Laptop} alt="Laptop" className="h-48 object-cover" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">Laptop</h3>
              <p className="text-yellow-500 mt-2">⭐ 4.6</p>
              <button className="bg-gray-800 text-white px-4 py-2 mt-4 rounded-full hover:bg-gray-900 transition duration-300 w-full">
                Buy Now
              </button>
            </div>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl flex flex-col
          items-center"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={Headphones}
                alt="Headphones"
                className="h-48 object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">Headphones</h3>
              <p className="text-yellow-500 mt-2">⭐ 4.4</p>
              <button className="bg-gray-800 text-white px-4 py-2 mt-4 rounded-full hover:bg-gray-900 transition duration-300 w-full">
                Buy Now
              </button>
            </div>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl flex flex-col
          items-center"
          >
            <div className="overflow-hidden rounded-lg">
              <img src={TV} alt="TV" className="h-48 object-cover" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">TV</h3>
              <p className="text-yellow-500 mt-2">⭐ 4.7</p>
              <button className="bg-gray-800 text-white px-4 py-2 mt-4 rounded-full hover:bg-gray-900 transition duration-300 w-full">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Customer Testimonials
        </h2>
        <div className="space-y-8 px-4">
          {["Virat Kohli", "Sachin Tendulkar", "Victor"].map(
            (customer, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-lg mx-auto max-w-xl transform transition-transform duration-500 hover:scale-105"
              >
                <p className="text-gray-700 mb-4">
                  "The products exceeded my expectations! High quality and great
                  service."
                </p>
                <h3 className="font-bold text-gray-800">{customer}</h3>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
