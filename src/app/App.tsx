import React, { useState, useEffect } from 'react';
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
    const [currentImage, setCurrentImage] = useState(0);

    const carouselImages = [
        {
            src: "/images/about/office-modern.png",
            label: "Estudio Actual",
            alt: "Despacho Jurídico Moderno"
        },
        {
            src: "/images/about/office-classic.png",
            label: "Nuestros Inicios",
            alt: "Historia del Estudio"
        }
    ];

    const nextImage = () => {
        setCurrentImage((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
    };

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
        }, 5000); // 5 seconds
        return () => clearInterval(timer);
    }, [currentImage]);

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
                {/* LA FIRMA - RESTRUCTURED LAYOUT (NEW REFERENCE) */}
                <section id={SectionId.ABOUT} className="py-24 bg-white relative overflow-hidden">
                    {/* Elegant Architectural Texture Background */}
                    <div
                        className="absolute inset-0 bg-repeat opacity-40 mix-blend-multiply pointer-events-none z-0"
                        style={{ backgroundImage: "url('/images/team-bg-texture.png')", backgroundSize: '600px' }}
                    ></div>

                    <div className="container mx-auto px-6 lg:px-12 relative z-10">
                        <div className="grid lg:grid-cols-12 gap-12 items-start">

                            {/* LEFT COLUMN: CAROUSEL + HISTORY CARD (Span 5) */}
                            <div className="lg:col-span-5 relative">
                                <Reveal width="100%" className="h-full">
                                    {/* IMAGE CAROUSEL */}
                                    <div className="relative h-[450px] lg:h-[650px] w-full shadow-2xl rounded-sm overflow-hidden group bg-gray-100">
                                        <div className="absolute inset-0 bg-black/10 z-10"></div>

                                        {/* Carousel Logic - Dynamic Image Rendering */}
                                        {carouselImages.map((img, idx) => (
                                            <div
                                                key={idx}
                                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentImage === idx ? 'opacity-100' : 'opacity-0'}`}
                                            >
                                                <img
                                                    src={img.src}
                                                    alt={img.alt}
                                                    className="w-full h-full object-cover object-center"
                                                />
                                                <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded backdrop-blur-sm z-20 font-bold tracking-wider uppercase">
                                                    {img.label}
                                                </div>
                                            </div>
                                        ))}

                                        {/* Carousel Controls */}
                                        <button
                                            onClick={prevImage}
                                            className="absolute top-1/2 left-4 z-30 p-3 bg-white/20 backdrop-blur-md hover:bg-brand-primary hover:text-white text-white rounded-full cursor-pointer transition-all duration-300 -translate-y-1/2 group/arrow"
                                            title="Ver anterior"
                                        >
                                            <div className="w-5 h-5 border-l-2 border-t-2 border-current transform -rotate-45 ml-1"></div>
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute top-1/2 right-4 z-30 p-3 bg-white/20 backdrop-blur-md hover:bg-brand-primary hover:text-white text-white rounded-full cursor-pointer transition-all duration-300 -translate-y-1/2 group/arrow"
                                            title="Ver siguiente"
                                        >
                                            <div className="w-5 h-5 border-r-2 border-t-2 border-current transform rotate-45 mr-1"></div>
                                        </button>
                                    </div>

                                    {/* OVERLAY CARD: NUESTRA HISTORIA (Moved to Bottom Left to not block arrow) */}
                                    <div className="absolute bottom-20 -left-12 z-30 w-[260px] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-sm border-t-4 border-brand-primary hidden lg:block">
                                        <div className="mb-3 text-brand-primary">
                                            <History size={28} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase font-serif-accent">Nuestra Historia</h3>
                                        <p className="text-xs text-gray-600 leading-relaxed font-medium">
                                            Nacimos bajo la premisa de la defensa incansable. Cada caso es un compromiso ético y personal con la libertad.
                                        </p>
                                    </div>

                                    {/* Mobile version of the card */}
                                    <div className="relative z-30 w-full bg-white p-6 shadow-lg rounded-sm border-t-4 border-brand-primary mt-[-40px] lg:hidden pb-12">
                                        <div className="mb-3 text-brand-primary">
                                            <History size={28} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase font-serif-accent">Nuestra Historia</h3>
                                        <p className="text-xs text-gray-600 leading-relaxed font-medium">
                                            Nacimos bajo la premisa de la defensa incansable con la libertad.
                                        </p>
                                    </div>
                                </Reveal>
                            </div>

                            {/* RIGHT COLUMN: CONTENT BLOCKS (Span 7) */}
                            <div className="lg:col-span-7 flex flex-col gap-10 pl-0 lg:pl-12 pt-8">

                                {/* BLOCK 1: Title + Text */}
                                <Reveal delay={200} width="100%">
                                    <div className="border-l-[3px] border-brand-dark pl-6">
                                        <h2 className="text-3xl md:text-4xl font-serif-accent font-bold mb-4 text-slate-900 uppercase">
                                            Entendemos su Angustia
                                        </h2>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            Sabemos que un problema penal no lo deja dormir. Detrás de cada expediente vemos a una persona, a una familia preocupada. Por eso, aquí no lo vamos a juzgar; lo vamos a defender con uñas y dientes.
                                        </p>
                                    </div>
                                </Reveal>

                                {/* BLOCK 2: Two Boxes (Dark & Light) */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Reveal delay={300} width="100%">
                                        <div className="bg-white border-t-4 border-brand-primary p-8 h-full hover:-translate-y-1 transition-transform duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                                            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-primary/80 mb-3 block font-bold">Misión Crítica</span>
                                            <h3 className="text-xl font-bold mb-4 text-slate-900">LEALTAD ABSOLUTA</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                                Sin condiciones, sin reservas. Su confianza es nuestro mayor activo y nuestra responsabilidad suprema ante cualquier tribunal.
                                            </p>
                                        </div>
                                    </Reveal>
                                    <Reveal delay={400} width="100%">
                                        <div className="bg-white border-t-4 border-brand-dark p-8 h-full hover:-translate-y-1 transition-transform duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                                            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3 block font-bold">Metodología</span>
                                            <h3 className="text-xl font-bold text-slate-900 mb-4">ESTRATEGIA PENAL</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                                Aplicamos tácticas de defensa procesal de alto nivel, anticipándonos a cada movimiento del sistema judicial con precisión técnica.
                                            </p>
                                        </div>
                                    </Reveal>
                                </div>

                                {/* BLOCK 3: Title + Text (Hablamos Claro) */}
                                <Reveal delay={500} width="100%">
                                    <div className="border-l-[3px] border-brand-dark pl-6 mt-4">
                                        <h2 className="text-3xl md:text-4xl font-serif-accent font-bold mb-4 text-slate-900 uppercase">
                                            Hablamos Claro
                                        </h2>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            Nada de términos complicados ni promesas falsas. Le diremos exactamente dónde está parado y qué vamos a hacer para sacarlo de ahí. Transparencia total en momentos de incertidumbre.
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
            {
                selectedService && (
                    <ServiceDetail service={selectedService} onClose={handleCloseService} />
                )
            }

        </div >
    );
}

export default App;