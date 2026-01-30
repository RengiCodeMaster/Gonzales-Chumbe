// Add imports
import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

const testimonials = [
  {
    text: "Pensé que iría preso. Otros abogados me decían que firme un abreviado y acepte la culpa. el Dr. Gonzales analizó la causa y encontró que el allanamiento fue ilegal. Hoy estoy libre y sin antecedentes.",
    author: "J.M.",
    type: "Caso de Narcotráfico",
    stars: 5
  },
  {
    text: "Mi empresa tuvo un problema grave con AFIP que derivó en una causa penal tributaria. El equipo contable y legal del estudio trabajó en conjunto y lograron demostrar que no hubo dolo. Nos salvaron el patrimonio.",
    author: "Empresario Textil",
    type: "Penal Económico",
    stars: 5
  },
  {
    text: "La contención humana que tienen es increíble. Cuando detuvieron a mi hijo a las 3 AM, me atendieron el teléfono y a las 4 AM ya estaban en la comisaría. Esa tranquilidad no tiene precio.",
    author: "María E.",
    type: "Urgencia / Detención",
    stars: 5
  },
  {
    text: "Lograron mi absolución en un caso donde todo parecía perdido. Su estrategia en el juicio oral fue impecable, desbaratando cada prueba de la fiscalía.",
    author: "Roberto C.",
    type: "Derecho Penal",
    stars: 5
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 relative overflow-hidden">

      {/* Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gray-200/50 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-200/50 rounded-full blur-3xl -ml-12 -mb-12 pointer-events-none z-10"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal width="100%">
            <span className="text-[#09090b] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Testimonios</span>
          </Reveal>
          <Reveal delay={200} width="100%">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">
              La voz de nuestros <br />
              <span className="font-serif-accent text-brand-gold">defendidos.</span>
            </h2>
          </Reveal>
          <Reveal delay={300} width="100%">
            <p className="text-gray-500 text-sm">
              Por razones de estricto secreto profesional y la naturaleza delicada de los casos penales, preservamos la identidad completa de nuestros clientes.
            </p>
          </Reveal>
        </div>

        {/* Carousel Container */}
        <Reveal width="100%" delay={400}>
          <div className="max-w-4xl mx-auto relative bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 min-h-[300px] flex flex-col justify-center">

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-50 hover:bg-[#09090b] hover:text-white flex items-center justify-center transition-all duration-300 z-20 group"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} className="text-gray-400 group-hover:text-white" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-50 hover:bg-[#09090b] hover:text-white flex items-center justify-center transition-all duration-300 z-20 group"
              aria-label="Siguiente"
            >
              <ChevronRight size={20} className="text-gray-400 group-hover:text-white" />
            </button>

            {/* Quote Icon Background */}
            <Quote className="text-brand-gold/10 absolute top-8 left-8 w-24 h-24 pointer-events-none" />

            {/* Slide Content */}
            <div className="relative z-10 text-center px-8 md:px-16 animate-fade-in key={currentIndex}">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                  <Star key={i} size={18} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-brand-dark leading-relaxed font-serif-accent italic mb-8">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="border-t border-gray-100 pt-6 inline-block min-w-[200px]">
                <p className="font-bold text-brand-dark text-base mb-1">{testimonials[currentIndex].author}</p>
                <p className="text-xs text-brand-secondary uppercase tracking-wider font-bold">{testimonials[currentIndex].type}</p>
              </div>
            </div>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#09090b] w-6' : 'bg-gray-200 hover:bg-gray-300'}`}
                  aria-label={`Ir al testimonio ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
};
