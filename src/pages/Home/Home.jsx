import React from "react";
import Slider from "../Slider/Slider";
import { useState } from "react";
import { useEffect } from "react";
import ChefCard from "../chefCard/ChefCard";
const Home = () => {
  const [chefData, setChefData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://b710-chef-recipe-hunter-main-rokon-rabbi.vercel.app/chefs"
      );

      const json = await response.json();

      setChefData(json);
    };
    fetchData();
  }, []);
  return (
    <div className="">
      {/* slider  */}
      <Slider></Slider>

      <p className="md:text-6xl text-3xl font-extrabold text-gray-900 text-center mt-14 md:mt-32">
        Chefs
      </p>
      <div className="md:p-36 p-14 grid  md:grid-cols-3 grid-cols-1 gap-10">
        {chefData.map(cardData => ( <ChefCard cardData={cardData} key={cardData.id}></ChefCard>)
        )}
      </div>
    </div>
  );
};

export default Home;
