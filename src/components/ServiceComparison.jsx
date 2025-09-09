import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServiceComparison() {
  const [selectedCategory, setSelectedCategory] = useState("cctv");

  const servicePackages = {
    cctv: [
      {
        name: "Basic CCTV",
        price: "₹15,000",
        popular: false,
        features: [
          "4 Analog Cameras",
          "4 Channel DVR",
          "1TB Storage",
          "Mobile App Access",
          "Basic Installation",
          "3 Month Warranty"
        ],
        ideal: "Small homes, shops"
      },
      {
        name: "Premium CCTV",
        price: "₹28,000", 
        popular: true,
        features: [
          "8 IP Cameras",
          "8 Channel NVR",
          "2TB Storage",
          "Night Vision",
          "Mobile & Web Access",
          "Remote Monitoring",
          "Professional Installation",
          "1 Year Warranty"
        ],
        ideal: "Medium businesses, large homes"
      },
      {
        name: "Enterprise CCTV",
        price: "₹45,000+",
        popular: false,
        features: [
          "16+ IP Cameras",
          "16+ Channel NVR",
          "4TB+ Storage", 
          "Advanced Analytics",
          "Multi-location Access",
          "24/7 Monitoring",
          "Complete Setup",
          "2 Year Warranty"
        ],
        ideal: "Large businesses, offices"
      }
    ],
    networking: [
      {
        name: "Basic Network",
        price: "₹8,000",
        popular: false,
        features: [
          "Basic LAN Setup",
          "Wi-Fi Router",
          "Cable Management",
          "10 Device Support",
          "Basic Configuration"
        ],
        ideal: "Small offices, homes"
      },
      {
        name: "Business Network", 
        price: "₹18,000",
        popular: true,
        features: [
          "Structured Cabling",
          "Business Router/Switch",
          "Wi-Fi 6 Access Points",
          "50+ Device Support",
          "Network Security",
          "Guest Network",
          "Remote Management"
        ],
        ideal: "Medium businesses"
      },
      {
        name: "Enterprise Network",
        price: "₹35,000+",
        popular: false,
        features: [
          "Fiber Optic Cabling",
          "Enterprise Equipment",
          "Multiple Access Points",
          "Unlimited Devices",
          "Advanced Security",
          "Server Room Setup",
          "24/7 Monitoring"
        ],
        ideal: "Large enterprises"
      }
    ],
    biometric: [
      {
        name: "Basic Biometric",
        price: "₹10,000",
        popular: false,
        features: [
          "Fingerprint Scanner",
          "50 User Capacity",
          "Basic Attendance",
          "USB Data Export",
          "Simple Installation"
        ],
        ideal: "Small teams, shops"
      },
      {
        name: "Advanced Biometric",
        price: "₹20,000",
        popular: true,
        features: [
          "Face + Fingerprint",
          "500 User Capacity", 
          "Advanced Attendance",
          "Network Connectivity",
          "Software Integration",
          "Access Control"
        ],
        ideal: "Medium businesses"
      },
      {
        name: "Enterprise Biometric",
        price: "₹40,000+",
        popular: false,
        features: [
          "Multi-modal Recognition",
          "Unlimited Users",
          "Multiple Devices",
          "HR System Integration",
          "Advanced Analytics",
          "Mobile App Access"
        ],
        ideal: "Large organizations"
      }
    ]
  };

  const categories = [
    { key: "cctv", name: "CCTV Systems", icon: "📹" },
    { key: "networking", name: "Networking", icon: "🌐" },
    { key: "biometric", name: "Biometric", icon: "🛡️" }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Compare Our Service Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect solution for your needs. All packages include professional installation and ongoing support.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-2 shadow-md">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 rounded-md font-medium transition duration-300 ${
                  selectedCategory === category.key
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="grid md:grid-cols-3 gap-6">
          {servicePackages[selectedCategory].map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-lg shadow-lg p-8 relative ${
                pkg.popular ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {pkg.price}
                </div>
                <p className="text-gray-600 text-sm">{pkg.ideal}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <Link
                  to="/contact"
                  className={`inline-block px-6 py-3 rounded-lg font-semibold transition duration-300 ${
                    pkg.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We can design packages tailored to your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition duration-300"
          >
            Request Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
