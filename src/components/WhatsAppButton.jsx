import React from 'react'

export default function WhatsAppButton({phone = '919999999999'}){
  const href = `https://wa.me/${phone.replace(/\D/g,'')}`
  return (
    <a href={href} target="_blank" rel="noreferrer" className="fixed right-4 bottom-6 shadow-lg p-3 rounded-full bg-green-500 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.5A8.38 8.38 0 0019.5 9a8.5 8.5 0 10-7.5 12.75L21 21l.75-1.5A8.5 8.5 0 0021 12.5z" />
      </svg>
    </a>
  )
}