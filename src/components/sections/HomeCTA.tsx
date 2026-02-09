import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../ui/Reveal';

export const HomeCTA: React.FC = () => {
    return (
        <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
            {/* Background Texture - Subtle */}
            <div className="absolute inset-0 bg-brand-darker opacity-50 mix-blend-multiply pointer-events-none z-0"
                style={{ backgroundImage: "url('/images/pattern-dots.png')", backgroundSize: '20px' }}
            ></div>

            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/10 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
                <Reveal width="100%">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                        Su libertad y su patrimonio <br /> <span className="text-brand-accent">no pueden esperar.</span>
                    </h2>
                </Reveal>

                <Reveal delay={200} width="100%">
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Cada hora que pasa sin defensa técnica es una ventaja para la fiscalía.
                        No deje su futuro en manos del azar.
                    </p>
                </Reveal>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <Reveal delay={400} width="fit-content">
                        <Link to="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-brand-accent hover:bg-white hover:text-brand-dark text-white font-bold text-sm uppercase tracking-widest rounded-sm transition-all shadow-lg hover:shadow-xl group min-w-[200px]">
                            Consulta Urgente <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Reveal>

                    <Reveal delay={500} width="fit-content">
                        <a href="tel:+51954857599" className="inline-flex items-center justify-center gap-3 text-white hover:text-brand-accent transition-colors font-serif-accent text-lg border-b border-white/20 hover:border-brand-accent pb-1">
                            <PhoneCall size={20} />
                            <span>Llámenos al +51 954 857 599</span>
                        </a>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
