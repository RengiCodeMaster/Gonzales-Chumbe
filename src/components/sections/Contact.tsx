import React from 'react';
import { MapPin, Phone, Mail, Briefcase, Gavel, FileText, ArrowRight, Shield, Clock, Monitor } from 'lucide-react';
import { SectionId } from '../../types';
import { Reveal } from '../ui/Reveal';
import { servicesData } from '../../data/services';

export const Contact: React.FC = () => {
    return (
        <section id={SectionId.CONTACT} className="relative">

            {/* SPLIT HERO SECTION */}
            <div className="w-full lg:min-h-[700px] flex flex-col lg:flex-row shadow-xl relative z-10">

                {/* LEFT: IMAGE SIDE - Widened for balance */}
                <div className="w-full lg:w-5/12 relative min-h-[400px] lg:h-auto bg-brand-dark order-1 lg:order-1">
                    <div className="absolute inset-0">
                        <img
                            src="/images/contact-bg-team.jpg"
                            alt="Equipo Gonzales Chumbe"
                            className="w-full h-full object-cover object-center animate-fade-in"
                        />
                        {/* Gradient Overlay for better integration */}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-brand-dark/20"></div>
                    </div>
                </div>

                {/* RIGHT: CONTENT & FORM SIDE - Modern Card Frame */}
                <div className="w-full lg:w-7/12 bg-[#FAFAF9] flex flex-col justify-center order-2 lg:order-2 p-8 lg:p-16 relative">
                    {/* Background Texture for Right Side */}
                    <div
                        className="absolute inset-0 bg-repeat opacity-40 mix-blend-multiply pointer-events-none z-0"
                        style={{ backgroundImage: "url('/images/team-bg-texture.png')", backgroundSize: '600px' }}
                    ></div>

                    <div className="max-w-3xl mx-auto w-full relative z-10">
                        <Reveal delay={200} direction="right">
                            <div className="mb-10 pl-2">
                                <span className="inline-block py-1 px-3 rounded-full bg-brand-surfaceAlt text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">
                                    Contacto Directo
                                </span>
                                <h2 className="text-4xl md:text-5xl font-serif-accent font-bold text-brand-dark mb-4 leading-tight">
                                    Excelencia y <br /><span className="text-brand-primary">Compromiso.</span>
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                                    Estamos listos para atender su caso con la máxima discreción. Complete el formulario y lo contactaremos.
                                </p>
                            </div>
                        </Reveal>

                        {/* MODERN FORM CARD */}
                        <Reveal delay={400} direction="up">
                            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 md:p-12 overflow-hidden relative">
                                {/* Decorative top strip */}
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-primary to-brand-dark"></div>

                                <form className="space-y-6" onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.currentTarget);
                                    const name = formData.get('name') as string;
                                    const phone = formData.get('phone') as string;
                                    const email = formData.get('email') as string;
                                    const type = formData.get('type') as string;
                                    const message = formData.get('message') as string;

                                    const whatsappMessage = `*CONSULTA LEGAL WEB*%0A%0A*Nombre:* ${name}%0A*Teléfono:* ${phone}%0A*Correo:* ${email}%0A%0A*Asunto:* ${type}%0A*Mensaje:*%0A${message}`;
                                    const whatsappUrl = `https://wa.me/51954857599?text=${whatsappMessage}`;

                                    window.open(whatsappUrl, '_blank');
                                }}>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Nombre Completo</label>
                                            <input
                                                name="name"
                                                type="text"
                                                placeholder="Juan Pérez"
                                                required
                                                className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Teléfono</label>
                                            <input
                                                name="phone"
                                                type="tel"
                                                placeholder="+51 987 654 321"
                                                required
                                                className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Correo Electrónico</label>
                                            <input
                                                name="email"
                                                type="email"
                                                placeholder="juan@ejemplo.com"
                                                className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Tipo de Consulta</label>
                                            <div className="relative">
                                                <select
                                                    name="type"
                                                    className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all appearance-none cursor-pointer text-sm"
                                                    defaultValue=""
                                                    required
                                                >
                                                    <option value="" disabled>Seleccione un servicio...</option>
                                                    {servicesData.map((service) => (
                                                        <option key={service.id} value={service.title}>
                                                            {service.title}
                                                        </option>
                                                    ))}
                                                    <option value="Otro Asunto">Otro Asunto</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Detalle su Caso</label>
                                        <textarea
                                            name="message"
                                            rows={3}
                                            placeholder="Describa brevemente su situación legal..."
                                            required
                                            className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all resize-none text-sm"
                                        ></textarea>
                                    </div>

                                    <div className="pt-2">
                                        <button className="w-full bg-brand-primary hover:bg-brand-dark text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest text-xs group">
                                            Enviar Consulta Profesional
                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        <p className="text-center text-[10px] text-gray-400 mt-4 flex items-center justify-center gap-1">
                                            <Shield size={10} /> Su información es confidencial y está protegida por secreto profesional.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>

            {/* SPECIALIZED DEPARTMENTS SECTION */}
            <div className="container mx-auto px-6 lg:px-12 py-20">
                <div className="mb-12">
                    <h3 className="text-2xl md:text-3xl font-serif-accent font-bold text-brand-dark mb-2">Canales de Atención</h3>
                    <p className="text-gray-500">Seleccione la modalidad de atención que mejor se adapte a sus necesidades.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1: Sede Central */}
                    <Reveal delay={200} direction="up" className="h-full">
                        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-accent hover:-translate-y-1 transition-all duration-300 group h-full">
                            <div className="w-12 h-12 bg-gray-50 text-brand-primary rounded-lg flex items-center justify-center mb-6 transition-colors">
                                <MapPin size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-brand-dark mb-3">Sede Central Tingo María</h4>
                            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                Reuniones estratégicas y revisión de expedientes en nuestra oficina principal.
                            </p>
                            <div className="space-y-4 text-sm">
                                <div className="flex items-start gap-3 text-brand-dark font-medium">
                                    <MapPin size={16} className="text-brand-accent mt-1 shrink-0" />
                                    <span>Av. Alameda Perú N° 450,<br />Tingo María</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-500">
                                    <Clock size={16} className="text-gray-400" /> Lun - Vie: 9:00 AM - 6:00 PM
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Card 2: Emergencias */}
                    <Reveal delay={400} direction="up" className="h-full">
                        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-accent hover:-translate-y-1 transition-all duration-300 group h-full">
                            <div className="w-12 h-12 bg-gray-50 text-brand-primary rounded-lg flex items-center justify-center mb-6 transition-colors">
                                <Shield size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-brand-dark mb-3">Emergencias Penales 24/7</h4>
                            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                Asistencia legal inmediata ante detenciones, allanamientos o flagrancia delictiva.
                            </p>
                            <div className="space-y-4 text-sm">
                                <a href="tel:+51954857599" className="flex items-center gap-3 text-brand-dark font-bold hover:underline transition-all">
                                    <Phone size={16} /> +51 954 857 599
                                </a>
                                <div className="flex items-center gap-2 text-brand-dark text-xs font-bold uppercase tracking-wider bg-gray-100 py-2 px-3 rounded w-fit">
                                    <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                                    Atención Inmediata
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Card 3: Virtual / Huánuco */}
                    <Reveal delay={600} direction="up" className="h-full">
                        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-accent hover:-translate-y-1 transition-all duration-300 group h-full">
                            <div className="w-12 h-12 bg-gray-50 text-brand-primary rounded-lg flex items-center justify-center mb-6 transition-colors">
                                <Monitor size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-brand-dark mb-3">Asesoría Virtual / Huánuco</h4>
                            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                Atención remota vía Zoom/WhatsApp o coordinaciones presenciales en Huánuco.
                            </p>
                            <div className="space-y-4 text-sm">
                                <div className="flex items-center gap-3 text-brand-dark font-medium">
                                    <Monitor size={16} className="text-gray-400" /> Consultas por Zoom / Meet
                                </div>
                                <div className="flex items-center gap-3 text-gray-500">
                                    <Briefcase size={16} className="text-gray-400" /> Previa Cita Confirmada
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* MAP SECTION */}
            <div className="w-full h-[450px] relative z-0 border-t border-gray-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31481.33246876774!2d-76.01525032568361!3d-9.297471200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a6479059533ad3%3A0x7348902824985202!2sTingo%20Mar%C3%ADa!5e0!3m2!1ses-419!2spe!4v1709420000000!5m2!1ses-419!2spe"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Google Maps Location"
                    className="w-full h-full"
                ></iframe>

                {/* Floating Location Card on Map */}
                <div className="absolute bottom-10 left-6 md:left-24 bg-white p-6 rounded-xl shadow-2xl max-w-sm hidden md:block">
                    <h5 className="font-bold text-brand-dark mb-1">Oficinas Centrales</h5>
                    <p className="text-gray-500 text-sm mb-4">Av. Alameda Perú N° 450, Tingo María</p>

                    <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-brand-dark transition-colors"
                    >
                        <MapPin size={16} className="mr-2" /> Ver en Google Maps
                    </a>
                </div>
            </div>

        </section >
    );
};
