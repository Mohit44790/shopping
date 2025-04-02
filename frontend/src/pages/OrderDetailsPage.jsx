import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "Paypal",
      shippingMethod: "Standard",
      shippingAddress: { city: "London", country: "USA" },
      orderItems: [
        {
          productId: "1",
          name: "Jacket",
          price: 120,
          quantity: 1,
          image:
            "https://cdn.pixabay.com/photo/2016/10/29/10/22/street-shot-1780393_1280.jpg",
        },
        {
          productId: "2",
          name: "Shoes",
          price: 320,
          quantity: 1,
          image:
            "https://cdn.pixabay.com/photo/2016/10/29/10/22/street-shot-1780393_1280.jpg",
        },
      ],
    };

    setOrderDetails(mockOrderDetails);
  }, [id]);

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Details</h2>

      {!orderDetails ? (
        <p className="text-red-500 text-lg text-center">No order details found</p>
      ) : (
        <div className="space-y-6">
          {/* Order Info */}
          <div className="border-b pb-4">
            <h3 className="text-lg font-medium text-gray-700">
              Order ID: <span className="text-gray-900">#{orderDetails._id}</span>
            </h3>
            <p className="text-gray-600">
              Order Date: {new Date(orderDetails.createdAt).toLocaleDateString()}
            </p>
          </div>

          {/* Order Status */}
          <div className="border-b pb-4">
            <h3 className="text-lg font-medium text-gray-700">Order Status</h3>
            <div className="flex gap-3 mt-2">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  orderDetails.isPaid
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {orderDetails.isPaid ? "Paid" : "Not Paid"}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  orderDetails.isDelivered
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {orderDetails.isDelivered ? "Delivered" : "Pending Delivery"}
              </span>
            </div>
          </div>

          {/* Shipping & Payment Info */}
          <div className="border-b pb-4">
            <h3 className="text-lg font-medium text-gray-700">Shipping & Payment</h3>
            <p className="text-gray-600">
              <strong>Shipping Method:</strong> {orderDetails.shippingMethod}
            </p>
            <p className="text-gray-600">
              <strong>Shipping Address:</strong> {orderDetails.shippingAddress.city},{" "}
              {orderDetails.shippingAddress.country}
            </p>
            <p className="text-gray-600">
              <strong>Payment Method:</strong> {orderDetails.paymentMethod}
            </p>
          </div>

          {/* Order Items */}
          <div>
            <h3 className="text-lg font-medium text-gray-700">Ordered Items</h3>
            <div className="space-y-4 mt-2">
              {orderDetails.orderItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-sm">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-gray-600">
                      Price: ₹{item.price} x {item.quantity}
                    </p>
                    <p className="font-semibold text-gray-900">
                      Total: ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
