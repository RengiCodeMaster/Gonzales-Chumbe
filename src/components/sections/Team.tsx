import React from 'react';
import { SectionId } from '../../types';
import { Award, Linkedin, Mail, ArrowUpRight, GraduationCap, Scale, BookOpen } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

const associates = [
    {
        name: "Dra. María Fernández",
        role: "Derecho Penal Económico",
        desc: "Ex-Fiscal con 15 años de experiencia en delitos tributarios y lavado de activos.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Dr. Alejandro Ruiz",
        role: "Cibercrimen & Evidencia Digital",
        desc: "Especialista certificado en recolección de prueba digital y delitos informáticos.",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Dr. Roberto Méndez",
        role: "Litigio Complejo & Casación",
        desc: "Doctor en Derecho. Encargado de la estrategia recursiva ante la Corte Suprema.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
];

export const Team: React.FC = () => {
    return (
        <section id={SectionId.TEAM} className="py-24 bg-[#FAFAF9] relative overflow-hidden border-t border-gray-200">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")` }}></div>

            {/* Background decoration - Radial Light */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-60"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                <div className="mb-24 relative bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl">
                    {/* Texture Overlay */}
                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                    <div className="flex flex-col lg:flex-row items-start gap-12 relative z-10">

                        {/* Founder Image - Editorial Style (Portrait) */}
                        <div className="w-full lg:w-1/3 flex-shrink-0">
                            <Reveal width="100%" direction="right" delay={100}>
                                <div className="relative aspect-[3/4] max-h-[450px] w-full max-w-[340px] mx-auto lg:mx-0 rounded-xl overflow-hidden shadow-lg group">
                                    {/* Cinematic Color Effect: Slightly warm/dimmed initially -> Full bright on hover */}
                                    <img
                                        src="/images/dr-chumbe.jpg"
                                        alt="Dr. Gonzales Chumbe"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Small Badge */}
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-sm border-l-2 border-brand-primary shadow-lg">
                                        <span className="text-[10px] font-bold text-brand-dark uppercase tracking-widest block">Socio Fundador</span>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        {/* Founder Text - Bio & Credentials */}
                        <div className="w-full lg:w-2/3 text-center lg:text-left pt-4">
                            <Reveal width="100%" delay={200}>
                                <h2 className="text-3xl md:text-5xl font-serif-accent font-bold text-brand-dark mb-2">
                                    Dr. Gonzales Chumbe
                                </h2>
                                <p className="text-brand-primary text-sm font-bold uppercase tracking-widest mb-8">
                                    Director de Estrategia Legal
                                </p>
                            </Reveal>

                            <Reveal width="100%" delay={300}>
                                <div className="max-w-3xl lg:mx-0 mx-auto">
                                    {/* Professional Bio Paragraphs instead of Quote */}
                                    <div className="text-gray-600 text-base leading-relaxed space-y-4 mb-10 text-justify lg:text-left font-light border-l border-brand-primary/30 pl-0 lg:pl-6">
                                        <p>
                                            "Llevo más de 30 años en los tribunales y he visto de todo. Sé que cuando un cliente llega a mi oficina, no trae solo un expediente; trae su vida, su familia y su libertad en juego."
                                        </p>
                                        <p>
                                            "Mi trabajo no es juzgarlo. Mi trabajo es usar cada artículo de la ley, cada error del fiscal y cada prueba técnica para sacarlo del problema. Aquí no vendemos humo; diseñamos estrategias para ganar."
                                        </p>
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal width="100%" delay={400}>
                                {/* Detailed Credentials Grid */}
                                <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8 border-t border-gray-100 pt-8">
                                    <div className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded transition-colors">
                                        <div className="p-2 bg-brand-surfaceAlt rounded text-brand-primary">
                                            <GraduationCap size={20} />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-brand-dark font-bold text-sm">Doctor en Derecho</h4>
                                            <p className="text-xs text-gray-500 mt-0.5">Universidad Nacional Mayor de San Marcos</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded transition-colors">
                                        <div className="p-2 bg-brand-surfaceAlt rounded text-brand-primary">
                                            <Scale size={20} />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-brand-dark font-bold text-sm">Especialista en Casación</h4>
                                            <p className="text-xs text-gray-500 mt-0.5">Recursos ante la Corte Suprema</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded transition-colors">
                                        <div className="p-2 bg-brand-surfaceAlt rounded text-brand-primary">
                                            <BookOpen size={20} />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-brand-dark font-bold text-sm">Docencia Universitaria</h4>
                                            <p className="text-xs text-gray-500 mt-0.5">Profesor Titular de Derecho Procesal</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded transition-colors">
                                        <div className="p-2 bg-brand-surfaceAlt rounded text-brand-primary">
                                            <Award size={20} />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-brand-dark font-bold text-sm">Membresías</h4>
                                            <p className="text-xs text-gray-500 mt-0.5">Colegio de Abogados de Lima & Callao</p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>

                {/* --- ASSOCIATES SECTION (Modern Grid) --- */}
                <div className="mb-12 flex flex-col md:flex-row justify-between items-end border-b border-gray-100 pb-8">
                    <Reveal width="100%">
                        <h3 className="text-3xl font-bold text-brand-dark">Equipo Asociado</h3>
                        <p className="text-gray-500 mt-2">Especialización técnica por área de práctica.</p>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {associates.map((member, idx) => (
                        <Reveal key={idx} delay={idx * 150} className="h-full">
                            <div className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col max-w-xs mx-auto w-full">

                                {/* Image Container - Smaller height (h-64) and empty placeholder */}
                                <div className="relative h-64 overflow-hidden bg-gray-100 flex items-center justify-center">
                                    {/* Placeholder Avatar */}
                                    <div className="text-gray-300 group-hover:text-gray-400 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                    </div>

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Social Icons Reveal */}
                                    <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-10 group-hover:translate-x-0 transition-transform duration-300">
                                        <button className="p-1.5 bg-white/90 backdrop-blur rounded-full text-brand-dark hover:bg-brand-primary hover:text-white transition-colors shadow-sm">
                                            <Linkedin size={14} />
                                        </button>
                                        <button className="p-1.5 bg-white/90 backdrop-blur rounded-full text-brand-dark hover:bg-brand-primary hover:text-white transition-colors shadow-sm">
                                            <Mail size={14} />
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col flex-grow relative bg-white group-hover:bg-gray-50 transition-colors">
                                    <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wider mb-1.5">{member.role}</span>
                                    <h4 className="text-lg font-bold text-brand-dark mb-2">{member.name}</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed mb-0 flex-grow border-t border-gray-100 pt-3 mt-auto">
                                        {member.desc}
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