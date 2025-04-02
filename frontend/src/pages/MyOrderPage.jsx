import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyOrderPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "1223",
          createdAt: new Date(),
          shippingAddress: { city: "Delhi", country: "India" },
          orderItems: [
            {
              name: "Product 1",
              image:
                "https://cdn.pixabay.com/photo/2022/12/07/06/17/style-7640301_640.jpg",
            },
          ],
          totalPrice: 599,
          isPaid: true,
        },
        {
          _id: "12243",
          createdAt: new Date(),
          shippingAddress: { city: "Delhi", country: "India" },
          orderItems: [
            {
              name: "Product 2",
              image:
                "https://cdn.pixabay.com/photo/2022/12/07/06/17/style-7640301_640.jpg",
            },
          ],
          totalPrice: 599,
          isPaid: false,
        },
      ];
      setOrders(mockOrders);
    }, 1000);
  }, []);

  const handleRowClick=(orderId)=>{
    navigate(`/order/${orderId}`)
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>

      {orders.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Image</th>
                <th className="border border-gray-300 px-4 py-2">Order ID</th>
                <th className="border border-gray-300 px-4 py-2">Created</th>
                <th className="border border-gray-300 px-4 py-2">
                  Shipping Address
                </th>
                <th className="border border-gray-300 px-4 py-2">Items</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">#{order._id}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.createdAt.toLocaleString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.shippingAddress.city}, {order.shippingAddress.country}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.orderItems.map((item) => item.name).join(", ")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ₹{order.totalPrice}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.isPaid ? "Paid ✅" : "Pending ❌"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-600">You have no orders.</p>
      )}
    </div>
  );
};

export default MyOrderPage;
