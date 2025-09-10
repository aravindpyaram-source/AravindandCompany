import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Aravind & Co</Link>
      </div>
      <div className="navbar-contact">
        <a href="tel:+917032076263">+91 7032076263</a> | <a href="mailto:aravindandco@gmail.com">aravindandco@gmail.com</a>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
