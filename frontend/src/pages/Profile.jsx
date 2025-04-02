import React from "react";
import MyOrderPage from "./MyOrderPage";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {/* Left Profile Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
            <h1 className="text-xl font-bold text-gray-800">John Doe</h1>
            <p className="text-gray-600">johndoe@example.com</p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
              Logout
            </button>
          </div>

          {/* Right Order Table */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-2/3">
            <h2 className="text-xl font-bold text-gray-800 mb-4">My Orders</h2>
            <MyOrderPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
