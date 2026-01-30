import React, { useEffect, useState, useRef } from 'react';
import { Reveal } from '../ui/Reveal';
import { Building, Scale, Users, Shield } from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
  icon?: React.ReactNode;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, suffix = '', label, icon }) => {
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
    <div ref={ref} className="flex flex-col items-center justify-center text-center p-6 group">
      {icon && (
        <div className="mb-4 text-white group-hover:scale-110 transition-transform duration-500 drop-shadow-md">
          {icon}
        </div>
      )}
      <div className="text-5xl md:text-6xl font-extrabold !font-sans text-white mb-2 tabular-nums tracking-tight">
        {count}{suffix}
      </div>
      <p className="text-gray-300 text-xs md:text-sm uppercase tracking-[0.2em] font-medium max-w-[150px] leading-relaxed">
        {label}
      </p>
    </div>
  );
};

export const Stats: React.FC = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background Image with Fixed Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: "url('/images/about/stats-bg-high-res.png')" }}
      ></div>

      {/* Dark Overlay - Reduced opacity from 90% to 50% for clearer image */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
          <Reveal width="100%" delay={0}>
            <Counter
              end={30}
              suffix="+"
              label="Años de Experiencia"
              icon={<Building size={32} strokeWidth={2} />}
            />
          </Reveal>
          <Reveal width="100%" delay={100}>
            <Counter
              end={98}
              suffix="%"
              label="Casos Complejos Resueltos"
              icon={<Scale size={32} strokeWidth={2} />}
            />
          </Reveal>
          <Reveal width="100%" delay={200}>
            <Counter
              end={4}
              suffix=""
              label="Especialistas de Élite"
              icon={<Users size={32} strokeWidth={2} />}
            />
          </Reveal>
          <Reveal width="100%" delay={300}>
            <Counter
              end={24}
              suffix="/7"
              label="Atención en Emergencias"
              icon={<Shield size={32} strokeWidth={2} />}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
