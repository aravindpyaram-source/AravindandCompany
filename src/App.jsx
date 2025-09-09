import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Services from "./pages/Services";
import Blog from "./pages/Blog";

// Components
import ConnectionTest from "./components/ConnectionTest";
import ServiceComparison from "./components/ServiceComparison";
import AppointmentBooking from "./components/AppointmentBooking";
import Footer from "./components/Footer";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo with Shield Icon */}
            <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
            <span className="text-green-600 text-3xl">🛡️</span>
            <span className="text-blue-600">Aravind &nbsp;</span>
            <span className="text-yellow-500">Co</span>
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
                to="/blog"
                className="hover:text-blue-600 transition duration-300 text-gray-700 font-medium"
              >
                Blog
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
                to="/book-appointment"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
              >
                Book Now
              </Link>
              <Link
                to="/test"
                className="hover:text-blue-600 transition duration-300 text-gray-700 font-medium text-sm"
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
                  to="/blog"
                  className="hover:text-blue-600 transition duration-300 text-gray-700 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
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
                  to="/book-appointment"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-medium text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Appointment
                </Link>
                <Link
                  to="/test"
                  className="hover:text-blue-600 transition duration-300 text-gray-700 font-medium py-2 text-sm"
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-appointment" element={
            <div className="min-h-screen bg-gray-50 py-12">
              <div className="max-w-4xl mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-8"
                >
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Book Your Appointment
                  </h1>
                  <p className="text-xl text-gray-600">
                    Schedule a consultation with our security experts
                  </p>
                </motion.div>
                <AppointmentBooking />
              </div>
            </div>
          } />
          <Route path="/compare" element={
            <div className="min-h-screen bg-gray-50 py-12">
              <ServiceComparison />
            </div>
          } />
          <Route path="/test" element={<ConnectionTest />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Simple BlogPost component for individual blog posts
const BlogPost = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Blog Post Coming Soon
          </h1>
          <p className="text-gray-600 mb-6">
            Individual blog post content will be available soon. For now, you can browse our blog listing.
          </p>
          <Link
            to="/blog"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
