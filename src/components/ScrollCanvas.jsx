import { useRef, useEffect } from 'react';
import { useScrollFrames } from '../hooks/useScrollFrames';

export default function ScrollCanvas() {
    const canvasRef = useRef(null);
    // We'll implement useScrollFrames next
    const { currentFrame } = useScrollFrames();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !currentFrame) return;

        const ctx = canvas.getContext('2d');

        // Clear and draw
        const img = currentFrame;

        // Contain logic
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

    }, [currentFrame]);

    useEffect(() => {
        // Handle resize
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full object-contain pointer-events-none z-0"
        />
    );
}
