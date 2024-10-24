import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 transition duration-500 ease-in-out transform translate-y-full md:translate-y-0"
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo and Description */}
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-2xl font-bold text-white">Nidhikosh</h2>
                        <p className="mt-4 text-gray-400">
                            Your one-stop shop for all your favorite products. From men's wear to luxury goods, we offer quality products and easy shopping.
                        </p>
                    </div>

                    {/* Important Links */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-xl font-semibold text-white">Important Links</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="/" className="hover:underline">Home</a></li>
                            <li><a href="/blog" className="hover:underline">Blog</a></li>
                            <li><a href="/about" className="hover:underline">About Us</a></li>
                            <li><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jilkumargolakiya44@gmail.com" className="hover:underline">
                                Support Email: support@nidhikosh.in
                            </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-xl font-semibold text-white">Follow Us</h3>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://instagram.com" className="hover:text-white"><FaInstagram size={24} /></a>
                            <a href="https://linkedin.com" className="hover:text-white"><FaLinkedin size={24} /></a>
                            <a href="https://facebook.com" className="hover:text-white"><FaFacebook size={24} /></a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center md:text-right">
                        <h3 className="text-xl font-semibold text-white">Contact Us</h3>
                        <p className="mt-4 text-gray-400">Ahmedabad, Gujarat  </p>
                        <p className="text-gray-400">Phone: +91-3113541351</p>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
                    &copy; 2024 Nidhikosh. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
