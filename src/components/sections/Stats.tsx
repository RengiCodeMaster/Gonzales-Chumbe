import React, { useEffect, useState, useRef } from 'react';
import { Reveal } from '../ui/Reveal';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing function for smooth stop
      const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

      setCount(Math.floor(easeOutQuart(percentage) * end));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center group p-6 border border-gray-200 rounded-lg bg-white hover:shadow-xl transition-all duration-500 relative z-10">
      <div className="text-4xl md:text-6xl font-extrabold !font-sans text-brand-primary mb-2 tabular-nums">
        {count}{suffix}
      </div>
      <div className="h-0.5 w-12 bg-brand-gold/30 mx-auto mb-4 group-hover:w-20 group-hover:bg-brand-primary transition-all duration-500"></div>
      <p className="text-brand-secondary text-sm uppercase tracking-widest font-bold">{label}</p>
    </div>
  );
};

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAFAF9] relative border-b border-gray-200">


      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Reveal width="100%" delay={0}>
            <Counter end={30} suffix="+" label="Años de Trayectoria" />
          </Reveal>
          <Reveal width="100%" delay={100}>
            <Counter end={2500} suffix="+" label="Casos Gestionados" />
          </Reveal>
          <Reveal width="100%" delay={200}>
            <Counter end={98} suffix="%" label="Tasa de Éxito" />
          </Reveal>
          <Reveal width="100%" delay={300}>
            <Counter end={24} suffix="/7" label="Disponibilidad" />
          </Reveal>
        </div>

        <Reveal width="100%" delay={500}>
          <p className="text-center text-gray-500 text-sm mt-12 max-w-3xl mx-auto leading-relaxed">
            * Las estadísticas reflejan nuestra trayectoria histórica. En derecho penal, ningún resultado puede garantizarse al 100%, pero garantizamos el 100% de nuestro esfuerzo estratégico.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
