"use client";

import { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, MapPin, Music } from 'lucide-react';

export default function EventDetailsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const eventDate = new Date('2025-12-15T19:00:00');

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

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-pink-500 to-purple-500"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1481653125770-b78c206c59d4?w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto text-white">
        {/* Countdown */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm tracking-[0.3em] uppercase mb-4 opacity-90">Cuenta Regresiva</p>
          <h3 className="text-4xl font-serif mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Nos vemos en
          </h3>
          
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: 'Días', value: countdown.days },
              { label: 'Horas', value: countdown.hours },
              { label: 'Minutos', value: countdown.minutes },
              { label: 'Segundos', value: countdown.seconds }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.value}
                </div>
                <div className="text-xs tracking-wider uppercase opacity-80">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Cards */}
        <div className={`grid md:grid-cols-1 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Reception */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-gray-800 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 max-w-2xl mx-auto">
  <div className="flex items-center justify-between gap-6">
    {/* Icono y título */}
    <div className="flex items-center gap-3">
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-3 shadow-lg">
        <Music className="w-6 h-6 text-white" />
      </div>
      <div>
        <h4 className="text-xl font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
          Recepción
        </h4>
        <p className="text-xs text-gray-500 tracking-wider">FIESTA Y CELEBRACIÓN</p>
      </div>
    </div>

    {/* Info en línea */}
    <div className="flex gap-6 text-sm text-gray-600">
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-purple-500" />
        <span className="font-medium">8:30 PM</span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4 text-purple-500" />
        <span className="font-medium">Salón Los Jardines</span>
      </div>
    </div>

    {/* Botón compacto */}
    <button 
      onClick={() => window.open('https://maps.google.com', '_blank')}
      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
    >
      <MapPin className="w-4 h-4" />
      <span className="text-xs tracking-wider font-medium">VER MAPA</span>
    </button>
  </div>
</div>
        </div>

        {/* Dress Code */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-serif mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Código de Vestimenta
            </h4>
            <p className="text-3xl font-light tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Formal • Elegante
            </p>
            <p className="text-sm opacity-80 mt-2">
              Por favor evitar el color blanco
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}