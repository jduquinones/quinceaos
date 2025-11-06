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
      // Umbral ajustado para una mejor detección
      { threshold: 0.2 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    // Degradado: Ajustado de nuevo el padding. Usamos rose-50 o white.
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-rose-50 to-pink-100"> 
      <div className="max-w-6xl mx-auto">
        
        {/*
          CLAVE DEL CAMBIO:
          grid-cols-1 por defecto (Móvil)
          md:grid-cols-2 (Desktop y Tablet)
          gap-10 para móvil, gap-12 para desktop
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          
          {/* Imagen - Ahora es el primer elemento en móvil */}
          <div className={`relative transition-all duration-1000 
            ${isVisible ? 'opacity-100 translate-y-0 md:translate-x-0' : 'opacity-0 translate-y-10 md:-translate-x-10'}`}>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="img/15-2.png"
                alt="Quinceañera"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Elemento decorativo */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-300 rounded-full opacity-30 blur-2xl hidden md:block"></div> 
          </div>

          {/* Texto */}
          <div className={`transition-all duration-1000 delay-300 
            ${isVisible ? 'opacity-100 translate-y-0 md:translate-x-0' : 'opacity-0 translate-y-10 md:translate-x-10'}`}>
            
            {/* Clases de centrado eliminadas, alineación por defecto a la izquierda en desktop */}
            <p className="text-sm tracking-[0.3em] uppercase text-rose-600 mb-4 text-center md:text-left" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              ✨ Un Momento Especial
            </p>
            
            <h3 className="text-3xl md:text-4xl font-serif mb-6 text-gray-800 text-center md:text-left" style={{ fontFamily: "'Playfair Display', serif" }}>
              Celebrando una nueva etapa
            </h3>
            
            <div className="w-16 h-px bg-rose-400 mb-6 mx-auto md:mx-0"></div> {/* Línea centrada en móvil, a la izquierda en desktop */}
            
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6 text-center md:text-left" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Después de quince años llenos de amor, sueños y aprendizaje, llegó el momento de celebrar. 
              Con la bendición de Dios y el amor incondicional de mi familia, te invito a ser parte de 
              este día tan especial que siempre he soñado.
            </p>

            {/* Bloque de cita */}
            <div className='flex justify-center md:justify-start'>
                <p className="text-gray-600 leading-relaxed text-lg italic text-center md:text-left border-l-4 border-rose-300 pl-4 py-1 mt-6 max-w-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  "La vida se mide por los momentos que nos quitan el aliento, y este es uno de ellos."
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};