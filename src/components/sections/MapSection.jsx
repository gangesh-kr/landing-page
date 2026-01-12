import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

export default function MapSection() {
    const containerRef = useRef(null);
    const mapRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: document.body,
                    start: '65% top',
                    end: '85% top',
                    scrub: 1,
                    toggleActions: 'play reverse play reverse'
                }
            });

            // Map fades in and zooms slightly
            tl.fromTo(mapRef.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 1 }
            );

        }, containerRef);
        return () => ctx.revert();
    }, []);

    // Simulated Map UI
    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none flex items-center justify-center z-20">
            <div ref={mapRef} className="w-[80%] max-w-4xl h-[60vh] rounded-[var(--radius-lg)] border border-white/30 relative overflow-hidden opacity-0">
                {/* Map Graphics (CSS Art/SVG) */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm grid-pattern"></div>

                {/* Pins */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-1/2 left-1/3 w-8 h-8 -translate-x-1/2 -translate-y-1/2"
                >
                    <div className="w-4 h-4 bg-[var(--accent-purple)] rounded-full animate-ping absolute inset-0"></div>
                    <div className="w-4 h-4 bg-[var(--accent-purple)] rounded-full relative shadow-lg border-2 border-white"></div>
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-1/3 left-2/3 w-8 h-8 -translate-x-1/2 -translate-y-1/2"
                >
                    <div className="w-4 h-4 bg-[var(--accent-green)] rounded-full absolute inset-0"></div>
                    <div className="w-4 h-4 bg-[var(--accent-green)] rounded-full relative shadow-lg border-2 border-white flex items-center justify-center">
                        <span className="text-[8px] text-white">✓</span>
                    </div>
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-2 py-1 rounded shadow-md text-xs font-bold text-gray-800">
                        Best Price here
                    </div>
                </motion.div>

                {/* Roads/Path simulation */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                    <path d="M 100 100 Q 300 400 600 200" stroke="gray" strokeWidth="4" fill="none" strokeDasharray="10,10" />
                    <path d="M 50 400 Q 300 400 500 500" stroke="gray" strokeWidth="4" fill="none" strokeDasharray="10,10" />
                </svg>
            </div>
        </div>
    );
}
