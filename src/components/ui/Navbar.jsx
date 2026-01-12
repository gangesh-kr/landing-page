import React from 'react';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-xl bg-white/30 border-b border-white/20 shadow-sm transition-all duration-300 hover:bg-white/40">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--accent-purple)] to-[var(--accent-green)] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    B
                </div>
                <span className="text-[var(--text-primary)] font-bold tracking-tight text-lg">Barg Ai</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
                <a href="#how" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium">How it works</a>
                <a href="#pricing" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium">Pricing</a>
                <a href="#compare" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium">Compare</a>
                <a href="#contact" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium">Contact us</a>
            </div>
        </nav>
    );
}
