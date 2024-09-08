import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <h1>Socio</h1>
      </div>
      <div className={`navbar-items ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleMenu}>
          &times; {/* Close icon */}
        </button>
        <Link to="/">HOME</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/journey">About us</Link>
        <Link to="/contact">CONTACT US</Link>
      </div>
      <div className="navbar-toggle">
        <button className="navbar-button" onClick={toggleMenu}>
          &#9776; {/* Bar (hamburger) icon */}
        </button>
      </div>
    </div>
  );
}