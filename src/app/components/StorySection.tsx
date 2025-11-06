"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Heart, MapPin, Calendar, Clock, Music, Gift, ChevronDown, Instagram, Facebook, Phone } from 'lucide-react';


export default function StorySection() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-white to-rose-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="img/15-2.png" //https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80
                alt="Quinceañera"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-200 rounded-full opacity-20 blur-3xl"></div>
          </div>

          {/* Text */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <p className="text-sm tracking-[0.3em] uppercase text-rose-500 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Un Momento Especial
            </p>
            
            <h3 className="text-4xl md:text-4xl font-serif mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Celebrando una nueva etapa
            </h3>
            
            <div className="w-16 h-px bg-rose-300 mb-6"></div>
            
            <p className="text-gray-600 leading-relaxed text-lg mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Después de quince años llenos de amor, sueños y aprendizaje, llegó el momento de celebrar. 
              Con la bendición de Dios y el amor incondicional de mi familia, te invito a ser parte de 
              este día tan especial que siempre he soñado.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              "La vida se mide por los momentos que nos quitan el aliento, y este es uno de ellos."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};