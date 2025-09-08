import React from "react"
import { motion } from "framer-motion"

export default function About() {
  const team = [
    { name: "Aravind", role: "Founder & CEO", img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
    { name: "Ravi", role: "Network Specialist", img: "https://cdn-icons-png.flaticon.com/512/1999/1999625.png" },
    { name: "Priya", role: "Customer Support", img: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png" }
  ]

  return (
    <div className="bg-gray-50 py-16 px-6">
      {/* Intro Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-gray-600 mt-3 text-lg max-w-3xl mx-auto">
          At <span className="font-semibold text-blue-600">Aravind & Co</span>, we are committed to providing top-notch
          security, communication, and networking solutions. With over a decade of experience, we help businesses
          and homes stay secure and connected.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-600">
            To deliver reliable, innovative, and affordable security and communication solutions
            that empower our clients to feel safe and stay connected.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p className="text-gray-600">
            To be recognized as a leading provider of integrated security and networking solutions,
            trusted by homes and businesses across India.
          </p>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition"
            >
              <img src={member.img} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
