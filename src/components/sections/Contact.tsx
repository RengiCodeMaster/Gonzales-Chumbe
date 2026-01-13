import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldAlert } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionId } from '../../types';
import { Reveal } from '../ui/Reveal';

export const Contact: React.FC = () => {
    // Removed unused mapInfo state and Gemini effect

    return (
        <section id={SectionId.CONTACT} className="py-12 lg:py-20 bg-[#F5F5F4] relative z-10 overflow-hidden">
            {/* Global Texture */}
            <div className="absolute inset-0 opacity-[0.5] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")` }}></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <Reveal width="100%" delay={100}>
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row w-full max-w-7xl mx-auto mb-12">

                        {/* LEFT COLUMN: INFO ONLY (Natural Photo Background) */}
                        <div className="w-full lg:w-5/12 relative flex flex-col justify-center order-2 lg:order-1 p-10 lg:p-16 overflow-hidden">

                            {/* Background Image: Blurred & Neutral */}
                            <div className="absolute inset-0 z-0 bg-black">
                                <img
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Office Interior"
                                    className="w-full h-full object-cover opacity-60 blur-[3px] scale-105"
                                />
                                {/* Pure dark overlay just for text pop, absolutely NO blue */}
                                <div className="absolute inset-0 bg-black/40"></div>
                            </div>

                            {/* Contact Info Content */}
                            <div className="relative z-10 space-y-10">
                                <div>
                                    <h3 className="text-2xl font-serif-accent text-white mb-3">Información de Contacto</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">Estamos disponibles para urgencias penales las 24 horas.</p>
                                </div>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-5">
                                        <div className="p-3 rounded bg-white/10 text-brand-primary shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xs uppercase tracking-wider mb-2 text-gray-300">Oficina Central</h4>
                                            <p className="text-white text-base leading-relaxed font-medium">
                                                Av. Alameda Perú N° 450<br />
                                                Tingo María, Huánuco
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5">
                                        <div className="p-3 rounded bg-white/10 text-brand-primary shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xs uppercase tracking-wider mb-2 text-gray-300">Teléfonos</h4>
                                            <p className="text-white font-bold text-xl leading-relaxed mb-1">+51 962 123 456</p>
                                            <p className="text-[10px] text-red-300 font-bold uppercase tracking-wider inline-block bg-red-900/40 px-2 py-0.5 rounded">Emergencias 24/7</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5">
                                        <div className="p-3 rounded bg-white/10 text-brand-primary shrink-0">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xs uppercase tracking-wider mb-2 text-gray-300">Email</h4>
                                            <p className="text-white text-base leading-relaxed font-medium">contacto@gonzaleschumbe.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: FORM (Main Content) */}
                        <div className="w-full lg:w-7/12 bg-white p-8 lg:p-16 flex flex-col justify-center order-1 lg:order-2">
                            <div className="max-w-2xl mx-auto w-full">
                                <div className="mb-10">
                                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Hablemos de su Caso</h2>
                                    <p className="text-gray-500 text-lg">
                                        La primera consulta es crucial. Complete el formulario y analizaremos su situación con absoluta confidencialidad.
                                    </p>
                                </div>

                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-brand-dark uppercase tracking-wide ml-1">Nombre Completo</label>
                                            <input
                                                type="text"
                                                className="w-full bg-gray-50 border border-gray-200 p-4 rounded focus:bg-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all placeholder-gray-400 text-brand-dark text-sm"
                                                placeholder="Juan Pérez"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-brand-dark uppercase tracking-wide ml-1">Teléfono</label>
                                            <input
                                                type="tel"
                                                className="w-full bg-gray-50 border border-gray-200 p-4 rounded focus:bg-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all placeholder-gray-400 text-brand-dark text-sm"
                                                placeholder="+51 9..."
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-brand-dark uppercase tracking-wide ml-1">Correo Electrónico</label>
                                            <input
                                                type="email"
                                                className="w-full bg-gray-50 border border-gray-200 p-4 rounded focus:bg-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all placeholder-gray-400 text-brand-dark text-sm"
                                                placeholder="ejemplo@correo.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-brand-dark uppercase tracking-wide ml-1">Motivo</label>
                                            <select className="w-full bg-gray-50 border border-gray-200 p-4 rounded focus:bg-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all text-brand-dark text-sm cursor-pointer">
                                                <option value="" disabled selected>Seleccione opción...</option>
                                                <option>Urgencia / Detención</option>
                                                <option>Citación Judicial</option>
                                                <option>Delito Económico</option>
                                                <option>Apelaciones</option>
                                                <option>Otro</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-brand-dark uppercase tracking-wide ml-1">Detalles del Caso</label>
                                        <textarea
                                            rows={4}
                                            className="w-full bg-gray-50 border border-gray-200 p-4 rounded focus:bg-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all placeholder-gray-400 text-brand-dark text-sm resize-none"
                                            placeholder="Describa brevemente la situación..."
                                        ></textarea>
                                    </div>

                                    <div className="pt-4 flex flex-col md:flex-row items-center gap-6">
                                        <Button variant="primary" className="w-full md:w-auto px-10 py-4 text-sm font-bold shadow-lg hover:shadow-brand-primary/25 whitespace-nowrap">
                                            ENVIAR CONSULTA
                                        </Button>

                                        <div className="flex items-center gap-2 text-gray-400 opacity-80">
                                            <ShieldAlert size={14} />
                                            <span className="text-[10px] uppercase tracking-wider font-medium">Datos protegidos por secreto profesional</span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* FULL WIDTH MAP SECTION - SEPARATE BLOCK */}
                <Reveal width="100%" delay={300}>
                    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative max-w-7xl mx-auto">
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
                        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg border border-gray-200">
                            <p className="text-xs font-bold text-brand-primary flex items-center gap-2">
                                <MapPin size={14} /> Tingo María, Huánuco
                            </p>
                        </div>
                    </div>
                </Reveal>

            </div>
        </section>
    );
};
