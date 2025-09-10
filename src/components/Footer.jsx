import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Email: <a href="mailto:aravindco@gmail.com">aravindco@gmail.com</a></p>
        <p>Phone: <a href="tel:+9170320763">+91 703207263</a></p>
        <p>Hyderabad, Telangana, India</p>
      </div>
      <div className="copyright">
        &copy; {currentYear} Aravind & Co. All rights reserved.
      </div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/services">Services</Link> | <Link to="/contact">Contact</Link>
      </nav>
    </footer>
  );
}
