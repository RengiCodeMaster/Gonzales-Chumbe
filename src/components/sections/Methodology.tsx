import React from 'react';
import { Search, BrainCircuit, Gavel, Scale } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export const Methodology: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "Lo Escuchamos",
      desc: "Lo primero es entender su situación. Analizamos el expediente y frenamos cualquier medida urgente contra su libertad.",
      icon: Search
    },
    {
      id: "02",
      title: "Preparamos la Defensa",
      desc: "No dejamos nada al azar. Trabajamos con peritos y contadores para construir una teoría del caso sólida que desmonte la acusación.",
      icon: BrainCircuit
    },
    {
      id: "03",
      title: "Damos la Pelea",
      desc: "Vamos a las audiencias a defenderlo. Presentamos recursos y cuestionamos las pruebas del fiscal con firmeza.",
      icon: Gavel
    },
    {
      id: "04",
      title: "Resolvemos",
      desc: "Buscamos el mejor resultado posible para que usted pueda retomar su vida: absolución o la salida más favorable.",
      icon: Scale
    }
  ];

  return (
    // Stone 50 Background with Noise Texture
    <section className="py-24 bg-[#FAFAF9] text-brand-dark border-b border-gray-100 relative overflow-hidden">

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")` }}></div>

      {/* Background radial spotlight - Very subtle */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <Reveal width="100%">
              <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3 block">Nuestro Método</span>
            </Reveal>
            <Reveal delay={200} width="100%">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-brand-dark">
                Cómo trabajamos <br />
                <span className="text-brand-gold font-serif-accent ">su caso.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal direction="left" delay={400}>
            <p className="text-brand-secondary max-w-md mt-6 md:mt-0 text-right md:text-left">
              Sin improvisaciones. Tenemos un plan claro para protegerlo desde el primer día.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting Line (Desktop) - Silver */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent z-0"></div>

          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 200} className="relative z-10 h-full">
              {/* Cards changed to White for contrast against Stone background */}
              <div className="group h-full bg-white p-6 rounded-sm border border-gray-200 hover:border-brand-primary/50 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl relative z-10">
                <div className="w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:border-brand-primary transition-colors duration-500 shadow-sm relative z-20">
                  <step.icon size={24} className="text-brand-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>

                <div className="text-left">
                  <span className="text-4xl font-bold text-gray-200 mb-4 block font-serif-accent absolute top-4 right-4 group-hover:text-brand-primary/10 transition-colors">{step.id}</span>
                  <h3 className="text-lg font-bold mb-3 text-brand-dark group-hover:text-brand-primary transition-colors">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-brand-secondary">
                    {step.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
