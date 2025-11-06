"use client";

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onScrollClick: () => void;
}

export default function HeroSection({ onScrollClick }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{
          backgroundImage: "url('img/principal.png')",//"url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80')",
          transform: isVisible ? 'scale(1)' : 'scale(1.1)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      <div className={`relative z-10 h-full flex flex-col items-center justify-center text-white px-4 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center">
          <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 opacity-90 font-light">
            Mis
          </p>
          
          <h1 className="text-7xl md:text-9xl font-serif mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            XV Años
          </h1>
          
          <div className="w-32 h-px bg-white/60 mx-auto mb-6"></div>
          
          <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Sofía Valentina
          </h2>
          
          <p className="text-lg md:text-xl tracking-widest uppercase opacity-90 font-light mb-12">
            15 • Diciembre • 2025
          </p>

          <button 
            onClick={onScrollClick}
            className="group bg-white/10 backdrop-blur-md border border-white/30 px-8 py-3 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <span className="text-sm tracking-wider">Descubre más</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-white/60 rounded-full animate-float" style={{animationDelay: '1s'}}></div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
}