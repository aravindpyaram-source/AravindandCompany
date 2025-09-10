import React from 'react';

export default function WhatsAppButton({ phone = '+917032076263' }) {
  const href = `https://wa.me/${phone.replace(/\D/g, '')}`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="whatsapp-button" aria-label="WhatsApp">
      WhatsApp Us
    </a>
  );
}
