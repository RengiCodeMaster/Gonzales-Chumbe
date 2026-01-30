import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { SectionId } from '../../types';
import { servicesData, ServiceDetail } from '../../data/services';
import { PremiumIcon } from '../ui/PremiumIcon';
import { Reveal } from '../ui/Reveal';

interface ServicesProps {
    onOpenService?: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenService }) => {
    const [activeTab, setActiveTab] = useState<ServiceDetail>(servicesData[0]);

    const handleOpenDetail = (serviceId: string) => {
        if (onOpenService) {
            onOpenService(serviceId);
        }
    };

    return (
        <section id={SectionId.SERVICES} className="py-32 relative border-t border-gray-200 overflow-hidden">


            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* Header Section */}
                <div className="max-w-4xl mb-20">
                    <Reveal width="100%" direction="up">
                        <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3 block">Nuestras Áreas</span>
                    </Reveal>
                    <Reveal delay={200} width="100%" direction="up">
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-6">
                            Especialistas en la <br />
                            <span className="font-serif-accent  text-brand-secondary">pelea difícil.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={400} width="100%" direction="up">
                        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl border-l-4 border-brand-primary pl-6">
                            No somos generalistas. Cada abogado de nuestro equipo se dedica a una rama específica del derecho penal para garantizar profundidad técnica.
                        </p>
                    </Reveal>
                </div>

                {/* Services Brick Layout - Full Width Responsive Grid */}
                <div className="flex flex-wrap justify-center gap-6">
                    {servicesData.map((service, idx) => (
                        <div
                            key={service.id}
                            className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] min-w-[300px] flex-grow"
                        >
                            <div
                                className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer h-full flex flex-col z-10"
                                onClick={() => onOpenService && onOpenService(service.id)}
                            >
                                {/* Image Window */}
                                <div className="h-56 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Categoría Badge */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="bg-white/90 backdrop-blur text-brand-dark text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-sm shadow-sm">
                                            Especialidad
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow relative">
                                    {/* Icon Floating */}
                                    {/* Icon Floating - Clean Style */}
                                    <div className="absolute -top-10 right-8 w-16 h-16 bg-white text-brand-dark rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 border border-gray-100 p-1">
                                        <div className="w-full h-full bg-gray-50 rounded-full flex items-center justify-center">
                                            <PremiumIcon icon={service.icon} size={24} strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-brand-dark mb-2 mt-2 group-hover:text-brand-primary transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-brand-secondary text-sm font-serif-accent mb-4">
                                        {service.subtitle}
                                    </p>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 border-t border-gray-100 pt-4 flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="mt-auto flex items-center text-brand-primary font-bold text-[11px] uppercase tracking-widest group/btn border-t border-gray-50 pt-4">
                                        Ver Estrategia
                                        <ArrowRight size={14} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
