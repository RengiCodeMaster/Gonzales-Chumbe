import React from 'react';
import { Button } from '../ui/Button';
import { SectionId } from '../../types';
import { Reveal } from '../ui/Reveal';

export const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative w-full h-screen min-h-[600px] flex items-end pb-16 md:pb-24 bg-brand-dark overflow-hidden">

      {/* Background Image - Cinematic & Moody */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Oficina corporativa luminosa"
          className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        {/* Gradient Overlay - Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20 flex flex-col md:flex-row justify-between items-end gap-12">

        {/* Asymmetrical Layout - Bottom Left Focus */}
        <div className="max-w-4xl w-full">

          <Reveal delay={400}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Defensa Penal <br />
              <span className="text-gray-200">Estratégica.</span>
            </h1>
          </Reveal>

          <Reveal delay={500} width="100%">
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed border-l-4 border-brand-primary pl-6 font-medium">
              "Nadie está preparado para un proceso penal. Nosotros sí. Déjenos la carga legal a nosotros y ocúpese de su vida."
            </p>
          </Reveal>

          <Reveal delay={600} width="100%">
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 w-full sm:w-auto">
              <Button
                variant="primary"
                className="rounded-sm px-8 py-4 w-full sm:w-auto bg-brand-primary hover:bg-white hover:text-brand-dark border border-transparent hover:border-white transition-all uppercase tracking-widest text-xs font-bold"
                onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'auto' })}
              >
                Hable con un Abogado
              </Button>

              <Button
                variant="outline"
                className="rounded-sm px-8 py-4 border-white text-white hover:bg-white hover:text-brand-dark w-full sm:w-auto uppercase tracking-widest text-xs font-bold !bg-transparent hover:!bg-white"
                onClick={() => document.getElementById(SectionId.ABOUT)?.scrollIntoView({ behavior: 'auto' })}
              >
                Conozca el Estudio
              </Button>
            </div>

          </Reveal>
        </div>


      </div>
    </section>
  );
};
