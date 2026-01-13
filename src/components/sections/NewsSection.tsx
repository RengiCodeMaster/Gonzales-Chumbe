import React, { useEffect, useState } from 'react';
import { Loader, ArrowUpRight } from 'lucide-react';

import { NewsItem, SectionId } from '../../types';
import { Reveal } from '../ui/Reveal';

export const NewsSection: React.FC = () => {
  // Hardcoded news to replace AI fetching
  const [news] = useState<NewsItem[]>([
    {
      title: "Reforma del Código Procesal Penal: Nuevos Desafíos",
      url: "https://lpderecho.pe",
      source: "lpderecho.pe"
    },
    {
      title: "Jurisprudencia Reciente sobre Prisión Preventiva",
      url: "https://laley.pe",
      source: "laley.pe"
    },
    {
      title: "Análisis de la Ley de Extinción de Dominio",
      url: "https://elperuano.pe",
      source: "elperuano.pe"
    }
  ]);
  const [loading, setLoading] = useState(false);

  // Removed useEffect for fetching news since we use static data now

  return (
    <section id={SectionId.NEWS} className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-16">
          <div>
            <Reveal width="100%">
              <h2 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight">
                Perspectivas <br />
                <span className="font-serif-accent  text-brand-secondary">Legales</span>
              </h2>
            </Reveal>
          </div>
          <Reveal direction="left" delay={200}>
            <button className="hidden md:flex items-center text-xs font-bold uppercase tracking-widest text-brand-dark border-b border-brand-dark pb-1 hover:text-brand-primary hover:border-brand-primary transition-all">
              Visitar el Blog
            </button>
          </Reveal>
        </div>

        {loading ? (
          <div className="flex flex-col justify-center items-center h-64 border border-dashed border-gray-300 rounded-lg">
            <Loader className="animate-spin text-brand-primary mb-3" size={24} />
            <span className="text-gray-400 text-xs uppercase tracking-widest">Cargando Actualidad...</span>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Featured Article (Left - Large) */}
            {news.length > 0 && (
              <Reveal className="h-full" width="100%">
                <a href={news[0].url} target="_blank" rel="noopener noreferrer" className="group relative block h-full min-h-[400px]">
                  <div className="absolute inset-0 bg-gray-200 rounded-lg overflow-hidden">
                    {/* Placeholder image for news if none provided, or abstract pattern */}
                    <div className="w-full h-full bg-brand-dark/5 flex items-center justify-center text-brand-primary/10">
                      <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" /></svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-8 lg:p-10 bg-white/95 backdrop-blur-md border-t border-r border-gray-100 rounded-tr-3xl lg:max-w-[85%] group-hover:lg:max-w-[90%] transition-all duration-500">
                    <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-3 block">Destacado &bull; {news[0].source}</span>
                    <h3 className="text-2xl font-bold text-brand-dark mb-4 leading-tight group-hover:text-brand-primary transition-colors">
                      {news[0].title}
                    </h3>
                    <div className="flex items-center text-sm font-medium text-gray-500">
                      Leer nota completa <ArrowUpRight size={16} className="ml-2" />
                    </div>
                  </div>
                </a>
              </Reveal>
            )}

            {/* List Side (Right) */}
            <div className="flex flex-col justify-center divide-y divide-gray-200">
              {news.slice(1).map((item, idx) => (
                <Reveal key={idx} delay={idx * 150} direction="left" width="100%">
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="group py-8 first:pt-0 last:pb-0 hover:pl-4 transition-all duration-300 block">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">{item.source || 'Prensa'}</span>
                        <h4 className="text-xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors leading-snug">
                          {item.title}
                        </h4>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-4 text-brand-primary">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </a>
                </Reveal>
              ))}

              {news.length === 0 && (
                <p className="text-gray-500 ">No hay noticias disponibles en este momento.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
