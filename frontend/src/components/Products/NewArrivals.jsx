import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";

const NewArrivals = () => {
  const scrollContainerRef = useRef(null);
  const [newArrivals, setNewArrivals] = useState([]);
  const API_URL = "http://localhost:3000/api/product";

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get(`${API_URL}/new-arrivals`);
        setNewArrivals(response.data);
      } catch (error) {
        console.error("Error fetching new arrivals:", error);
      }
    };
    fetchNewArrivals();
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <section className="container mx-auto text-center mb-10 relative px-4">
      <h2 className="text-3xl font-bold mb-4">Discover Our Latest Collection</h2>
      <p className="text-lg text-gray-600 mb-8">
        Elevate your style with our premium fashion picks
      </p>

      {/* Scroll Buttons */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-2">
        <button
          onClick={scrollLeft}
          className="p-2 rounded-full border bg-white shadow-md hover:bg-gray-200 transition"
        >
          <FiChevronLeft className="text-2xl" />
        </button>
        <button
          onClick={scrollRight}
          className="p-2 rounded-full border bg-white shadow-md hover:bg-gray-200 transition"
        >
          <FiChevronRight className="text-2xl" />
        </button>
      </div>

      {/* Scrollable Products */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth px-4 py-4"
      >
        {newArrivals.length > 0 ? (
          newArrivals.map((product) => (
            <div key={product._id} className="flex-shrink-0 w-48 bg-white shadow rounded-lg p-4">
              <img
                src={product.images?.[0]?.url || "/placeholder.jpg"}
                alt={product.images?.[0]?.altText || product.name || "Product Image"}
                className="w-full h-48 object-cover rounded-lg"
              />
              <Link to={`/product/${product._id}`} className="block">
                <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">No new arrivals yet.</p>
        )}
      </div>
    </section>
  );
};

export default NewArrivals;
