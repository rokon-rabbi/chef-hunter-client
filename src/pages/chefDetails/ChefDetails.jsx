import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ChefRecipes from "../chefRecipes/ChefRecipes";
import { CiCircleChevRight } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const ChefDetails = () => {
  const chefInfo = useLoaderData();
  console.log(chefInfo)
//   const [button, setButton ] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState([]);

  const handleFavorite = (id) => {
     toast.success("The recipe is your favorite!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
    setDisabledButtons([...disabledButtons, id]);
    console.log(id)
  };
  return (
    <div>
      {/* banner  */}
      <div className="px-20 ">
        <ChefRecipes chefInfo={chefInfo}></ChefRecipes>
      </div>
      {/* recipes  */}
      <ToastContainer />
      <div className="md:text-6xl text-3xl font-extrabold text-gray-900 text-center mt-14 md:mt-18">
        chef recipes
      </div>
      <div className="bg-white rounded-lg shadow  overflow-x-auto px-20 py-10">
        <table className="w-full table-auto shadow-2xl">
          <thead>
            <tr className="text-xs font-semibold text-gray-500 border uppercase tracking-wide">
              <th className="py-3 px-4 text-left">Recipe</th>
              <th className="py-3 px-4 text-left">Ingredients</th>
              <th className="py-3 px-4 text-left">Cooking Method</th>
              <th className="py-3 px-4 text-left">Rating</th>
              <th className="py-3 px-4 text-left">Favorite</th>
            </tr>
          </thead>
          <tbody className=" text-sm  font-normal text-gray-500">
            {chefInfo.recipes.map((recipe, idx) => (
              <tr key={idx}>
                <td className="py-3 border px-4">{recipe.name}</td>
                <td className="py-3 border px-18">
                  <ul>
                    {recipe.ingredients.map(ingredient => (
                      <div className="">
                        <CiCircleChevRight className="inline"></CiCircleChevRight>{" "}
                        <li className="inline" key={ingredient}>
                          {ingredient}
                        </li>
                      </div>
                    ))}
                  </ul>
                </td>
                <td className="py-3 border px-4">{recipe.method}</td>
                <td className="py-3 border px-4">{recipe.rating}</td>
                <td className="py-3 border px-4">
                  <button 
                    onClick={() => handleFavorite(recipe.id)}
                    className={`flex rounded border p-2  hover:bg-red-500 hover:text-white  items-center text-red-600 focus:outline-none  ${
                        disabledButtons.includes(recipe.id) ? 'disabled:opacity-25 cursor-not-allowed' : ''
                      }`} disabled={disabledButtons.includes(recipe.id)}
                    
                  >
                    <FaHeart className="w-5 h-5 mr-1" />
                    <span>Favorite</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChefDetails;
