// src/api/config.js
const BACKEND_URL = 'https://aravind-backend.onrender.com';

export const API_BASE_URL = BACKEND_URL;

export const API_ENDPOINTS = {
  LEADS:     `${API_BASE_URL}/api/leads`,
  SERVICES:  `${API_BASE_URL}/api/services`,
  FAQ:       `${API_BASE_URL}/api/faq`,
  CONTACT:   `${API_BASE_URL}/api/contact`,
  APPOINTMENTS: `${API_BASE_URL}/api/appointments`, // Fixed naming consistency
  SUBSCRIBE: `${API_BASE_URL}/api/blog/subscribe`
};

// Enhanced fetch wrapper with better error handling
export async function apiRequest(url, options = {}) {
  try {
    const res = await fetch(url, {
      headers: { 
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });
    
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status}: ${errorText}`);
    }
    
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`API Request failed for ${url}:`, error);
    throw error;
  }
}

// Optional: Helper functions for common operations
export const api = {
  get: (endpoint) => apiRequest(endpoint, { method: 'GET' }),
  post: (endpoint, body) => apiRequest(endpoint, {
    method: 'POST',
    body: JSON.stringify(body)
  }),
  put: (endpoint, body) => apiRequest(endpoint, {
    method: 'PUT',
    body: JSON.stringify(body)
  }),
  delete: (endpoint) => apiRequest(endpoint, { method: 'DELETE' })
};
