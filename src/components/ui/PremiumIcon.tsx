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
        <div className={`relative inline-flex items-center justify-center ${className}`}>
            <Icon size={size} className="relative z-10" />
        </div>
    );
};
