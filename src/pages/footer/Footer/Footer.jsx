import React from 'react';
import Logo from '../../../assets/Logo.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
<>
        <div  className=' bg-zinc-950 md:h-100 relative h-full  '>
           
           <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/collection-social-media-monochromatic-doodles_79603-1753.jpg?w=740&t=st=1683022134~exp=1683022734~hmac=646b8e8a753a62db05a0ebdd6cf4cb5d55f047b8e89f4fe1ab39aae9c2ed8faf")`,opacity: "0.04", }}></div>
        <div className="  relative md:h-96   md:px-20 grid md:grid-cols-12 px-14 py-5 md:py-14">
            
        <div className="col-span-4 grid md:justify-between ">
        <p className='text-white font-bold text-3xl'>Subscribe</p>
        <p className=' text-gray-300 font-thin text-sm w-72'>Register and get notified about all the news & updates before it gets too late.</p>
        <div className="d-flex ">

        <input className=" shadow appearance-none bg-black  rounded  py-4 px-5 text-gray-700 leading-tight focus:outline-orange-500 focus:shadow-outline" id="email" type="email" placeholder="Your email address"/>

                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-5 ml-1 rounded focus:outline-none focus:shadow-outline " type="button">
                Sign Up
            </button>
      </div>
        
        </div>
        <div className="col-span-2 p-2 md:p-0 grid justify-between">
        <p className='text-white font-bold text-3xl'>Explore</p>
        <p className='text-gray-300 text-sm' >Browse Recipes</p>
        <p className='text-gray-300 text-sm' >Submit a Recipe</p>
        <p className='text-gray-300 text-sm'  >Our Chefs</p>
        <p className='text-gray-300 text-sm' >Latest News</p>
       
        </div>

       
        <div className="col-span-2 p-2 md:p-0  grid justify-between">
        <p className='text-white font-bold text-3xl'>Support</p>
        <p className='text-gray-300 text-sm' >Help Desk</p>
        <p className='text-gray-300 text-sm' >Sales</p>
        <p className='text-gray-300 text-sm'  >Become a Partner</p>
        <p className='text-gray-300 text-sm' >Developers</p>
        </div>
        <div className="col-span-2 p-2 md:p-0 h-40 grid justify-between">
        <p className='text-white font-bold text-3xl'>Contact</p>
        <p className='text-gray-300 text-sm mt' >787 Mark View Street,
New Town, India</p>

        <p className='text-gray-300 text-sm' >needhelp@foodhub.com</p>
        <p className='text-gray-300 text-sm' >666 888 0000</p>
        </div>

        </div>
      
    </div>
      <div className=" bg-zinc-950  grid md:flex md:justify-between justify-center md:items-center md:px-20 pt-2 pb-5">
      <p className='text-gray-300 text-sm'>@2023 FoodHub. All Rights Reserved</p>
      <img className='p-2 md:p-0' src="https://i.ibb.co/XZnTV5w/Group-9969.png" alt="" />
  </div>
  </>
    );
};

export default Footer;