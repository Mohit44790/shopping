import React from "react";
import { 
  HiArrowPathRoundedSquare, 
  HiOutlineCreditCard, 
  HiShoppingBag, 
  HiPhone } from "react-icons/hi2";

const features = [
  {
    icon: <HiShoppingBag className="text-green-600 text-5xl" />,
    title: "Free International Shipping",
    description: "On all orders over ₹10,000",
  },
  {
    icon: <HiArrowPathRoundedSquare className="text-blue-600 text-5xl" />,
    title: "Easy 30-Day Returns",
    description: "Hassle-free returns within 30 days",
  },
  {
    icon: <HiOutlineCreditCard className="text-yellow-600 text-5xl" />,
    title: "Secure Checkout",
    description: "100% secure payment process",
  },
  {
    icon: <HiPhone className="text-red-600 text-5xl" />,
    title: "24/7 Customer Support",
    description: "We're here to help you anytime",
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
