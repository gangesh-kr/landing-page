import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-xl bg-[var(--surface-glass)] border-b border-[var(--surface-border)] shadow-sm transition-all duration-300">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--accent-purple)] to-[var(--accent-green)] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    B
                </div>
                <span className="text-[var(--text-primary)] font-bold tracking-tight text-lg">Barg Ai</span>
            </div>

            <div className="flex items-center gap-6">
                <div className="hidden md:flex items-center gap-6">
                    <a href="#how" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium">How it works</a>
                    <a href="#pricing" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium">Pricing</a>
                    <a href="#compare" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium">Compare</a>
                    <a href="#contact" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium">Contact us</a>
                </div>

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--surface-border)] hover:bg-[var(--accent-purple)] hover:text-white text-[var(--text-primary)] transition-all duration-300 backdrop-blur-md"
                    aria-label="Toggle Theme"
                >
                    {theme === 'light' ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                    ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                    )}
                </button>
            </div>
        </nav>
    );
}
