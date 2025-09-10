import React, { useState } from 'react';
import { API_ENDPOINTS, apiRequest } from '../api/config';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const submitSubscription = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const data = await apiRequest(API_ENDPOINTS.SUBSCRIBE, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (data.success) {
        setStatus('Thank you for subscribing!');
        setEmail('');
      } else {
        setStatus('Subscription failed. Please try again.');
      }
    } catch (error) {
      setStatus('Error submitting subscription.');
      console.error('Subscription error:', error);
    }
  };

  return (
    <form onSubmit={submitSubscription} className="max-w-sm mx-auto space-y-4">
      <input
        type="email"
        placeholder="Enter your email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
      >
        Subscribe
      </button>
      {status && <p className="text-center mt-2">{status}</p>}
    </form>
  );
}
