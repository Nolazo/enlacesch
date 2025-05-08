import React from 'react'
import {useState} from 'react'
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
  const [active, setActive] = useState(true)

  return (
    <nav className="container flex items-center justify-between h-16 sm:h-20 ">
      {/* HAMBURGER */}
      <div className="text-xl cursor-pointer sm:text-2xl lg:hidden">
        <i onClick={()=> {
          setActive(!active)
        }} className="ri-menu-4-line"></i>
      </div>
      {/* LOGO */}
      <img src="react.svg" alt="" className="w-32 ml-5 md:w-40"/>
      
      <div className={`${active === true ? "left-[-100%]" : "left-[0]"} bg-red-400 absolute top-0 min-h-[80vh]
         w-full duration-500 ease-out overflow-hidden z-20 md:px-10 
         md:w-1/2 lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}>
        {/* MENU ITEMS */}
        <ul className="flex flex-col items-start gap-8 pt-20 lg:pt-0 lg:flex-row">
          <li onClick={()=> {setActive(!active)}}>
            <a href="/home" className="nav-link active">
              Home
            </a>
          </li>
          <li onClick={()=> {setActive(!active)}}>
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li onClick={()=> {setActive(!active)}}>
            <a href="/services" className="nav-link">
              Services
            </a>
          </li>
          <li onClick={()=> {setActive(!active)}}>
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        <div className="text-xl cursor-pointer absolute top-5 right-5 sm:text-2xl lg:hidden">
          <i onClick={()=> {
          setActive(!active)}} 
          className={`ri-close-large-line`}></i>
        </div>

        <div className="flex items-center gap-5 text-xl cursor-pointer pt-20 sm:text-2xl lg:hidden">
          <i className="ri-search-line"></i>
          <i className="ri-user-line"></i>
          <div className="relative">
            <i className="ri-heart-line"></i>
            <span className="font-bold absolute top-0 left-4 bg-red-500
            text-yellow-50 text-xs w-5 h-5 rounded-full grid place-items-center">0</span>
          </div>
          <div className="relative">
            <i className="ri-shopping-cart-line"></i>
            <span className="font-bold absolute top-0 left-4 bg-red-500
            text-yellow-50 text-xs w-5 h-5 rounded-full grid place-items-center">0</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5 text-xl cursor-pointer sm:text-2xl mr-5">
          <i className="hidden lg:block ri-search-line"></i>
          <i className="hidden lg:block ri-user-line"></i>
          <div className="hidden lg:block relative">
            <i className="ri-heart-line"></i>
            <span className="font-bold absolute top-0 left-4 bg-red-500
            text-yellow-50 text-xs w-5 h-5 rounded-full grid place-items-center">0</span>
          </div>
          <div className="relative">
            <i className="ri-shopping-cart-line"></i>
            <span className="font-bold absolute top-0 left-4 bg-red-500
            text-yellow-50 text-xs w-5 h-5 rounded-full grid place-items-center">0</span>
          </div>
      </div>
    </nav>
  )
}

export default Navbar