import React from "react";
import { SlLike } from "react-icons/sl";

import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect } from "react";
import { useState } from "react";
const ChefCard = props => {
  const { image, chefName, yearsOfExperience, likes, numRecipes, id } =
    props.cardData;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
      <div className=" h-75  rounded overflow-hidden shadow-xl border">
        {/* lazyload image  */}

        <LazyLoadImage
          loading="lazy"
          className=" rounded-3xl shadow-sm p-5  md:h-80 h-64 w-screen"
          src={loaded ? image : ""}
          alt={chefName}
          effect="blur"
        />

        <div className="px-6 grid justify-center py-4">
          <div className="font-bold text-xl mb-2">{chefName}</div>
          <p className="text-gray-700 text-base mb-2">
            Years of Experience: {yearsOfExperience}
          </p>
          <p className="text-gray-700 text-base mb-2">
            Number of Recipes: {numRecipes}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 d-flex  text-center  space-x-5">
          <button className=" rounded-md shadow-2xl border">
            <span className="">{likes}</span>
            <SlLike className="mb-3 pt-1 text-blue-500 inline font-bold text-3xl"></SlLike>
          </button>
          <Link to={`/chef/${id}`}>
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
