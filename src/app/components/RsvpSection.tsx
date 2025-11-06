// components/RsvpSection.tsx

"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Heart, MapPin, Calendar, Clock, Music, Gift, ChevronDown, Instagram, Facebook, Phone } from 'lucide-react';


export default function RsvpSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', guests: '1' });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = () => {
    if (!formData.name || !formData.phone) {
      alert('Por favor completa todos los campos');
      return;
    }
    const message = `¡Hola! Confirmo mi asistencia a los XV años de Sofía.\n\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nNúmero de personas: ${formData.guests}`;
    window.open(`https://wa.me/573001234567?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-white">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Heart className="w-16 h-16 mx-auto mb-6 text-rose-400" />
          <h3 className="text-4xl md:text-5xl font-serif mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Confirma tu Asistencia
          </h3>
          <p className="text-lg opacity-90">
            Tu presencia es el mejor regalo
          </p>
        </div>

        <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-6">
            <div>
              <label className="block text-sm tracking-wider uppercase mb-2 opacity-90">
                Nombre Completo
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-rose-400 transition-colors"
                placeholder="Escribe tu nombre"
              />
            </div>

            <div>
              <label className="block text-sm tracking-wider uppercase mb-2 opacity-90">
                Teléfono
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-rose-400 transition-colors"
                placeholder="300 123 4567"
              />
            </div>

            <div>
              <label className="block text-sm tracking-wider uppercase mb-2 opacity-90">
                Número de Personas
              </label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
                className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-400 transition-colors"
              >
                <option value="1" className="text-gray-800">1 persona</option>
                <option value="2" className="text-gray-800">2 personas</option>
                <option value="3" className="text-gray-800">3 personas</option>
                <option value="4" className="text-gray-800">4 personas</option>
                <option value="5+" className="text-gray-800">5+ personas</option>
              </select>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 rounded-lg font-medium tracking-wider uppercase hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Gift className="w-5 h-5" />
              <span>Confirmar por WhatsApp</span>
            </button>
          </div>

          <p className="text-center text-sm opacity-70 mt-6">
            Por favor confirma antes del 1 de Diciembre de 2025
          </p>
        </div>
      </div>
    </section>
  );
};