import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductManagement = () => {
  const [products, setProducts] = useState([
    {
      _id: 2323,
      name: "Shirt",
      price: 43,
      sku: "342424",
    },
    {
      _id: 2324,
      name: "Jeans",
      price: 55,
      sku: "982734",
    },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete the selected product?")) {
      setProducts(products.filter((product) => product._id !== id));
      console.log("Deleted Product with id:", id);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Product Management</h2>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">SKU</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product._id} className="text-center">
                  <td className="border p-2">{product.name}</td>
                  <td className="border p-2">Rs. {product.price}</td>
                  <td className="border p-2">{product.sku}</td>
                  <td className="border p-2 flex justify-center space-x-2">
                    <Link
                      to={`/admin/products/${product._id}/edit`}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center p-2">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
