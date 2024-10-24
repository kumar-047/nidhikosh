import React from 'react';
import { useState, useEffect } from 'react';
import { getProducts } from '../activity/api';
// import { useHistory } from 'react-router-dom';
const Home = () => {

// const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
//   const history = useHistory();

//   const handleAddToCart = (product) => {
//     const existingItem = cartItems.find((item) => item.name === product.name);
//     if (existingItem) {
//       existingItem.quantity += 1;
//     } else {
//       cartItems.push({ ...product, quantity: 1 });
//     }
//     setCartItems([...cartItems]);
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     history.push('/cart');
//   };
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  
  return (
    <div className="font-sans">
      {/* Hero Banner */}
      <section className="bg-gray-100 p-10 text-center">
        <h1 className="text-4xl font-bold">Upto 50% off on all Men’s Wear</h1>
        <p className="text-gray-700 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="bg-orange-500 text-white px-6 py-2 mt-6 rounded hover:bg-orange-600">Order Now</button>
        <img src="../assets/hero/women.png" alt="Woman Shopping" className="mt-6 mx-auto" />
      </section>

      {/* Product Showcase Section */}
      <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Top Selling Products for you - Products</h2>
      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow hover:shadow-lg">
              <img src={product.image} alt={product.title} className="h-48 mx-auto" />
              <h3 className="mt-4 text-lg font-bold">{product.title}</h3>
              <p className="text-gray-500">Price: ${product.price}</p>
              <button
                className="bg-orange-500 text-white px-6 py-2 mt-4 rounded hover:bg-orange-600"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800">View All Products</button>
        </div>
      </section>

      {/* Best Products Section */}
      <section className="bg-gray-50 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Top Rated Products for you - Best Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Best Product Cards */}
          {['Casual Wear', 'Printed Shirt'].map((product, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow hover:shadow-lg text-center">
              <img src="shirt.png" alt={product} className="h-48 mx-auto" />
              <h3 className="mt-4 text-lg font-bold">{product}</h3>
              <p className="text-yellow-500">⭐ {4.8 + idx * 0.1}</p>
              <button className="bg-orange-500 text-white px-6 py-2 mt-4 rounded hover:bg-orange-600">Order Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Mid-Page Banner */}
      <section className="bg-orange-100 py-12 text-center">
        <h2 className="text-3xl font-bold">Winter Sale upto 50% Off</h2>
        <p className="text-gray-700 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <ul className="list-none mt-6">
          {['Quality Products', 'Fast Delivery', 'Easy Payment Method', 'Get Offers'].map((perk, idx) => (
            <li key={idx} className="mt-2 text-lg">{perk}</li>
          ))}
        </ul>
        <img src="woman-shopping.png" alt="Winter Sale" className="mt-6 mx-auto" />
      </section>

      {/* Electronics Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Top Electronics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {['Phone', 'Laptop', 'Headphones', 'TV'].map((product, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow hover:shadow-lg text-center">
              <img src="electronics.png" alt={product} className="h-48 mx-auto" />
              <h3 className="mt-4 text-lg font-bold">{product}</h3>
              <p className="text-yellow-500">⭐ {4.5 + idx * 0.1}</p>
              <button className="bg-gray-700 text-white px-6 py-2 mt-4 rounded hover:bg-gray-800">Buy Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Luxury Goods Section */}
      <section className="bg-gray-50 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Luxury Goods</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {['Watch', 'Jewelry', 'Designer Clothing', 'Handbags'].map((product, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow hover:shadow-lg text-center">
              <img src="luxury.png" alt={product} className="h-48 mx-auto" />
              <h3 className="mt-4 text-lg font-bold">{product}</h3>
              <button className="bg-orange-500 text-white px-6 py-2 mt-4 rounded hover:bg-orange-600">Explore More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">What our customers are saying - Testimonials</h2>
        <div className="space-y-8">
          {['Virat Kohli', 'Sachin Tendulkar', 'Victor'].map((customer, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow mx-auto max-w-lg">
              <p className="text-gray-700 mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
              <h3 className="font-bold">{customer}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
