import React from 'react';
import { FaAccessibleIcon } from 'react-icons/fa'; 
import { BsCartCheckFill } from 'react-icons/bs'; 
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='p-5 flex justify-between md:px-12'>
         <nav className='flex gap-5 items-center'>  
        <FaAccessibleIcon className='text-3xl '/>
        <h2 className='text-3xl font-bold'>HeroGadget</h2> 
         </nav>
         <nav className='flex gap-5 items-center text-2xl font-bold ' >
         <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-blue-500": ""
                    }
                  >
          HOME
         </NavLink>
         <NavLink
                    to="/shop"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-blue-500": ""
                    }
                  >
          SHOP
         </NavLink>
         <NavLink
                    to="/cart"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-blue-500": ""
                    }
                  >
         <BsCartCheckFill className='text-3xl font-bold text-cyan-400'/>
         </NavLink>
         <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-blue-500": ""
                    }
                  >
          ABOUT
         </NavLink>
        </nav>
        </div>
    );
};

export default Header;