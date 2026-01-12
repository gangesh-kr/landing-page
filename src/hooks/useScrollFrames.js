import { useEffect, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useImagePreloader } from './useImagePreloader';

gsap.registerPlugin(ScrollTrigger);

export const useScrollFrames = () => {
    // 120 frames as per storyboard
    const { images, progress, loading } = useImagePreloader(120);
    const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

    useLayoutEffect(() => {
        if (images.length === 0) return;

        const ctx = gsap.context(() => {
            const totalFrames = images.length - 1;

            ScrollTrigger.create({
                trigger: document.body,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.5,
                onUpdate: (self) => {
                    const frameIndex = Math.min(
                        totalFrames,
                        Math.floor(self.progress * totalFrames)
                    );
                    setCurrentFrameIndex(frameIndex);
                }
            });
        });

        return () => ctx.revert();
    }, [images]);

    return {
        currentFrame: images[currentFrameIndex],
        loading,
        progress
    };
};
