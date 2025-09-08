import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="fixed w-full bg-white shadow z-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-semibold">Aravind & Co</Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <a href="/services" className="hover:text-blue-400">Services</a>
          <a href="/about" className="hover:text-blue-400">About</a>
        </nav>
      </div>
    </header>
  )
}