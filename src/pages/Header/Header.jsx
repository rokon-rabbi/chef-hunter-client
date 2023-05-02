import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../../src/assets/Logo.png'

const Header = () => {
    const [icon,setIcon]=useState(true)
    return (
        < >
        
        <nav className='md:flex  md:p-10 p-2 md:px-20 md:justify-between  z-10 items-center '>
           { icon ? <FontAwesomeIcon className='text-3xl  md:hidden inline  relative top-11 justify-start ' onClick={()=>setIcon(!icon)} icon={ faBars} />:<FontAwesomeIcon className='text-4xl  md:hidden inline  relative top-11 justify-start ' onClick={()=>setIcon(!icon)}  icon={faXmark} />}
           
           <Link
          to={"/"}
          aria-label='Jobfinder'
          title='FoodHub' className="flex justify-center">
                <img className='w-16 md:w-24 lg:w-32' src={Logo} alt="FoodHub logo" />
            </Link>
            <ul className={` md:space-x-10 md:flex md:static md:text-lg  absolute   md:bg-none text-slate-950 duration-300 ${!icon ? 'left-10 p-2':'-left-44 ' } `}>
                <li>
                <NavLink
              to='/'
              aria-label='Home'
              title='Home'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Home
            </NavLink>
                </li>
                <li>
                <NavLink
              to='/blog'
              aria-label='Blog'
              title='Blog'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Blog
            </NavLink>

                </li>
            </ul>   
           
                <button className='hidden md:block bg-gradient-to-r from-indigo-400 to-purple-600 text-white py-4 px-6 rounded-md hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-700'>Star Applying</button>
                <div className="flex md:hidden bg-slate-100  ">
        <button className=' ml-auto relative md:w-100 w-20 bottom-9  bg-gradient-to-r from-indigo-400 to-purple-600 text-sm md:text-md  text-white  p-1 rounded-md hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-700'>Star Applying</button>

        </div>
        </nav>
        </>
    );
};

export default Header;