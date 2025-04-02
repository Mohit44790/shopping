import React from "react";

// Sample checkout data
const checkout = {
  _id: "ORDER12345",
  createdAt: "2024-03-13T12:00:00Z", // Example timestamp
  checkOutItems: [
    {
      productID: "1",
      name: "Jacket",
      color: "Red",
      size: "M",
      price: 599,
      quantity: 1,
      image:
        "https://cdn.pixabay.com/photo/2022/07/31/17/15/woman-7356358_640.jpg",
    },
  ],
  shippingAddress: {
    address: "123 UK Street",
    city: "Mumbai",
    country: "London",
  },
};

const OrderConfirmationPage = () => {
  const calculateEstimateDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 30); // Estimated delivery in 30 days
    return orderDate.toLocaleDateString();
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-semibold mb-4">Thank You for Your Order!</h1>

      {/* Order Details */}
      <div className="border-b pb-4">
        <h2 className="text-lg font-medium">Order ID: {checkout._id}</h2>
        <p className="text-gray-600">
          Order Date: {new Date(checkout.createdAt).toLocaleDateString()}
        </p>
        <p className="text-gray-600">
          Estimated Delivery: {calculateEstimateDelivery(checkout.createdAt)}
        </p>
      </div>

      {/* Shipping Address */}
      <div className="mt-4 border-b pb-4">
        <h3 className="text-lg font-medium">Shipping Address</h3>
        <p>{checkout.shippingAddress.address}</p>
        <p>{checkout.shippingAddress.city}, {checkout.shippingAddress.country}</p>
      </div>

      {/* Order Items */}
      <div className="mt-4">
        <h3 className="text-lg font-medium">Order Items</h3>
        {checkout.checkOutItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4 border-b pb-2 mt-2">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-gray-600">Color: {item.color}</p>
              <p className="text-gray-600">Size: {item.size}</p>
              <p className="font-semibold">₹{item.price} x {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
