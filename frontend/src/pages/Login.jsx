import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../redux/slice/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { email, password } = input;
      await dispatch(loginUser({ email, password })).unwrap(); // Unwrap to handle errors properly

      toast.success("Login Successfully");
      navigate("/");
    } catch (err) {
      toast.error(err.message || "Login failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url(https://cdn.pixabay.com/photo/2015/08/25/11/50/shop-906722_1280.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-white bg-opacity-5 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-md mx-4 sm:mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-900">Login</h1>

        <form onSubmit={submitHandler} className="space-y-4 mt-4">
          {/* Email Input */}
          <div className="mb-4">
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
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <div className="relative">
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
                className="absolute inset-y-0 right-3 top-3 flex items-center text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️‍🗨️" : "🙈"}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg 
              shadow-lg shadow-blue-500/50 border border-blue-500 
              hover:bg-blue-600 hover:shadow-blue-400/80 
              transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Forgot Password */}
          <div className="text-center mt-2">
            <Link to="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Signup Link */}
          <div className="text-center mt-4 text-gray-900">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
