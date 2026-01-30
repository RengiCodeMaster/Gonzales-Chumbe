import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

const faqs = [
    {
        question: "¿Qué debo hacer si tengo una orden de detención o me llega una citación?",
        answer: "Lo más importante es NO presentarse a declarar sin abogado. Cualquier cosa que diga puede ser usada en su contra. Contáctenos inmediatamente. Presentaremos una 'Eximición de Prisión' para intentar garantizar que usted enfrente el proceso en libertad antes de que pise un tribunal."
    },
    {
        question: "¿Toman casos fuera de Tingo María?",
        answer: "Sí. Nuestra sede central está en Tingo María, pero litigamos activamente en todo el departamento de Huánuco y tomamos casos complejos a nivel nacional en todo el Perú. Donde haya una injusticia, allí iremos."
    },
    {
        question: "¿Cómo son los honorarios? ¿Cobran la consulta?",
        answer: "La primera evaluación breve para determinar urgencia no tiene costo. Para estudiar el expediente en profundidad o visitar detenidos, pactamos un honorario inicial. Trabajamos con facilidades de pago y esquemas transparentes: usted sabrá exactamente cuánto costará su defensa desde el primer día."
    },
    {
        question: "¿Pueden anular mis antecedentes penales?",
        answer: "Sí, dependiendo del tiempo que haya pasado desde el cumplimiento de la pena. Realizamos el trámite de rehabilitación y cancelación de antecedentes penales, judiciales y policiales para que usted pueda volver a trabajar y limpiar su registro."
    }
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="pt-24 pb-24 border-t border-gray-200 relative overflow-hidden">

            <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16">

                {/* Left: Title & Info */}
                <div className="lg:w-1/3">
                    <Reveal>
                        <div className="flex items-center gap-2 mb-4 text-brand-primary">
                            <HelpCircle size={24} />
                            <span className="font-bold uppercase tracking-widest text-xs">Dudas Frecuentes</span>
                        </div>
                    </Reveal>
                    <Reveal delay={200}>
                        <h2 className="text-3xl font-bold text-brand-dark mb-6">
                            Respuestas claras a <br />
                            <span className="text-brand-gold font-serif-accent ">situaciones complejas.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={300}>
                        <p className="text-gray-500 leading-relaxed mb-8">
                            Sabemos que el sistema penal es confuso y aterrador. Aquí respondemos lo que la mayoría de nuestros clientes nos preguntan en la primera reunión.
                        </p>
                    </Reveal>
                    <Reveal delay={400}>
                        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'auto' })} className="text-sm font-bold text-brand-dark underline hover:text-brand-primary decoration-brand-gold decoration-2 underline-offset-4">
                            ¿Tiene otra pregunta? Escríbanos.
                        </button>
                    </Reveal>
                </div>

                {/* Right: Accordion */}
                <div className="lg:w-2/3">
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className={`border rounded-lg transition-all duration-300 ${openIndex === idx ? 'border-brand-gold bg-brand-surfaceAlt shadow-lg' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                                <button
                                    className="w-full flex justify-between items-center p-6 text-left"
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                >
                                    <span className={`font-bold text-lg ${openIndex === idx ? 'text-brand-dark' : 'text-gray-600'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`ml-4 p-1 rounded-full transition-colors ${openIndex === idx ? 'bg-brand-gold text-white' : 'bg-gray-100 text-gray-400'}`}>
                                        {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                                    </div>
                                </button>

                                {openIndex === idx && (
                                    <div className="overflow-hidden border-t border-brand-gold/10 animate-in slide-in-from-top-2 fade-in duration-200">
                                        <p className="p-6 pt-4 text-gray-500 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
