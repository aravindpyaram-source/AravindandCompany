import React, { useState } from "react";
import { API_ENDPOINTS, apiRequest } from "../api/config";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await apiRequest(API_ENDPOINTS.CONTACT, {
        method: 'POST',
        body: JSON.stringify(form),
      });
      if (response.success) {
        setStatus({ type: "success", message: "Message sent successfully! We'll get back to you soon." });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(response.error || "Failed to send message");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus({ type: "error", message: err.message || "Failed to send message. Please try WhatsApp for immediate assistance." });
    } finally {
      setLoading(false);
    }
  };

  const WhatsAppButton = () => {
    const phoneNumber = "91 703207263";
    const message = "Hi, I'm interested in your services and would like to get a quote!";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="WhatsApp"
      >
        WhatsApp Us
      </a>
    );
  };

  return (
    <motion.div className="contact-page">
      <h1>Get in touch</h1>

      <div className="contact-info">
        <p>Email: <a href="mailto:aravindco@gmail.com">aravindco@gmail.com</a></p>
        <p>Phone: <a href="tel:+9170320763">+91 703207263</a></p>
        <p>Hyderabad, Telangana, India</p>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
        <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
        <button type="submit" disabled={loading}>{loading ? "Sending..." : "Send Message"}</button>
      </form>

      {status.message && <div className={`status ${status.type}`}>{status.message}</div>}

      <div className="urgent-contact">
        <p>For urgent inquiries, contact us via WhatsApp for faster response.</p>
        <WhatsAppButton />
      </div>
    </motion.div>
  );
}
