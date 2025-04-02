import React from "react";
import { Link } from "react-router-dom";

const FeatureCollections = () => {
  return (
    <div className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl shadow-lg overflow-hidden">
        
        {/* Left Section - Text Content */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comfort & Style for Every Season
          </h2>
          <p className="text-gray-700 mb-6">
            Discover our latest collection of stylish and comfortable outfits.
            Perfectly designed to keep you trendy while ensuring ultimate comfort.
          </p>
          <Link to={"/collection/all"}>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition">
            Explore Collection
          </button></Link>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2017/12/26/09/15/happy-holidays-3040029_640.jpg"
            alt="Fashion Collection"
            className="w-full h-full object-cover rounded-r-3xl"
          />
        </div>

      </div>
    </div>
  );
};

export default FeatureCollections;
