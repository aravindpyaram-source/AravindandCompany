// src/api/config.js

const DEV_BASE = 'http://localhost:10000';
const PROD_BASE = 'https://aravind-backend.onrender.com';

export const API_BASE_URL =
  process.env.NODE_ENV === 'production' ? PROD_BASE : DEV_BASE;

export const API_ENDPOINTS = {
  LEADS:    `${API_BASE_URL}/api/leads`,
  SERVICES:`${API_BASE_URL}/api/services`,
  FAQ:     `${API_BASE_URL}/api/faq`,
  CONTACT: `${API_BASE_URL}/api/contact`,
  APPOINT: `${API_BASE_URL}/api/appointments`,
  SUBSCRIBE:`${API_BASE_URL}/api/blog/subscribe`
};

// Simple fetch wrapper
export async function apiRequest(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
}
