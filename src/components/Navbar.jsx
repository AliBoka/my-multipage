import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
let mobileStyle = "flex flex-col  h-96 absolute bg-primary left-0 right-0 px-2";
let desktopStyle = "flex items-center justify-between h-14 ";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (

    ////////////////////////////////////////ppppppppppppppppppppp
    <div className="w-full bg-primary px-3 text-white text-sm border-b border-b-rgba-white fixed">
     
     {
            (window.onresize = () => {
              if (window.innerWidth >= 640) {
                setMobile(false);
              }
            })
          }

      <nav className={mobile ? mobileStyle : desktopStyle}>
          <div className="flex justify-between w-full">

          <div className={mobile ? 'pt-3 pl-1' : 'pt-2'}>
        <img
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
          alt="logo"
          className="w-8 "
        />
          </div>
        <div className="hidden sm:flex items-center">
          <NavLink
            to="/"
            className="px-5 md:px-6 xl:px-7 py-4 hover:cursor-pointer "
          >
            Home
          </NavLink>
          <NavLink
            to="/"
            className="px-5 md:px-6 xl:px-7 py-4 hover:cursor-pointer "
          >
            About us
          </NavLink>
          <NavLink
            to="/"
            className="px-5 md:px-6 xl:px-7 py-4 hover:cursor-pointer "
          >
            Services
          </NavLink>
          <NavLink
            to="/"
            className="px-5 md:px-6 xl:px-7 py-4 hover:cursor-pointer "
          >
            News
          </NavLink>
          <NavLink
            to="/"
            className="px-5 py-1.5 ml-4 rounded-md hover:cursor-pointer border border-secondary"
          >
            Contact us
          </NavLink>
        </div>
        <div className="block sm:hidden">
        <Hamburger  toggle={setMobile} toggled={mobile} />
        </div>
          </div>

        <div className={mobile ? "flex flex-col mt-4" : " hidden"}>
          <NavLink
            to="/"
            className="px-1 py-4 text-xl hover:cursor-pointer active:bg-gray-700 hover:bg-gray-700 "
          >
            Home
          </NavLink>
          <NavLink
            to="/"
            className="px-1 py-4 text-xl hover:cursor-pointer active:bg-gray-700 hover:bg-gray-700 "
          >
            About us
          </NavLink>
          <NavLink
            to="/"
            className="px-1 py-4 text-xl hover:cursor-pointer active:bg-gray-700 hover:bg-gray-700 "
          >
            Services
          </NavLink>
          <NavLink
            to="/"
            className="px-1 py-4 text-xl hover:cursor-pointer active:bg-gray-700 hover:bg-gray-700 "
          >
            News
          </NavLink>
          <NavLink
            to="/"
            className="px-1 py-4 text-xl hover:cursor-pointer active:bg-gray-700 hover:bg-gray-700 "
          >
            Contact us
          </NavLink>
        </div>
      </nav>
        
    </div>
    
  );
};

export default Navbar;
