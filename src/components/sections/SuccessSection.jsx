import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function SuccessSection() {
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: document.body,
                    start: '85% top',
                    end: '100% top',
                    scrub: 1
                }
            });

            tl.fromTo(contentRef.current,
                { opacity: 0, scale: 0.9, y: 50 },
                { opacity: 1, scale: 1, y: 0, duration: 1 }
            );

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none flex items-center justify-center z-20">
            <div ref={contentRef} className="text-center opacity-0 bg-white/10 backdrop-blur-md p-12 rounded-[var(--radius-lg)] shadow-2xl border border-white/20 max-w-md w-full mx-4">
                <div className="w-20 h-20 bg-[var(--accent-green)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-2 tracking-tight">Payment Successful</h2>
                <p className="text-[var(--text-muted)] mb-8">You saved ₹85 on this purchase!</p>
                <button className="px-8 py-4 bg-[var(--text-primary)] text-white font-bold rounded-full w-full hover:scale-105 transition-transform pointer-events-auto shadow-lg">
                    Start Next Scan
                </button>
            </div>
        </div>
    );
}
