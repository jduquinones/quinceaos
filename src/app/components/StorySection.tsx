"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Heart, MapPin, Calendar, Clock, Music, Gift, ChevronDown, Instagram, Facebook, Phone } from 'lucide-react';


export default function StorySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Asegura que la animación se dispare al entrar en la vista
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      // Umbral ajustado para dispositivos móviles
      { threshold: 0.1 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    // Degradado actualizado a tonos más rosas y padding ajustado
    <section ref={sectionRef} className="py-12 px-4 bg-gradient-to-b from-white-50 to-pink-100"> 
      <div className="max-w-xl mx-auto">
        {/* Cambiado a una sola columna para vista móvil (md:grid-cols-1) */}
        <div className="grid grid-cols-1 gap-10 items-center">
          
          {/* Imagen - Ahora es el primer elemento en móvil */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="img/15-2.png"
                alt="Quinceañera"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Elemento decorativo ajustado para vista móvil */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-rose-300 rounded-full opacity-30 blur-2xl"></div> 
          </div>

          {/* Texto */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-sm tracking-[0.3em] uppercase text-rose-600 mb-4 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              ✨ Un Momento Especial
            </p>
            
            <h3 className="text-3xl text-center font-serif mb-6 text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
              Celebrando una nueva etapa
            </h3>
            
            <div className="w-16 h-px bg-rose-400 mb-6 mx-auto"></div> {/* Línea centrado */}
            
            <p className="text-gray-700 leading-relaxed text-base mb-6 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Después de quince años llenos de amor, sueños y aprendizaje, llegó el momento de celebrar. 
              Con la bendición de Dios y el amor incondicional de mi familia, te invito a ser parte de 
              este día tan especial que siempre he soñado.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg italic text-center border-l-4 border-rose-300 pl-4 py-1 mt-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              "La vida se mide por los momentos que nos quitan el aliento, y este es uno de ellos."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};