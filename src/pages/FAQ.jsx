import React, { useEffect, useState } from "react";
import { API_ENDPOINTS, apiRequest } from "../api/config";
import { motion } from "framer-motion";

export default function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchFaqs() {
      try {
        setLoading(true);
        const response = await apiRequest(API_ENDPOINTS.FAQ);
        
        if (response.success && response.faqs) {
          setFaqs(response.faqs);
        } else {
          throw new Error("Invalid response format");
        }
        
        setError("");
      } catch (err) {
        console.error("Failed to fetch FAQs:", err);
        setError("Failed to load FAQs from server.");
        
        // Fallback FAQs
        setFaqs([
          {
            id: 1,
            question: "What services do you provide?",
            answer: "We provide CCTV installation, networking solutions, EPABX systems, and biometric access control systems for homes and businesses.",
            category: "services"
          },
          {
            id: 2,
            question: "Do you offer maintenance services?",
            answer: "Yes, we provide comprehensive maintenance and 24/7 support for all our installations including regular check-ups and emergency repairs.",
            category: "support"
          },
          {
            id: 3,
            question: "What areas do you serve?",
            answer: "We serve across Hyderabad and surrounding areas. Contact us to confirm service availability in your location.",
            category: "coverage"
          },
          {
            id: 4,
            question: "How long does installation take?",
            answer: "Installation time varies by project size. Typical CCTV systems take 1-2 days, while comprehensive networking solutions may take 3-5 days.",
            category: "installation"
          }
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchFaqs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading FAQs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services and solutions.
          </p>
          {error && (
            <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
              ⚠️ {error} Showing cached data.
            </div>
          )}
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
              {faq.category && (
                <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  {faq.category}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            We're here to help! Contact us for more information.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
