import React from 'react';

const ChefCard = () => {
    return (
        <div>
             <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-2">Years of Experience: {experience}</p>
        <p className="text-gray-700 text-base mb-2">Number of Recipes: {numRecipes}</p>
        <p className="text-gray-700 text-base mb-2">Likes: {likes}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Recipes
        </button>
      </div>
    </div>
        </div>
    );
};

export default ChefCard;