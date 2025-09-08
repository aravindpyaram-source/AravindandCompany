import React, { useEffect, useState } from "react";
import { API_ENDPOINTS, apiRequest } from "../api/config";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
          },
          {
            id: 5,
            question: "Do you provide warranty?",
            answer: "Yes, we provide 1-year warranty on all installations and 6 months warranty on service calls.",
            category: "warranty"
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
            We're here to help! Contact us for more information or get a free quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/919999999999?text=Hi, I have a question about your services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
