/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#0ea5e9", // Sky/Blue-Teal mix
                secondary: "#10b981", // Emerald/Electric Green
                accent: "#10b981", // Mapping Red -> Green
                dark: "#020617", // Deep Navy
                muted: "#94a3b8", // Slate 400
                "accent-red": "#10b981", // Backward compatibility (mapped to Green)
                "darker": "#020617",
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-33.33%)' },
                },
                'scroll-up': {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-50%)' },
                },
                gradient: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                },
                'border-spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'slide-up': {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'slide-down': {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'scale-in': {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(16, 185, 129, 0.6)' },
                },
                'pulse-ring': {
                    '0%': { 
                        transform: 'scale(0.8)',
                        opacity: '0.3'
                    },
                    '100%': {
                        transform: 'scale(2)',
                        opacity: '0'
                    },
                },
            },
            animation: {
                scroll: 'scroll 30s linear infinite',
                'scroll-up': 'scroll-up 30s linear infinite',
                gradient: 'gradient 3s ease infinite',
                'border-spin': 'border-spin 3s linear infinite',
                'fade-in': 'fade-in 0.5s ease-out',
                'slide-up': 'slide-up 0.5s ease-out',
                'slide-down': 'slide-down 0.5s ease-out',
                'scale-in': 'scale-in 0.3s ease-out',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'pulse-ring': 'pulse-ring 2.4s ease-out infinite',
            },
            boxShadow: {
                'glow-sm': '0 0 10px rgba(16, 185, 129, 0.3)',
                'glow-md': '0 0 20px rgba(16, 185, 129, 0.4)',
                'glow-lg': '0 0 30px rgba(16, 185, 129, 0.5)',
            }
        },
    },
    plugins: [],
};
