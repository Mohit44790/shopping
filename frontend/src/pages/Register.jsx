import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../redux/slice/authSlice";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (input.password !== input.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      const { name, email, password } = input;
      await dispatch(registerUser({ name, email, password })).unwrap();

      toast.success("Account Created Successfully!");
      navigate("/login");
    } catch (err) {
      toast.error(err.message || "Registration Failed!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2015/08/25/11/50/shop-906722_1280.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-md mx-4 sm:mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-900">Register</h1>

        <form onSubmit={submitHandler} className="space-y-4 mt-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-1 p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={input.name}
              onChange={changeHandler}
              placeholder="Enter your Name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={input.email}
              onChange={changeHandler}
              placeholder="Enter your Email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full mt-1 p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none pr-10"
              value={input.password}
              onChange={changeHandler}
              placeholder="Enter your Password"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 top-8 flex items-center text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className="w-full mt-1 p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none pr-10"
              value={input.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm your Password"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 top-8 flex items-center text-gray-600"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg 
              shadow-lg shadow-green-500/50 border border-green-500 
              hover:bg-green-600 hover:shadow-green-400/80 
              transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

          {/* Login Redirect */}
          <div className="text-center mt-4 text-gray-900">
            Already have an account?{" "}
            <Link to="/login" className="text-green-500 hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
