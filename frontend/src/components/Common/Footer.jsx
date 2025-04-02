import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed successfully with ${email}`);
      setEmail("");
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <footer className="bg-gray-100 py-8 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Newsletter
          </h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new collections and exclusive offers.
          </p>
          <form onSubmit={handleSubscribe} className="flex space-x-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="border border-gray-300 p-2 rounded-md w-full"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <Link to="/" className="hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-black">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-black">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-black">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Customer Support
          </h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <Link to="/faq" className="hover:text-black">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/returns" className="hover:text-black">
                Return Policy
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:text-black">
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Follow Us
          </h3>
          <div className="flex space-x-4 text-gray-600">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="h-6 w-6 hover:text-blue-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="h-6 w-6 hover:text-blue-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="h-6 w-6 hover:text-pink-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t pt-4">
        &copy; {new Date().getFullYear()} Mohit Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
