import React, { useState } from "react";

const ShopManagement = () => {
  const [shops, setShops] = useState([
    { id: 1, name: "ABC Electronics", owner: "John Doe", status: "Active" },
    { id: 2, name: "Fashion Hub", owner: "Jane Smith", status: "Inactive" },
    { id: 3, name: "Grocery Mart", owner: "Alice Johnson", status: "Active" },
  ]);

  // Toggle Shop Status
  const toggleStatus = (id) => {
    setShops((prevShops) =>
      prevShops.map((shop) =>
        shop.id === id
          ? { ...shop, status: shop.status === "Active" ? "Inactive" : "Active" }
          : shop
      )
    );
  };

  // Delete Shop
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this shop?")) {
      setShops(shops.filter((shop) => shop.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Shop Management</h2>

      {/* Shops Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Shop Name</th>
              <th className="border border-gray-300 p-2">Owner</th>
              <th className="border border-gray-300 p-2">Status</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {shops.length > 0 ? (
              shops.map((shop) => (
                <tr key={shop.id} className="text-center">
                  <td className="border border-gray-300 p-2">{shop.name}</td>
                  <td className="border border-gray-300 p-2">{shop.owner}</td>
                  <td className="border border-gray-300 p-2">
                    <span
                      className={`px-2 py-1 rounded ${
                        shop.status === "Active"
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {shop.status}
                    </span>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => toggleStatus(shop.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2"
                    >
                      {shop.status === "Active" ? "Deactivate" : "Activate"}
                    </button>
                    <button
                      onClick={() => handleDelete(shop.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="border border-gray-300 p-4 text-center">
                  No Shops Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShopManagement;
