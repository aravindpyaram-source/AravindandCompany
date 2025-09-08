import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Aravind & Co
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="hover:text-blue-600 transition duration-300 text-gray-700 font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-blue-600 transition duration-300 text-gray-700 font-medium"
              >
                About
              </Link>
              <Link
                to="/services"
                className="hover:text-blue-600 transition duration-300 text-gray-700 font-medium"
              >
                Services
              </Link>
              <Link
                to="/faq"
                className="hover:text-blue-600 transition duration-300 text-gray-700 font-medium"
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="hover:text-blue-600 transition duration-300 text-gray-700 font-medium"
              >
                Contact
              </Link>
              <Link
                to="/test"
                className="hover:text-blue-600 transition duration-300 text-gray-700 font-medium"
              >
                Test API
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <Link
                  to="/"
                  className="hover:text-blue-600 transition duration-300 text-gray-700 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="hover:text-blue-600 transition duration-300 text-gray-700 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="hover:text-blue-600 transition duration-300 text-gray-700 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/faq"
                  className="hover:text-blue-600 transition duration-300 text-gray-700 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-blue-600 transition duration-300 text-gray-700 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/test"
                  className="hover:text-blue-600 transition duration-300 text-gray-700 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Test API
                </Link>
              </div>
            </div>
          )}
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

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
