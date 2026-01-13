/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    darker: '#020617', // Slate 950 (Almost Black) - Text
                    dark: '#1e293b', // Slate 800 - Headings
                    primary: '#1e3a8a', // Blue 900 (Classic Navy Blue) - Primary Action
                    secondary: '#475569', // Slate 600 - Secondary Text
                    accent: '#94a3b8', // Slate 400 - Silver Light
                    gold: '#64748b', // Slate 500 (Steel/Silver) - Replaces Gold for Institutional Look
                    surface: '#ffffff',
                    surfaceAlt: '#f8fafc', // Slate 50 (Fog Grey)
                    card: '#ffffff', // White cards
                    border: '#e2e8f0'
                }
            },
            fontFamily: {
                sans: ['"Playfair Display"', 'serif'],
                serif: ['"Playfair Display"', 'serif'],
                display: ['"Playfair Display"', 'serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'slide-in': 'slideIn 0.6s ease-out forwards',
                'shine': 'shine 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideIn: {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                shine: {
                    '0%': { left: '-100%' },
                    '20%': { left: '200%' }, // Fast pass
                    '100%': { left: '200%' } // Wait
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
            }
        }
    },
    plugins: [],
}
