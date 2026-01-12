import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { PriceCard } from './PriceBreakdown';

export default function FloatingCards() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // The "Explosion" animation
            // Cards start hidden or central, then move out

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: document.body,
                    start: '40% top', // Starts around 40% scroll
                    end: '65% top',
                    scrub: 1
                }
            });

            // Target specific cards by class or ref could be better,
            // but let's use data-attributes or classes for simplicity

            // Card 1: Original Price (Top Left)
            tl.fromTo('.card-original',
                { scale: 0.5, opacity: 0, x: 0, y: 0 },
                { scale: 1, opacity: 1, x: -200, y: -150, rotation: -5, ease: 'power2.out' },
                0
            );

            // Card 2: Discount (Top Right)
            tl.fromTo('.card-discount',
                { scale: 0.5, opacity: 0, x: 0, y: 0 },
                { scale: 1, opacity: 1, x: 200, y: -50, rotation: 5, ease: 'power2.out' },
                0.1
            );

            // Card 3: Fee (Bottom Left)
            tl.fromTo('.card-fee',
                { scale: 0.5, opacity: 0, x: 0, y: 0 },
                { scale: 1, opacity: 1, x: -150, y: 150, rotation: -3, ease: 'power2.out' },
                0.2
            );

            // Card 4: Total (Bottom Right / Center)
            tl.fromTo('.card-total',
                { scale: 0.8, opacity: 0, x: 0, y: 0 },
                { scale: 1.2, opacity: 1, x: 0, y: 100, zIndex: 10, rotation: 0, ease: 'back.out(1.7)' },
                0.3
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none flex items-center justify-center z-20">
            <div className="card-original absolute">
                <PriceCard label="Original Price" value="₹1,000" />
            </div>

            <div className="card-discount absolute">
                <PriceCard label="Best Local Deal" value="-₹100" type="discount" />
            </div>

            <div className="card-fee absolute">
                <PriceCard label="Platform Fee" value="+₹15" />
            </div>

            <div className="card-total absolute">
                <PriceCard label="You Pay" value="₹915" type="total" />
            </div>
        </div>
    );
}
