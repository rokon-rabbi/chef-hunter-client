import React from "react";
import Slider from "../Slider/Slider";

const Home = () => (
    <div className="">
      {/* slider  */}
      <Slider/>
      
      <p className="md:text-6xl font-extrabold text-gray-900 text-center m-10">Chefs</p>
      <div class="grid grid-cols-3 grid-rows-2 gap-4">
  <div class="bg-gray-200">Column 1, Row 1</div>
  <div class="bg-gray-200">Column 2, Row 1</div>
  <div class="bg-gray-200">Column 3, Row 1</div>
  <div class="bg-gray-200">Column 1, Row 2</div>
  <div class="bg-gray-200">Column 2, Row 2</div>
  <div class="bg-gray-200">Column 3, Row 2</div>
</div>
    </div>
   
);

export default Home;
