import React from 'react';
import { Quote, Star } from 'lucide-react';
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
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-surfaceAlt relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -ml-12 -mb-12 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal width="100%">
            <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Testimonios</span>
          </Reveal>
          <Reveal delay={200} width="100%">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">
              La voz de nuestros <br />
              <span className="font-serif-accent italic text-brand-gold">defendidos.</span>
            </h2>
          </Reveal>
          <Reveal delay={300} width="100%">
            <p className="text-gray-500 text-sm">
              Por razones de estricto secreto profesional y la naturaleza delicada de los casos penales, preservamos la identidad completa de nuestros clientes.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <Reveal key={idx} delay={idx * 200} className="h-full">
              <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-brand-gold h-full flex flex-col relative group hover:-translate-y-2 transition-transform duration-300">
                <Quote className="text-brand-primary/10 absolute top-4 right-4 w-12 h-12 group-hover:text-brand-gold/20 transition-colors" />

                <div className="flex gap-1 mb-6">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                <p className="text-brand-dark leading-relaxed italic mb-6 flex-grow font-serif-accent text-lg">
                  "{item.text}"
                </p>

                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <p className="font-bold text-brand-dark text-sm">{item.author}</p>
                  <p className="text-xs text-brand-secondary uppercase tracking-wider font-bold">{item.type}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};