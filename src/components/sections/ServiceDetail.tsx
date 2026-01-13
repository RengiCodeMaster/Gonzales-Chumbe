import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldAlert, X } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { ServiceDetail as ServiceType } from '../../data/services';
import { SectionId } from '../../types';

interface ServiceDetailProps {
    service: ServiceType;
    onClose: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onClose }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Lock body scroll
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleClose = () => {
        setMounted(false);
        setTimeout(onClose, 500); // Wait for animation
    };

    const handleConsult = () => {
        // Scroll immediately to Contact so it's visible as soon as modal slides away
        document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'auto' });
        handleClose();
    };

    return (
        // Reverted to z-[40] so Navbar (z-50) remains visible.
        <div className={`fixed inset-0 z-[40] flex flex-col bg-brand-darker transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${mounted ? 'translate-y-0' : 'translate-y-full'}`}>

            {/* 
          CONSISTENT MODERN GRADIENT HEADER (z-45)
          Matches the Navbar's "Midnight Glass" style.
          Uses a rich gradient from Slate-950 to Slate-800 to eliminate the "basic solid" look 
          while providing a perfect backdrop for the Navbar.
      */}
            <div className="absolute top-0 left-0 w-full h-20 md:h-24 bg-gradient-to-r from-brand-darker via-brand-dark to-brand-darker z-[45] shadow-2xl border-b border-white/10"></div>

            {/* Close Button - Positioned below the navbar area */}
            <button
                onClick={handleClose}
                className="absolute top-24 right-6 z-50 p-2 bg-white/10 hover:bg-white text-white hover:text-brand-dark rounded-full transition-all duration-300 backdrop-blur-sm group border border-white/20"
            >
                <X size={32} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Content Container with Top Padding to clear Navbar */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden relative pt-20 md:pt-24">

                {/* Cinematic Hero */}
                <div className="relative h-[55vh] lg:h-[70vh] w-full bg-brand-darker">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-100"
                    />

                    {/* Overlays removed as requested to show clean image */}

                    <div className="absolute bottom-10 left-0 w-full p-8 lg:p-16 z-20">
                        <div className="container mx-auto">
                            <span className={`inline-block px-3 py-1 mb-6 border border-white/50 text-white bg-black/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-700 delay-100 shadow-xl ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                Área de Práctica Especializada
                            </span>
                            <h1 className={`text-4xl lg:text-7xl font-bold text-white mb-6 max-w-4xl leading-tight transition-all duration-700 delay-200 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                {service.title}
                            </h1>
                            <p className={`text-xl lg:text-2xl text-gray-100 font-serif-accent italic max-w-2xl transition-all duration-700 delay-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                {service.subtitle}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content Section - Light Theme */}
                <div className="bg-white text-brand-dark py-20 lg:py-32">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="flex flex-col lg:flex-row gap-16">

                            {/* Left: Detailed Description */}
                            <div className="lg:w-1/2">
                                <Reveal delay={100} width="100%">
                                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-brand-dark">
                                        <ShieldAlert className="text-brand-primary" />
                                        Análisis del Delito
                                    </h3>
                                    <div className="prose prose-lg text-gray-600 leading-relaxed font-light text-lg whitespace-pre-line">
                                        <p>{service.fullDescription}</p>
                                    </div>
                                </Reveal>

                                <Reveal delay={300} width="100%">
                                    <div className="mt-12 p-8 border border-brand-primary/20 bg-brand-surfaceAlt rounded-sm relative overflow-hidden group hover:shadow-lg transition-all duration-500">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-brand-primary/10 transition-colors"></div>
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-4">Nuestro Enfoque Estratégico</h4>
                                        <p className="text-brand-dark italic text-xl font-serif-accent">"{service.approach}"</p>
                                    </div>
                                </Reveal>
                            </div>

                            {/* Right: Expertise List */}
                            <div className="lg:w-1/2">
                                <Reveal delay={200} width="100%">
                                    <h3 className="text-2xl font-bold mb-8 border-b border-gray-100 pb-4 text-brand-dark">
                                        Cobertura de Casos
                                    </h3>
                                </Reveal>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {service.expertise.map((item, idx) => (
                                        <Reveal key={idx} delay={200 + (idx * 50)} width="100%">
                                            <div
                                                className="flex items-start p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-primary/30 transition-all duration-300 h-full group"
                                            >
                                                <div className="mt-1 mr-4 flex-shrink-0 w-8 h-8 rounded-full bg-brand-surfaceAlt flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                                    <CheckCircle2 size={16} />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-bold text-brand-dark group-hover:text-brand-primary transition-colors">{item.term}</h4>
                                                    <p className="text-xs text-gray-500 mt-1 leading-snug font-light">{item.desc}</p>
                                                </div>
                                            </div>
                                        </Reveal>
                                    ))}
                                </div>

                                <Reveal delay={500} width="100%">
                                    <div className="mt-12 bg-brand-primary text-white p-8 rounded-sm text-center shadow-lg relative overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                                        {/* Subtle Noise for texture on CTA */}
                                        <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")` }}></div>

                                        <h4 className="text-2xl font-bold mb-2 relative z-10 block">¿Necesita asistencia en esta área?</h4>
                                        <p className="text-blue-100 mb-6 relative z-10 block">La inmediatez es clave en procesos de {service.title.toLowerCase()}.</p>
                                        <button
                                            onClick={handleConsult}
                                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-primary text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors w-full relative z-10 shadow-md"
                                        >
                                            Solicitar Consulta Urgente <ArrowRight size={18} className="ml-2" />
                                        </button>
                                    </div>
                                </Reveal>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};