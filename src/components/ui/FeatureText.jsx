import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export const FeatureText = ({ title, subtitle, align = 'left', isStatic = false }) => {
    // If static, we rely on parent layout. If NOT static (legacy), we might use fixed.
    // Ideally, for this new layout, we just want simple text components that animate in when viewed.

    return (
        <div
            className={`
            w-full max-w-xl
            ${!isStatic ? 'fixed top-1/2 -translate-y-1/2 pointer-events-none z-10' : 'pointer-events-auto'}
            ${align === 'left' ? 'text-left' : align === 'right' ? 'text-right ml-auto' : 'text-center mx-auto'}
            `}
        >
            <h2 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 leading-tight drop-shadow-sm">
                {title}
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-primary)] font-medium leading-relaxed opacity-90">
                {subtitle}
            </p>
        </div>
    );
};
