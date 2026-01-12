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
                accent: 'var(--accent)',
                primary: 'var(--text-primary)',
                secondary: 'var(--text-secondary)',
                card: 'var(--card-bg)',
            },
            backgroundImage: {
                'main-gradient': 'var(--bg-gradient)',
            },
            borderRadius: {
                lg: 'var(--radius-lg)',
            },
            boxShadow: {
                soft: 'var(--shadow-soft)',
            }
        },
    },
    plugins: [],
}
