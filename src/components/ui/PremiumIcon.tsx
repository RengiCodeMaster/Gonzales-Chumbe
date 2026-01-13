import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PremiumIconProps {
    icon: LucideIcon;
    size?: number;
    className?: string; // Used for container classes like text-color, bg-color, etc.
}

/**
 * PremiumIcon Component
 * Wraps a Lucide Icon with a subtle "sheen" animation that passes over it intermittently.
 * Scalable and Clean Code.
 */
export const PremiumIcon: React.FC<PremiumIconProps> = ({ icon: Icon, size = 24, className = "" }) => {
    return (
        // The container is the boundary for the shine (overflow-hidden).
        // It inherits color from parent or className.
        <div className={`relative inline-flex items-center justify-center overflow-hidden rounded-md ${className}`}>

            {/* The Icon Itself */}
            <Icon size={size} className="relative z-10" />

            {/* 
        The Shine Element
        - Absolute positioned
        - Gradient fade
        - Skewed for dynamic angles
        - Blur for softness
        - Animate-shine (defined in tailwind.config.js)
      */}
            <div
                className="absolute top-0 bottom-0 w-[40%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg] animate-shine pointer-events-none z-20"
            ></div>
        </div>
    );
};
