import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../ui/Reveal';
import { servicesData } from '../../data/services';
import { PremiumIcon } from '../ui/PremiumIcon';

export const FeaturedServices: React.FC = () => {
    // Select top 3 strategic services
    const featured = servicesData.slice(0, 3); // Conciliation, Penal, Advisory

    return (
        <section className="py-24 bg-brand-surfaceAlt border-y border-gray-200 overflow-hidden relative">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <Reveal width="100%">
                            <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3 block">Nuestras Áreas</span>
                        </Reveal>
                        <Reveal delay={200} width="100%">
                            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight">
                                Especialistas en <br /><span className="font-serif-accent text-brand-primary">Alta Complejidad.</span>
                            </h2>
                        </Reveal>
                    </div>

                    <Reveal delay={300} width="fit-content">
                        <Link to="/servicios" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-dark hover:text-brand-primary transition-colors border-b-2 border-transparent hover:border-brand-primary pb-1">
                            Ver Todos los Servicios <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Reveal>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {featured.map((service, idx) => (
                        <Reveal key={service.id} delay={idx * 150} direction="up" className="h-full">
                            <Link to={`/servicios?open=${service.id}`} className="block h-full group">
                                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-brand-primary/30 transition-all duration-500 h-full flex flex-col relative group">

                                    {/* Image with Gradient Overlay */}
                                    <div className="h-48 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10"></div>
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur rounded-full p-2 shadow-sm">
                                            <PremiumIcon icon={service.icon} size={20} strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-grow relative">
                                        <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-xs font-serif-accent text-brand-secondary mb-4 uppercase tracking-wider">
                                            {service.subtitle}
                                        </p>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {service.scenario}
                                        </p>

                                        <div className="mt-auto flex items-center text-brand-dark text-xs font-bold uppercase tracking-widest group-hover:text-brand-primary transition-colors pt-4 border-t border-gray-50">
                                            Leer Más <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
