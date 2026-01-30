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
    duration = 600,
    direction = 'up',
    threshold = 0.15,
    width = "100%"
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update visibility based on intersection state to allow repeat animations
                setIsVisible(entry.isIntersecting);
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
            case 'zoom': return 'opacity-0 scale-95'; // Less drastic scale
            case 'right': return 'opacity-0 translate-x-10'; // Shorter distance
            case 'left': return 'opacity-0 -translate-x-10'; // Shorter distance
            case 'down': return 'opacity-0 -translate-y-6'; // Shorter distance
            case 'none': return 'opacity-0';
            case 'up': default: return 'opacity-0 translate-y-10'; // Shorter distance
        }
    };

    return (
        <div ref={ref} style={{ width }}>
            <div
                className={`transition-all will-change-transform ease-out transform ${getTransformClass()} ${className}`}
                style={{
                    transitionDuration: `${duration}ms`,
                    transitionDelay: `${delay}ms`,
                }}
            >
                {children}
            </div>
        </div>
    );
};
