// src/components/Navbar.js (responsive)
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './Assets/logoo.png';
import { FaTwitter, FaFacebookF, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(o => !o);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="nav-left">
          <img src={logo} alt="Mind Vision Tech Logo" className="logo-image" />
        </div>

        <button className="nav-toggle" aria-label="Toggle navigation" onClick={toggle}>
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        <nav className={open ? 'nav-menu open' : 'nav-menu'}>
          <ul className="nav-links" onClick={close}>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/RequestQuote">Request-quote</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            
          </ul>

          <div className="nav-socials">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
