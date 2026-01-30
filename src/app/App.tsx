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
import { MapPin, Shield, Scale, Building, Phone, Mail, Clock } from 'lucide-react';
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

            {/* GLOBAL BACKGROUND TEXTURE */}
            <div
                className="fixed inset-0 bg-repeat opacity-40 mix-blend-multiply pointer-events-none z-0"
                style={{ backgroundImage: "url('/images/team-bg-texture.png')", backgroundSize: '600px' }}
            ></div>

            <main className="relative z-10">
                <Hero />

                {/* LA FIRMA - UPDATED BACKGROUND: Global Texture Applied */}
                {/* LA FIRMA - RESTRUCTURED LAYOUT (NEW REFERENCE) */}
                <section id={SectionId.ABOUT} className="relative overflow-hidden">
                    {/* Local Background Texture removed in favor of Global */}

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

            <footer className="bg-[#09090b] pt-20 pb-10 border-t border-white/5 text-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                        {/* Col 1: Brand */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <img
                                    src="/images/logo-icon.png"
                                    alt="Gonzales Chumbe"
                                    className="h-10 w-auto object-contain brightness-0 invert"
                                />
                                <div className="flex flex-col">
                                    <span className="text-base font-bold uppercase tracking-wider text-white leading-tight">
                                        Gonzales Chumbe
                                    </span>
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-0.5">
                                        Estudio Jurídico
                                    </span>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Defensa penal de alta complejidad. Estrategia, técnica y compromiso absoluto con la libertad de nuestros clientes.
                            </p>
                        </div>

                        {/* Col 2: Navigation */}
                        <div>
                            <h4 className="font-bold uppercase tracking-widest mb-6 text-brand-accent text-xs">Navegación</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">Inicio</a></li>
                                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">Quiénes Somos</a></li>
                                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">Áreas de Práctica</a></li>
                                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">Contacto</a></li>
                            </ul>
                        </div>

                        {/* Col 3: Contact Info */}
                        <div>
                            <h4 className="font-bold uppercase tracking-widest mb-6 text-brand-accent text-xs">Contacto</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li className="flex items-start gap-3">
                                    <MapPin size={18} className="text-brand-accent shrink-0 mt-0.5" />
                                    <span>Av. Alameda Perú N° 450,<br />Tingo María, Perú</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone size={18} className="text-brand-accent shrink-0" />
                                    <span>+51 954 857 599</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail size={18} className="text-brand-accent shrink-0" />
                                    <span>contacto@gonzaleschumbe.com</span>
                                </li>
                            </ul>
                        </div>

                        {/* Col 4: Hours */}
                        <div>
                            <h4 className="font-bold uppercase tracking-widest mb-6 text-brand-accent text-xs">Horario de Atención</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li className="flex items-center gap-3">
                                    <Clock size={18} className="text-brand-accent shrink-0" />
                                    <span>Lun - Vie: 9:00 AM - 6:00 PM</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-[18px] flex justify-center"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div></div>
                                    <span>Sábados: Previa Cita</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-[18px] flex justify-center"><div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div></div>
                                    <span>Domingos: Cerrado</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                        <p>&copy; {new Date().getFullYear()} Estudio Jurídico Gonzales Chumbe. Todos los derechos reservados.</p>
                        <div className="flex items-center gap-1">
                            <span>Desarrollado por</span>
                            <a
                                href="https://jmsolution.tech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-accent hover:text-white transition-colors font-bold"
                            >
                                JM Solutions
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Floating Action Buttons Container */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">


                {/* WhatsApp Button (Bottom) - Explicit z-index and shadow */}
                <a
                    href="https://wa.me/51954857599?text=Hola,%20deseo%20realizar%20una%20consulta%20legal."
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