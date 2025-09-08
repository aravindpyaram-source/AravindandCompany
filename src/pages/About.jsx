import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  const team = [
    {
      name: "Aravind",
      role: "Founder & CEO",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      description: "15+ years experience in security and networking solutions"
    },
    {
      name: "Ravi",
      role: "Network Specialist",
      img: "https://cdn-icons-png.flaticon.com/512/1999/1999625.png",
      description: "Expert in LAN/WAN setup and fiber optic installations"
    },
    {
      name: "Priya",
      role: "Customer Support",
      img: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
      description: "Dedicated to ensuring customer satisfaction and support"
    }
  ];

  const values = [
    {
      icon: "🛡️",
      title: "Security First",
      description: "We prioritize your security with top-quality equipment and professional installation."
    },
    {
      icon: "⚡",
      title: "Reliable Service",
      description: "24/7 support and maintenance to ensure your systems always work when you need them."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We stay updated with the latest technology to provide cutting-edge solutions."
    },
    {
      icon: "🤝",
      title: "Trust",
      description: "Building long-term relationships with our clients through transparent and honest service."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Aravind & Co</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in security, networking, and communication solutions since 2010
          </p>
        </motion.div>

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              At Aravind & Co, we are committed to providing top-notch security, communication, and networking solutions. With over a decade of experience, we help businesses and homes stay secure and connected.
            </p>
            <p className="text-gray-600 mb-6">
              Started in 2010 with a vision to make advanced security technology accessible to everyone, we have grown to become Hyderabad's trusted name in security and networking solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-blue-600 font-bold text-2xl mr-4">500+</span>
                <span className="text-gray-700">Happy Customers</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 font-bold text-2xl mr-4">15+</span>
                <span className="text-gray-700">Years Experience</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 font-bold text-2xl mr-4">24/7</span>
                <span className="text-gray-700">Support Available</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-blue-600 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100">
                To deliver reliable, innovative, and affordable security and communication solutions that empower our clients to feel safe and stay connected.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be recognized as a leading provider of integrated security and networking solutions, trusted by homes and businesses across India.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="bg-blue-600 text-white rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss your security and networking requirements today
          </p>
          <div className="space-x-4">
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/services"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              View Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
