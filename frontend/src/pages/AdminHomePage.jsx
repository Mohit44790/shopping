import React from "react";
import { Link } from "react-router-dom";

const AdminHomePage = () => {
  const orders = [
    {
      _id: 1323,
      user: {
        name: "John Snow",
      },
      totalPrice: 249,
      status: "Processing",
    },
    {
      _id: 1324,
      user: {
        name: "Arya Stark",
      },
      totalPrice: 399,
      status: "Shipped",
    },
    {
      _id: 1325,
      user: {
        name: "Daenerys Targaryen",
      },
      totalPrice: 599,
      status: "Delivered",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-xl">Rs: 10,000</p>
        </div>

        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-xl">68</p>
          <Link to="/admin/orders" className="underline text-sm">
            Manage Orders
          </Link>
        </div>

        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Total Products</h2>
          <p className="text-xl">68</p>
          <Link to="/admin/products" className="underline text-sm">
            Manage Products
          </Link>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Order ID</th>
                <th className="border p-2">User</th>
                <th className="border p-2">Total Price</th>
                <th className="border p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order._id} className="text-center">
                    <td className="border p-2">{order._id}</td>
                    <td className="border p-2">{order.user.name}</td>
                    <td className="border p-2">Rs {order.totalPrice}</td>
                    <td
                      className={`border p-2 ${
                        order.status === "Delivered"
                          ? "text-green-600"
                          : order.status === "Shipped"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {order.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center p-2">
                    No recent orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
