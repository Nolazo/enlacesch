import React from 'react'
// import './navbar.css'; // Assuming you have some CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Logo
        </a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/home" className="navbar-links">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-links">
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="/services" className="navbar-links">
              Services
            </a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-links">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar