import React from 'react';
import { Shield, Clock, Award, Scale } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export const WhyChooseUs: React.FC = () => {
    const features = [
        {
            icon: Clock,
            title: "Atención Inmediata 24/7",
            description: "En derecho penal, el tiempo es libertad. Respondemos ante detenciones y emergencias al instante, sin burocracia."
        },
        {
            icon: Shield,
            title: "Estrategia de Blindaje",
            description: "No solo reaccionamos; anticipamos. Diseñamos defensas preventivas para empresas y funcionarios antes de que estalle la crisis."
        },
        {
            icon: Award,
            title: "Resultados Comprobados",
            description: "Más de 20 años logrando absoluciones y archivos en casos de alta complejidad. Nuestra reputación se construye con sentencias favorables."
        },
        {
            icon: Scale,
            title: "Ética Intransigente",
            description: "Hablamos con la verdad. Si su caso es difícil, se lo diremos. No vendemos falsas esperanzas, vendemos soluciones técnicas reales."
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Reveal width="100%">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                            ¿Por qué confiar su libertad en <span className="text-brand-primary">Gonzales Chumbe</span>?
                        </h2>
                    </Reveal>
                    <Reveal delay={200} width="100%">
                        <p className="text-gray-600 text-lg leading-relaxed">
                            En un sistema judicial complejo, la experiencia marca la diferencia entre una condena y la libertad.
                        </p>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Reveal key={index} delay={index * 100} direction="up" className="h-full">
                            <div className="bg-brand-surfaceAlt border border-gray-100 p-8 rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full group">
                                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                                    <feature.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
