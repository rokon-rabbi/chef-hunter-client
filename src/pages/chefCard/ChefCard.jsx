import React from 'react';
import { SlLike } from "react-icons/sl";
import { Link } from 'react-router-dom';

const ChefCard = (props) => {
  const{image,chefName,yearsOfExperience,likes,numRecipes ,id }=props.cardData;
    return (
        <div>
             <div className=" h-75  rounded overflow-hidden shadow-xl border">
      <img className=" rounded-3xl shadow-sm p-5  md:h-80 h-64 w-full" src={image} alt={chefName} />
      <div className="px-6 grid justify-center py-4">
        <div className="font-bold text-xl mb-2">{chefName}</div>
        <p className="text-gray-700 text-base mb-2">Years of Experience: {yearsOfExperience}</p>
        <p className="text-gray-700 text-base mb-2">Number of Recipes: {numRecipes}</p>
      </div>
      <div className="px-6 pt-4 pb-2 d-flex  text-center  space-x-5">
    <button className=" rounded-md shadow-2xl border">
        <span className="">{likes}</span>
        <SlLike className='mb-3 pt-1 text-blue-500 inline font-bold text-3xl' ></SlLike>
        </button>
        <Link to={`/chef/${id}`} >
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Recipes
        </button>
        </Link>
      </div>
    </div>
        </div>
    );
};

export default ChefCard;