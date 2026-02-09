import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
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
                            <li><Link to="/" className="hover:text-white transition-colors flex items-center gap-2">Inicio</Link></li>
                            <li><Link to="/nosotros" className="hover:text-white transition-colors flex items-center gap-2">Quiénes Somos</Link></li>
                            <li><Link to="/servicios" className="hover:text-white transition-colors flex items-center gap-2">Áreas de Práctica</Link></li>
                            <li><Link to="/contacto" className="hover:text-white transition-colors flex items-center gap-2">Contacto</Link></li>
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
    );
}
