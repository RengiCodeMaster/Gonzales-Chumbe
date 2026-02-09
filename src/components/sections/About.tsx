import React from 'react';
import { MapPin, Shield, Scale, Building } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export function About() {
    return (
        <section className="relative overflow-hidden">
            {/* 1. HISTORIA Y TRAYECTORIA */}
            <div className="container mx-auto px-6 lg:px-12 pt-12 md:pt-20 pb-16 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <div className="lg:col-span-6 order-2 lg:order-1">
                        <Reveal>
                            <span className="text-brand-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Sobre Nosotros</span>
                            <h2 className="text-3xl md:text-5xl font-serif-accent font-bold text-brand-dark mb-6 leading-tight">
                                Historia y <br />
                                <span className="italic text-brand-secondary">Trayectoria.</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
                                Fundado con la convicción de que la libertad requiere una defensa técnica de élite, <strong>Gonzales Chumbe</strong> se ha consolidado como un referente en el derecho penal peruano.
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                No somos un estudio generalista. Desde nuestros inicios, nos especializamos obsesivamente en la litigación oral y la estrategia procesal. Hemos representado casos de alta complejidad, desde delitos económicos hasta crímenes graves, siempre con un norte claro: resultados.
                            </p>
                            <div className="border-l-4 border-brand-accent pl-6 py-2">
                                <p className="text-brand-dark font-serif-accent italic text-lg">
                                    "No gestionamos expedientes, defendemos historias de vida."
                                </p>
                            </div>
                        </Reveal>
                    </div>
                    {/* Image - Larger & Proportional */}
                    <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end">
                        <Reveal delay={200} width="100%">
                            <div className="relative aspect-[3/4] w-full bg-gray-200 rounded-sm overflow-hidden flex items-center justify-center group shadow-2xl">
                                <div className="absolute inset-0 border border-black/5 z-20"></div>
                                <img
                                    src="/images/firma-fundador.jpg"
                                    alt="Socio Fundador - Gonzales Chumbe"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Subtle dark overlay "una nadita" */}
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500 z-10"></div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>

            {/* 2. IDENTIDAD CORPORATIVA (3 Columns) */}
            <div className="container mx-auto px-6 lg:px-12 py-16 relative z-10 border-t border-gray-100">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-serif-accent font-bold text-brand-dark mb-4">Identidad Corporativa</h3>
                    <p className="text-gray-500 text-sm">Nuestros principios rectores definen cada acción estratégica y cada decisión en nuestro estudio.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Mision */}
                    <Reveal delay={100} className="h-full">
                        <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group h-full border-t-4 border-brand-accent flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-brand-surfaceAlt rounded-full flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform duration-500">
                                <Shield size={32} strokeWidth={1.5} />
                            </div>
                            <h4 className="text-xl font-bold text-brand-dark mb-4 uppercase tracking-wider">Nuestra Misión</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Proveer defensa penal estratégica y personalizada de primer nivel. Nuestro objetivo es proteger la libertad y el patrimonio de nuestros clientes mediante una técnica jurídica impecable.
                            </p>
                        </div>
                    </Reveal>

                    {/* Vision */}
                    <Reveal delay={200} className="h-full">
                        <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group h-full border-t-4 border-brand-accent flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-brand-surfaceAlt rounded-full flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform duration-500">
                                <Scale size={32} strokeWidth={1.5} />
                            </div>
                            <h4 className="text-xl font-bold text-brand-dark mb-4 uppercase tracking-wider">Nuestra Visión</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Ser reconocidos globalmente como la autoridad técnica en derecho penal corporativo y litigación compleja en el Perú.
                            </p>
                        </div>
                    </Reveal>

                    {/* Valores */}
                    <Reveal delay={300} className="h-full">
                        <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group h-full border-t-4 border-brand-accent flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-brand-surfaceAlt rounded-full flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform duration-500">
                                <Building size={32} strokeWidth={1.5} />
                            </div>
                            <h4 className="text-xl font-bold text-brand-dark mb-4 uppercase tracking-wider">Nuestros Valores</h4>
                            <ul className="text-gray-500 text-sm leading-relaxed space-y-3 text-left w-full pl-4">
                                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0"></div> <span><strong>Lealtad:</strong> Absoluta reserva y compromiso.</span></li>
                                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0"></div> <span><strong>Estrategia:</strong> Nada al azar.</span></li>
                                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0"></div> <span><strong>Verdad:</strong> Franqueza total con el cliente.</span></li>
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* 3. FILOSOFÍA DE TRABAJO (Dark Section) */}
            <div
                className="w-full py-32 relative z-20 mt-12 bg-fixed bg-cover bg-center"
                style={{ backgroundImage: "url('/images/gavel-scales-bg.png')" }}
            >
                {/* Dark Overlay for Readability - Lighter as requested to show the background */}
                <div className="absolute inset-0 bg-black/50 z-0"></div>

                {/* Gold Accent Top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-brand-accent z-10"></div>

                <div className="container mx-auto px-6 lg:px-12 text-center md:text-left relative z-10">
                    <div className="flex flex-col items-center mb-12">
                        <MapPin className="text-brand-accent mb-4" size={32} />
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight shadow-xl drop-shadow-md">Filosofía de Trabajo</h2>
                    </div>

                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <p className="text-2xl md:text-4xl text-white font-bold leading-tight tracking-tight drop-shadow-lg">
                            "En derecho penal no hay empates. O se gana, o se pierde la libertad. Por eso nuestra filosofía es simple: preparación obsesiva para ganar."
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto border-t border-white/20 pt-12">
                        <div>
                            <h4 className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4 shadow-black drop-shadow-md">Enfoque Preventivo</h4>
                            <p className="text-gray-100 text-sm leading-relaxed font-medium drop-shadow-md">
                                Adelantarse al conflicto legal es más efectivo que reaccionar. Preparamos auditorías preventivas y estrategias de cumplimiento (compliance) para proteger a directores y empresas.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4 shadow-black drop-shadow-md">Litigación Tenaz</h4>
                            <p className="text-gray-100 text-sm leading-relaxed font-medium drop-shadow-md">
                                Cuando el conflicto es inevitable, somos implacables. Conocemos el sistema judicial por dentro y usamos cada herramienta procesal para desbaratar, dilatar o anular la acusación fiscal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. CULTURA Y COLABORACIÓN */}
            <div className="container mx-auto px-6 lg:px-12 py-24 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Image Left */}
                    <div className="lg:col-span-6 relative">
                        <Reveal width="100%">
                            <div className="aspect-video w-full bg-gray-200 rounded-sm shadow-xl flex items-center justify-center relative overflow-hidden group">
                                <img
                                    src="/images/team-signature.jpg"
                                    alt="Equipo de Gonzales Chumbe"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Decoration */}
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-surfaceAlt z-0 opacity-50"></div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Text Right */}
                    <div className="lg:col-span-6">
                        <Reveal delay={200}>
                            <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-3 block">Talento & Profesionales</span>
                            <h2 className="text-3xl md:text-4xl font-serif-accent font-bold text-brand-dark mb-6">
                                Cultura y <span className="text-brand-accent">Excelencia.</span>
                            </h2>
                            <p className="text-gray-600 text-base leading-relaxed mb-6">
                                Promovemos un ambiente donde la experiencia de nuestros socios se fusiona con el ímpetu de nuevos talentos. Este enfoque colectivo nos permite descomponer problemas complejos desde múltiples ángulos, asegurando que ningún detalle quede al azar.
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                Cada abogado en <strong>Gonzales Chumbe</strong> pasa por un riguroso proceso de selección y formación continua en las últimas tendencias jurisprudenciales.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
