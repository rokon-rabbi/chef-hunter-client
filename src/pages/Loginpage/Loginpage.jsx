import React from "react";
import { Link } from "react-router-dom";

const Loginpage = () => {
  return (
    <div className=" bg-cyan-500">
      <div className="flex flex-col items-center justify-center h-screen ">
        <div className="bg-white shadow-md rounded px-8 mb-24 pt-8">
          <div className="mb-4">
            <p className="text-3xl font-bold text-center underline pb-8">
              Login
            </p>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-6 flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Log In
            </button>
            Don't Have an Account?
            <Link
              to="/register"
              className="mr-7 underline inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Register
            </Link>
          </div>
          <div className="mb-6 flex items-center justify-between">
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign in with Google
            </button>
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign in with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
