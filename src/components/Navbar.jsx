import React from 'react'
import 'remixicon/fonts/remixicon.css'
// import './navbar.css'; // Assuming you have some CSS for styling

const Navbar = () => {
  return (
    <nav class="container flex items-center justify-between h-16">
      <div class="bg-red-400 absolute top-0 left-0
      min-h-[80vh] w-full duration-500 ease-out overflow-hidden z-20">
        
        <a href="/" class="navbar-logo">
          Logo
        </a>
        <ul class="flex flex-col items-center gap-8 pt-20">
          <li>
            <a href="/home" class="nav-link active">
              Home
            </a>
          </li>
          <li>
            <a href="/about" class="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="/services" class="nav-link">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" class="nav-link">
              Contact
            </a>
          </li>
        </ul>

        <div class="text-xl cursor-pointer">
          <i class="ri-arrow-right-down-line"></i>
        </div>

        <div>
          <i></i>
          <i></i>
          <div>
            <i></i>
          </div>
          <div>
            <i></i>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar