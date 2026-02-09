import React from 'react';
import { SectionId } from '../../types';
import { Reveal } from '../ui/Reveal';

const associates = [
    {
        name: "Abg. Katherin Montalvo Paraguay",
        role: "Abogada Asociada",
        desc: "C.A.H. 4297. Especialista en litigación estratégica y defensa legal.",
        image: "/images/team-katherin.jpg"
    },
    {
        name: "Abg. Andrea Preguntegui Rodríguez",
        role: "Abogada Asociada",
        desc: "C.A.H. 4728. Especialista en Derecho Procesal y gestión de conflictos.",
        image: "/images/team-andrea-updated.jpg"
    },
    {
        name: "Practicante Legal",
        role: "Practicante Pre-Profesional",
        desc: "Talento joven de alto rendimiento en últimos ciclos. Apoyo técnico en procuraduría y análisis de casos.",
        image: "/images/team-assistant.jpg"
    }
];

export const Team: React.FC = () => {
    return (
        <section id={SectionId.TEAM} className="pt-32 pb-24 md:py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* 0. TEAM GROUP PHOTO - HERO STYLE */}
                <div className="mb-20 relative text-center">
                    <Reveal>
                        <div className="relative z-10 flex flex-col items-center">
                            {/* Transparent Image - Centered & Large */}
                            <div className="relative w-full max-w-6xl mx-auto z-20">
                                <img
                                    src="/images/team-new-header.png"
                                    alt="Equipo Legal Gonzales Chumbe"
                                    className="w-full h-auto max-h-[300px] md:max-h-[550px] mx-auto object-contain drop-shadow-2xl"
                                />
                            </div>

                            {/* Text Content - Seamless Integration */}
                            <div className="relative z-30 w-full max-w-3xl -mt-16">
                                <div className="pt-12 pb-8 px-4">
                                    <span className="inline-block py-2 px-6 rounded-sm bg-brand-dark text-white text-[10px] font-bold uppercase tracking-[0.25em] mb-6 shadow-xl">
                                        Excelencia Profesional
                                    </span>
                                    <h1 className="text-4xl md:text-5xl font-serif-accent font-bold text-brand-dark mb-4">
                                        Nuestro Equipo
                                    </h1>
                                    <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                                        Un cuerpo de abogados penalistas elegidos por su trayectoria, ética y capacidad técnica para resolver conflictos de alta complejidad.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Background Decoration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-brand-accent/5 to-transparent pointer-events-none z-0"></div>
                </div>

                {/* Elegant Separator */}
                <div className="flex justify-center mb-32">
                    <div className="w-px h-24 bg-gradient-to-b from-transparent via-brand-dark/20 to-transparent"></div>
                </div>

                {/* 1. SOCIO FUNDADOR SECTION */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32">
                    {/* Left: Text Content - Same as before */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <Reveal>
                            <span className="inline-block border border-brand-dark px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-dark mb-6">
                                Abogado Colegiado C.A.H. 1661
                            </span>
                            <h2 className="text-5xl md:text-7xl font-serif-accent font-bold text-brand-dark mb-8 leading-tight">
                                Dr. José Luis<br />Gonzáles Chumbe.
                            </h2>

                            <blockquote className="text-2xl md:text-3xl font-serif-accent italic text-gray-500 mb-8 leading-snug">
                                "Más de 20 años de trayectoria defendiendo derechos y resolviendo conflictos en Huánuco y Tingo María."
                            </blockquote>

                            <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-6 mb-12 font-medium max-w-xl">
                                <p>
                                    Con una sólida carrera iniciada en 2002, el Dr. Gonzáles Chumbe se ha consolidado como un referente de autoridad legal en la región. Su práctica combina la firmeza del litigio penal con la sofisticación de la negociación estratégica.
                                </p>
                                <p>
                                    Especialista certificado por la <strong>Pontificia Universidad Católica del Perú (PUCP)</strong> en Conciliación y Arbitraje, ofrece alternativas eficientes al proceso judicial, además de una defensa constitucional implacable respaldada por reconocimientos institucionales.
                                </p>
                            </div>

                            {/* Credentials List */}
                            <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
                                <div>
                                    <h5 className="font-bold text-xs uppercase tracking-widest text-brand-dark mb-4">Certificaciones PUCP</h5>
                                    <ul className="text-xs text-brand-secondary space-y-2 font-medium">
                                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-primary rounded-full"></div>Conciliación Extrajudicial</li>
                                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-primary rounded-full"></div>Arbitraje Nacional e Int.</li>
                                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-primary rounded-full"></div>Derecho Civil Patrimonial</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-bold text-xs uppercase tracking-widest text-brand-dark mb-4">Áreas de Dominio</h5>
                                    <ul className="text-xs text-gray-500 space-y-2">
                                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-primary rounded-full"></div>Defensa Penal y Constitucional</li>
                                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-primary rounded-full"></div>Asesoría Corporativa Local</li>
                                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-primary rounded-full"></div>Litigio de Alta Complejidad</li>
                                    </ul>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right: Founder Portrait */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <Reveal delay={200}>
                            <div className="relative aspect-[3/4] w-full bg-gray-200 rounded-sm overflow-hidden flex items-end shadow-2xl group">
                                <img
                                    src="/images/dr-chumbe-portrait.jpg"
                                    alt="Dr. Jose L. Gonzales Chumbe"
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Vertical Text Indicator */}
                                <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left z-20 mix-blend-difference">
                                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/90">Líder y Fundador - Est. 1995</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* 2. NUESTRO EQUIPO SECTION (Redesigned) */}
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <Reveal>
                        <h2 className="text-4xl font-serif-accent font-bold text-brand-dark mb-4">Nuestro Equipo</h2>
                        <p className="text-gray-500 text-lg font-serif-accent italic">
                            Un equipo multidisciplinario de excelencia, comprometido con la defensa técnica y humana.
                        </p>
                    </Reveal>
                </div>

                {/* Team Grid - "Cinematic Cards" Layout */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-10 max-w-7xl mx-auto">
                    {associates.map((member, idx) => (
                        <Reveal key={idx} delay={idx * 150} className="w-full h-full">
                            <div className="group relative w-full h-[600px] overflow-hidden rounded-sm shadow-xl cursor-pointer">

                                {/* Full Background Image - Object Cover for Maximum Size */}
                                <div className="absolute inset-0 bg-gray-200">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                {/* Gradient Overlay for Text Readability - Always visible at bottom */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300"></div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="border-l-2 border-brand-accent pl-4 mb-2">
                                        <h3 className="text-2xl font-serif-accent font-bold text-white mb-1">{member.name}</h3>
                                        <p className="text-brand-accent text-xs font-bold uppercase tracking-widest">{member.role}</p>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                                        {member.desc}
                                    </p>
                                </div>

                                {/* Hover Border/Effect */}
                                <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors duration-500 pointer-events-none"></div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Quote Bottom */}
                <div className="mt-32 text-center max-w-4xl mx-auto">
                    <Reveal delay={300}>
                        <span className="text-6xl text-gray-200 font-serif-accent leading-none mb-6 block">"</span>
                        <p className="text-2xl md:text-3xl font-serif-accent text-brand-dark leading-relaxed">
                            "En la intersección de la tradición y la vanguardia, encontramos las soluciones legales que definen el futuro de nuestros clientes."
                        </p>
                    </Reveal>
                </div>

            </div >
        </section >
    );
};
