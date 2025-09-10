import React, { useEffect, useState } from "react";
import { API_ENDPOINTS, apiRequest } from "../api/config";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const defaultServices = [
    {
      id: 1,
      title: "CCTV Surveillance",
      description:
        "Professional CCTV installation and monitoring services for complete security coverage",
      price: "Starting from ₹15,000",
      category: "security",
    },
    {
      id: 2,
      title: "Networking Solutions",
      description:
        "Complete networking infrastructure setup and maintenance for homes and businesses",
      price: "Starting from ₹8,000",
      category: "networking",
    },
    {
      id: 3,
      title: "EPABX Systems",
      description: "Advanced communication systems for seamless office communication",
      price: "Starting from ₹12,000",
      category: "communication",
    },
    {
      id: 4,
      title: "Biometric Access Control",
      description: "Smart biometric solutions for enhanced security and attendance management",
      price: "Starting from ₹10,000",
      category: "security",
    },
  ];

  const [services, setServices] = useState(defaultServices);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch from real API in background
    async function fetchServices() {
      setLoading(true);
      try {
        const response = await apiRequest(API_ENDPOINTS.SERVICES);
        if (response.success && response.services.length > 0) {
          setServices(response.services);
        }
      } catch {
        // Keep default services if API fails
      } finally {
        setLoading(false);
      }
    }

    // Delay background fetch to show fallback instantly
    const timer = setTimeout(fetchServices, 1000);
    return () => clearTimeout(timer);
  }, []);

  // WhatsApp floating button
  const WhatsAppButton = () => {
    const phoneNumber = "919999999999";
    const message = "Hi, I'm interested in your services from Aravind & Co!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 z-50"
        title="Chat with us on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-...z" />
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
            <h1 className="text-5xl font-bold mb-6">Aravind & Co</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Your trusted partner for security, networking, and communication
              solutions. We provide professional services to keep your business safe and connected.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Services</h2>
        {loading ? (
          <p className="text-center">Loading services...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="border rounded-lg p-6 shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="mb-2">{service.description}</p>
                <p className="font-semibold">{service.price}</p>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
