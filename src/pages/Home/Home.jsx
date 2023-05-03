import React from "react";
import Slider from "../Slider/Slider";
import { useState } from "react";
import { useEffect } from "react";
import ChefCard from "../chefCard/ChefCard";
import Category from "./ExtraSection/Category";
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
      {/* extra home page category section  */}
      <Category />
      {/* chef section */}
      <p className="md:text-6xl bg-zinc-50  text-3xl font-extrabold text-gray-900 text-center mt-14 md:mt-12">
        Chefs
      </p>
      <div className= " bg-zinc-50  md:p-36 p-14 grid  md:grid-cols-3 grid-cols-1 gap-10">
        {chefData.map(cardData => (
          <ChefCard cardData={cardData} key={cardData.id}></ChefCard>
        ))}
      </div>
      {/* letest recipe extra section  */}
      
    </div>
  );
};

export default Home;
