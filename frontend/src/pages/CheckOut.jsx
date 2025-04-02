import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const cart = {
  products: [
    {
      name: "Product 1",
      size: "M",
      price: 112,
      color: "red",
      images: [{ url: "https://cdn.pixabay.com/photo/2019/08/18/23/03/people-4415189_640.jpg" }],
    },
    {
      _id: 2,
      name: "Product 11",
      size: "M",
      price: 112,
      color: "red",
      images: [{ url: "https://cdn.pixabay.com/photo/2019/08/18/23/03/people-4415189_640.jpg" }],
    },
    {
      name: "Product 12",
      size: "M",
      price: 112,
      color: "red",
      images: [{ url: "https://cdn.pixabay.com/photo/2019/08/18/23/03/people-4415189_640.jpg" }],
    },
    {
      name: "Product 13",
      size: "M",
      price: 112,
      color: "red",
      images: [{ url: "https://cdn.pixabay.com/photo/2019/08/18/23/03/people-4415189_640.jpg" }],
    },
  ],
  totalPrice: 900,
};

const CheckOut = () => {
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Shipping Details:", shippingAddress);
    navigate("/payment"); // Redirect to payment page
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-6 tracking-tighter grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Checkout Form */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Checkout</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-3">Contact Details</h3>

          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                value={shippingAddress.firstName}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={shippingAddress.lastName}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded mt-1"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="mt-3">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={shippingAddress.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          <div className="mt-3">
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={shippingAddress.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          {/* Address Fields */}
          <h3 className="text-lg font-medium mt-5 mb-3">Shipping Address</h3>
          <div className="mt-2">
            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={shippingAddress.address}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mt-3">
            <div>
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                name="city"
                value={shippingAddress.city}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={shippingAddress.postalCode}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Country</label>
              <input
                type="text"
                name="country"
                value={shippingAddress.country}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded mt-1"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Proceed to Payment
          </button>
        </form>
      </div>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        <div className="space-y-4">
          {cart.products.map((product, index) => (
            <div key={index} className="flex items-center space-x-4 border-b pb-3">
              <img src={product.images[0].url} alt={product.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <h4 className="text-sm font-medium">{product.name}</h4>
                <p className="text-xs text-gray-500">
                  Size: {product.size} | Color: {product.color}
                </p>
                <p className="text-sm font-semibold">₹{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-lg font-semibold">Total: ₹{cart.totalPrice}</div>
      </div>
    </div>
  );
};

export default CheckOut;
