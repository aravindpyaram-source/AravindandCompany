import React, { useEffect, useState } from "react";
import { API_ENDPOINTS, apiRequest } from "../api/config";
import { motion } from "framer-motion";

export default function Home() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchServices() {
      try {
        setLoading(true);
        const response = await apiRequest(API_ENDPOINTS.SERVICES);
        
        if (response.success && response.services) {
          setServices(response.services);
        } else {
          throw new Error("Invalid response format");
        }
        
        setError("");
      } catch (err) {
        console.error("Failed to fetch services:", err);
        setError("Failed to load services from server.");
        
        // Fallback services data
        setServices([
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
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
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
              <a
                href="/services"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Our Services
              </a>
              <a
                href="/contact"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
              >
                Get Quote
              </a>
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
            {error && (
              <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded max-w-2xl mx-auto">
                ⚠️ {error} Showing cached data.
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
                  <p className="text-blue-600 font-semibold">
                    {service.price}
                  </p>
                )}
                {service.category && (
                  <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
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
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Get Free Quote
            </a>
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
