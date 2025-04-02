import React, { useState } from "react";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const toggleNavDrawer = () => {
    setNavDrawerOpen((prev) => !prev);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div>
          <Link to="/" className="text-lg font-bold">
            Mohit
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/collections/all"
            className="text-gray-500 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="/women"
            className="text-gray-500 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="/top-wear"
            className="text-gray-500 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="/bottom-wear"
            className="text-gray-500 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          {/* Profile Icon */}
          <Link to={"/admin"} className="block bg-black px-2 rounded-lg text-sm text-white">Admin</Link>
          <Link to="/profile">
            <FaRegUserCircle className="h-6 w-6 text-gray-600 hover:text-black" />
          </Link>

          {/* Cart Icon with Badge */}
          <button onClick={toggleCartDrawer} className="relative hover:text-black">
            <FaShoppingCart className="h-6 w-6 text-gray-600" />
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
              0
            </span>
          </button>

          {/* Search */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomLeft className="h-6 w-6 text-gray-600 hover:text-black" />
          </button>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-500 hover:text-black" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="p-4">
          <nav className="space-y-4">
            <Link
              to="/men"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black text-lg font-medium"
            >
              Men
            </Link>
            <Link
              to="/women"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black text-lg font-medium"
            >
              Women
            </Link>
            <Link
              to="/top-wear"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black text-lg font-medium"
            >
              Top Wear
            </Link>
            <Link
              to="/bottom-wear"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black text-lg font-medium"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
