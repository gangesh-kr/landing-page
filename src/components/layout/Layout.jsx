import React from 'react';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';

export default function Layout({ children }) {
    return (
        <div className="relative w-full bg-[var(--bg-primary)] min-h-screen selection:bg-[var(--accent-purple)] selection:text-white overflow-x-hidden">
            <Navbar />
            <main className="w-full relative">
                {children}
            </main>
            <Footer />
        </div>
    );
}
