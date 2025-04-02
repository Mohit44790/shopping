import React from 'react';
import { Link } from 'react-router-dom';

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <Link key={product._id} to={`/product/${product._id}`} className="block">
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            {/* Image Container */}
            <div className="w-full h-full aspect-w-1 aspect-h-1 mb-4">
              <img
                src={product.images[0]?.url}
                alt={product.images[0]?.altText || product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Product Name */}
            <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>

            {/* Product Price */}
            <p className="text-gray-600 font-medium text-sm">₹ {product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
