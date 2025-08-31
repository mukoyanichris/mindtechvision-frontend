// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './Assets/logoo.png';
import { FaTwitter, FaFacebookF, FaTiktok, FaWhatsapp } from 'react-icons/fa';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
      <img src={logo} alt="Mind Vision Tech Logo" className="logo-image" />
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/Request Quote" className={({ isActive }) => isActive ? 'active' : ''}>
            Request Quote
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="nav-socials">
        <a href="https://twitter.com" target="_" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      </div>
    </nav>
  );
}

export default Navbar;



