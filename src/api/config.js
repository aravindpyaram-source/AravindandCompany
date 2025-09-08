// config.js
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://aravind-backend.onrender.com";

export const API_ENDPOINTS = {
  HEALTH: `${BASE_URL}/`,
  LEADS: `${BASE_URL}/api/leads`,
  SERVICES: `${BASE_URL}/api/services`,
  CONTACT: `${BASE_URL}/api/contact`,
  FAQ: `${BASE_URL}/api/faq`,
};

export const apiRequest = async (endpoint, options = {}) => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(endpoint, { ...defaultOptions, ...options });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};
