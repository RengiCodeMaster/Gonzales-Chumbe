import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const PageLoader: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Start loading
        setIsLoading(true);

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);

        return () => {
            clearTimeout(timer);
        };
    }, [location.pathname]);

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isLoading
                ? 'bg-zinc-950/60 backdrop-blur-md opacity-100'
                : 'bg-transparent backdrop-blur-none opacity-0 pointer-events-none hidden'
                }`}
        >
            <div className="relative flex flex-col items-center">
                {/* Logo with Glow */}
                <div className="relative z-10 p-4">
                    <img
                        src="/images/logo-icon.png"
                        alt="Loading"
                        className={`h-16 w-auto object-contain brightness-0 invert transition-all duration-700 ${isLoading ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                            }`}
                    />
                </div>

                {/* Professional Spinning Rings */}
                <div className="absolute inset-0 z-0">
                    {/* Ring 1 - Gold */}
                    <div className="absolute inset-0 rounded-full border-[3px] border-t-brand-primary border-r-transparent border-b-brand-primary/30 border-l-transparent animate-spin"></div>
                    {/* Ring 2 - Reverse White Thin */}
                    <div className="absolute -inset-2 rounded-full border border-white/20 border-t-white border-l-transparent animate-[spin_3s_linear_infinite_reverse]"></div>
                </div>

                <div className="mt-8">
                    <span className="text-white/80 text-[10px] uppercase tracking-[0.3em] animate-pulse font-light">
                        Cargando
                    </span>
                </div>
            </div>
        </div>
    );
};
