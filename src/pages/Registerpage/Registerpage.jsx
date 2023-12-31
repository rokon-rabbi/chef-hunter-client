import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";

const Registerpage = () => {
const auth = getAuth();
  const [error, setError] = useState("");
  const { createUser,updateUser } = useContext(AuthContext);
  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    console.log(name, photo, email, password);
    if (password === "") {
      setError("your password field is empty");
      return;
    } else if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }
  
    createUser(name,photo,email, password)
     
  };
  return (
    <div className=" bg-slate-50 relative flex flex-col items-center justify-center   h-full">
       
      <div
        className="absolute inset-0  bg-cover bg-center"
        style={{
          backgroundImage: `url("https://png.pngtree.com/background/20220728/original/pngtree-fast-food-doodles-hand-drawn-colorful-vector-symbols-and-objects-picture-image_1846880.jpg")`,
          opacity: "0.2",
        }}
      ></div>
      <div className="bg-white relative rounded  px-8 mt-5 mb-5 shadow-2xl pt-8 w-80 md:w-96">
        <p className="text-3xl font-bold text-center underline m-4">Register</p>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
              Password
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
            <p className=" text-xs text-red-500">{error}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
              Photo URL
            </label>
            <input
            required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="photo"
              type="text"
              placeholder="Enter the URL of your photo"
            />
          </div>
          <div className="mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registerpage;
