import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Aravind & Co</Link>
      <div className="contact-info">
        <a href="tel:+9170320763">+91 703207263</a> | <a href="mailto:aravindco@gmail.com">aravindco@gmail.com</a>
      </div>
      <div className="menu-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
