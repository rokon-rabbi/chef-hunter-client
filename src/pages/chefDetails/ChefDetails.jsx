import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ChefRecipes from "../chefRecipes/ChefRecipes";

const ChefDetails = () => {
  const { id } = useParams();
  const chefInfo = useLoaderData();
  console.log(chefInfo);
  console.log(id);
  return (
    <div>
      <ChefRecipes chefInfo={chefInfo}></ChefRecipes>
    </div>
  );
};

export default ChefDetails;
