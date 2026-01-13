import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none' | 'zoom';
    threshold?: number;
    width?: "fit-content" | "100%";
}

export const Reveal: React.FC<RevealProps> = ({
    children,
    className = '',
    delay = 0,
    duration = 1000,
    direction = 'up',
    threshold = 0.15,
    width = "fit-content"
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    // Reset animation when element leaves viewport
                    setIsVisible(false);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    const getTransformClass = () => {
        // Added scale-100 to ensure zoom effects reset to natural size
        if (isVisible) return 'opacity-100 translate-x-0 translate-y-0 scale-100';

        switch (direction) {
            case 'zoom': return 'opacity-0 scale-90'; // Soft scale up
            case 'right': return 'opacity-0 translate-x-20'; // Viene de la derecha (entra hacia la izquierda)
            case 'left': return 'opacity-0 -translate-x-20'; // Viene de la izquierda (entra hacia la derecha)
            case 'down': return 'opacity-0 -translate-y-10'; // Viene de arriba
            case 'none': return 'opacity-0';
            case 'up': default: return 'opacity-0 translate-y-16'; // Viene de abajo
        }
    };

    return (
        <div
            ref={ref}
            className={`transition-all ease-[cubic-bezier(0.17,0.55,0.55,1)] transform ${getTransformClass()} ${className}`}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
                width
            }}
        >
            {children}
        </div>
    );
};