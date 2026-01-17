import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldAlert } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionId } from '../../types';
import { Reveal } from '../ui/Reveal';
import { servicesData } from '../../data/services';

export const Contact: React.FC = () => {
    // Secretary Carousel State
    const [secretaryIndex, setSecretaryIndex] = useState(0);
    const secretaries = [
        "/images/secretary.png",
        "/images/secretary-2.png"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setSecretaryIndex((prev) => (prev === 0 ? 1 : 0));
        }, 5000); // Change every 5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <section id={SectionId.CONTACT} className="py-12 lg:py-20 bg-[#FAFAF9] relative z-10 overflow-hidden">
            {/* Elegant Architectural Texture Background */}
            <div
                className="absolute inset-0 bg-repeat opacity-40 mix-blend-multiply pointer-events-none z-0"
                style={{ backgroundImage: "url('/images/team-bg-texture.png')", backgroundSize: '600px' }}
            ></div>


            <div className="container mx-auto px-4 lg:px-8 relative z-10">


                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row w-full max-w-7xl mx-auto mb-12">

                    {/* LEFT COLUMN: CONTACT INFO & PHOTO (Clean Layout) */}
                    <div className="w-full lg:w-5/12 p-8 lg:p-12 bg-white flex flex-col order-2 lg:order-1 lg:border-r border-gray-100">
                        {/* Image Container - "Cuadro" */}
                        <div className="relative w-full aspect-[3/4] bg-gradient-to-b from-gray-50 to-gray-200 rounded-lg overflow-hidden mb-8 shadow-inner border border-gray-100">
                            {secretaries.map((src, idx) => (
                                <img
                                    key={idx}
                                    src={src}
                                    alt="Asistente Legal"
                                    className={`absolute inset-0 w-full h-full object-cover object-top filter grayscale-[20%] contrast-110 transition-opacity duration-1000 ${secretaryIndex === idx ? 'opacity-100' : 'opacity-0'}`}
                                />
                            ))}
                        </div>

                        {/* Info Block (Below Image) */}
                        <div className="space-y-8">
                            <Reveal delay={0}>
                                <div className="border-l-4 border-brand-primary pl-4">
                                    <h3 className="text-xl font-bold text-brand-dark uppercase tracking-wide mb-2">Estamos para Asistirle</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Atención personalizada y técnica para sus necesidades legales de alta complejidad.
                                    </p>
                                </div>
                            </Reveal>

                            <div className="space-y-4 pt-2">
                                <Reveal delay={100}>
                                    <div className="flex items-start gap-4 group">
                                        <div className="p-2 bg-gray-50 rounded-md text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                            <MapPin size={18} />
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-0.5">Visítenos</span>
                                            <p className="text-sm font-medium text-brand-dark">Av. Alameda Perú N° 450, Tingo María</p>
                                        </div>
                                    </div>
                                </Reveal>

                                <Reveal delay={200}>
                                    <div className="flex items-start gap-4 group">
                                        <div className="p-2 bg-gray-50 rounded-md text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                            <Phone size={18} />
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-0.5">Llámenos</span>
                                            <p className="text-sm font-medium text-brand-dark">+51 962 123 456</p>
                                        </div>
                                    </div>
                                </Reveal>

                                <Reveal delay={300}>
                                    <div className="flex items-start gap-4 group">
                                        <div className="p-2 bg-gray-50 rounded-md text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                            <Mail size={18} />
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-0.5">Escríbanos</span>
                                            <p className="text-sm font-medium text-brand-dark">contacto@gonzaleschumbe.com</p>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: FORM (Main Content) */}
                    <div className="w-full lg:w-7/12 bg-white p-8 lg:p-16 flex flex-col justify-center order-1 lg:order-2">
                        <div className="max-w-2xl mx-auto w-full">
                            <Reveal delay={200} direction="up" width="100%">
                                <div className="mb-10">
                                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Hablemos de su Caso</h2>
                                    <p className="text-gray-500 text-lg">
                                        La primera consulta es crucial. Complete el formulario y analizaremos su situación con absoluta confidencialidad.
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal delay={400} direction="up" width="100%">
                                <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); /* openWhatsApp(); */ }}>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="group relative z-0 w-full mb-2">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder=" "
                                                className="block py-3 px-0 w-full text-sm text-brand-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-primary peer transition-colors"
                                                required
                                            />
                                            <label className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                NOMBRE COMPLETO
                                            </label>
                                        </div>
                                        <div className="group relative z-0 w-full mb-2">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder=" "
                                                className="block py-3 px-0 w-full text-sm text-brand-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-primary peer transition-colors"
                                                required
                                            />
                                            <label className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                CORREO ELECTRÓNICO
                                            </label>
                                        </div>
                                    </div>

                                    <div className="group relative z-0 w-full mb-2">
                                        <div className="relative">
                                            <select
                                                name="subject"
                                                className="block py-3 px-0 w-full text-sm text-brand-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-primary peer cursor-pointer"
                                                defaultValue=""
                                                required
                                            >
                                                <option value="" disabled className="text-gray-400">Seleccione un área de práctica</option>
                                                {servicesData.map((service) => (
                                                    <option key={service.id} value={service.title} className="text-brand-dark">
                                                        {service.title}
                                                    </option>
                                                ))}
                                                <option value="otro" className="text-brand-dark">Otro / Consulta General</option>
                                            </select>
                                            <label className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]">
                                                ASUNTO DE LA CONSULTA
                                            </label>
                                            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none text-gray-400">
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group relative z-0 w-full mb-2">
                                        <textarea
                                            rows={4}
                                            name="message"
                                            placeholder=" "
                                            className="block py-3 px-0 w-full text-sm text-brand-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-primary peer transition-colors resize-none"
                                            required
                                        ></textarea>
                                        <label className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            MENSAJE DETALLADO
                                        </label>
                                    </div>

                                    <div className="pt-6">
                                        <button className="w-full bg-[#003366] hover:bg-black text-white font-bold py-5 px-8 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 uppercase tracking-widest text-xs flex items-center justify-center gap-3 group relative overflow-hidden">
                                            <span className="relative z-10 flex items-center gap-2">
                                                Enviar Mensaje Profesional <span className="text-brand-primary group-hover:translate-x-1 transition-transform">➤</span>
                                            </span>
                                        </button>
                                        <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-widest">
                                            <ShieldAlert size={12} className="inline mr-1 -mt-0.5" />
                                            Su información está protegida por secreto profesional
                                        </p>
                                    </div>
                                </form>
                            </Reveal>
                        </div>
                    </div>
                </div>

                {/* FULL WIDTH MAP SECTION - SEPARATE BLOCK (KEEP AS IS) */}
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
