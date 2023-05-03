import React from 'react';

const ChefRecipes = (props) => {
    const{image,chefName,yearsOfExperience,likes,numRecipes ,id,bio }=props.chefInfo
    return (
             <div className="bg-blue-500 p-8 flex justify-center items-center">
      <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center">
        <img
          src={image}
          alt={chefName}
          className="rounded-full w-64 h-64 md:w-80 md:h-80 mr-8"
        />
        <div className="text-white">
          <h1 className="text-3xl font-bold mb-2">{chefName}</h1>
          <p className="text-xl mb-4">
            {bio}
          </p>
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="text-lg mr-2">Likes:</p>
            <p className="text-lg font-bold">{likes}</p>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="text-lg mr-2">Number of Recipes:</p>
            <p className="text-lg font-bold">{numRecipes}</p>
          </div>
          <div className="mt-4">
            <p className="text-lg font-bold">Years of Experience:</p>
            <p className="text-lg">{yearsOfExperience}</p>
          </div>
        </div>
      </div>
    </div>
        
    );
};

export default ChefRecipes;