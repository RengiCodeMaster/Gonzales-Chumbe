import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Methodology } from '../components/sections/Methodology';
import { Team } from '../components/sections/Team';
import { Contact } from '../components/sections/Contact';

import { ServiceDetail } from '../components/sections/ServiceDetail';
import { Stats } from '../components/sections/Stats';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';
import { SectionId } from '../types';
import { servicesData, ServiceDetail as ServiceType } from '../data/services';
import { MapPin, Shield, Scale, History, BookOpen, Building } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';

function App() {
    const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

    const handleOpenService = (serviceId: string) => {
        const service = servicesData.find(s => s.id === serviceId);
        if (service) {
            setSelectedService(service);
        }
    };

    const handleCloseService = () => {
        setSelectedService(null);
    };

    return (
        <div className="min-h-screen font-sans selection:bg-brand-primary selection:text-white relative">
            <Navbar onOpenService={handleOpenService} onCloseService={handleCloseService} />

            <main>
                <Hero />

                {/* LA FIRMA - UPDATED BACKGROUND: "Silver Mist" Gradient instead of Pure White */}
                <section id={SectionId.ABOUT} className="pt-32 pb-20 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] relative overflow-hidden text-brand-dark border-b border-gray-200">



                    {/* 2. Spotlights decorativos para dar volumen (Efecto Mármol) */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[80px] opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                    <div className="container mx-auto px-6 lg:px-12 relative z-10">

                        {/* Header Narrativo */}
                        <div className="max-w-4xl mb-20">
                            <Reveal width="100%">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="w-12 h-[2px] bg-brand-primary"></span>
                                    <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-[10px]">
                                        Nuestra Esencia
                                    </span>
                                </div>
                            </Reveal>
                            <Reveal delay={200} width="100%">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-accent font-bold mb-8 leading-tight text-brand-darker">
                                    Cuando todos se van, <br />
                                    <span className="text-brand-secondary">nosotros nos quedamos.</span>
                                </h2>
                            </Reveal>
                        </div>

                        {/* Grid Editorial Asimétrico */}
                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                            {/* COLUMNA 1: Imagen Principal (Anchor Visual) - Span 5 */}
                            <div className="lg:col-span-5 flex flex-col gap-6">
                                <div className="relative h-[550px] w-full rounded-sm overflow-hidden group shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-200 bg-gray-100">

                                    {/* Placeholder Icon (Centered) */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform duration-700">
                                        <Scale size={180} strokeWidth={0.5} />
                                    </div>

                                    {/* Content Overlay (Bottom) */}
                                    <div className="absolute bottom-0 left-0 w-full p-8">

                                        {/* Icon Box */}
                                        <div className="bg-white shadow-md p-4 rounded-sm inline-block mb-4 border border-gray-100">
                                            <History size={24} className="text-brand-primary" />
                                        </div>

                                        <h3 className="text-3xl font-bold mb-3 font-serif-accent text-brand-dark">Nuestra Historia</h3>

                                        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-r-sm border-l-4 border-brand-primary">
                                            <p className="text-gray-700 text-sm leading-relaxed font-medium">
                                                Desde 1994 caminando los pasillos de tribunales. Décadas de experiencia real, no de manual.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* COLUMNA 2: Contenido - Span 7 */}
                            <div className="lg:col-span-7 flex flex-col gap-10">

                                {/* CARD: WHITE CLEAN STYLE - Ahora resalta más sobre el fondo gris */}
                                <Reveal delay={400} direction="left">
                                    <div className="bg-white border border-white/50 p-8 md:p-10 rounded-sm shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500">

                                        <div className="space-y-8 relative z-10">
                                            <div>
                                                <h3 className="text-2xl font-bold text-brand-dark mb-3">Entendemos su angustia</h3>
                                                <p className="text-gray-600 leading-relaxed text-lg">
                                                    Sabemos que un problema penal no lo deja dormir. Detrás de cada expediente vemos a una persona, a una familia preocupada. Por eso, aquí no lo vamos a juzgar; lo vamos a defender con uñas y dientes.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-brand-dark mb-3">Hablamos claro</h3>
                                                <p className="text-gray-600 leading-relaxed text-lg">
                                                    Nada de términos complicados ni promesas falsas. Le diremos exactamente dónde está parado y qué vamos a hacer para sacarlo de ahí.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>

                                {/* Fila Dividida: Stats minimalistas */}
                                <div className="grid md:grid-cols-2 gap-6 mt-8">
                                    {/* Stat 1 */}
                                    <Reveal delay={500} width="100%">
                                        <div className="flex items-center gap-6 p-6 rounded-sm bg-white border border-gray-100 hover:border-brand-primary/30 shadow-sm hover:shadow-md transition-all duration-300">
                                            <div className="p-3 bg-brand-surfaceAlt shadow-inner rounded-sm text-brand-primary border border-gray-100">
                                                <Building size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-3xl font-bold text-brand-dark">30+</h4>
                                                <span className="text-xs text-gray-500 uppercase tracking-wider">Años de Experiencia</span>
                                            </div>
                                        </div>
                                    </Reveal>

                                    {/* Stat 2 */}
                                    <Reveal delay={600} width="100%">
                                        <div className="flex items-center gap-6 p-6 rounded-sm bg-white border border-gray-100 hover:border-brand-primary/30 shadow-sm hover:shadow-md transition-all duration-300">
                                            <div className="p-3 bg-brand-surfaceAlt shadow-inner rounded-sm text-brand-primary border border-gray-100">
                                                <Scale size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-3xl font-bold text-brand-dark">98%</h4>
                                                <span className="text-xs text-gray-500 uppercase tracking-wider">Casos Complejos</span>
                                            </div>
                                        </div>
                                    </Reveal>
                                </div>

                                {/* Quote Final */}
                                <Reveal delay={800} width="100%">
                                    <div className="flex items-start gap-4 opacity-100 mt-8">
                                        <span className="text-6xl text-brand-primary font-serif-accent leading-[0] mt-4 opacity-20">"</span>
                                        <p className="text-brand-secondary italic font-serif-accent text-xl pt-2">
                                            No somos tramitadores de papeles. Peleamos su caso como si fuera nuestra propia libertad.
                                        </p>
                                    </div>
                                </Reveal>

                            </div>
                        </div>
                    </div>
                </section>

                {/* NEW STATS SECTION */}
                <Stats />

                <Methodology />

                {/* TESTIMONIALS SECTION placed after Methodology */}
                <Testimonials />

                {/* Pass the handler to the Services component */}
                <Services onOpenService={handleOpenService} />

                {/* NEW TESTIMONIALS SECTION moved up */}

                <Team />

                {/* NEW FAQ SECTION */}
                <FAQ />

                <Contact />
            </main>

            <footer className="bg-[#0f172a] py-16 border-t border-white/5 text-white">
                <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-start">
                    <div className="mb-8 md:mb-0 max-w-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/images/logo-icon.png"
                                alt="Gonzales Chumbe"
                                className="h-14 w-auto object-contain brightness-0 invert"
                            />
                            <div className="flex flex-col">
                                <span className="text-base font-bold uppercase tracking-wider text-white leading-tight">
                                    Gonzales Chumbe
                                </span>
                                <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mt-0.5">
                                    Estudio Jurídico | Abogados Penalistas
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Defensa penal de alta complejidad. Aquí para proteger sus derechos cuando más lo necesita.
                        </p>
                        <span className="text-xs text-brand-gold uppercase tracking-widest">&copy; {new Date().getFullYear()} Estudio Jurídico.</span>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 text-sm">
                        <div>
                            <h4 className="font-bold uppercase tracking-widest mb-4 text-brand-gold text-xs">Navegación</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Quiénes Somos</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Especialidades</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-widest mb-4 text-brand-gold text-xs">Información</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Floating Action Buttons Container */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">


                {/* WhatsApp Button (Bottom) - Explicit z-index and shadow */}
                <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noreferrer"
                    className="pointer-events-auto flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all hover:scale-105 z-50"
                    aria-label="WhatsApp"
                >
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.232-.298.347-.497.115-.198.058-.372-.029-.548-.087-.174-.792-1.908-1.085-2.613-.29-.705-.584-.609-.806-.62-.204-.011-.437-.014-.669-.014-.233 0-.61.087-.929.434-.319.347-1.216 1.19-1.216 2.903 0 1.714 1.247 3.371 1.421 3.606.173.235 2.454 3.75 5.945 5.257 2.33 1.006 2.805.806 3.305.757.5-.049 1.603-.655 1.829-1.288.225-.633.225-1.176.158-1.288-.068-.112-.249-.179-.547-.328zM12 21.602c-1.765 0-3.428-.475-4.881-1.29l-.35-.197-3.633.953.969-3.541-.228-.363A9.563 9.563 0 0 1 3.513 12c0-5.239 4.263-9.49 9.49-9.49 5.228 0 9.49 4.262 9.49 9.49 0 5.228-4.262 9.489-9.492 9.602z M12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.109 1.517 5.852L.039 24l6.324-1.658A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                    </svg>
                </a>
            </div>

            {/* Detail Overlay */}
            {selectedService && (
                <ServiceDetail service={selectedService} onClose={handleCloseService} />
            )}

        </div>
    );
}

export default App;