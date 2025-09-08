import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Services from "./pages/Services";

// Components
import ConnectionTest from "./components/ConnectionTest";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <NavLink to="/" className="text-2xl font-bold text-blue-600">
              Aravind & Co
            </NavLink>
            
            <div className="hidden md:flex space-x-8">
              <NavLink to="/" className={({ isActive }) => `hover:text-blue-600 transition duration-300 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `hover:text-blue-600 transition duration-300 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>
                About
              </NavLink>
              <NavLink to="/services" className={({ isActive }) => `hover:text-blue-600 transition duration-300 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>
                Services
              </NavLink>
              <NavLink to="/faq" className={({ isActive }) => `hover:text-blue-600 transition duration-300 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>
                FAQ
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => `hover:text-blue-600 transition duration-300 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>
                Contact
              </NavLink>
              <NavLink to="/test" className={({ isActive }) => `hover:text-blue-600 transition duration-300 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>
                Test API
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<ConnectionTest />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
