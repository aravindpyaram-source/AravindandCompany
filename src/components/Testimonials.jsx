import React from "react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Business Owner",
    feedback: "Professional installation and excellent support. Aravind & Co secured our office perfectly!",
    img: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png"
  },
  {
    name: "Sita Devi",
    role: "Home Owner",
    feedback: "Fast and reliable service. The CCTV setup works flawlessly, and support is always available.",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  },
  {
    name: "Anil Reddy",
    role: "Manager",
    feedback: "Great experience! Biometric attendance and network setup were completed efficiently.",
    img: "https://cdn-icons-png.flaticon.com/512/1999/1999625.png"
  }
]

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-16 px-6 mt-12">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            <div className="flex items-center mb-4">
              <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full mr-3" />
              <div>
                <h3 className="font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-700">"{t.feedback}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
