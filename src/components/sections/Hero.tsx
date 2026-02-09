import React from 'react';
import { Button } from '../ui/Button';
import { SectionId } from '../../types';
import { Reveal } from '../ui/Reveal';

import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const bgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrolled = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id={SectionId.HOME} className="relative w-full h-screen min-h-[600px] flex items-end pb-12 md:pb-24 bg-black overflow-hidden">

      {/* Background Image - Cinematic & Moody */}
      <div className="absolute inset-0 z-0">
        <img
          ref={bgRef}
          src="/images/hero-bg-main.jpg"
          alt="Oficina Estudio Gonzales Chumbe"
          className="w-full h-full object-cover object-[80%_top] md:object-top opacity-100 transition-transform duration-75 ease-out will-change-transform"
        />
        {/* General Overlay: Darkens the whole bright image for text readability */}
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>

        {/* Navbar Protection Gradient: Strong dark fade from top for menu visibility */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/90 via-black/50 to-transparent z-10"></div>

        {/* Bottom Gradient: For Hero Text - Stronger on mobile to separate text from image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:from-black/90 md:via-black/20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-20 flex flex-col md:flex-row justify-between items-end gap-12">

        {/* Asymmetrical Layout - Bottom Left Focus */}
        <div className="w-full md:max-w-4xl">

          <Reveal delay={400}>
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-7xl font-bold text-white leading-tight mb-4 md:mb-6 tracking-tight">
              Defensa Penal <br />
              <span className="text-gray-200">Estratégica.</span>
            </h1>
          </Reveal>

          <Reveal delay={500} width="100%">
            <p className="text-sm md:text-xl text-gray-200 mb-6 md:mb-8 max-w-full leading-relaxed border-l-4 border-brand-primary pl-4 md:pl-6 font-medium">
              "Nadie está preparado para un proceso penal. Nosotros sí. Déjenos la carga legal a nosotros y ocúpese de su vida."
            </p>
          </Reveal>

          <Reveal delay={600} width="100%">
            <div className="flex flex-col gap-3 w-full sm:w-auto sm:flex-row md:gap-5">
              <Button
                variant="primary"
                className="rounded-sm px-4 py-3 md:px-8 md:py-4 w-full sm:w-auto bg-black hover:bg-neutral-900 text-white border border-transparent hover:border-white transition-all uppercase tracking-widest text-[10px] md:text-xs font-bold shadow-xl whitespace-normal text-center"
                onClick={() => navigate('/contacto')}
              >
                Hable con un Abogado
              </Button>

              <Button
                variant="outline"
                className="rounded-sm px-4 py-3 md:px-8 md:py-4 border-white text-white hover:bg-white hover:!text-black w-full sm:w-auto uppercase tracking-widest text-[10px] md:text-xs font-bold !bg-transparent hover:!bg-white whitespace-normal text-center"
                onClick={() => navigate('/nosotros')}
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
