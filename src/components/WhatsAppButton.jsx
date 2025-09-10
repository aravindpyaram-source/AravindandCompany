import React from 'react';

export default function WhatsAppButton({ phone = '9170320763' }) {
  const href = `https://wa.me/${phone}`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="whatsapp-button" aria-label="WhatsApp">
      WhatsApp Us
    </a>
  );
}
