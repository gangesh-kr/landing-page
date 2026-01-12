/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--bg-primary)',
                primary: 'var(--text-primary)',
                secondary: 'var(--text-secondary)',
                accent: {
                    purple: 'var(--accent-purple)',
                    green: 'var(--accent-green)',
                },
                surface: {
                    glass: 'var(--surface-glass)',
                    border: 'var(--surface-border)',
                }
            },
            backgroundImage: {
                'main-gradient': 'var(--bg-gradient)',
            },
            boxShadow: {
                soft: 'var(--shadow-soft)',
                glow: 'var(--shadow-glow)',
            }
        },
    },
    plugins: [],
}
