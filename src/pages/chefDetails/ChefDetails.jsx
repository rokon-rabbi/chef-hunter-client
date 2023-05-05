import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ChefRecipes from "../chefRecipes/ChefRecipes";
import { CiCircleChevRight } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ChefDetails = () => {
  const chefInfo = useLoaderData();
  console.log(chefInfo);
  //   const [button, setButton ] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState([]);

  const handleFavorite = id => {
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
    console.log(id);
  };
  return (
    <div>
      {/* banner  */}
      <div className="px-4 md:px-20 ">
        <ChefRecipes chefInfo={chefInfo}></ChefRecipes>
      </div>
      {/* recipes  */}
      <ToastContainer />
      <div className="md:text-6xl text-3xl font-extrabold text-gray-900 text-center mt-14 md:mt-18">
        chef recipes
      </div>
      <div className="bg-white rounded-lg shadow  overflow-x-auto md:px-20 py-6 px-2 md:py-10">
        <table className="w-full table-auto shadow-2xl">
          <thead>
            <tr className="text-xs  md:font-semibold font-thin text-gray-500 border md:uppercase md:tracking-wide">
              <th className="md:py-3 md:px-4 md:text-left text-center" >Recipe</th>
              <th className="md:py-3 md:px-4 md:text-left text-center" >Ingredients</th>
              <th className="md:py-3 md:px-4 md:text-left text-center" >Cooking Method</th>
              <th className="md:py-3 md:px-4 md:text-left text-center" >Rating</th>
              <th className="md:py-3 md:px-4 md:text-left text-center" >Favorite</th>
            </tr>
          </thead>
          <tbody className=" md:text-sm text-xs md:font-normal text-gray-500">
            {chefInfo.recipes.map((recipe, idx) => (
              <tr key={idx}>
                <td className="md:py-3 text-center px-1 border md:px-4">{recipe.name}</td>
                <td className="md:py-3 border md:px-18">
                  <ul>
                    {recipe.ingredients.map(ingredient => (
                      <div className="md:px-2 px-1">
                        <CiCircleChevRight className="inline"></CiCircleChevRight>{" "}
                        <li className="inline" key={ingredient}>
                          {ingredient}
                        </li>
                      </div>
                    ))}
                  </ul>
                </td>
                <td className="md:py-3 px-2 py-2 border md:px-4">{recipe.method}</td>
                <td className="md:py-3 border md:px-4">{recipe.rating}</td>
                <td className="md:py-3 border md:px-4">
                  <button
                    onClick={() => handleFavorite(recipe.id)}
                    className={`flex rounded border md:p-2 p-1  hover:bg-red-500 hover:text-white  items-center text-red-600 focus:outline-none  ${
                      disabledButtons.includes(recipe.id)
                        ? "disabled:opacity-25 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={disabledButtons.includes(recipe.id)}
                  >
                    <FaHeart className="md:w-5  md:h-5 mr-1" />
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
