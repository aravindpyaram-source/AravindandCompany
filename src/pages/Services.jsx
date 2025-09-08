import React, { useEffect, useState } from "react";
import { API_ENDPOINTS, apiRequest } from "../api/config";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Static fallback data
  const fallbackServices = [
    {
      id: 1,
      title: "CCTV Surveillance",
      description: "We provide IP & Analog CCTV solutions with DVR/NVR setup, remote monitoring, and mobile app integration to keep your home and business safe.",
      icon: "📹",
      features: ["IP & Analog Cameras", "Remote Monitoring", "DVR/NVR Setup", "Mobile App Access"],
      category: "security",
      price: "Starting from ₹15,000"
    },
    {
      id: 2,
      title: "EPABX & Intercom Systems",
      description: "Seamless office communication with advanced EPABX systems and intercom setups designed for businesses and residential buildings.",
      icon: "☎️",
      features: ["Office Intercom Setup", "PBX System Installation", "Call Routing & Extensions", "Maintenance & Support"],
      category: "communication",
      price: "Starting from ₹12,000"
    },
    {
      id: 3,
      title: "Biometric Solutions",
      description: "Enhance security with smart biometric access systems for attendance tracking, door security, and workforce management.",
      icon: "🛡️",
      features: ["Fingerprint & Face Recognition", "Attendance Management", "Access Control", "Integration with HR Systems"],
      category: "security",
      price: "Starting from ₹10,000"
    },
    {
      id: 4,
      title: "Networking Infrastructure",
      description: "Complete LAN & WAN setup with structured cabling, Wi-Fi networks, fiber optics, and server installations.",
      icon: "🌐",
      features: ["LAN/WAN Setup", "Fiber Cabling", "Server Room Setup", "Network Security"],
      category: "networking",
      price: "Starting from ₹8,000"
    }
  ];

  useEffect(() => {
    async function fetchServices() {
      try {
        setLoading(true);
        const response = await apiRequest(API_ENDPOINTS.SERVICES);
        
        if (response.success && response.services && response.services.length > 0) {
          // Map API data to include fallback features if not provided
          const servicesWithFeatures = response.services.map(service => {
            const fallback = fallbackServices.find(f => f.title === service.title);
            return {
              ...service,
              icon: fallback?.icon || "⚙️",
              features: service.features || fallback?.features || ["Professional Installation", "Quality Service", "24/7 Support"]
            };
          });
          setServices(servicesWithFeatures);
        } else {
          throw new Error("No services data received");
        }
        
        setError("");
      } catch (err) {
        console.error("Failed to fetch services:", err);
        setError("Failed to load services from server.");
        setServices(fallbackServices);
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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional security & communication solutions tailored for your needs.
          </p>
          {error && (
            <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded max-w-2xl mx-auto">
              ⚠️ {error} Showing cached data.
            </div>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{service.icon}</span>
                <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {service.price && (
                <div className="mb-4">
                  <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {service.category && (
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mb-4">
                  {service.category}
                </span>
              )}

              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Custom Solutions Available</h2>
          <p className="text-lg mb-6">
            Need a tailored solution? We design custom security and networking systems based on your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Discuss Your Requirements
          </Link>
        </div>
      </div>
    </div>
  );
}
