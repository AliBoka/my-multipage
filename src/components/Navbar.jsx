import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full bg-primary px-3 text-white text-sm border-b border-b-rgba-white'>
        <nav className='flex items-center justify-between h-14'>
            <img src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="logo"
            className='w-8' />
            <div className='hidden sm:block'>
               <NavLink to='/' className="px-5 md:px-6 xl:px-7 py-4 hover:cursor-pointer ">Home</NavLink>
               <NavLink to='/' className="px-5 md:px-6 xl:px-7 py-4 hover:cursor-pointer ">About us</NavLink>
               <NavLink to='/' className="px-5 md:px-6 xl:px-7 py-4 hover:cursor-pointer ">Services</NavLink>
               <NavLink to='/' className="px-5 md:px-6 xl:px-7 py-4 hover:cursor-pointer ">News</NavLink>
               <NavLink to='/' className="px-5 py-1.5 ml-4 rounded-md hover:cursor-pointer border border-secondary">Contact us</NavLink>
               
            </div>
        </nav>
    </div>
  )
}

export default Navbar