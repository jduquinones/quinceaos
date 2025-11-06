"use client";


import { Instagram, Facebook, Phone } from 'lucide-react';


export default function FooterSection () {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h4 className="text-3xl font-serif mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Sofía Valentina
        </h4>
        
        <div className="w-16 h-px bg-rose-400 mx-auto mb-6"></div>
        
        <p className="text-gray-400 mb-8 italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          "Gracias por ser parte de mi historia"
        </p>

        <div className="flex justify-center gap-6 mb-8">
          <button 
            onClick={() => window.open('https://instagram.com', '_blank')}
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" />
          </button>
          <button 
            onClick={() => window.open('https://facebook.com', '_blank')}
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors duration-300"
          >
            <Facebook className="w-5 h-5" />
          </button>
          <button 
            onClick={() => window.open('tel:+573001234567', '_blank')}
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors duration-300"
          >
            <Phone className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-gray-500">
          © 2025 • Diseñado por Jose Quiñones
        </p>
      </div>
    </footer>
  );
};