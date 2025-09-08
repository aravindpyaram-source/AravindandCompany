import React, { useEffect, useState } from "react";
import { API_ENDPOINTS, apiRequest } from "../api/config";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false); // Changed from true
  const [error, setError] = useState("");

  // Immediate fallback data - show instantly
  const defaultServices = [
    {
      id: 1,
      title: "CCTV Surveillance",
      description: "Professional CCTV installation and monitoring services for complete security coverage",
      price: "Starting from ₹15,000",
      category: "security"
    },
    {
      id: 2,
      title: "Networking Solutions", 
      description: "Complete networking infrastructure setup and maintenance for homes and businesses",
      price: "Starting from ₹8,000",
      category: "networking"
    },
    {
      id: 3,
      title: "EPABX Systems",
      description: "Advanced communication systems for seamless office communication",
      price: "Starting from ₹12,000", 
      category: "communication"
    },
    {
      id: 4,
      title: "Biometric Access Control",
      description: "Smart biometric solutions for enhanced security and attendance management",
      price: "Starting from ₹10,000",
      category: "security"
    }
  ];

  useEffect(() => {
    // Show default data immediately
    setServices(defaultServices);
    
    // Try to fetch from API in background (optional)
    async function fetchServices() {
      try {
        setLoading(true);
        const response = await apiRequest(API_ENDPOINTS.SERVICES);
        
        if (response.success && response.services && response.services.length > 0) {
          setServices(response.services);
          setError("");
        }
      } catch (err) {
        console.warn("API not available, using default data:", err.message);
        // Keep using default data - don't set error
      } finally {
        setLoading(false);
      }
    }

    // Fetch API data in background after 1 second
    setTimeout(fetchServices, 1000);
  }, []);

  // WhatsApp Component
  const WhatsAppButton = () => {
    const phoneNumber = "919999999999"; // Replace with your actual number
    const message = "Hi, I'm interested in your services from Aravind & Co!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 z-50"
        title="Chat with us on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
    );
  };

  return (
    <div className="min-h-screen">
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">
              Aravind & Co
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Your trusted partner for security, networking, and communication solutions. 
              We provide professional services to keep your business safe and connected.
            </p>
            <div className="space-x-4">
              <Link
                to="/services"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional security and communication solutions tailored to your needs
            </p>
            {loading && (
              <div className="mt-4 p-2 bg-blue-100 text-blue-700 rounded max-w-sm mx-auto text-sm">
                🔄 Checking for latest updates...
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl mb-4">
                  {service.category === 'security' && '🛡️'}
                  {service.category === 'networking' && '🌐'}
                  {service.category === 'communication' && '☎️'}
                  {!['security', 'networking', 'communication'].includes(service.category) && '⚙️'}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                {service.price && (
                  <p className="text-blue-600 font-semibold mb-3">
                    {service.price}
                  </p>
                )}
                <Link
                  to="/contact"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 text-sm"
                >
                  Get Quote
                </Link>
                {service.category && (
                  <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full ml-2">
                    {service.category}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation and customized quote
          </p>
          <div className="space-x-4">
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+919999999999"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
