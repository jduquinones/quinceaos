import React, { useState, useEffect, useRef } from 'react';
import { Gift, Copy, Check, CreditCard, Home, Heart } from 'lucide-react';

export default function GiftSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState('');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // const copyToClipboard = (text, type) => {
  //   navigator.clipboard.writeText(text);
  //   setCopiedAccount(type);
  //   setTimeout(() => setCopiedAccount(''), 2000);
  // };

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-br from-rose-400 to-pink-500 rounded-full p-4 shadow-xl">
              <Gift className="w-10 h-10 text-white" />
            </div>
          </div>
          <p className="text-sm tracking-[0.3em] uppercase text-rose-500 mb-4">Mesa de Regalos</p>
          <h3 className="text-4xl md:text-5xl font-serif mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Tu Presencia es Nuestro Mayor Regalo
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Si deseas tener un detalle con nosotros, hemos preparado algunas opciones para que puedas acompañarnos en este nuevo comienzo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Liverpool */}
          <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '100ms' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-red-500 to-rose-600 rounded-full p-3">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
                Liverpool
              </h4>
            </div>
            <p className="text-gray-600 text-sm mb-4">Evento: 51234567</p>
            <button 
              onClick={() => window.open('https://www.liverpool.com.mx/tienda/mesaderegalos', '_blank')}
              className="w-full bg-gradient-to-r from-red-500 to-rose-600 text-white py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium tracking-wider"
            >
              VER MESA DE REGALOS
            </button>
          </div>

          {/* Amazon */}
          <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full p-3">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
                Amazon
              </h4>
            </div>
            <p className="text-gray-600 text-sm mb-4">Lista: Ana & Carlos</p>
            <button 
              onClick={() => window.open('https://www.amazon.com.mx/wedding/registry', '_blank')}
              className="w-full bg-gradient-to-r from-orange-400 to-yellow-500 text-white py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium tracking-wider"
            >
              VER LISTA DE REGALOS
            </button>
          </div>
        </div>

        {/* Transferencia Bancaria */}
        <div className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '300ms' }}>
          <div className="text-center mb-6">
            <div className="inline-block mb-4">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-3">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
            </div>
            <h4 className="text-2xl font-serif mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              También puedes hacer un regalo en efectivo si lo deseas.
            </h4>
          </div>          
        </div>

        {/* Mensaje final */}
        <div className={`text-center mt-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '400ms' }}>
          <div className="inline-flex items-center gap-2 text-rose-500">
            <Heart className="w-5 h-5" />
            <p className="text-sm italic">
              Lo más importante es compartir este día tan especial contigo
            </p>
            <Heart className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}