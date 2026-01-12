import { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';

export default function ContactSection() {
    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const [submitted, setSubmitted] = useState(false);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(cardRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom-=100", // Start revealing when section enters viewport
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Simulate API call
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div ref={containerRef} id="contact" className="min-h-[60vh] flex items-center justify-center p-6 relative z-20 mt-20">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] to-transparent pointer-events-none" />

            <div
                ref={cardRef}
                className="w-full max-w-2xl bg-[var(--surface-glass)] backdrop-blur-xl border border-[var(--surface-border)] rounded-[32px] p-8 md:p-12 shadow-[var(--shadow-soft)] relative overflow-hidden"
            >
                {/* Decorative Elements */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--accent-purple)] opacity-20 blur-[80px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[var(--accent-green)] opacity-20 blur-[80px] rounded-full pointer-events-none" />

                <div className="relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                        Ready to shape the future?
                    </h2>
                    <p className="text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
                        Join thousands of smart shoppers. Get notified when we launch in your city.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                required
                                className="flex-1 bg-white/10 border border-[var(--surface-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-purple)] transition-all"
                            />
                            <input
                                type="email"
                                placeholder="Email address"
                                required
                                className="flex-1 bg-white/10 border border-[var(--surface-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-purple)] transition-all"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-[var(--text-primary)] text-white font-bold hover:opacity-90 transition-all shadow-[var(--shadow-glow)] flex items-center justify-center gap-2 group"
                            disabled={submitted}
                        >
                            {submitted ? (
                                <>
                                    <svg className="w-5 h-5 text-[var(--accent-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>Subscribed!</span>
                                </>
                            ) : (
                                <>
                                    <span>Get Early Access</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </>
                            )}
                        </button>
                    </form>

                    <p className="mt-6 text-xs text-[var(--text-secondary)]">
                        No spam. Unsubscribe anytime.
                    </p>
                </div>
            </div>
        </div>
    );
}
